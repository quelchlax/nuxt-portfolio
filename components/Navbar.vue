<template>
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item">
            Welcome
          </nuxt-link>

          <!-- toggle menu bar -->
          <Menubar @toggle="$emit('side-toggle')" />
        </div>

        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <nuxt-link class="navbar-item" to="/blog" prefetch>
              Blog Posts
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/about">
              About Me
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/contact">
              Contact Me
            </nuxt-link>

            <span class="navbar-item">
              <a href="https://github.com/quelchlax" class="button is-github">
                <img src="./../static/icons/github.svg" class="mr-1 ml-1" alt="">
                <span class="mr-1 ml-1 my-github">My Github</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Menubar from "@/components/Menubar.vue";
export default {
  name: "Navbar",
  components: {
    Menubar
  }
};
</script>

<style lang="scss">

</style>
