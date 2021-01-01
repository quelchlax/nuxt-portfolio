<template>
  <label class="switch">
    <input type="checkbox" @click="toggler" />
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: "Toggler",
  methods: {
    toggler() {
      if (document.getElementById("app").className == "--dark") {
        document.getElementById("app").className = "light";
        document.getElementById('navbar').className = 'navbar'
      } else {
        document.getElementById("app").className = "--dark";
        document.getElementById('navbar').className = 'navbar --dark'
      }
    }
  }
};
</script>


