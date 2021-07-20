<template>
  <div>
      <h2>分类</h2>

      <div>{{$store.state.counter}}</div>
      <div>{{$store.getters.powerCounter}}</div>
      <div>{{$store.getters.more20stu}}</div>

      <div>---------------------------</div>
      <div>{{$store.getters.moreagestu(32)}}</div>
  </div>
</template>

<script>


export default {

  name: 'Category',

   created:() =>{
    console.log('CategoryCreated')

  },

  destroyed:()=>{
    console.log('CategoryDestroyed')

  }

  
}
</script>

<style>
   
</style>
