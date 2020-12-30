<template>
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
  name: 'ContactForm'
};
</script>

<style></style>
