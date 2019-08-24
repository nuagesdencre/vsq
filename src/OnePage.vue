<template>
    <v-app>
        <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <v-row align="center" justify="center"
            >
                <h1 class="display-2 font-weight-thin mb-4">Veronique</h1>
                <h4 class="subheading">INVENTIVERO</h4>
            </v-row>
        </v-parallax>
        <Home/>
        <Profile/>
        <Portfolio/>
        <Contact/>
    </v-app>

</template>

<script>
    import Home from './components/Home.vue'
    import Profile from './components/Profile.vue';
    import Contact from './components/Contact.vue';
    import Portfolio from './components/Portfolio.vue';

    export default {
        name: 'app',
        components: {
            Home,
            Contact,
            Portfolio,
            Profile
        }
    }

</script>

<style>
</style>
