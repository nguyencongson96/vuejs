<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import drinkData from '../../../public/data/drinks'
import genreData from '../../../public/data/genres'
import flavorData from '../../../public/data/flavor'
const route = useRoute()

const drinkObj = drinkData.find((item) => item.id === route.params.id)
const genreObj = genreData.find((item) => item.id === route.query.genreId)
const flavorObj = flavorData.find((item) => item.id === route.query.flavorId)

onMounted(() => {
    console.log(drinkObj, genreObj, flavorObj)
})
</script>

<template>
    <div class="container-fluid py-5">
        <div class="container">
            <div class="text-center">
                <h1 class="title mb-5">Cheers to a Successful Blend of Cocktails and Music!</h1>
            </div>
            <v-row align="center" class="text-white row-container">
                <v-col cols="5">div </v-col>
                <v-col cols="7">
                    <v-card class="text-center fst-italic px-4 py-2 bg-transparent">
                        <v-card-title class="text-uppercase fs-4 mb-3">- {{ genreObj.title }} music -</v-card-title>
                        <v-card-text class="text fs-6">{{ genreObj.summary }}</v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="7">
                    <v-card class="text-center fst-italic px-4 py-2 bg-transparent">
                        <v-card-title class="text-uppercase fs-4 mb-3">- {{ drinkObj.name }} music -</v-card-title>
                        <v-card-text class="text fs-6">{{ drinkObj.content }}</v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="5">
                    <div class="p-5">
                        <v-img class="rounded" cover lazy-src="/img/default.jpg" :src="drinkObj.image" >
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                                </template>
                        </v-img>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-fluid {
    background: var(--red_to_black);
}

.row-container {
    row-gap: 4rem;
    * {
        font-family: Averia Serif Libre;
    }
    .text{
        letter-spacing: 1px;
        line-height: 1.5;
    }
}
.title {
    font-family: Bad Script;
    color: var(--yellow);
    letter-spacing: 3px;
}
</style>
