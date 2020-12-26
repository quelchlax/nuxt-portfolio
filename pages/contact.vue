<template>
  <div class="container has-text-centered">
    <div class="columns is-vcentered">
      <div class="column is-two-thirds has-text-left">
        <h1 class="title is-1">Contact Me</h1>
        <p class="is-size-4">
          Have a question? Feel free to contact me here, send me an email at
          quelchlax@gmail.com, or reach out to me on social media.
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
        <form name="contact" class="mt-2" netlify>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input is-primary"
                v-model="name"
                name="name"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input is-primary"
                v-model="email"
                name="email"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>

          <div class="field">
            <label class="label is-lite">Message</label>
            <div class="control">
              <textarea
                v-model="message"
                name="message"
                class="textarea is-success"
                placeholder="Say Hello"
              ></textarea>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button type="submit" class="button is-success">Submit</button>
            </div>
            <div class="control">
              <button @click.prevent="clearForm" class="button is-danger">
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      name: "",
      email: ""
    };
  },
  methods: {
    clearForm() {
      this.message = this.name = this.email = "";
    }
  }
};
</script>

<style>
.social-links {
  height: 32px;
  width: 32px;
  color: white;
}
</style>
