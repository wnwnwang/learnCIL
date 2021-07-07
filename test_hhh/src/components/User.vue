<template>
  <div class="hello">
    <h2>我是用户界面</h2>
    <div>{{name}}</div>
    <div>{{$route.params.userid}}</div>
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