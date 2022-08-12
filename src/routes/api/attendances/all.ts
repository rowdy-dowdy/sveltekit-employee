import type { RequestHandler } from '$lib/types/request';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const GET: RequestHandler = async ({ request, url }) => {
  let first_day = url.searchParams.get('first_day'),
      last_day = url.searchParams.get('last_day')
  
  var attendances = null

  if (first_day && last_day) {
    attendances = await prisma.staffs.findMany({
      select: {
        id: true,
        name: true,
        attendances: {
          where: {
            record_time: {
              lte: new Date(last_day),
              gte: new Date(first_day)
            }
          }
        }
      }
    })
  }
  else {
    attendances = await prisma.staffs.findMany({
      select: {
        id: true,
        name: true,
        attendances: true
      }
    })
  }

	return {
		status: 200,
    body: {
      attendances,
      first_day,
      last_day 
    }
	};
};


