import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/tabbar/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

export default router
