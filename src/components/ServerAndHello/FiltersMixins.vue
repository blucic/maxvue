<template>
    <div class="container grey lighten-1">
        <h1>Filter and Mixins</h1>
        <a href='' class='btn black'>
            <router-link class='white-text' :to="{name:'HelloWorld'}">Go to HelloWorld</router-link>
        </a>
        <p>{{text | toUppercase | to-lowercase}}</p>
        <hr>
        <button class="btn" @click="show = !show">Animate</button>
        <br>
        <!--raktivno povezivanje fade i slade css koje smo napravili...sve moze da se binduje
            :name, :enter-class-active itd-->
        <form>
        <select class='browser-default orange lighten-4 indigo-text' v-model='alertAnimation'>
            <option   v-for="m in myAnimations" :key='m'>{{m}}</option>
        </select>
        </form>
        <br>
        <div class="row">
            <transition :name='alertAnimation'>
            <div class="col l6 orange indigo-text offset-l3" v-if="show">This is a header</div>
            </transition>
            <br>
            <transition :name='alertAnimation'>
            <div class="col l6 orange indigo-text offset-l3" v-if="show">This is a header</div>
            </transition>
            <br>
            <transition name='slide' type='animation' appear>
            <div class="col l6 orange indigo-text offset-l3" v-if="show">This is a header</div>
            </transition>
            <br>
            <transition  enter-active-class="animated bounce"  leave-active-class="animated shake">
            <div class="col l6 orange indigo-text offset-l3" v-if="show">This is a header</div>
            </transition>
            <br>
            <transition :name='alertAnimation' mode='out-in'> <!-- ili in-out...da bi divovi bili 'jedan ispod drugog'-->
            <div class="col l6 orange indigo-text offset-l3" v-if="show" key='info'>This is a INFO</div>
             <div class="col l6 orange indigo-text offset-l3"  v-if="!show" key='warning'>This is a WARNING</div>
            </transition>
            <br><br><br>
            <button @click='load = !load' class="btn orange lighten-2">Load/Remove</button>
            <br><br>
            <transition
            @before-enter='beforeEnter'
            @enter='enter'
            @after-enter='afterEnter'
            @enter-cancelled='enterCancelled'

            @before-leave='beforeLeave'
            @leave='leave'
            @after-leave='afterLeave'
            @leave-cancelled='leaveCancelled'
            :css='false'
            >
                <!--<div v-if='load' class='col l2 green lighten-2 offset-l5 box'></div>-->
                <div v-if='load' style='width:0px; height:0px;  background-color:lightgreen; margin:auto'>
                    <span style='opacity:0'>Pie jelly-o dessert sesame snaps candy canes gummies candy tootsie roll. Pie marshmallow powder pie pastry. Jelly lollipop muffin powder gummies jujubes toffee lollipop. Gummies powder sweet roll bonbon jelly-o pie.

Cotton candy wafer cheesecake bonbon sesame snaps chupa chups tart jujubes fruitcake. Muffin danish lemon drops chupa chups. Croissant cake marzipan cake muffin chocolate cake chocolate cake toffee apple pie.

Candy canes gummies powder chocolate bar chocolate sweet roll sweet jelly beans soufflé. Biscuit cake wafer cotton candy wafer dragée. Ice cream cheesecake sweet roll. Caramels dragée lemon drops apple pie toffee cheesecake ice cream jujubes sugar plum.

Gummi bears gingerbread danish candy. Sweet lemon drops candy tiramisu cotton candy pie cake chocolate cake. Tart tiramisu bear claw muffin ice cream cheesecake.

Icing ice cream cake liquorice fruitcake. Croissant toffee chocolate cookie caramels icing lemon drops apple pie cheesecake. Donut gummi bears cake dessert tart.</span>
                </div>
                </transition> 
                 <br>
                 <button class="btn" @click='addItem'>Add item</button>
                 
                        <ul class="collection">
                            <transition-group name='slide' mode='out-in'> <!--renderuje se u DOM-u kao span...za razliku od obicnog transitioa
                                                    promena u drugi tag...tag='TAG'-->
                                <li class="collection-item" v-for='(n,i) in numbers' :key='n' @click='remove(i)' style='cursor:pointer;'>{{n}}</li>
                            </transition-group>
                            </ul>



        </div>
        <hr>
        <input type='text' v-model='newFruit' />
        <button class='btn' @click='addFruit(newFruit)'>Add Fruit</button>
        <hr>
        <label for="search">Search</label>
        <input id='search' type='text' v-model="chooseFruit"/>
        <ul>
            <li v-for="f in filterFruits" :key='f'>{{f}}</li>    
        </ul>
        <hr>
        <mix-list></mix-list>
    </div>
