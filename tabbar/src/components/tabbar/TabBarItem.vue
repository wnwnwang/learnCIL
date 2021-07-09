<template>
    <div class="tab-bar-item" @click="clickItem">
      <img v-if="isActive" :src="require('@/assets/img/tabbar/' + selectedSrc)"/>
      <img v-else :src="require('@/assets/img/tabbar/' + unselectedSrc)"/>
      <div class="selected-text" v-if="isActive">{{text}}</div>
      <div class="unselected-text" v-else>{{text}}</div>
    </div>
</template>

<script>

import TabBarManager from './TabBarManager'


export default {
  name: 'TabBarItem',
  props:{
      link:{
          type:String,
          default:''
      },
      selectedSrc:String,
      unselectedSrc:String,
      text:String,
      firstShow: {
          type: Boolean,
          default: false
      }
  },

  data() {
      return {
          isActive: false,
          listener: (link) => {
              if(this.link == link) {
                  this.isActive = true
              } else {
                  this.isActive = false
              }
          }
      }
  },


  
  created: function() {
      console.log('created link = ' + this.link)
      let mgr = TabBarManager.getInstance()
      mgr.registerListener(this.listener)
      if(this.firstShow) {
          mgr.setCurrentLink(this.link)
      }
  },

  destroyed: function() {
      console.log('destroyed link = ' + this.link)
      TabBarManager.getInstance().unregisterListener(this.listener)
  },
  methods: {
      clickItem() {
          let mgr = TabBarManager.getInstance()
          if(mgr.currentLink == this.link) {
              return
          }
         mgr.setCurrentLink(this.link)
         this.$router.replace(this.link)
      }
  }
}
</script>

<style scoped>
    .tab-bar-item {
      display: flex;
      flex-direction: column;
      flex:1; 
      align-items: center;
      height: 49px;
    }

    .tab-bar-item img {
        width: 24px;
        height: 24px;
    }

    .selected-text {
        color: red;
    }

    .unselected-text {
        color: black;
    }


</style>
