<template>
  <section class="p-2 m-2">
    <div class="content">
      <div v-for="skill in skills" :key="skill.id">
        <Progress :skill='skill.skill' :amount="skill.amount" :color="skill.color"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {skill: 'Javascript', amount: '85', color: 'is-warning'},
        {skill: 'Vue.js', amount: '85', color: 'is-primary'},
        {skill: 'HTML5/CSS3', amount: '90', color: 'is-danger'},
        {skill: 'Databases', amount: '75', color: 'is-link'},
        {skill: 'Node.js', amount: '80', color: 'is-info'},
      ]
    }
  }
}
</script>