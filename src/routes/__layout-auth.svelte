<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async({ params, fetch, session, url }) => {
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

<div id="app" class="table table-fixed w-full h-full min-h-screen">
  <div class="table-cell">
    <slot />
  </div>
</div>