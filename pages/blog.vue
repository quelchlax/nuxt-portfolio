<template>
  <Hero class="is-medium">
    <HeroBody>
      <Container>
        <section v-if="$fetchState.pending">
          <h2 class="subtitle has-text-centered">Fetching Articles</h2>

          <Spinner />
        </section>

        <section v-else-if="error">
          <div class="has-text-centered">
            <h2 class="subtitle">Something went wrong!</h2>
            <p>
              Sorry and error occured; please refresh the page of come back
              later
            </p>
          </div>
        </section>

        <section class="card section has-curves" v-else>
          <div class="has-text-centered mb-6">
            <h1 class="title">Web Developer Tips and Tricks by Quelchlax</h1>
            <p>
              Some articles I have wrote and been working out to help out those
              like myself.
            </p>
          </div>

          <div v-for="article in posts" :key="article.id">
            <Columns class="is-vcentered">
              <Column class="is-4">
                <img
                  class="has-curves"
                  src="https://cdn.emk.dev/templates/featured-image.png"
                  :alt="article.title"
                />
              </Column>
              <Column class="is-8">
                <h3 class="heading">Published: {{ article.published }}</h3>
                <h1 class="title post-title">{{ article.title }}</h1>
                <p>
                  {{ article.snippet }}
                </p>
                <br />
                <div class="is-mobile">
                  <nuxt-link
                    class="button is-link mt-4"
                    :to="`uploads/${article.id}`"
                  >
                    Read More
                  </nuxt-link>
                </div>
              </Column>
            </Columns>
          </div>
        </section>
      </Container>
    </HeroBody>
  </Hero>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data() {
    return {
      error: null
    }
  },
  async fetch(){
    try {
      await this.$store.dispatch('getPosts')
    } catch (error) {
      this.error = error
    }
  },
  computed: {
    ...mapState(['posts'])
  },
  fetchDelay: 100,
  fetchOnServer: false
};
</script>
