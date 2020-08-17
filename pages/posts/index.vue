<template>
  <div class="posts-container">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';
import { mapGetters } from 'vuex';
export default {
  components: {
    PostList,
  },
  computed: {
    ...mapGetters(['posts']),
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
