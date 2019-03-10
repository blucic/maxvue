export const fMix = {
    data(){
        return {
            fruits:['apples', 'oranges', 'mangos', 'pears', 'apricots'],
            chooseFruit:'',


        }
    },
    computed:{
          filterFruits(){
            if(this.chooseFruit != 'undefined' || this.chooseFruit != null || this.chooseFruit != ''){
                return this.fruits.filter(element => {
                    return element.match(this.chooseFruit);
                })

            }
        }
    }



}