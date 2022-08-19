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

<script lang="ts">
import { browser } from '$app/env';

  import { page } from '$app/stores'
  import { clickOutside } from "$lib/utils/clickOutSide";

  const tabs = [
    {name: 'Hồ sơ', link: '/'},
    {name: 'Giới thiệu', link: '/about'},
    {name: 'Bạn bè', link: '/friends'},
    {name: 'Ảnh', link: '/photos'},
    {name: 'Video', link: '/videos'},
    {name: 'Thể thao', link: '/sports'},
  ]

  $: tab_active = '/' + ($page.url.pathname.split('/')[3] || '')

  let model_update = false
  const close_update = () => {
    model_update = false
  }
  
  const toggle_scroll = (model: boolean) => {
    if (browser)
      document.body.style.overflow = model ? 'hidden' : 'initial'
  }

  $: toggle_scroll(model_update)
</script>

<div>
  <div class="w-full bg-white shadow">
    <div class="w-full max-w-screen-xl mx-auto px-4">
      <div class="relative pb-[35%] bg-teal-100 -mx-4 rounded-b-lg overflow-hidden">
        <span class="absolute w-full h-full top-0 left-0">
          <!-- <img src="" alt=""> -->
        </span>
      </div>

      <div class="px-6">
        <div class="relative w-full -mt-6 border-b pb-4">
          <div class="w-full flex items-center space-x-4">
            <div class="w-36 h-36 rounded-full bg-teal-600 border-4 border-white"></div>
            <div class="mt-4">
              <h1 class="text-4xl font-bold">Việt Hùng</h1>
              <p class="text-lg mt-2">@viethung.it  · Lập trình viên giải trí</p>
            </div>
            <button 
              on:click|preventDefault={() => model_update = true} 
              class="flex items-center space-x-2 self-end !ml-auto bg-teal-200 rounded hover:bg-teal-600 hover:text-white p-2">
              <span class="icon w-6 h-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"></path></svg>
              </span>
              <span>Chỉnh sửa hồ sơ</span>
            </button>
          </div>
        </div>
        <div class="flex items-center">
          {#each tabs as tab}
            <a href="{`/users/${$page.params.id}${tab.link}`}" sveltekit:prefetch sveltekit:noscroll
              class="px-4 py-4 border-b-2 border-transparent font-medium
              {tab_active == tab.link && 'text-teal-600 border-teal-600'}">{tab.name}</a>
          {/each}
          <button class="block ml-auto bg-teal-200 rounded hover:bg-teal-600 hover:text-white p-2">
            <span class="icon w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full max-w-screen-xl mx-auto px-4">
    <div class="px-6 mt-4">
      <slot/>
    </div>
  </div>
</div>

{#if model_update}
  <div class="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50 h-center overflow-auto">
    <div class="w-full max-w-2xl mx-auto p-4 bg-white rounded my-4"
      use:clickOutside on:click_outside={close_update}>
      <div class="relative border-b -mx-4 -mt-4 py-4">
        <h3 class="text-2xl font-semibold px-12 text-center">Chỉnh sửa trang cá nhân</h3>
        <button class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-teal-200 hover:bg-teal-300"
          on:click|preventDefault={() => model_update = false}>
          <!-- <span class="icon"> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
          <!-- </span> -->
        </button>
      </div>

      <div class="mt-4">
        <h3 class="text-2xl font-semibold">Ảnh đại diện</h3>
        <div class="w-full max-w-[250px] mx-auto p-4">
          <div class="relative w-full pb-[100%] rounded-full overflow-hidden">
            <span class="absolute w-full h-full top-0 left-0 bg-teal-600"></span>
            <span class="icon absolute w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-50">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 9c-1.626 0-3 1.374-3 3s1.374 3 3 3 3-1.374 3-3-1.374-3-3-3z"></path><path d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-8 12c-2.71 0-5-2.29-5-5s2.29-5 5-5 5 2.29 5 5-2.29 5-5 5z"></path></svg>
            </span>
          </div>
        </div>
      </div>

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

      <button class="mt-4 px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-500 float-right">Lưu</button>
    </div>
  </div>
{/if}