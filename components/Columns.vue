<template>
   <div :class="'columns ' + property">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['property']
}
</script>