<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import router from 'vue-router'

export default {
  name: 'App',
  components:{
    Navbar, 
    router,
  }
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap');
@font-face{
  font-family: 'DM-SerifText' ;
  src: url('./assets/fonts/DMSerifText-Regular.ttf');
}
body{
  margin: 0;
}
</style>
