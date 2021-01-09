<template>
  <article>
    <Hero v-if="article" class="is-fullheight">
      <HeroBody class="mt-6 mb-6 mobile">
        <Container class="is-fluid">
          <h1 class="title">{{ post.title }}</h1>
          <h2 class="subtitle">Published @{{ post.published }}</h2>
          <div class="marked" v-html="article">
            <!-- rendered -->
          </div>
        </Container>
      </HeroBody>
      <div class="has-text-centered">
        <nuxt-link to="/blog" class="button is-danger">Go Back</nuxt-link>
        <a href="#" class="button is-link">Top Of Page</a>
      </div>
    </Hero>
    <section v-else>
      <HeroBody class="mt-6 mb-6 is-mobile">
        <Container>
          <h2 class="title is-4">{{ error }}</h2>
        </Container>
      </HeroBody>
    </section>
  </article>
</template>

<script>
import { mapState } from "vuex";
import marked from "marked";
export default {
  data() {
    return {
      article: "",
      error: null
    };
  },
  async fetch() {
    try {
      await this.$store.dispatch("getPost", { id: this.$route.params.id });
      return (this.article = marked(this.post.body));
    } catch (error) {
      this.error = error;
    }
  },
  computed: {
    ...mapState(["post"])
  }
};
</script>
