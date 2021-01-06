<template>
  <section class="hero is-fullheight">
    <div class="hero-body container has-text-centered">
      <div class="columns">
        <div class="column is-two-thirds has-text-left">
          <h1 class="title is-1">Contact Me</h1>
          <p class="is-size-4">
            Have a question? Feel free to contact me here, or reach out to me on
            social media.
          </p>

          <div class="social-media mt-6">
            <button class="button is-info mr-1">
              <a href="https://twitter.com/quelchlax" target="_blank">
                <img
                  src="../static/icons/twitter.svg"
                  class="social-links"
                  alt="twitter-link"
                />
              </a>
            </button>
            <button class="button is-info mr-1">
              <a
                href="https://ca.linkedin.com/in/eric-quelch-768861201"
                target="_blank"
              >
                <img
                  src="../static/icons/linkedin.svg"
                  class="social-links"
                  alt="linkdedin-link"
                />
              </a>
            </button>
            <button class="button is-dark mr-1">
              <a href="https://github.com/quelchlax" target="_blank">
                <img
                  src="../static/icons/github.svg"
                  class="social-links"
                  alt="github-link"
                />
              </a>
            </button>
          </div>
        </div>

        <div class="column is-one-third has-text-left">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  components: {
    ContactForm
  }
};
</script>
