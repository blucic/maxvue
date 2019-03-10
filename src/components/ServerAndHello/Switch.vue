<template>
        <div>

            <div
                id='on'
                @click="switched(true)"
                :class="{active: value}">ON</div>
            <div
                id='off'
                @click="switched(false)"
                :class="{active:!value}">OFF</div>
        </div>
    
</template>
<script>
export default {
    props:['value'],
    data(){
        return {
            
        }
    },
    methods:{
       switched(isOn){
           this.$emit('input', isOn);
           //glavna stvar kod custom controla...v-model salje value u props a dete komponenta emituje input...to se ocekuje u roditelju
       }
        
    }
    
}
</script>
<style scoped>
    #on, #off {
        width:40px;
        height: 20px;
        display:inline-block;
        padding:2px;
        background-color: lightgray;
        margin:10px -2px;
        box-sizing: content-box;
        text-align:center;
        cursor:pointer;
    }
    #on:hover, #on.active{
        background-color: lightgreen;

    }
    #off:hover, #off.active{
        background-color: lightcoral;
    }

</style>


