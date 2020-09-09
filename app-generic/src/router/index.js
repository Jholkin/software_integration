import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    alias: '/authors',
    name: 'authors',
    component: () => import('../components/AuthorsList.vue')
  },
  {
    path: '/authors/:id',
    name: 'authors-details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Author.vue')
  },
  {
    path: '/add',
    name: 'add',
    components: () => import('../components/AddAuthor.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
