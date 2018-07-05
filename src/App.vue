<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">

* {
  box-sizing: border-box;
}

body {
  background-color: #48E5C2;
  animation: bgfade 60s infinite;
}

@keyframes bgfade {
  0% {background-color: #48E5C2;}
  25% {background-color: #EAF8BF;}
  50% {background-color: #F3D3BD;}
  75% {background-color: #EBBF58;}
  100% {background-color: #48E5C2;}
}
</style>
