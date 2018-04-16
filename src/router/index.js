import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import(/* webpackChunkName: 'index' */'pages/index')
const Signup = () => import(/* webpackChunkName: 'signup' */'pages/signup')
const Signin = () => import(/* webpackChunkName: 'signin' */'pages/signin')
const Test = () => import(/* webpackChunkName: 'test' */'pages/test')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ],
  mode: 'history'
})
