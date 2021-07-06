<template>
  <div class="hello">
    <h2>我是首页</h2>
    <div>{{name}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "tom",
      age: 19
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>