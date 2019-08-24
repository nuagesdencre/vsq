<template>
    <v-app>
        <v-toolbar
                tabs
                flat
        >
            <div class="flex-grow-1"></div>

                <v-tabs
                        v-model="tabs"
                        background-color="transparent"
                >
                    <v-tab href="#home" to="/">Home</v-tab>
                    <v-tab href="#profile" to="/profile">Profile</v-tab>
                    <v-tab href="#portfolio" to="/portfolio">Portfolio</v-tab>
                    <v-tab href="#contact" to="/contact">Contact</v-tab>
                    <v-tabs-slider color="pink"></v-tabs-slider>
                </v-tabs>
                <v-menu bottom left>
                    <template v-slot:activator="{ on }">
                        <v-btn
                                dark
                                icon
                                v-on="on"
                        >
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item
                                v-for="(item, i) in items"
                                :key="i"
                                @click=""
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

        </v-toolbar>
        <v-parallax
                dark
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-row
                    align="center"
                    justify="center"
            >
                <h1 class="display-2 font-weight-thin mb-4">Veronique</h1>
                <h4 class="subheading">INVENTIVERO</h4>
            </v-row>
        </v-parallax>
        <Home msg="Veronique Savard"/>
        <v-card height="150">
            <v-footer
                    absolute
                    class="font-weight-medium"
            >
                <v-col
                        class="text-center"
                        cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
            </v-footer>
        </v-card>
    </v-app>

</template>

<script>
    import Home from './components/Home.vue'

    export default {
        name: 'app', data: () => ({
            hidden: false,
            tabs: null,
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }),
        components: {
            Home
        }
    }

</script>

<style>
</style>
