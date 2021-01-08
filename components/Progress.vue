<template>
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p class="p-2">
          <strong>{{ skill }}</strong>
          <br />
          <progress
            :class="'progress ' + color"
            :value="amount"
            max="100"
          ></progress>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    skill: {
      type: String,
      required: true
    },
    amount: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true,
      default: 'is-primary'
    }
  }
}
</script>