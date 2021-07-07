<template>
  <div class="hello">
    <h2>关于我们</h2>
    <div>{{name}}</div>
  </div>
</template>

<script>
export default {
  created() {
    document.title="关于"
  },
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