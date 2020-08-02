<template>
  <div>
    <h1>This is User Page</h1>
    <input v-model="userId" type="text" />
    <button @click="loadUser">Load User By Id</button>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: 'users',
  data() {
    return {
      userId: '',
    };
  },

  methods: {
    loadUser() {
      this.$router.push('/users/' + this.userId);
    },
  },
};
</script>

<style></style>
