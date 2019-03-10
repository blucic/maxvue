import Vue from 'vue'
import Router from 'vue-router'
import Veutify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import HelloWorld from '@/components/ServerAndHello/HelloWorld'
import Forme from '@/components/ServerAndHello/Forme'
import FiltersMixins from '@/components/ServerAndHello/FiltersMixins'
import List from '@/components/ServerAndHello/List'
import TestNav from '@/components/ServerAndHello/TestNav'




Vue.use(Router)
Vue.use(Veutify)
//globalno definisan filtar
/*Vue.filter('to-lowercase', value => {
  return value.toLowerCase();
})*/

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/forme',
      name:'Forme',
      component: Forme

    },
    {
      path:'/fixmix',
      name: 'FilterMix',
      component:FiltersMixins,

    },
    {
      path:'/lista',
      name:'List',
      component:List,
    },
    {
      path:'/nav',
      name:'TestNav',
      component:TestNav
    }

  ]
})
