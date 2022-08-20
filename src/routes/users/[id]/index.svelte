<script lang="ts">
  import { onMount } from "svelte";

  let window_scroll_y = 0
  let last_scroll_y = 0
  let window_height = 0

  let sidebar: HTMLElement | null = null
  let sidebar_height = 0
  let outer_height = 0
  let parent: HTMLElement | null = null

  $: sidebar_top = window_height - sidebar_height - 20
  $: sidebar_bottom = window_height - sidebar_height + 80

  const windowScroll = (y: number) => {
    if (!sidebar || !parent) return

    if (y > last_scroll_y) {
      sidebar.style.top = sidebar_top + 'px'
      sidebar.style.bottom = ''
    }
    else {
      sidebar.style.top = ''
      sidebar.style.bottom = sidebar_bottom + 'px'
      outer_height = (window_scroll_y - (sidebar_height - window_height + parent.offsetTop + 20)) || 0
    }


    console.log((sidebar_height - window_height + parent.offsetTop + 20), window_scroll_y, sidebar_height)

    last_scroll_y = y
  }

  $: windowScroll(window_scroll_y)
</script>

<svelte:window bind:scrollY={window_scroll_y} bind:innerHeight={window_height}/>

<div class="w-full flex items-stretch space-x-4">
  <!-- side bar -->
  <div bind:this={parent} class="relative w-2/5">
    <div style="height: {outer_height}px;"></div>
    <div bind:this="{sidebar}" class="sticky">
      <div bind:clientHeight={sidebar_height} class="p-4 bg-white shadow rounded">
        {#each new Array(3) as _,i (i)}  
          <div class="mt-4">
            <h3 class="text-2xl font-semibold">Thông tin cá nhân</h3>
            <div class="pt-4">
              <div class="mb-2">
                <label for="name" class="block mb-2 font-medium">Tên tài khoản</label>
                <input type="name" id="name" class="bg-gray-50 border border-gray-300 rounded block w-full p-3 py-2" required>
              </div>
              <div class="mb-2">
                <label for="address" class="block mb-2 font-medium">Địa chỉ</label>
                <input type="address" id="address" class="bg-gray-50 border border-gray-300 rounded block w-full p-3 py-2" required>
              </div>
              <div class="mb-2">
                <label for="note" class="block mb-2 font-medium">Giới thiệu</label>
                <textarea  id="note" rows="4" class="bg-gray-50 border border-gray-300 rounded block w-full p-3 py-2" ></textarea >
              </div>
              
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="w-3/5 p-4 bg-white shadow rounded h-[1000vh]">b</div>
</div>