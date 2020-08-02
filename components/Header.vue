<template>
  <header class="header">
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users">Users</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/posts">Posts</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #ccc;
}
.header > ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 50%;
}

.header a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: bold;
}

.header a:hover,
.header a:active {
  color: #fff;
}
</style>
