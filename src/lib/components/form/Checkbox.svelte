<script setup lang="ts">
  export let check:boolean = false
  let clazz:string = '';
  export { clazz as class };
</script>
  
  <template>
    <div on:click="{() => check = !check}" class="flex items-center space-x-2 cursor-pointer select-none {clazz}">
      <div class="w-5 h-5 border rounded overflow-hidden text-white bg-white focus-within:border-blue-600
        {check && '!border-green-600 !text-green-600'}">
        <span class="icon cursor-pointer">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
        </span>
      </div>
      <span class="text-sm font-semibold text-gray-500">
        <slot name="label"/>
      </span>
    </div>
  </template>