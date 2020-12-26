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
            <nuxt-link to="/blog">
              Blog
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">
              Contact
            </nuxt-link>
          </li>
        </ul>
        <p class="menu-label">
          Social
        </p>
        <ul class="menu-list">
          <li>
            <a href="https://github.com/quelchlax" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/quelchlax" target="_blank">
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
              target="_blank"
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

<style lang="scss">
@mixin fillout() {
  height: 100%;
  width: 100%;
}

@mixin topleft() {
  top: 0;
  left: 0;
}

.menu-wrapper {
  @include fillout();

  .menu-backdrop {
    @include fillout();
    z-index: 100;
    position: fixed;
    @include topleft();
    background-color: rgba(12, 17, 23, 0.9);
  }

  .menu-navbar {
    height: 100%;
    width: 240px;
    @include topleft();
    position: fixed;

    background-color: #0c1117;
    z-index: 200;
    box-sizing: border-box;
    padding: 2rem;

    .menu-label {
      color: white;
    }

    .menu-list {
      a {
        color: white;

        &:hover {
          color: #6c44c4;
        }
      }
    }
  }

  .end {
    margin-top: auto;
  }

  .slide-side-enter-active,
  .slide-side-leave-active {
    transition: all 0.3s ease-out;
  }
  .slide-side-enter,
  .slide-side-leave-to {
    transform: translateX(-100%);
  }
}
</style>
