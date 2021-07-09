<template>
    <TabBar>
      <TabBarItem link = "/home" text="首页" selectedSrc="tab_home_selected.png" unselectedSrc="tab_home_unselect.png" activeColor="#aa33bb"/>
      <TabBarItem link = "/category" text="分类" selectedSrc="tab_menu_selected.png" unselectedSrc="tab_menu_unselect.png" activeColor="#aa33bb"/>
      <TabBarItem link = "/cart" text="购物车" selectedSrc="tab_cart_selected.png" unselectedSrc="tab_cart_unselect.png" activeColor="#aa33bb"/>
      <TabBarItem link = "/profile" text="我的" selectedSrc="tab_mine_selected.png" unselectedSrc="tab_mine_unselect.png" activeColor="#aa33bb"/>
    </TabBar> 
</template>

<script>

import TabBar from './tabbar/TabBar.vue'
import TabBarItem from './tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
