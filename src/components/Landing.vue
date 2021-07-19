<template>
     <nav class="navbar1">
     <h1>{{ msg }}</h1>
      <li class="">
      <router-link to="/" class="navbar-brand">Landing</router-link>
       </li>
       <li class="">
      <router-link to="/home" class="navbar-brand">Home</router-link>
       </li>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/tutorials-list" class="nav-link">TutorialsList</router-link>
        </li>
      </div>
    </nav>
    <div class="front1" id="id" v-on:click="myFunction()"> 
    <vue-flip active-click="true" horizontal=true>>
  <template v-slot:front>
  <div class="front1">  front</div>
  </template>
  <template v-slot:back>
  <div class="back1"> back</div>
  </template>
</vue-flip>
    </div>
    
</template>

<script>
import VueFlip from 'vue-flip';
export default {
      name: "landing",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
},
 components: {
      'vue-flip': VueFlip
    },
    methods:{
      myFunction() {
        var color = ["#3b609b", "#9b3b3b", "#3b9b81", "#7da5a4"];
       {
  var rand = Math.floor(Math.random() * color.length);
    document.getElementById('id').style.background = color [rand];
}

} }
    
 }
</script>

<style>
.front1{
  width: 100vw;
  height: 5vw;
  background-color: red;
}
.back1{
  width: 100vw;
  height: 5vw;
  background-color: yellow;
}
</style>