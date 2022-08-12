<script setup lang="ts">
  import { uid } from "$lib/utils/helper";
  let id_component = uid()

  export let type:string = 'text'
  export let text:string = ''
  export let name:string = ''

  let clazz:string = '';
  export { clazz as class };
  
  let focus:boolean = false
  let input:HTMLInputElement | null = null
  
  const clickFocus = () => {
    if (input)
      input.focus()
  }

  const typeAction = (node: HTMLInputElement) => {
    node.type = type
  }
</script>
  
  <template>
    <div on:click="{clickFocus}" 
      class="relative w-full rounded-lg pl-4 py-2 flex border border-gray-200 bg-gray-50 
      {focus && '!border-blue-600 !bg-white'} {clazz}">
      <label for="{id_component}" class="absolute top-0 left-4 h-full px-0.5 flex items-center pointer-events-none">
        <span class="absolute w-full h-0.5 bg-gray-50 -top-0.5 left-0 scale-x-0 transition-all duration-300 origin-center 
          {(focus || text != '') && '!scale-x-100'}"></span>
        <span class="relative font-semibold text-gray-600 transition-all duration-300
          {(focus || text != '') && '!-translate-y-5 text-sm'} {focus && '!text-blue-600'}">
          <slot name="label"/>
        </span>
      </label>
  
      <input 
        bind:this="{input}"
        use:typeAction
        id={id_component}
        class="flex-grow min-w-0 bg-transparent font-medium"
        style="{!focus ? '--bg-input: rgb(249 250 251)' : ''}"
        {name}
        bind:value="{text}"
        on:focus="{() => focus = true}"
        on:blur="{() => focus = false}"
      />
  
      <span class="flex-none mx-2 pointer-events-none">
        <div class="icon {focus && '!text-blue-600'}">
          <slot name="icon"/>
        </div>
      </span>
    </div>
  </template>