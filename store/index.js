import { config } from "@/middleware/config";

export const state = () => ({
  posts: [],
  post: []
});

export const actions = {
  async getPosts({ commit }) {
    const { data } = await this.$axios.get(
      config.link
    );
    commit("SET_POSTS", data);
  },

  async getPost({ commit },  {id} ) {
    const { data } = await this.$axios.get(
      `${config.link}/${id}`
    );
    commit("SET_POST", data);
  }
};

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },

  SET_POST(state, post) {
    state.post = post;
  }
};
