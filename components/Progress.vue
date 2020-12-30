<template>
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{skill}}</strong>
          <br />
          <progress :class="'progress ' + color" :value="amount" max="100"></progress>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["skill", "amount", "color"],
  name: 'Progress'
};
</script>

<style></style>
