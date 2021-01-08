<template>
  <article v-if="post" class="hero is-fullheight">
    <section class="hero-body mt-6 mb-6 mobile">
      <div class="container is-fluid">
        <h1 class="title">{{ post.title }}</h1>
        <h2 class="subtitle">Published @{{ post.published }}</h2>
        <div class="marked" v-html="article">
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
import { mapState } from "vuex";
import marked from "marked";
export default {
  data() {
    return {
      article: ""
    };
  },
  async fetch() {
    await this.$store.dispatch("getPost", { id: this.$route.params.id });
  },
  computed: {
    ...mapState(["post"])
  },
  mounted() {
    return (this.article = marked(this.post.body));
  }
};
</script>

<style lang="scss">
.marked {
  word-wrap: break-word;
  font-family: inherit;

  a:hover {
    color: rgb(170, 53, 170);
  }

  h1 {
    font-size: 1.4em;
  }

  h2 {
    font-size: 1.2em;
    margin-bottom: 6px;
    margin-top: 4px;
  }

  p {
    margin: 4px 2px 2px 4px;
    padding: 4px;
  }

  code {
    color: #0fb85a;
    border-radius: 4px;
    background-color: #001625;
  }

  strong {
    color: #775624;
  }

  pre {
    background-color: #001625;
    border: 1px solid #6c44c4;
    border-radius: 20px;

    code {
      font-family: inherit;
      color: #bcc6cc;
    }
  }
}
</style>
