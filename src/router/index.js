// import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import(/* webpackChunkName: 'index' */'pages/index')
const Signup = () => import(/* webpackChunkName: 'signup' */'pages/signup')
const Signin = () => import(/* webpackChunkName: 'signin' */'pages/signin')
const UserInfo = () => import(/* webpackChunkName: 'userinfo' */'pages/user/info')
const UserSecurity = () => import(/* webpackChunkName: 'usersecur' */'pages/user/security')
const Test = () => import(/* webpackChunkName: 'test' */'pages/test')

// Vue.use(Router) 配合服务端渲染返回方法，在main.js中use

export default () => {
  return new Router({
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
        path: '/user/info', // 用户信息页
        name: 'userinfo',
        component: UserInfo
      },
      {
        path: '/user/security', // 用户安全中心页
        name: 'usersecurity',
        component: UserSecurity
      },
      {
        path: '/test',
        name: 'Test',
        component: Test
      }
    ],
    mode: 'history'
  })
}
