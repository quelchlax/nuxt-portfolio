import { config } from "@/plugins/config";

export const state = () => ({
  posts: [],
  // post: []
});

export const actions = {
  async getPosts({ commit }) {
    const { data } = await this.$axios.get(
      config.link
    );
    commit("SET_POSTS", data);
  },

  /* TODO: currently not being used until I figure out how to get markdown content working with marked.js */
  // async getPost({ commit },  {id} ) {
  //   const { data } = await this.$axios.get(
  //     `${config.link}/${id}`
  //   );
  //   commit("SET_POST", data);
  // }
};

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },

  /* TODO: fix marked issue to properly display markdown content */
  // SET_POST(state, post) {
  //   state.post = post;
  // }
};
