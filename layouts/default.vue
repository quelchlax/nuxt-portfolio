<template>
  <section class="hero is-fullheight">
    <Navbar @side-toggle="toggleSidebar = !toggleSidebar" />
    <Sidebar :show="toggleSidebar" @close="toggleSidebar = false" />
    <div class="hero-body ">
      <Nuxt keep-alive />
    </div>
    <Footer />
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    Footer
  },
  data() {
    return {
      toggleSidebar: false
    };
  }
};
</script>

<style lang="scss">
.nuxt-link-exact-active {
  color: #6c44c4;
  border-bottom: 1px solid #6c44c4;
  background-color: #00877525;
}

.is-github {
  &:hover {
    color: rgb(253, 191, 75);
  }
}

.hero-image {
  height: 512px;
  width: 512px;
}

.is-github {
  background-color: #6c44c4;
  color: white;
}

.is-bulma {
  background-color: #00d0b3 ;
  color: white;
}

.is-vue {
  background-color: #5b7e8b;
  color: white;
}

.is-nuxt {
  background-color: #008776;
  color: white;
}
</style>
