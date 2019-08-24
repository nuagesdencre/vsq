<template>
  <v-app>
      <v-parallax
              dark
              src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row
                align="center"
                justify="center"
        >
          <h1 class="display-2 font-weight-thin mb-4">Vuetify.js</h1>
          <h4 class="subheading">Build your application today!</h4>
        </v-row>
      </v-parallax>
    <Home msg="Veronique Savard"/>
  </v-app>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
