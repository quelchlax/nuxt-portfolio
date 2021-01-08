<template>
  <aside class="menu-wrapper">
    <div class="menu-backdrop" v-if="show" @click="$emit('close')">
      <!-- backdrop -->
    </div>

    <transition name="slide-side">
      <div v-if="show" class="menu-navbar">
        <p class="menu-label">Welcome</p>
        <ul class="menu-list" @click="$emit('close')">
          <div v-for="page in pages" :key="page.id">
            <li>
              <nuxt-link :to="page.path">{{ page.name }}</nuxt-link>
            </li>
          </div>

          <hr />

          <p class="menu-label">Social</p>
          <div v-for="link in links" :key="link.id">
            <li>
              <a :href="link.path" target="_blank" rel="noopener noreferrer">
                {{ link.name }}
              </a>
            </li>
          </div>
        </ul>

        <hr />

        <ul class="menu-list">
          <p class="menu-label">Theme Switch</p>
          <li class="ml-2">
            <img
              class="icon is-switch m-1"
              src="../assets/icons/sun.svg"
              alt="sun"
              @click="toggler"
            />
            <img
              class="icon is-switch m-1"
              src="../assets/icons/moon.svg"
              alt="moon"
              @click="toggler"
            />
          </li>
        </ul>
      </div>
    </transition>
  </aside>
</template>

<script>
import { toggler } from "@/middleware/switch";
export default {
  name: "Sidebar",
  props: {
    show: { type: Boolean, default: false }
  },
  methods: {
    toggler
  },
  data() {
    return {
      pages: [
        { path: "/", name: "About" },
        { path: "/blog", name: "Blog" },
        { path: "/linux", name: "Linux Tips" },
        { path: "/contact", name: "Contact" }
      ],
      links: [
        { path: "http://github.com/quelchlax", name: "Github" },
        { path: "http://twitter.com/quelchlax", name: "Twitter" },
        {
          path: "https://www.linkedin.com/in/eric-quelch-768861201/",
          name: "LinkedIn"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.is-switch {
  cursor: pointer;
}

.is-toggler {
  outline: none;
  border: none;
  background-color: inherit;
}

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
