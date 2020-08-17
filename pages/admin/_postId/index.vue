<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';
import axios from 'axios';

export default {
  components: {
    AdminPostForm,
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
    const { postId } = params;

    try {
      const { data } = await axios.get(
        `https://fir-test-28057.firebaseio.com/posts/${postId}.json`
      );

      return {
        loadedPost: data,
      };
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' });
    }
  },
};
</script>

<style></style>
