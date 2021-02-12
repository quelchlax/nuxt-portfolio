<template>
  <section class="container is-fluid mobile">
    <h1 class="title">{{ doc.title }}</h1>
    <h2 class="subtitle">Published: {{ date }}</h2>

    <nuxt-content class="marked" :document="doc" />
    <div class="content has-text-centered mt-6 pt-6">
      <nuxt-link v-if="prev" class="button is-link" :to="prev.slug"
        >Back</nuxt-link
      >
      <nuxt-link v-if="next" class="button is-link" :to="next.slug"
        >Next</nuxt-link
      >
    </div>
  </section>
</template>

<script>
export default {
  mounted({ $content, params }) {
    const doc = $content(`posts/${params.slug}` || "index").fetch();
    const [prev, next] =  $content("posts")
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

</style>
