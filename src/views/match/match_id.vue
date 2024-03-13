<script setup>
import subFooter from '@/layout/sub-footer.vue';
import { onMounted } from 'vue';
import drinkData from '../../../public/data/drinks';
import genreData from '../../../public/data/genres';
import flavorData from '../../../public/data/flavor';
import app from '../../main.js';

const drinkObj = drinkData[0]
const genreObj = genreData[0]
const flavorObj = flavorData[0]
const width = 400

onMounted(() => {
    console.log(drinkObj, genreObj, flavorObj, app.config.globalProperties.spotifyURI)
})
</script>

<template>
    <div class="container-fluid py-5 text-white">
        <div class="container">
            <div class="text-center">
                <h1 class="title mb-5">Cheers to a Successful Blend of Cocktails and Music!</h1>
            </div>
            <v-row align="center" class="text-white row-container">
                <v-col cols="5" class="d-flex align-items-center justify-content-center">
                    <v-img
                        class="rounded"
                        cover
                        lazy-src="/img/default.jpg"
                        :src="genreObj.image"
                        :width="width"
                        :height="width"
                        :style="{ maxWidth: width + 'px' }"
                    />
                </v-col>
                <v-col cols="7">
                    <v-card class="text-center fst-italic px-4 py-2 bg-transparent">
                        <v-card-title class="text-uppercase fs-3 mb-4">- {{ genreObj.title }} music -</v-card-title>
                        <v-card-text class="text para-ellipsis ellipsis-7">{{ genreObj.summary }}</v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="7">
                    <v-card class="text-center fst-italic px-4 py-2 bg-transparent">
                        <v-card-title class="text-uppercase fs-3 mb-4">- {{ drinkObj.name }} music -</v-card-title>
                        <p class="text para-ellipsis ellipsis-7">{{ drinkObj.content }}</p>
                    </v-card>
                </v-col>
                <v-col cols="5">
                    <div class="p-5">
                        <v-img
                            class="rounded"
                            cover
                            lazy-src="/img/default.jpg"
                            :src="drinkObj.image"
                            :width="width"
                            :height="width"
                            :style="{ maxWidth: width + 'px' }"
                        />
                    </div>
                </v-col>
            </v-row>
            <subFooter/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-fluid {
    background: var(--red_to_blue);
}

.row-container {
    row-gap: 4rem;

    .text {
        font-size: 1rem;
        font-family: 'Josefin Slab';
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
