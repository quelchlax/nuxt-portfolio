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
  name: "Menubar"
};
</script>

<style>
.burger:hover {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
}
</style>
