<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async({ params, fetch, session, url }) => {
    await new Promise((res) => {
      setTimeout(res, 5000);
    })

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