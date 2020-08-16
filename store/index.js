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
      async nuxtServerInit({ commit }, { error }) {
        try {
          console.log('hello nuxtServerInit');
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
    },
  });
};

export default createStore;
