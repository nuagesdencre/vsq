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
        <v-card height="150">
            <v-footer absolute class="font-weight-medium">
                <v-col class="text-center" cols="12">
                    {{ new Date().getFullYear() }} — <strong>veronique savard</strong>
                    <v-btn
                            v-bind="options"
                            class="mt-12"> linkedin
                    </v-btn>
                    <v-btn
                            v-bind="options"
                            class="mt-12"> github
                    </v-btn>
                </v-col>
            </v-footer>
        </v-card>
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
    /*template{*/
    /*    margin-bottom:30vh;*/
    /*}*/
</style>
