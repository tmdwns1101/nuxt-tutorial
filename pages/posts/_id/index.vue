<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ updatedDate }}</div>
        <div class="post-detail">Written by {{ post.author }}</div>
      </div>
      <p>{{ post.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send mail to
        <a href="mailto:tmdwns1101@naver.com">tmdwns1101@naver.com</a>
      </p>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
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
    const { id } = params;
    try {
      const { data } = await axios.get(
        `https://fir-test-28057.firebaseio.com/posts/${id}.json`
      );
      console.log(data);
      return {
        post: data,
      };
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' });
    }
  },
  computed: {
    updatedDate() {
      const date = moment(this.post.updatedDate);

      return date.format('MMMM Do YYYY, h:mm:ss a');
    },
  },
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
