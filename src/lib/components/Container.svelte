<script lang="ts">
  let clazz:string = '';
  export { clazz as class };
</script>

<div class="{`w-full px-4 md:px-6 lg:px-8 ${clazz}`}">
  <slot/>
</div>