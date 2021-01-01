<template>
  <form name="contact" method="POST" netlify-honeypot='bot-field' class="mt-2" data-netlify="true">
    <input type="hidden" name="form-name" value="contact">
    <div class="field">
      <label class="label" for="name">Name</label>
      <div class="control">
        <input
          class="input is-primary"
          v-model="name"
          name="name"
          type="text"
          id="name"
          placeholder="Name"
        />
      </div>
    </div>

    <div class="field">
      <label class="label" for="email">Email</label>
      <div class="control">
        <input
          class="input is-primary"
          v-model="email"
          name="email"
          type="text"
          id="email"
          placeholder="Email"
        />
      </div>
    </div>

    <div class="field">
      <label class="label is-lite" for="message">Message</label>
      <div class="control">
        <textarea
          v-model="message"
          name="message"
          id="message"
          class="textarea is-success"
          placeholder="Say Hello"
        ></textarea>
      </div>
    </div>

    <div class="field">
      <div data-netlify-recaptcha="true"></div>
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
  },
  name: "ContactForm"
};
</script>

