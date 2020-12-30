<template>
  <div class="has-text-centered">
    <div class="content">
      <Progress skill="Javascript" amount="85" color="is-warning" />
      <Progress skill="Vue.js" amount="85" color="is-primary" />
      <Progress skill="HTML5/CSS3" amount="90" color="is-danger" />
      <Progress skill="Databases" amount="75" color="is-link" />
      <Progress skill="Node.js" amount="80" color="is-info" />
    </div>
  </div>
</template>

<script>
import Progress from "@/components/Progress.vue";
export default {
  components: {
    Progress
  }
};
</script>

<style></style>
