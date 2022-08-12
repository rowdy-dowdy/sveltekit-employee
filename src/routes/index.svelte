<script setup lang="ts">
  import { fetch } from "$lib/utils/fetch";
  const test = async () => {
    try {
      const res = await fetch('/api/auth/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!res.ok) {
        throw Error
      }

      const data = await res.json()

      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }
</script>
  
<button on:click|preventDefault="{test}"></button>