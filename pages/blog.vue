<template>
  <section class="container">
    <div class="section">
      <h1 class="title">Blogs by Quelchlax</h1>
      <p>
        Articles about coding, programming, designs and much more!
      </p>
    </div>

    <div v-for="doc in docs" :key="doc.slug">
      <div class="section card m-2">
        <h1 class="title">{{ doc.title }}</h1>
        <p class="mb-4">{{ doc.snippet }}</p>
        <nuxt-link class="button is-link mt-4" :to="doc.path">
          Read More
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const docs = await $content("posts")
      .sortBy("title")
      .fetch();
    return { docs };
  }
};
</script>

<style lang="scss" scoped></style>
