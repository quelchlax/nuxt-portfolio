<template>
  <div :class="'container ' + props">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['props']
}
</script>