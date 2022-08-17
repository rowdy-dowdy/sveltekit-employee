<script lang="ts">
  import { clickOutside } from "$lib/utils/clickOutSide";
  import { scale } from "svelte/transition";
  import { page } from '$app/stores';
  import { user } from "../../../stores/user";
  import { session } from '$app/stores'
  import { navigating } from "$app/stores";
  import type { Navigation } from "@sveltejs/kit"

  let ref_line: HTMLElement | null = null

  let reset = null
  const getStatusPage = (navi: Navigation | null) => {
    if (ref_line) {
      if (navi == null) {
        ref_line.style.width = '100%'
        ref_line.style.transition = 'all .1s ease-in-out'

        reset = setTimeout(() => {
          if (ref_line) {
            ref_line.style.transition = 'none'
            ref_line.style.width = '0'
          }
        }, 100);
      }
      else {
        reset = null
        ref_line.style.width = '70%'
        ref_line.style.transition = 'all 3s cubic-bezier(0.25, 0.1, 0.25, 1)'
      }
    }
  }

  $: getStatusPage($navigating)

  let clazz:string = '';
  export { clazz as class };

  let links = [
    {title: "Trang chủ", path: "/"},
    {title: "Nhắn tin", path: "/messager"},
    {title: "Chấm công", path: "/candidates"},
    {title: "Công việc", path: "/schedule"},
    {title: "Báo cáo", path: "/report"}
  ]

  let show_option = false

  const close = () => { 
    show_option = false
  }
</script>

<header class="fixed top-0 left-0 right-0 bg-white shadow border-b border-gray-200 {clazz} z-50">
  <div class="relative w-full px-2">
    <div class="h-16 flex justify-between items-center">
      <div class="flex-none py-3 pr-4 md:pr-6 lg:pr-8">
        <a href="/" class="flex items-center text-teal-600">
          <span class="icon w-9 h-9">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M17 14a5 5 0 0 0 2.71-.81L20 13a3.16 3.16 0 0 0 .45-.37l.21-.2a4.48 4.48 0 0 0 .48-.58l.06-.08a4.28 4.28 0 0 0 .41-.76 1.57 1.57 0 0 0 .09-.23 4.21 4.21 0 0 0 .2-.63l.06-.25A5.5 5.5 0 0 0 22 9V2l-3 3h-4l-3-3v7a5 5 0 0 0 5 5zm2-7a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"></path><path d="M11 22v-5H8v5H5V11.9a3.49 3.49 0 0 1-2.48-1.64A3.59 3.59 0 0 1 2 8.5 3.65 3.65 0 0 1 6 5a1.89 1.89 0 0 0 2-2 1 1 0 0 1 1-1 1 1 0 0 1 1 1 3.89 3.89 0 0 1-4 4C4.19 7 4 8.16 4 8.51S4.18 10 6 10h5.09A6 6 0 0 0 19 14.65V22h-3v-5h-2v5z"></path></svg>
          </span>
          <h1 class="text-2xl pl-2 font-[cursive] font-semibold">KennaStaff</h1>
        </a>
      </div>

      <ul class="flex items-center self-stretch space-x-6">
        {#each links as link, i (i)}
          <li class="link h-full">
            <a href="{link.path}" class:active={$page.url.pathname == link.path}>{link.title}</a>
          </li>
        {/each}
      </ul>
      
      <div class="flex-none py-3 pl-4 md:pl-6 lg:pl-8 relative" use:clickOutside on:click_outside={close}>
        {#if $user}
        <button on:click|preventDefault|stopPropagation="{() => show_option = !show_option}" class="flex items-center space-x-3">
          <div class="flex-none w-9 h-9 rounded-full overflow-hidden bg-teal-600">
            <img src="" alt="">
          </div>
          <h3 class="text-lg font-semibold">{$user?.name || ''}</h3>
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </span>
        </button>
        {:else}
          <a href="/auth/login" class="text-lg font-semibold">Login</a>
        {/if}

        {#if show_option}
          <div transition:scale class="have-triangle absolute w-60 right-0 top-[calc(100%-.5rem)] origin-top">
            <div class="relative bg-white border  shadow-md rounded-lg overflow-hidden p-2">
              {#if $user}
                <a href="/users/{$user.id}" class="block rounded hover:bg-teal-200 p-2">View profile</a>
                <a href="/settings" class="block rounded hover:bg-teal-200 p-2">Settings</a>
                <a href="/auth/logout" class="block rounded hover:bg-teal-200 p-2">Logout</a>
              {/if}
            </div>
          </div>
        {/if}
      </div>
    </div>
    <div class="absolute w-full h-1 bottom-0 left-0">
      <div bind:this={ref_line} class="absolute h-full top-0 left-0 bg-teal-600" style="width: 0px;"></div>
    </div>
  </div>
</header>

<style lang="postcss">
  .link a {
    @apply relative h-full flex items-center text-lg font-semibold text-gray-500;
  }

  .link a.active {
    @apply text-[#444];
  }

  .link a.active::after {
    content: '';
    @apply absolute bottom-0 -left-1 -right-1 h-1 rounded-t-lg bg-teal-500
  }

  .have-triangle {
    --triangle-width: 8px;
    --triangle-right: 16px;
    --triangle-border: rgb(209 213 219);
    --triangle-background: rgb(255 255 255);
  }
  .have-triangle::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: calc( -1 * var(--triangle-width) * 2 + 2px);
    right: var(--triangle-right);
    border: var(--triangle-width) solid transparent;
    border-bottom-color: var(--triangle-border);
    /* @apply absolute -top-[calc(var(--triangle-width)*2)] right-[var(--triangle-right)] w-0 h-0 border-[var(--triangle-width)] border-transparent border-b-gray-300; */
  }
  .have-triangle::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: calc( -1 * (var(--triangle-width) - 1px) * 2 + 2px);
    right: calc(var(--triangle-right) + 1px);
    border: calc(var(--triangle-width) - 1px) solid transparent;
    border-bottom-color: var(--triangle-background);
  }
</style>