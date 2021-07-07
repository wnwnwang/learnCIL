<template>
  <div class="hello">

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userid">我的</router-link>
    <router-link :to="{path:'/login',query:{name:'wn',age:18}}">登录</router-link>
    <router-view/>
    
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      name: "tom",
      age: 19,
      userid:'lisi'
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
