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

export const POST: RequestHandler = async ({ request, locals, clientAddress }) => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: locals?.user?.id || 0
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

    if (!user) {
      throw {
        status: 404,
        text: "User not exists"
      }
    }

    var list_id = user.provider?.list_id || []

    let client_ip = clientAddress ?? 0

    let index = list_id.findIndex(x => x == client_ip); 

    if (index >= 0) {
      list_id.splice(index, 0)

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

    return {
      status: 200,
      body: {
        'message': 'Logout Success'
      },
      headers: {
        'set-cookie': [
          cookie.serialize('token', '', { expires: new Date(0), path: '/' }),
          cookie.serialize('token2', '', { expires: new Date(0), path: '/' }),
          cookie.serialize('refresh_token', '', { expires: new Date(0), path: '/' })
        ]
      }
    }

  } catch (error: any) {
    // console.log(error)
    return {
      status: error.status || 401,
      body: responseError(error),
      headers: {
        'set-cookie': [
          cookie.serialize('token', '', { expires: new Date(0) }),
          cookie.serialize('refresh_token', '', { expires: new Date(0) })
        ]
      }
    }
  }
};