<template>
    <div>
        <h4>Server status:{{reverseStatus()}}</h4>
        <h4>Server num:{{servNum}}</h4>
        <button class='btn' @click='changeFn'>Change status</button>
        <hr>
    </div>
    
</template>
<script>
import {eventBus} from '../../main';
export default {
   // props:['status'],
   props:{
      // status:[String, Array], //props can be multiple types
       //status: String,
       status: {
           type:String,
          // required:true, //mora biti string i mora biti uneta vrednost...tj. samo tada ce se koristiti...inace se nece koristiti
          // za primitevne tipove String Boolan Number moze dirktna dodela vredosti ...default: 'no status, ili default: true...itd
           default:'No status'
           /* ako je type Object ili Array...onda mora da se vrati objekat i treba nam funkcija
           type:Object,
           default:function(){
               return {
                   status:'Critical';
               }
           }
           
           */
       },
       changeFn: Function,
       servNum:Number,
   },
    data(){
        return{
           
        }
    },
    methods:{
        reverseStatus(){
            return this.status.split('').reverse().join('');
        },
       /*changeStatus(){
             this.status = 'Critical';
             this.$emit('statusHasChanged', this.status);
        }*/

    },
    created(){
        eventBus.$on('editNum', (payload) =>{
            this.servNum = payload;
        })

    }
    
    
    
    
}
</script>
<style>

</style>


