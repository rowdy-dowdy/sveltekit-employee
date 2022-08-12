import type { RequestHandler } from '$lib/types/request';

export const GET: RequestHandler = async ({ request, url, clientAddress }) => {
  return {
    status: 200,
    body: {
      'message': 'Message'
    }
  }
};