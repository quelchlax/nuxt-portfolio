<template>
  <form name="ask-question" method="post" data-netlify="true" netlify-honeypot='bot-field' class="mt-2">
    <input type="hidden" name="form-name" value="ask-question">
   
    <Field label="name" name='Name'>
      <input type="name" name="name" id="name" v-model="name" placeholder="Name" class="input is-primary">
    </Field>

    <Field label='email' name='Email'>
      <input type="email" name="email" id="email" v-model="email" placeholder="Email" class="input is-primary">
    </Field>

    <Field label='message' name='Message'>
      <textarea name="message" id="message" v-model='message' placeholder="Say Hello" class="textarea is-primary"></textarea>
    </Field>

    <div class="field">
      <div data-netlify-recaptcha="true"></div>
    </div>

    <Field class="is-grouped">
      <div class="control">
        <button type="submit" class="button is-success">Submit</button>
        <button @click.prevent='clearForm' class="button is-danger">Clear</button>
      </div>
    </Field>

  </form>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
    }
  },
  methods: {
    clearForm() {
      this.message = this.name = this.email = '';
    }
  }
}
</script>