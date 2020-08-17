<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';
import { mapGetters } from 'vuex';
export default {
  components: {
    AdminPostForm,
  },
  computed: {
    ...mapGetters(['postById']),
  },
  data() {
    return {
      loadedPost: {
        author: '',
        title: '',
        content: '',
        thumbnailLink: 'https://picsum.photos/200/300',
      },
    };
  },
  created() {
    const { postId } = this.$route.params;
    console.log(postId);
    this.loadedPost = this.postById(postId);
  },
};
</script>

<style></style>
