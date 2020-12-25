<template>
  <div class="container has-text-centered">
    <div class="columns is-vcentered">
      <div class="column is-5">
        <figure class="image is-square">
          <img class='is-rounded' src="https://avatars0.githubusercontent.com/u/74473426?s=460&v=4" alt="Description" />
        </figure>
      </div>
      <div class="column is-6 is-offset-1">
        <h1 class="title is-2">
          Hi, im Eric
        </h1>
        <h2 class="subtitle is-4">
          Full Stack Javascript Developer
        </h2>
        <br />
        <p class="has-text-centered">
          <nuxt-link to="/blog" class="button is-medium is-info is-outlined">
            Learn more
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media all and (max-width: 768px) {
  .hide {
    display: none;
  }
}
</style>
