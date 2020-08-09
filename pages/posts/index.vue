<template>
  <div class="posts-container">
    <PostList />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';
export default {
  components: {
    PostList,
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
