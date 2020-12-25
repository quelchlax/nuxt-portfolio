<template>
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Welcome</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          <li>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=ericquelch.perty"
              >Perty</a
            >
          </li>
          <li><a href="https://github.com/quelchlax">My Github</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.hero-foot strong {
  color: #008cf6;
}
</style>
