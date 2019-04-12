<template>
  <div class="home">
    <img alt="Vue logo" src="http://i.dawn.com/large/2015/02/54d4665bd2111.jpg">
<h3>
Sachin Tendulkar
</h3>
    <h3>One that would originate from the Wankhede and echo across the city and the seas. 
    Tendulkar has been the single biggest factor behind the explosion of popularity that 
    cricket enjoys in India which led to the Indian board becoming the richest and most powerful 
    in world cricket.
    </h3>
    <hr>
        <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    //HelloWorld
  }
}
</script>
<style scoped>
.home{}
img {
  height: 400px;
  width: 900px;
}
</style>