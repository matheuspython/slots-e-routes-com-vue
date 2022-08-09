<template>
  <header>
    <div class="container">
      <h1>você está em <slot></slot></h1>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  padding: 15px 0;
  width: 100%;
  min-height: 45px;
  background: rgb(177, 57, 247);
  color: #fff;
}
</style>
