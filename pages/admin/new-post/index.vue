<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmit" />
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
  methods: {
    async onSubmit(postData) {
      try {
        postData = { ...postData, updatedDate: new Date() };
        console.log(postData);
        const result = await axios.post(
          'https://fir-test-28057.firebaseio.com/posts.json',
          postData
        );
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
