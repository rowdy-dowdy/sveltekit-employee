import type { RequestHandler } from '$lib/types/request';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
import { removeSpace } from '$lib/utils/validator'
import { signToken } from '$lib/utils/jwt'
import * as cookie from 'cookie';
import { responseError } from '$lib/utils/response'

type User = {
  id: number;
  name: string;
  email: string;
  password?: string;
  provider?: {
    list_id: string[];
  } | null;
}

export const POST: RequestHandler = async ({ request, url, clientAddress }) => {
  try {
    const body = await request.json()
    let email: string = removeSpace(body.email || ''),
        password: string = body.password || '',
        remember: boolean = body.remember || false

    var user: User | null = await prisma.users.findUnique({
      where: {
        email: email
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        provider: {
          select: {
            list_id: true
          }
        }
      }
    })

    if (!user) {
      throw {
        status: 404,
        text: "Email not exists"
      }
    }

    if (!await bcrypt.compare(password, user.password || '')) {
      throw {
        status: 401,
        text: "Password incorrect"
      }
    }

    var list_id = user.provider?.list_id || []

    let client_ip = clientAddress

    if (client_ip) {
      let index = list_id.findIndex(x => x == client_ip); 

      if (index < 0)
        list_id.push(client_ip)

      // update list id
      await prisma.users.update({
        where: {id: user.id},
        data: {
          provider: {
            // update or create 
            upsert: {
              create: {
                list_id: list_id
              },
              update: {
                list_id: list_id
              },
            },
          }
        }
      })
    }
    
    delete user.password
    delete user.provider


    const token = await signToken(user)
    const refresh_token = await signToken(user, remember ? '60d' : '1d')

    // console.log(refresh_token)

    // await prisma.refresh_tokens.create({
    //   data: {
    //     token: refresh_token
    //   },
    // })

    return {
      status: 200,
      body: {
        user,
        expiresIn: '1h',
        token,
        refresh_token
      },
      headers: {
        'set-cookie': [
          cookie.serialize('token', token, { maxAge: 3600, path: '/' }),
          cookie.serialize('refresh_token', refresh_token, { maxAge: remember ? 86400 * 60 : 86400, path: '/', httpOnly: true })
        ]
      }
    }

  } catch (error: any) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return {
      status: error.status || 500,
      body: responseError(error)
    }
  }
};