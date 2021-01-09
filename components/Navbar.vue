<template>
  <header
    class="navbar"
    id="navbar"
    role="navigation"
    aria-label="main-navigation"
  >
    <section class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <strong>{{ brand }}</strong>
      </nuxt-link>
      <Hamburger @toggle="$emit('side-toggle')" />
    </section>

    <nav class="navbar-menu">
      <aside class="navbar-start">
        <div class="navbar-item" v-for="link in links" :key="link.id">
          <nuxt-link class="is-link" :to="link.path">{{ link.name }}</nuxt-link>
        </div>
      </aside>

      <aside class="navbar-end">
        <div class="navbar-item">
          <a :href="github" class="button is-dark">
            <img src="../assets/icons/github.svg" alt="my-github" />
            <span class="mr-1 ml-1">My Github</span>
          </a>
        </div>

        <div class="navbar-item">
          <img src="../assets/icons/sun.svg" width="32px" alt="sun" />
          <Toggler />
          <img src="../assets/icons/moon.svg" width="32px" alt="moon" />
        </div>
      </aside>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: "/blog", name: "Blog" },
        { path: "/linux", name: "Linux Tips" },
        { path: "/contact", name: "Contact" }
      ],
      github: "http://github.com/quelchlax",
      brand: "Home"
    };
  }
};
</script>

<style lang="scss">
.is-link {
  color: inherit;
}
</style>
