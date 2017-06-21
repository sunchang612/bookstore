import Vue from 'vue'
import Router from 'vue-router'
import Add from  '../components/Add.vue';
import List from '../components/List.vue';
import Detail from '../components/Detail.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/add',
      component: Add
    },
    {
      path:'/list',
      name:List,
      component:List
    },
    {
      path:'/detail/:id',
      component:Detail,
      name:'detail'
    },
    {
      path:'/',
      component:List
    }
  ]
})
