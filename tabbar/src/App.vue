<template>
  <div>

  <keep-alive>
    <router-view/>
  </keep-alive>
    
    <TabBar>
      <TabBarItem link = "/home" text="首页" selectedSrc="tab_home_selected.png" unselectedSrc="tab_home_unselect.png"/>
      <TabBarItem link = "/category" text="分类" selectedSrc="tab_menu_selected.png" unselectedSrc="tab_menu_unselect.png"/>
      <TabBarItem link = "/cart" text="购物车" selectedSrc="tab_cart_selected.png" unselectedSrc="tab_cart_unselect.png"/>
      <TabBarItem link = "/profile" text="我的" selectedSrc="tab_mine_selected.png" unselectedSrc="tab_mine_unselect.png"/>
    </TabBar> 
  </div>
</template>

<script>

import TabBar from './components/tabbar/TabBar.vue'
import TabBarItem from './components/tabbar/TabBarItem.vue'

export default {

  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
  
}
</script>

<style>
    @import "./css/base.css";
</style>
