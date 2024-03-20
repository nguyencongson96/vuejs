<script setup>
import subFooter from '@/layout/sub-footer.vue';
import { onMounted } from 'vue';
import app from '../../main.js';
import { useRouter } from 'vue-router';

const width = 380
const router = useRouter()
const {$drink, $genre} = app.config.globalProperties

onMounted(() => {
    !$drink?._id && router.push("/404")
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
                        class="rounded reflect-img"
                        cover
                        lazy-src="/img/default.jpg"
                        :src="$genre.image"
                        :width="width"
                        :height="width"
                        :max-width="width"
                    />
                </v-col>
                <v-col cols="7">
                    <v-card class="text-center fst-italic px-4 py-2 bg-transparent">
                        <v-card-title class="text-uppercase fs-3 mb-4">- {{ $genre.title }} music -</v-card-title>
                        <v-card-text class="text para-ellipsis ellipsis-7">{{ $genre.summary }}</v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="7">
                    <v-card class="text-center fst-italic px-4 py-2 bg-transparent">
                        <v-card-title class="text-uppercase fs-3 mb-4">- {{ $drink.name }} -</v-card-title>
                        <p class="text para-ellipsis ellipsis-7">{{ $drink.summary }}</p>
                    </v-card>
                </v-col>
                <v-col cols="5">
                    <div class="p-5">
                        <v-img
                            class="rounded reflect-img"
                            cover
                            lazy-src="/img/default.jpg"
                            :src="$drink.image"
                            :width="width"
                            :height="width"
                            :max-width="width"
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
