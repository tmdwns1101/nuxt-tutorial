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
          console.log('init');
          if (!process.client) {
            console.log(req.session);
          }
          const { data } = await axios.get(
            'https://fir-test-28057.firebaseio.com/posts.json'
          );
          const postList = [];
          for (const key in data) {
            postList.push({ ...data[key], id: key });
          }
          commit('setPosts', postList);
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
      postById(state) {
        return function (id) {
          console.log('getter', id);
          return state.posts.find((elem) => elem.id === id);
        };
      },
    },
  });
};

export default createStore;
