<template>
  <div :class="'column ' + size">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['size'],
  name: 'Column'
}
</script>

<style>

</style>