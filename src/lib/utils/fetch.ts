const originalFetch = window.fetch;
const refresh_url = '/auth/refresh-token'

export const fetch = async (url: RequestInfo, options: RequestInit | undefined): Promise<Response> => {
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

    if (!res.ok) {
      return Promise.reject(response);
    }

    return await originalFetch(url, options)
  }
  else {
    return Promise.reject(res);
  }
};