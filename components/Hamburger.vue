<template>
  <span
    class="navbar-burger burger"
    data-target="navbarMenuHeroC"
    role="button"
    @click="$emit('toggle')"
  >
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </span>
</template>

<script>
export default {
  name: "Hamburger"
};
</script>


