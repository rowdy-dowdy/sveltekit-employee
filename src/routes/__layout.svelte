<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import { Fetch } from "$lib/utils/fetch";
  import { user } from "../stores/user";
  import { get } from 'svelte/store';

  export const load: Load = async({ params, fetch, session, url }) => {
    console.log(1)
    if (!session.user && !url.pathname.includes('/auth/login')) {
      try {
        const res = await Fetch('http://localhost:5173/api/auth/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!res.ok) {
          throw Promise.reject(res)
        }

        return {
          status: 200
        };

      } catch (error) {
        return {
          status: 301,
          redirect: '/auth/login'
        }
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
  import { session } from '$app/stores'
  import { browser } from '$app/env';

  if (browser)
    user.create($session.user)
</script>

<div id="app" class="min-h-screen flex flex-col text-[#444]">
  <Header/>
  
  <slot />
</div>