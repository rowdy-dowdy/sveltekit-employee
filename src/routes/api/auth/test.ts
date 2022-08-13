import type { RequestHandler } from '$lib/types/request';

export const GET: RequestHandler = async ({ request, url, clientAddress }) => {
  return {
    status: 401,
    body: {
      'message': 'Message'
    }
  }
};