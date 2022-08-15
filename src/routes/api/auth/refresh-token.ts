import type { RequestHandler } from '$lib/types/request';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { signToken, verifyToken } from '$lib/utils/jwt'
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
    const cookies = cookie.parse(request.headers.get('cookie') || '');

    if (!cookies['refresh_token']) {
      throw new Error()
    }

    // const refresh_token_db = await prisma.refresh_tokens.findFirst({
    //   where: {
    //     token: cookies['refresh_token']
    //   }
    // })

    // if (!refresh_token_db) {
    //   throw {
    //     status: 403,
    //     text: 'A token is required for authentication'
    //   };
    // }

    const decoded = await verifyToken(cookies['refresh_token']);

    // console.log(decoded)

    const user = await prisma.users.findUnique({
      where: {
        id: decoded?.id || 0
      },
      select: {
        id: true,
        name: true,
        email: true,
        provider: {
          select: {
            list_id: true
          }
        }
      }
    })

    // console.log(user)

    if (!user) {
      throw {
        status: 404,
        text: "User not exists"
      }
    }

    var list_id = user.provider?.list_id || []

    let client_ip = clientAddress
    
    let index = list_id.findIndex(x => x == client_ip); 

    if (!client_ip || index < 0) {
      throw {
        status: 403,
        text: 'Your ip address could not be found in the database'
      }
    }

    const token = await signToken(user)

    return {
      status: 200,
      body: {
        user,
        expiresIn: '1h',
        token,
        // refresh_token
      },
      headers: {
        'set-cookie': [
          cookie.serialize('token', token, { maxAge: 3600, path: '/' }),
          // cookie.serialize('refresh_token', refresh_token, { maxAge: 86400, path: '/', httpOnly: true })
        ]
      }
    }

  } catch (error: any) {
    // console.log(error)
    return {
      status: error.status || 401,
      body: responseError(error)
    }
  }
};