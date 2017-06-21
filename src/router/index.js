import Vue from 'vue'
import Router from 'vue-router'
import Add from  '../components/Add.vue';
import List from '@/components/List';
import Detail from '@/components/Detail';


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
      name:Detail
    },
    {
      path:'/',
      component:List
    }
  ]
})
