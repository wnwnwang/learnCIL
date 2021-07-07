<template>
  <div class="hello">

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      name: "tom",
      age: 19
    }
  },

  methods: {

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .router-link-active {
      color: red;
    }

</style>
