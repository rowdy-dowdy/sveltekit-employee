import { session } from '$app/stores'
import { goto } from "$app/navigation";

const originalFetch = fetch;
const refresh_url = '/api/auth/refresh-token'

export const Fetch = async (url: RequestInfo, options: RequestInit | undefined): Promise<Response> => {
  let res = await originalFetch(url, options)

  if (res.ok) {
    return res
  }

  if (!res.ok && res.status === 401) {
    let response = await originalFetch(refresh_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      goto('/auth/logout')
      return Promise.reject(response);
    }
    
    return await originalFetch(url, options)
  }
  else {
    return Promise.reject(res);
  }
};