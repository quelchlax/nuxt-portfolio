<template>
  <main id="app">
    <container>
      <Navbar @side-toggle="toggleSidebar = !toggleSidebar" />
      <Sidebar :show="toggleSidebar" @close="toggleSidebar = false" />
    </container>
    <transition name="main">
      <Nuxt keep-alive />
    </transition>
    <footer class="section">
      <div class="content has-text-centered">
        <p>
          <strong><a href="#">quelchlax.tech</a></strong> made by
          <a
            href="https://github.com/quelchlax"
            rel="noopener noreferrer"
            target="_blank"
            >Eric Quelch</a
          >
          <br />
          <span>Using Nuxt.js, Bulma, Strapi, MongoDB, Heroku and Netlify</span>
          <br />
          <span
            ><strong
              >This is a PWA, you can download it right to your mobile
              device!</strong
            ></span
          >
          <br />
          <span
            >To view the source code for this portfolio click
            <a href="https://github.com/quelchlax/quelchlax-nuxt">here</a></span
          >
        </p>
        <Social />
        <button class="button is-link">
          <a
            style="color: white;"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.paypal.com/donate?hosted_button_id=U3Z4B6SDYDDSS"
          >
            Buy Me A Coffee?
          </a>
        </button>
        <button class="button is-dark">
          <a
            href="https://github.com/quelchlax/quelchlax/blob/main/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="has-link"
            >My Resume</a
          >
        </button>
        <button class="button is-info">
          <nuxt-link class="has-link" to="/contact">Hire Me</nuxt-link>
        </button>
      </div>
    </footer>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default {
  data() {
    return { toggleSidebar: false };
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.main-enter-active,
.main-leave-active {
  transition: opacity 1s;
}
.main-enter,
.main-leave-active {
  opacity: 0;
}
</style>
