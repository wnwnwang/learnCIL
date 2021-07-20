<template>
  <div>
      <h2>首页</h2>

      <button @click="add">增加</button>
 
  </div>
</template>

<script>


import axios from 'axios'
export default {

  name: 'Home',

  created:() =>{
    console.log('homeCreated')

    axios({
      url:"http://123.207.32.32:8000/home/multidata",
      method:'GET'
    }).then(res => {
      console.log(res)
    })

  },


  destroyed:()=>{
    console.log('homeDestroyed')

  },

  methods: {
    add() {
      this.$store.commit('increment')
    },

   



  }

  
}
</script>

<style>
   
</style>
