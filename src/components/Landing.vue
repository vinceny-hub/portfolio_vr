<template>
     <nav class="navbar1">
     <h1>{{ msg }}</h1>
      <li class="">
      <router-link to="/" class="navbar-brand">Landing</router-link>
       </li>
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
         <li class="nav-item">
          <router-link to="/tutorials-list" class="nav-link">TutorialsList</router-link>
        </li>
      </div>
    </nav>
</template>

<script>
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
}
 }
</script>