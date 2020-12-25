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
  color: #0fb85a;
  border-bottom: 1px solid #0fb85a;
}
</style>
