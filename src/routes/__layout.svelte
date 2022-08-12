<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async({ params, fetch, session, url }) => {
    console.log({ session })

    if (!session.user && !url.pathname.includes('/auth/login')) {
      return {
        status: 301,
        redirect: '/auth/login'
      }
    }

    return {
      status: 200
    };
  }
</script>

<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';
</script>

<div id="app" class="min-h-screen flex flex-col text-[#444]">
  <Header class="flex-none"/>
  
  <main class="flex-grow min-h-0 bg-slate-100">
    <slot />
  </main>
</div>