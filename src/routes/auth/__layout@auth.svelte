<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async({ params, fetch, session, url }) => {
    // console.log({ session })

    if (session.user && url.pathname.includes('/auth/login')) {
      return {
        status: 301,
        redirect: '/'
      }
    }

    return {
      status: 200
    };
  }
</script>

<div class="relative w-full h-full px-12 py-24">
  <div class="bg-full">
    <img src="/images/background_auth.jpg" alt="background auth"
      class="w-full h-full object-cover">
    <div class="bg-full bg-white/70"></div>
  </div>
  <div class="relative mx-auto max-w-7xl">
    <transition name="auth">
      <div>
        <slot/>
      </div>
    </transition>
  </div>
</div>