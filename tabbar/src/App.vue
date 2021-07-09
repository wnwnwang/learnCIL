<template>
  <div>

  <keep-alive>
    <router-view/>
  </keep-alive>

  <MainTabBar/>
    
    
  </div>
</template>

<script>

import MainTabBar from './components/MainTabBar.vue'

export default {

  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
    @import "./css/base.css";
</style>
