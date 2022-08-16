<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import { Fetch } from "$lib/utils/fetch";
  import { user } from "../stores/user";
  import { PUBLIC_APP_URL  } from '$env/static/public';

  export const load: Load = async ({ fetch, session, url }) => {
    if (!session.user && !url.pathname.includes('/auth/login')) {
      const res = await Fetch(`${PUBLIC_APP_URL}/api/auth/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }, fetch)

      if (!res.ok) {
        return {
          status: 301,
          redirect: '/auth/login'
        }
      }

      const data = await res.json()

      user.create(data.user)

      return {
        props: {}
      }
    }

    user.create(session.user)

    return {
      props: {}
    }
  }
</script>

<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';
  import { session } from '$app/stores'
  import { browser } from '$app/env';

  // if (browser)
  //   user.create($session.user)
</script>

<div id="app" class="min-h-screen flex flex-col text-[#444]">
  <Header/>
  
  <slot />
</div>