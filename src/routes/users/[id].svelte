<!-- <script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import { PUBLIC_APP_URL  } from '$env/static/public';

  export const load: Load = async ({ fetch, session, url }) => {
    if (!session.user && !url.pathname.includes('/auth/login')) {
      const res = await fetch(`${PUBLIC_APP_URL}/api/auth/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!res.ok) {
        return {
          status: 301,
          redirect: '/auth/login'
        }
      }

      const data = await res.json()

      return {
        props: {}
      }
    }

    return {
      props: {}
    }
  }
</script> -->

<div>
  <div class="w-full bg-white">
    <div class="w-full max-w-screen-xl mx-auto">
      <div class="relative pb-[35%] bg-teal-100 -mx-6 rounded-b-lg overflow-hidden">
        <span class="absolute w-full h-full top-0 left-0">
          <!-- <img src="" alt=""> -->
        </span>
      </div>

      <div class="relative w-full -mt-6">
        <div class="flex items-center space-x-4">
          <div class="w-36 h-36 rounded-full bg-teal-600 border-4 border-white"></div>
          <div>
            <h1 class="text-4xl font-bold">Việt Hùng</h1>
            <p class="text-lg">@gamek.vn  · Trang web giải trí</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>