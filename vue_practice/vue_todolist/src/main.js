// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'

import page1 from './App'
import page2 from './components/firstComponent'
import page3 from './components/secondComponent'

//开启debug模式
Vue.config.debug=true;

Vue.use(VueRouter);
Vue.use(VueResource);

//创建一个路由实例
//并且配置路由规则
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path:'/first',
      component:page1
    },
    {
      path:'/second',
      component:page2
    },
    {
      path:'/third',
      component:page3
    }
  ]
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

//现在启动应用
//路由器会创建一个App实例，并且挂载到#app匹配的元素上
const app=new Vue({
  router:router,
  render:h=>h(App)
}).$mount('#app')
