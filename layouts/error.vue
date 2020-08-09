<template>
  <div class="error-container">
    <h1>Oops!, Page Not Found!! Sorry!</h1>
    <p>Bact to <a href="/">home</a></p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error-container a {
  text-decoration: none;
  color: red;
}
</style>
