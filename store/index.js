import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.posts = posts;
      },
    },
    actions: {
      async nuxtServerInit({ commit }, { error, req }) {
        try {
          if (!process.client) {
            console.log(req.session);
          }
          const { data } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
          );
          commit('setPosts', data);
        } catch (e) {
          error({ statusCode: 404, message: 'Post not found' });
        }
      },
      setPosts(ctx, posts) {
        ctx.commit('setPosts', posts);
      },
    },

    getters: {
      posts(state) {
        return state.posts;
      },
      postById: (state) => (id) => {
        console.log(state.posts.filter((elem) => elem.id === id));
        return state.posts.filter((elem) => elem.id === id)[0];
      },
    },
  });
};

export default createStore;
