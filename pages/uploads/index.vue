<template>
  <div class="hero is-fullheight is-mobile">
    <div class="hero-body">
      <div class="container">
        <div v-if="$fetchState.pending">
          <h2 class="subtitle has-text-centered">Fetching Articles</h2>

          <div class="is-loading container">
            <div class="loader"></div>
          </div>
        </div>

        <div v-else-if="error">
          <div class="container has-text-centered">
            <h2 class="subtitle">Something went wrong!</h2>
            <p>
              Sorry and error occured; please refresh the page of come back
              later
            </p>
          </div>
        </div>

        <div v-else>
          <div class="section">
            <h1 class="title">Web Developer Tips and Tricks by Quelchlax</h1>
            <p>
              Some articles I have wrote and been working out to help out those
              like myself.
            </p>
          </div>
          <div v-for="article in articles" :key="article.id">
            <section class="mt-6 mb-6">
              <div class="columns is-vcentered">
                <div class="column is-10 is-offset-1">
                  <div class="columns is-multiline">
                    <article class="columns featured">
                      <div class="column is-8">
                        <img
                          class="--rounded"
                          src="https://cdn.emk.dev/templates/featured-image.png"
                          :alt="article.title"
                        />
                      </div>
                      <div class="column is-6 featured-content ">
                        <div>
                          <h3 class="heading post-category">
                            Published: {{ article.published }}
                          </h3>
                          <h1 class="title post-title">{{ article.title }}</h1>
                          <p class="post-excerpt">
                            {{ article.snippet }}
                          </p>
                          <br />
                          <div class="is-mobile">
                            <nuxt-link
                              class="button is-link mt-4"
                              :to="`uploads/upload/${article.id}`"
                            >
                              Read More
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      error: ""
    };
  },
  // activated() {
  //   if (this.$fetchState.timestamp <= Date.now() - 60000) {
  //     this.$fetch();
  //   }
  // },
  async fetch() {
    try {
      const { data } = await this.$axios.get(
        "https://quelchlax.herokuapp.com/blogs"
      );
      this.articles = data;
      this.articles.reverse();
    } catch (error) {
      this.error = error;
    }
  },
  fetchDelay: 100,
  fetchOnServer: false
};
</script>


