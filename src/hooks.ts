import type { Handle, GetSession } from '@sveltejs/kit';
import * as cookie from 'cookie';
import { verifyToken } from '$lib/utils/jwt'
import { responseError } from '$lib/utils/response';

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');

  if (cookies['token']) {
    const decoded = await verifyToken(cookies['token']);
    event.locals.user = decoded
  }

	const response = await resolve(event);

	// if (!cookies['userid']) {
	// 	// if this is the first time the user has visited this app,
	// 	// set a cookie so that we recognise them when they return
	// 	response.headers.set(
	// 		'set-cookie',
	// 		cookie.serialize('userid', event.locals.userid, {
	// 			path: '/',
	// 			httpOnly: true
	// 		})
	// 	);
	// }

	return response;
};

export const getSession: GetSession = async (event) => {
  return event.locals.user
    ? {
        user: event.locals.user
      }
    : {};
}