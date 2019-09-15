<template id="profile">
    <v-container grid-list-md fluid>
        <v-col cols="12">
            <v-row
                    :align="alignment"
                    :justify="justify"
                    class="grey lighten-5"
                    style="height: 300px;"
            >
                <v-card v-for="n in 2"
                        :key="n"
                        class="ma-3 pa-6"
                        outlined
                        tile
                >
                    IMAGE
                </v-card>
                <v-card
                        class="ma-3 pa-6"
                        outlined
                        tile
                >
                    <h1>Bio</h1>
                    <p>
                        Veronique Savard is a language enthusiast who naturally turned to programming. She is convinced
                        that coding goes well beyond computers and can impact humans’ lives positively.

                        After completing a Full Stack Software Development bootcamp with Code Institute, Veronique
                        looked for the best environment to work in. Wanting to explore different avenues, she joined a
                        number of empowering tech communities – such as Diversein, Pyladies, Coding Grace, Ladies that
                        UX, Girls in Tech – and learned from insightful, enterprising women already in the industry. She
                        joined Verizon Media in January 2019 as a software engineering intern. As part of the Trust and
                        Verification team, Veronique’s focus is to limit ad fraud and to ensure relevant advertising
                        content is provided to the consumers.

                        Veronique relishes the challenge of the constant learning slope that comes with the
                        ever-evolving programming languages and stacks. One thing she particularly enjoys is sharing the
                        knowledge with budding tech geniuses, the ninjas of CoderDojo, when she volunteers at the
                        Dogpatch Labs chapter. When she is not in front of her screen, she is likely attending a meetup,
                        drafting projects to promote diversity and inclusion, or reaching new heights (literally) on a
                        bouldering wall.
                    </p>
                </v-card>
            </v-row>
        </v-col>

        <v-row>
            <v-col cols="12">
                <v-row
                        :align="alignment"
                        :justify="justify"
                        class="grey lighten-5"
                        style="height: 300px;"
                >
                    <v-card
                            v-for="n in 3"
                            :key="n"
                            class="ma-3 pa-6"
                            outlined
                            tile
                    >
                        Column
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>


</template>
<script>
    export default {
        data() {
            return {
                alignment: 'center',
                dense: false,
                justify: 'space-around',
            }
        },
    }
</script>
<style scoped>
    p {
        margin: 0;
    }
</style>
