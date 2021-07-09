<template>
    <div class="tab-bar-item" @click="clickItem">
      <img v-if="isActive" :src="require('@/assets/img/tabbar/' + selectedSrc)"/>
      <img v-else :src="require('@/assets/img/tabbar/' + unselectedSrc)"/>
      <div :style="textStyle">{{text}}</div>
    </div>
</template>

<script>


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
      activeColor: {
          type:String,
          default:'red'
      }
  },

  computed: {
      isActive() {
        return this.isCurrentPage();
      },
      
      textStyle() {
          return this.isActive ?{color: this.activeColor} : {color: 'black'}
      }

  },
  methods: {
      clickItem() {
         if(this.isCurrentPage()) {
             return
         }
        this.$router.replace(this.link)
      },

      isCurrentPage() {
          if(this.$route.path.indexOf(this.link) == -1) {
              return false
          } else {
              return true
          }
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


</style>
