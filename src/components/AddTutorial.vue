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
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>


export default {
  name: "add-tutorial",
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
//   methods: {
//     saveTutorial() {
//       var data = {
//         title: this.tutorial.title,
//         description: this.tutorial.description
//       },

    //   TutorialDataService.create(data)
    //     .then(response => {
    //       this.tutorial.id = response.data.id;
    //       console.log(response.data);
    //       this.submitted = true;
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },
    
//     newTutorial() {
//       this.submitted = false;
//       this.tutorial = {};
//    }
//   }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
