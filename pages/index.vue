<template>
  <main class="hero is-fullheight">
    <section class="hero-body">
      <Container props="is-fluid --mobile">
        <Container props="section has-text-centered">
          <Columns property="is-vcentered">
            <Column size="is-5">
              <h1 class="title is-2">
                Hi, im Eric
              </h1>

              <figure class="image is-square">
                <img
                  class="is-rounded"
                  src="https://cdn1.iconfinder.com/data/icons/data-science-1-1/512/20-512.png"
                  alt="Description"
                />
              </figure>
            </Column>

            <Column size="is-6 is-offset-1">
              <h2 class="title is-4">
                Full Stack Javascript Developer and Web Development Student at
                Fanshawe College
              </h2>
              <ProgressBar />
            </Column>
          </Columns>
        </Container>

        <Container props="section">
          <h1 class="title is-2">About My Current Stack</h1>
          <Columns property="is-mobile">
            <Column size="is-quarter">
              <h2 class="title is-4">Front End</h2>
              <ul class="list">
                <li>HTML5</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Vue.js</li>
                <li>Vuex</li>
                <li>Nuxt.js</li>
              </ul>
            </Column>

            <Column size="is-quarter">
              <h2 class="title is-4">Databases</h2>
              <ul class="list">
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>MySQL</li>
                <li>GraphQL</li>
                <li>Strapi</li>
                <li>FaunaDB</li>
              </ul>
            </Column>

            <Column size="is-quarter">
              <h2 class="title is-4">Server</h2>
              <ul class="list">
                <li>Node.js</li>
                <li>Express</li>
                <li>Apollo</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>Python</li>
              </ul>
            </Column>

            <Column size="is-quarter">
              <h2 class="title is-4">Deployment</h2>
              <ul class="list">
                <li>System Design</li>
                <li>Netlify</li>
                <li>Heroku</li>
                <li>Vercel</li>
                <li>Firebase</li>
                <li>Azure</li>
              </ul>
            </Column>
          </Columns>
        </Container>

        <Container props="section">
          <Columns property="is-vcentered">
            <Column size="is-quarter post-img">
              <img
                src="../static/images/js.png"
                class="hero-image --rounded"
                alt="javascript-logo"
                width="300px"
                height="300px"
              />
            </Column>

            <Column size="is-three-quarters">
              <div class="heading">Web Development Student</div>
              <h1 class="subtitle">Eric Quelch</h1>
              <h2 class="title post-title">About Me</h2>
              <p>
                Hello and thanks for dropping by. My name is Eric Quelch and I
                have been programming for almost 2 years now. I am currently a
                student at Fanshawe College, hoping to finish with top notch
                grades and eventually gain employment.
              </p>
              <p class="mt-2">
                I am very passionate about developing, programming and designing
                various web based applications. I absolutly love what I do. I am
                always trying to learn, and develop new skills. Javascript is my
                primary programming language of choice for the front and back
                end. I also have experience with Java, Python and C# to building
                small games and various tools and applications.
              </p>
            </Column>
          </Columns>

          <Columns property="is-multiline mt-6">
            <Columns property="is-multiline">
              <Column size="is-6">
                <Columns property="is-multiline">
                  <Column size="is-6 post-img">
                    <img
                      src="../static/images/pertyui.png"
                      alt="perty-ui-theme"
                    />
                  </Column>

                  <Column size="is-6">
                    <h3 class="heading post-category">
                      VSCode
                    </h3>
                    <h1 class="title is-4">
                      Perty: VSCode Theme
                    </h1>
                    <p class="post-excerpt">
                      GitHub inspired dark theme for VSCode.
                    </p>
                    <br />
                    <div class="has-text-centered">
                      <a
                        href="https://marketplace.visualstudio.com/items?itemName=ericquelch.perty"
                        class="button is-dark"
                        >Perty Theme VSCode</a
                      >
                    </div>
                  </Column>
                </Columns>
              </Column>
              <Column size="is-6">
                <Columns property="is-multiline">
                  <Column size="is-6 post-img">
                    <img src="../static/images/github.png" alt="github" />
                  </Column>

                  <Column size="is-6">
                    <div class="heading">Git and GitHub</div>
                    <div class="title is-4">
                      Visit my GitHub
                    </div>
                    <p>
                      Check out some things I have been working on lately.
                    </p>
                    <br />
                    <div class="has-text-centered">
                      <a
                        href="https://github.com/quelchlax"
                        class="button is-github"
                        >Visit My Github</a
                      >
                    </div>
                  </Column>
                </Columns>
              </Column>
            </Columns>
          </Columns>
        </Container>
      </Container>
    </section>
  </main>
</template>
