<template>
<div class="hero is-fullheight is-mobile">
  <div class="hero-body">
  <section class="container">
    <div class="section">
      <h1 class="title">Linux Tips and Tricks</h1>
      <p>
        If your a developer using Mac or Windows here are some guides to help showcase the power of Linux operating systems for your work. 
      </p>
    </div>

    <div v-for="doc in docs" :key="doc.slug">
      <section class="blog-posts mt-6 mb-6">
        <div class="container">
          <div class="columns">
            <div class="column is-10 is-offset-1">
              <div class="columns featured-post is-multiline">
                <article class="columns featured">
                  <div class="column is-7 post-img ">
                    <img
                      :src="doc.avatar"
                      :alt="doc.avatar"
                      class="post-image"
                    />
                  </div>
                  <div class="column is-5 featured-content va">
                    <div>
                      <h3 class="heading post-category">{{ doc.category }}</h3>
                      <h1 class="title post-title">{{ doc.title }}</h1>
                      <p class="post-excerpt">
                        {{ doc.snippet }}
                      </p>
                      <br />
                      <div class="is-mobile">
                        <nuxt-link class="button is-link mt-4" :to="doc.path">
                          Read More
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
  </div>
</div>
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

