<template>
  <section class="container is-fluid mobile">
    <h1 class="title">{{ doc.title }}</h1>
    <h2 class="subtitle">Published: {{ date }}</h2>
    <nuxt-content class="" :document="doc" />


    <div class="content has-text-centered mt-6 pt-6">
      <button class="button is-link is-light" v-if="prev">
        <nuxt-link :to="prev.slug">Back</nuxt-link>
      </button>
      <button class="button is link is-light" v-if="next">
        <nuxt-link :to="next.slug">Next</nuxt-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`posts/${params.slug}` || "index").fetch();
    const [prev, next] = await $content("posts")
      .only(["title", "slug"])
      .sortBy("title", "asc")
      .surround(params.slug, { before: 1, after: 1 })
      .fetch();
    const date = new Date(doc.createdAt).toDateString();
    return { doc, prev, next, date };
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 400px) {
  .mobile {
    max-width: 300px;
    word-wrap:break-word;

    * {
      font-size: 14px;
    }
  }
}
</style>
