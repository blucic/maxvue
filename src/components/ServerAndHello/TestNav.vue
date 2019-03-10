<template>
  <div id="app">
  <v-app id="inspire">
    <v-toolbar>
      <v-toolbar-title>Toolbar Mobile Menu</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn
          v-for="item in menu"
          :key="item.icon"
          :to="item.link"
          flat
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
             </v-list-tile-content>
          </v-list-tile>   
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <h1 class="display-1">Vuetify Mobile Navbar using v-menu</h1>
            <p>Quick example of collapsable mobile menu <tt>&lt;v-toolbar&gt;</tt>, with a <tt>&lt;v-menu&gt;</tt> for mobile screens.</p>
            
            <p>Also shows how to use <tt>.hidden-md-and-up</tt> CSS classes to appropriately hide/show the menu depending upon window width.</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { icon: 'home', title: 'Link A' },
        { icon: 'info', title: 'Link B' },
        { icon: 'warning', title: 'Link C' }
      ]
    }
  },
  
  methods: {
    menuItems () {
      return this.menu
    }
  }
}
</script>


<style scoped>
.v-btn__content {
    align-items: center;
    border-radius: inherit;
    color: inherit;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    white-space: nowrap;
    width: inherit;
}
.draw{
  margin: 0 0 0 0;
}
#app{
  margin:-60px 0 0 0;
}
</style>

