<template>
  <Hero class="is-fullheight">
    <HeroBody>
      <Container>
        <Card class="section">
          <Columns class="is-vcentered">
            <Column class="is-one-third">
              <img
                src="https://cdn1.iconfinder.com/data/icons/data-science-1-1/512/20-512.png"
                alt="avatar"
                class="is-rounded"
                style="width:350px"
              />
            </Column>
            <Column class="is-two-thirds">
              <h1 class="title is-2">Hi I'm Eric</h1>
              <h2 class="subtitle is-4"><strong>Full Stack Javascript Developer</strong></h2>
              <h2 class="subtitle is-5">
                I have a passion for coding and developing: always trying to
                improve, and works very hard. Excellent at problem solving, very
                motivated; I truely love to program.
              </h2>
            </Column>
          </Columns>
        </Card>

        <Card class="mt-4 section">
          <h1 class="title is-4">About Myself</h1>
          <p class="block">
            Hello and thanks for dropping by. My name is Eric Quelch and I have
            been programming for almost 2 years now. I am currently a student at
            Fanshawe College, hoping to finish with top notch grades and
            eventually gain employment.
          </p>
          <p class="block">
            I am very passionate about developing, programming and designing
            various web based applications. I absolutly love what I do. I am
            always trying to learn, and develop new skills. Javascript is my
            primary programming language of choice for the front and back end. I
            also have experience with Java, Python and C# to building small
            games and various tools and applications.
          </p>
        </Card>

        <Card class="mt-4 section">
          <h1 class="title is-2">Skills and Strengths</h1>
          <Skillbar />
        </Card>

        <Card class="mt-2 section">
          <Columns>
            <Column class="is-4 has-text-centered">
              <p class="label">Front End</p>
              <ul class="list">
                <li>HTML</li>
                <li>CSS | SASS</li>
                <li>JavaScript</li>
                <li>Vue.js | Vuex | Nuxt.js</li>
              </ul>
            </Column>
            <Column class="is-3 has-text-centered">
              <p class="label">Databases</p>
              <ul class="list">
                <li>MongoDB</li>
                <li>Firebase | Firestore</li>
                <li>mySQL</li>
                <li>GraphQL</li>
              </ul>
            </Column>
            <Column class="is-2 has-text-centered">
              <p class="label">Server</p>
              <ul class="list">
                <li>Node.js</li>
                <li>Express</li>
                <li>Apollo</li>
                <li>Strapi</li>
              </ul>
            </Column>
            <Column class="is-3 has-text-centered">
              <p class="label">Deployment</p>
              <ul class="list">
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Vercel</li>
                <li>System Design</li>
              </ul>
            </Column>
          </Columns>
        </Card>

        <Card class="mt-4 section">
          <h1 class="title is-4">Work I Have Done</h1>
          <Columns class="is-mutliline">
            <Column class="is-6">
              <Columns class="is-multiline is-vcentered">
                <Column class="is-6">
                  <div class="heading">VSCode</div>
                  <h1 class="title is-4">Perty</h1>
                  <h2 class="subtitle is-5">
                    GitHub inspired dark theme for VSCode.
                  </h2>
                  <div class="has-text-centered">
                    <a
                      href="https://marketplace.visualstudio.com/items?itemName=ericquelch.perty"
                      class="button is-dark"
                      >Perty VSCode Theme</a
                    >
                  </div>
                </Column>
                <Column class="is-6">
                  <img src="../assets/images/pertyui.png" alt="perty" />
                </Column>
              </Columns>
            </Column>

            <Column class="is-6">
              <Columns class="is-multiline">
                <Column class="is-6">
                  <img src="../assets/images/github.png" alt="github" />
                </Column>

                <Column size="is-6">
                  <div class="heading">My GitHub</div>
                  <h1 class="title is-4">
                    Visit my GitHub
                  </h1>
                  <h2 class="subtitle is-5">
                    Check out my GitHub
                  </h2>
                  <div class="has-text-centered">
                    <a
                      href="https://github.com/quelchlax"
                      class="button is-link"
                      >Visit My Github</a
                    >
                  </div>
                </Column>
              </Columns>
            </Column>
          </Columns>
        </Card>
      </Container>
    </HeroBody>
  </Hero>
</template>

<script>
import Container from "~/components/Container.vue";
import Skillbar from "~/components/Skillbar.vue";
import ContactForm from "~/components/ContactForm.vue";
import Column from "~/components/Column.vue";
import Card from "~/components/Card.vue";

export default {
  components: { Container, Skillbar, ContactForm, Column, Card }
};
</script>

<style lang="scss">
.is-rounded {
  border-radius: 50%;
}

.has-curves {
  border-radius: 36px;
}
</style>
