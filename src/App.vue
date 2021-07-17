<template>
  <div id="app">
    <div class="container">
    <!-- <nav class="navbar1">
     <h1>{{ msg }}</h1>
       <li class="">
      <router-link to="/home" class="navbar-brand">bezKoder</router-link>
       </li>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav> -->

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>


<style>
html, body {
  margin: 0px !important;
  padding: 0px !important;
  background-color: #DCDCDC;
 }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.navbar1{
  /* width: 100vw;*/
  /* height: 5vw; */
  background-color:#DCDCDC;
  
  grid-column: 1/4;
  grid-row: 1/2;

}
</style>
