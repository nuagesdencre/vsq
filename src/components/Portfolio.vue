<template id="portfolio">
    <v-card
            class="mx-auto"
            :flat="flat"
            :loading="loading"
            :outlined="outlined"
            :elevation="elevation"
            :raised="raised"
            :width="width"
            :height="height"
    >
        <v-img
                v-if="media"
                class="white--text"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-card-title class="align-end fill-height">I'm a title</v-card-title>
        </v-img>
        <v-card-title v-else>I'm a title</v-card-title>

        <v-card-text>I'm card text</v-card-text>
        <v-card-actions v-if="actions">
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn text>Click</v-btn>
            <v-btn outlined>Click</v-btn>
        </v-card-actions>
    </v-card>
</template>
