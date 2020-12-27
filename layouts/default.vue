<template>
  <main>
    <header class="container">
      <Navbar @side-toggle="toggleSidebar = !toggleSidebar" />
    </header>
    <aside>
      <Sidebar :show="toggleSidebar" @close="toggleSidebar = false" />
    </aside>
    <section>
      <Nuxt keep-alive />
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>http://quelchlax.tech</strong> made by
          <a href="https://github.com/quelchlax">Eric Quelch</a>. 
        </p>
          <!-- <button class="button is-link">Buy Me A Coffee</button> -->
      </div>
    </footer>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  data() {
    return {
      toggleSidebar: false
    };
  },
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style></style>
