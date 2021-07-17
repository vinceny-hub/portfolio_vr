import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/landing",
    name: "landing",
    component: () => import("./components/Landing")
  },
  {
    path: "/home",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/tutorials",
    name: "tutorial-details",
    component: () => import("./components/Tutorial")
  },
  {
    path: "/tutorials-list",
    name: "tutorials-list",
    component: () => import("./components/TutorialsList")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
