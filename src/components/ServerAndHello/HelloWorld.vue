<template>
  <div class="container indigo lighten-2">
    <h2>{{msg}}</h2>
    <a href='' class='btn indigo'>
     <router-link class='white-text' :to="{ name:'Forme'}">Forme</router-link>
         </a>
          <a href='' class='btn orange'>
             <router-link class='indigo-text' :to="{ name:'FilterMix'}">FilterMix</router-link>
         </a>
         <a href='' class='btn purple'>
             <router-link class='indigo-text' :to="{ name:'List'}">List</router-link>
         </a>
         <a href='' class='btn purple'>
           <router-link class="indigo-text" :to="{ name:'TestNav'}">Navigacija</router-link>
           </a>
    <p class='center-align'>This is a server<span class='red-text lighten-2'> {{status}}</span></p>
     <p class='center-align'>This is a server num<span class='red-text lighten-2'> {{num}}</span></p>
    <button class='btn' @click='changeServerStatus'>Change status</button>
    <div class=' row '>
      <div class="col l6 white darken-4 black-text">
         <servers-app :status='status' @statusHasChanged = 'status = $event' :changeFn='changeStatus' :servNum='num'></servers-app> <!--:status...binding moze biti i npr :myStatus ali onda moramo
                                                            promeniti vrednost i u dete komponenti props[myStatus]-->
          
         </div>
      <div class="col l6 grey darken-1 orange-text ">
         <remote-app :servNum='num' @editNum = 'num = $event'>
           <h4>Koriscenje Slotova</h4>
         </remote-app>
         </div>
    </div>
  <!--  <servers-app v-for="server in 5" :key='server'></servers-app>-->
  </div>
</template>

<script>
//lokalno importovan komponenta
import Servers from '../ServerAndHello/Servers.vue'
import Remote from '../ServerAndHello/Remote.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello Serves world',
      status: 'Critical',
      num:10
    }
  },
  //lokalno deklarisan komponenta...Hello komponenta je deklarisana u ruteru
  components:{
    'servers-app':Servers,
    'remote-app':Remote,
   
  },
  methods:{
    changeServerStatus(){
      this.status = 'Normal'
    },
    changeStatus(){
      this.status = 'Critical';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
  background-color: aquamarine;
  border: 1px solid grey;
}

h1, h2 {
  font-weight: normal;
}

     .row{
         margin:60px auto;
     }
     .row > div{
         padding:10px;
         background:#ddd;
         border:1px solid #fff;
         line-height: 60px;   
         
     }
</style>
