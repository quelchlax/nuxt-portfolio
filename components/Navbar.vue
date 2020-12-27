<template>
  <nav class="navbar" role="navigation" aria-label="main-navigation">
    
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <strong>Welcome</strong>
      </nuxt-link>
      <Hamburger @toggle="$emit('side-toggle')" />
    </div>

    <div class="navbar-menu">
      
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/blog">
          Articles
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/contact">
          Contact Me
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <a href="" class="button is-dark">
            <img src="./../static/icons/github.svg" alt="my-github">
            <span class="mr-1 ml-1">My Github</span>
          </a>
        </div>
      </div>

    </div>

  </nav>
</template>

<script>
import Hamburger from '@/components/Hamburger.vue';
export default {
  components: {
    Hamburger
  }
};
</script>

<style></style>
