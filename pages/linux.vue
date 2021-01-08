<template>
  <Hero class="is-mobile">
    <HeroBody>
      <Container>
        <div class="section">
          <h1 class="title">Linux Tips and Tricks</h1>
          <p>
            If your a developer using Mac or Windows here are some guides to
            help showcase the power of Linux operating systems for your work.
          </p>
        </div>

        <div v-for="post in posts" :key="post.slug">
          <Card class="mb-4 section">
            <Columns>
              <Column class="is-4 is-offset-1">
                <img :src="post.avatar" :alt="post.avatar" class="post-image" />
              </Column>
              <Column>
                <div class="heading">{{ post.category }}</div>
                <h1 class="title is-4">{{ post.title }}</h1>
                <p>{{ post.snippet }}</p>
                <nuxt-link class="button is-link mt-4" :to="post.path">
                  Read More
                </nuxt-link>
              </Column>
            </Columns>
          </Card>
        </div>
      </Container>
    </HeroBody>
  </Hero>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content("posts")
      .sortBy("title")
      .fetch();
    return { posts };
  }
};
</script>
