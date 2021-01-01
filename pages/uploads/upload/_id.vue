<template>
  <article v-if="article" class="hero is-fullheight">
    <section class="hero-body mt-6 mb-6 mobile">
      <div class="container is-fluid">
        <h1 class="title">{{ article.title }}</h1>
        <h2 class="subtitle">Published @{{article.published}}</h2>
        <div class="marked" v-html="content">
          <!-- rendered -->
        </div>
      </div>
    </section>
    <div class="has-text-centered">
        <nuxt-link to="/uploads" class="button is-danger">Go Back</nuxt-link>
        <a href="#" class="button is-link">Top Of Page</a>
    </div>
  </article>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      content: null,
      article: [],
      error: null
    };
  },
  async fetch() {
    try {
      const response = await this.$axios.get(
        `https://quelchlax.herokuapp.com/blogs/${this.$route.params.id}`
      );
      this.article = response.data;
      this.content = marked(response.data.body);
    } catch (error) {
      this.error = error;
    }
  },
  fetchOnServer: false
};
</script>

