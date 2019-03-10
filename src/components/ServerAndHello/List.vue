<template>
    <div class="container orange lighten-1">
        <a href="" class='btn'>
            <router-link class='black-text' :to="{name:'HelloWorld'}">HelloWorld</router-link>
        </a>
        <hr>
          <label for="search">Search</label>
        <input id='search' type='text' v-model="chooseFruit"/>
        <ul>
            <li v-for="f in filterFruits" :key='f'>{{f}}</li>
        </ul>

    </div>
</template>
<script>
import {eventBus} from '../../main';
import {fMix} from '../ServerAndHello/fruitMixin'
export default {
    name:'List',
    mixins:[fMix],
    test:{
        type:String,
    },
    data(){
        return{
         
        }
    },
    methods:{
        
    },
    created(){
            console.log('list created')
                eventBus.$on('editFruit', (payload) =>{
                    this.fruits = payload;
                });
  }
}
  
</script>
<style>

</style>