</template>
<script>
import {eventBus} from '../../main';
import List from '../ServerAndHello/List'
import {fMix} from '../ServerAndHello/fruitMixin'
export default {
    name:'FilterMix',
    mixins:[fMix],
    data(){
        return{
            text:'Testing the mixins...upper case (localy)...lowercase(globaly)',
            newFruit:'',
            show:false,
            load:true,
            alertAnimation:'fade',
            myAnimations:['fade', 'slide'],
            elWidth:0,
            elHeight:0,
            numbers:[1,2,3,4,5]
           

        }
    },
    filters:{
        toUppercase(value){
           return value.toUpperCase();
        },
    },
    components:{
        'mix-list':List,
    },
    methods:{
        addFruit(value){
            if(value != '')
            this.fruits.push(value);
            console.log(value)
          //  console.log(value)
            eventBus.$emit('editFruit', this.fruits)
            this.newFruit = '';
        },
        beforeEnter(el){
            console.log('beforeEnter');
            el.style.width='0px';
            el.style.height = '0px';
        }, 
        enter(el, done){
            console.log('enter' + el.firstChild);
            el.firstChild.style.opacity = 0;
            let round = 1;
            const interval = setInterval(() => {
                el.style.width = this.elWidth + round * 20 + 'px';
                el.style.height = this.elHeight + round * 10 + 'px';
                round++;
                if(round > 28){
                    el.firstChild.style.opacity = 1;
                }
                if(round > 30){
                    clearInterval(interval);
                    done();
                }


            },20)
            
            
        },
        afterEnter(el){
            console.log('afterEnter')
            
        },
        enterCancelled(el){
            console.log('enterCancelled')
        },
        beforeLeave(el){
            console.log('beforeLeave')
           
            
        },
        leave(el, done){
            console.log('leave');
            el.firstChild.style.opacity = 1;
            let round = 1;
            this.elWidth= 200;
            this.elHeight=200;
            const interval = setInterval(() => {
                el.style.width = this.elWidth - round * 10 + 'px';
                el.style.height = this.elHeight - round * 10 + 'px';
                round++;
                if(round >2){
                    el.firstChild.style.opacity = 0;
                }
                if(round > 30){
                    clearInterval(interval);
                    done();
                }


            },20)
            
          
        },
        afterLeave(el){
            console.log('afterLeave')
        },
        leaveCancelled(el){
            console.log('leaveCancelled')
        },
        remove(index){
            this.numbers.splice(index, 1);
        },
        addItem(){
           const pos = Math.floor(Math.random() * this.numbers.length)
           this.numbers.splice(pos, 0, this.numbers.length + 1)
        }
    }
  
}
</script>
<style scoped>
    .fade-enter{
        opacity:0;
    }
    .fade-enter-active{
        transition: 1s;
    }
    .fade-leave{
        /*opacity:1; ...ovo je default*/
    }
    .fade-leave-active{
        transition: 1s;
        opacity:0;
    }
    .slide-enter{
        /*transform: translateX(20px)...ovo nije potrebno zbog keyframes*/
        opacity:0;
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards; 
        transition:opacity .8s;
    }
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        
        opacity:0;
        position:absolute;
    }
    .slide-leave{
        opacity:0;

    }
    .slide-move{
        /*samo uz transition-group*/
        transition:transform 1s;
    }

    @keyframes slide-in {
        from{
            transform: translateY(20px)
        }
        to{
            transform: translateY(0)
        }
    }
    @keyframes slide-out {
        from{
            transform: translateY(0)
        }
        to{
            transform: translateY(20px)
        }
    }
    .box{
        height:50px;
    }

</style>


