<template>
    <div>
        <h4>Remote num:{{servNum}}</h4>
        <button class='btn' @click='changeServerNum'>Change num</button>
        <hr>
        <slot></slot>
    </div>
    
</template>
<script>
import {eventBus} from '../../main';
export default {
    props:{servNum:Number},

    data(){
        return{
            
        }
    },
    methods:{
        changeServerNum(){
            this.servNum = 30;
            //this.$emit('editNum', this.servNum);
            eventBus.$emit('editNum', this.servNum)
        }

    }
    
}
</script>
<style>

</style>