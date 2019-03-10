<template>
<div class='container'>
    <a href='' class='btn orange'>
     <router-link class='white-text' :to="{ name:'HelloWorld'}">HelloWorld</router-link>
         </a>
<div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" v-model.lazy.trim='userData.firstName'>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" v-model.lazy.trim='userData.lastName'>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input disabled value="I am not editable" id="disabled" type="text" class="validate">
          <label for="disabled">Disabled</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" v-model.lazy.trim='userData.password'>
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <!--Manual v-model-->
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" 
          :value='userData.email'
          @input='userData.email = $event.target.value'
          >
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          This is an inline input field:
          <div class="input-field inline">
            <input id="email_inline" type="email" class="validate">
            <label for="email_inline">Email</label>
            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div>
      <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea2" class="materialize-textarea" data-length="120" v-model.lazy.trim='userData.message'></textarea>
            <label for="textarea2">Textarea</label>
          </div>
        </div>
          <p>
      <label>
        <input type="checkbox" value='sendMail' v-model='sendMail'/>
        <span>Mail</span>
      </label>
       <label>
        <input type="checkbox" value='sendInfoMail' v-model='sendMail'/>
        <span>InfoMail</span>
      </label>
    </p>
     <p>
      <label>
        <input name="group1" type="radio" value='Male' v-model='gender' />
        <span>Male</span>
      </label>
      <label>
        <input name="group1" type="radio" value='Female' v-model='gender'/>
        <span>Female</span>
      </label>
    </p>
    <label>Browser Select</label>
  <select class="browser-default orange lighten-4 indigo-text" v-model='selectedPriority'> //v-model overriduje :selected property bind...
                                                                                            //....pise se u selected selectoru
    <option value="" disabled selected>Choose your option</option>
    <option v-for='p in priorities' :key='p' 
    :selected="p == 'buy now'">{{p}}</option>
  </select>
  <app-switch v-model='dataSwitch'></app-switch> <!--saljemo u dete komponentu (u props) value...to vraca v-model-->

<!--jedino dugme u formi...zelimo da sami preko vue kontrolisemo submit funkciju...zato ide modifikator prevent (da ne ide odmah na aciton-->

  <div class="btn" @click.prevent='submitted'>Submit</div>
    </form>



  </div>
<div class='row center-align blue lighten-4' v-if='isSubmitted'>
  <p class=''>First name: {{userData.firstName}}</p>
  <p class=''>Last name: {{userData.lastName}}</p>
  <p class=''>Password: {{userData.password}}</p>
  <p class=''>Email name: {{userData.email}}</p>
  <p class='' style='white-space:pre'>message: {{userData.message}}</p>
  <ul>
      <li v-for='mail in sendMail' :key='mail'>{{mail}}</li>

  </ul>
  <p class=''>Gender: {{gender}}</p>
  <p>Selected: {{selectedPriority}}</p>
  <p>Is switched: {{dataSwitch}}</p>
  </div>
  

  

  


    
   
</div> 
</template>
<script>
import Switch from '../ServerAndHello/Switch' 
export default {
    name: 'Forme',
    data(){
        return {
          userData:{
            firstName:'',
            lastName:'',
            email:'',
            message:''
          },
          sendMail:[],
          gender:'',
          selectedPriority:'under consideration',
          priorities:['buy now', 'put in a wish list', 'under consideration'],
          dataSwitch:true,
          isSubmitted:false,

        }
    },
    methods:{
      submitted(){
        this.isSubmitted = true;
      }

    },
    components:{
      appSwitch: Switch,
    }
    
}
</script>
<style>

</style>


