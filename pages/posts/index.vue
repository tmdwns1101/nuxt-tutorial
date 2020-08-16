<template>
  <div class="posts-container">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';
import axios from 'axios';
export default {
  components: {
    PostList,
  },

  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    console.log('async Data load');
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return {
      posts: data,
    };
  },
};
</script>

<style scoped>
.posts-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
