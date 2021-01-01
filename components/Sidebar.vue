<template>
  <aside class="menu-wrapper">
    <div class="menu-backdrop" v-if="show" @click="$emit('close')"></div>

    <transition name="slide-side">
      <div v-if="show" class="menu-navbar">
        <p class="menu-label">
          Welcome
        </p>
        <ul class="menu-list" @click="$emit('close')">
          <li>
            <nuxt-link to="/linux">
              Linux Tips
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/uploads">
              Web Development
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">
              Contact Me
            </nuxt-link>
          </li>
        </ul>
        <p class="menu-label">
          Social
        </p>
        <ul class="menu-list">
          <li>
            <a href="https://github.com/quelchlax">
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/quelchlax">
              Twitter
            </a>
          </li>
        </ul>
        <p class="menu-label">
          Work I Have Done
        </p>
        <ul class="menu-list">
          <li>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=ericquelch.perty"
            >
              Perty
            </a>
          </li>
          <li>
            <a href="http://quelchlax.tech">
              Quelchlax
            </a>
          </li>
        </ul>
        <hr>
        <p class="menu-label">
          Toggle Theme
        </p>
        <ul class="menu-list">
          <li class="ml-2">
            <Toggler />
          </li>
        </ul>
        
      </div>
    </transition>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    show: { type: Boolean, default: false }
  }
};
</script>
