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

export const GET: RequestHandler = async ({ request, locals, clientAddress }) => {
  try {
    if (!locals.user) {
      throw {
        status: 401,
        text: "Invalid Token"
      }
    }

    const user = await prisma.users.findUnique({
      where: {
        id: locals.user?.id || 0
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    })

    if (!user) {
      throw {
        status: 404,
        text: "User not exists"
      }
    }

    return {
      status: 200,
      body: {
        user
      }
    }

  } catch (error: any) {
    return {
      status: error.status || 401,
      body: responseError(error)
    }
  }
};