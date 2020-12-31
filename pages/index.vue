<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <section class="container is-fluid --mobile">
        <div class="container section mt-6 has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-5">
              <figure class="image is-square">
                <img
                  class="is-rounded"
                  src="https://cdn1.iconfinder.com/data/icons/data-science-1-1/512/20-512.png"
                  alt="Description"
                />
              </figure>
            </div>
            <div class="column is-6 is-offset-1">
              <h1 class="title is-2">
                Hi, im Eric
              </h1>
              <h2 class="subtitle is-4">
                Full Stack Javascript Developer and Web Development Student at
                Fanshawe College
              </h2>

              <ProgressBar />

             
            </div>
          </div>
        </div>
        <div class="container">
          <div class="columns is-vcentered mt-6 mb-2">
            <article class="columns featured">
              <div class="column is-5 post-img ">
                <img
                  src="../static/images/js.png"
                  class="hero-image --rounded"
                  alt="javascript-logo"
                  width="400px"
                  height="400px"
                />
              </div>
              <div class="column is-7 featured-content">
                <div>
                  <h3 class="heading post-category">Web Development Student</h3>
                  <h2 class="subtitle">Eric Quelch</h2>
                  <h1 class="title post-title">
                    About Me
                  </h1>
                  <p>
                    Hello and thanks for dropping by. My name is Eric Quelch and
                    I have been programming for almost 2 years now. I am
                    currently a student at Fanshawe College, hoping to finish
                    with top notch grades and eventually gain employment.
                  </p>
                  <p class="mt-2">
                    I am very passionate about developing, programming and
                    designing various web based applications. I absolutly love
                    what I do. I am always trying to learn, and develop new
                    skills. Javascript is my primary programming language of
                    choice for the front and back end. I also have experience
                    with Java, Python and C# to building small games and various
                    tools and applications.
                  </p>
                  <br />
                  <div class="has-text-centered">
                    <a
                      href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                      class="button is-warning"
                      >Javascript Courses</a
                    >
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="container mt-6">
            <h2 class="title">About My Current Stack</h2>
            <div class="content">
              <p>
                I use VSCode for my editor, <strong>Pop!_OS</strong> for my OS, and GitHub to
                manage my source code. When it comes to building my applications I enjoy using Javascript frameworks like
                Vue.js or Nuxt.js with Bulma for styling. To manage data and the backend I prefer building using Node.js with MongoDB/Firebase. 
              </p>
            </div>
          </div>
          <div class="columns container mt-6 mb-6">
            <div class="columns is-multiline">
              <div class="column is-6">
                <article class="columns is-multiline">
                  <div class="column is-6 post-img">
                    <img
                      src="../static/images/pertyui.png"
                      alt="perty-ui-theme"
                    />
                  </div>
                  <div class="column is-6 featured-content ">
                    <h3 class="heading post-category">
                      Perty Theme For VSCode
                    </h3>
                    <h1 class="title post-title">
                      Need A Dark Theme For VSCode?
                    </h1>
                    <p class="post-excerpt">
                      Looking for a dark theme for VSCode? Here is a GitHub
                      based theme for your VSCode editor that I made.
                    </p>
                    <br />
                    <div class="has-text-centered">
                      <a
                      href="https://marketplace.visualstudio.com/items?itemName=ericquelch.perty"
                      class="button is-dark"
                      >Perty Theme VSCode</a
                    >
                    </div>
                  </div>
                </article>
              </div>
              <div class="column is-6">
                <article class="columns is-multiline">
                  <div class="column is-6 post-img">
                    <img src="../static/images/github.png" alt="github" />
                  </div>
                  <div class="column is-6 featured-content ">
                    <h3 class="heading post-category">Git and GitHub</h3>
                    <h1 class="title post-title">
                      Check Out Some Of My Repositories
                    </h1>
                    <p class="post-excerpt">
                      I post a lot of example code and guides on my GitHub. If
                      your new to web development or programming, it might be
                      worth while to check out some repositories I have.
                    </p>
                    <br />
                    <div class="has-text-centered">
                      <a
                        href="https://github.com/quelchlax"
                        class="button is-github"
                        >Visit My Github</a
                      >
                    </div>
                  </div>
                </article>
              </div>
              <div class="column is-4">
                <article class="columns is-multiline">
                  <div class="column is-12 post-img">
                    <img src="../static/images/nuxt.png" class="--rounded" alt="vuejs" />
                  </div>
                  <div class="column is-12 featured-content ">
                    <h3 class="heading post-category">Nuxt.JS</h3>
                    <h1 class="title post-title">
                      My Personal Framework Of Choice
                    </h1>
                    <p class="post-excerpt">
                      Based off Vue.JS, Nuxt by far is my favorite framework.
                      It's very powerful and simple to use, and can do more than
                      build static sites. Server side rendering, single page
                      applications, static or universal deployments, tonns of
                      built in features and tools. I could go on about Nuxt.js.
                    </p>
                    <br />
                    <div class="has-text-centered">
                      <a href="https://nuxtjs.org/" class="button is-nuxt"
                        >Nuxt Documents</a
                      >
                    </div>
                  </div>
                </article>
              </div>
              <div class="column post is-4">
                <article class="columns is-multiline">
                  <div class="column is-12 post-img">
                    <img src="../static/images/vue.png" alt="Featured Image" />
                  </div>
                  <div class="column is-12 featured-content ">
                    <h3 class="heading post-category">Vue.JS</h3>
                    <h1 class="title post-title">Vue Needs More Love</h1>
                    <p class="post-excerpt">
                      When I first started to learn more about frameworks and
                      which one to choose, I started with React. Over time I
                      began to learn bits of other frameworks such as Angular,
                      Svelte then I found Vue. Something about this framework
                      stuck to me; I find it very simple to approach, learn and
                      get going. I have been using Vue.js to build small
                      applications and even part of this site using Vue.js and
                      Nuxt.js
                    </p>
                    <br />
                    <div class="has-text-centered">
                      <a href="https://v3.vuejs.org/" class="button is-vue"
                        >Vue Documents</a
                      >
                    </div>
                  </div>
                </article>
              </div>
              <div class="column post is-4">
                <article class="columns is-multiline">
                  <div class="column is-12 post-img">
                    <img
                      src="../static/images/bulma.png"
                      alt="Featured Image"
                    />
                  </div>
                  <div class="column is-12 featured-content ">
                    <h3 class="heading post-category">Bulma</h3>
                    <h1 class="title post-title">
                      Bulma is Simple and Gorgeous
                    </h1>
                    <p class="post-excerpt">
                      Coming from Bootstrap I stumbled across Bulma and fell in
                      love. I really recommend anyone who is new to development
                      or even an established developer to check out Bulma. After
                      a few weeks of building some small things and components
                      using Bulma I find it almost becomes fluient.
                    </p>
                    <br />
                    <div class="has-text-centered">
                      <a href="https://bulma.io/" class="button is-primary"
                        >Bulma Documents</a
                      >
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue';
export default {
  components: {
    ProgressBar
  }
};
</script>


