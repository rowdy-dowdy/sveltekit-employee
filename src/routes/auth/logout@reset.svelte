<script lang="ts">
  import type { Load } from '@sveltejs/kit';
  import { Fetch } from "$lib/utils/fetch";
  import { user } from "../../stores/user";
  import { get } from 'svelte/store';
  import { session } from '$app/stores'
  import { onMount } from "svelte";
  import { goto } from '$app/navigation';

  const logout = async () => {
    try {
      const res = await Fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

    } 
    catch (error) {}
    finally {
      user.reset()
      $session.user = null

      goto('/auth/login')
    }
  };

  onMount(async () => {
    await logout()
  })
</script>