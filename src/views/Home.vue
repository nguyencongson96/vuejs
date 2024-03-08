<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import imageCarousel from '@/components/carousel/image-carousel.vue'
import textCarousel from '@/components/carousel/text-carousel.vue'
import genreData from '../../public/data/genres'
import flavorData from '../../public/data/flavor'
import drinkData from '../../public/data/drinks'
// import api from "../utils/api"

const router = useRouter()
const activeGenreSlide = ref(0)
const activeFlavorSlide = ref(0)
const isNotMatched = ref(false)

function onChange(value, index, type) {
    type === 'genre' ? (activeGenreSlide.value = index) : (activeFlavorSlide.value = index)
}

function handleClick() {
    const genreId = genreData[activeGenreSlide.value].id
    const flavorId = flavorData[activeFlavorSlide.value].id
    const matchDrinkId = drinkData.find((item) => item.genre.includes(genreId) && item.flavor.includes(flavorId))?.id

    matchDrinkId
        ? router.push({ path: `/match/${matchDrinkId}`, query: { genreId, flavorId } })
        : isNotMatched.value = true
}

onBeforeMount(async () => {
    console.log('run')
})
</script>

<template>
    <div id="wrapper" class="container-fluid text-light d-flex align-items-center main">
        <div class="carousel-container m-auto d-flex align-items-stretch justify-content-center gap-2">
            <imageCarousel :list="genreData" arrow_side="20px" :item_to_show="1" shape="circle"
                :onChange="(value, index) => onChange(value, index, 'genre')" width="30%" height="360" />
            <div class="text-container d-flex flex-column align-items-center gap-3 position-relative text-center">
                <h2 class="fw-bold">I would like to listen to some</h2>
                <div class="mb-4">
                    <textCarousel :list="genreData" :activeSlide="activeGenreSlide" keyToShow="title" />
                </div>
                <h2 class="fw-bold">and drink something</h2>
                <div class="mb-4">
                    <textCarousel :list="flavorData" :activeSlide="activeFlavorSlide" keyToShow="title" />
                </div>
                <button :ref="isNotMatched" class="mt-3 btn btn-primary fs-3 rounded-pill fst-italic px-4 py-3" @click="handleClick">
                    Surprise me !!!
                </button>
            </div>
            <imageCarousel :list="flavorData" arrow_side="20px" :item_to_show="1" shape="circle"
                :onChange="(value, index) => onChange(value, index, 'flavor')" width="30%" height="360" />
        </div>
    </div>
    <v-dialog v-model="isNotMatched" max-width="540">
          <template v-slot:default="{ isActive }">
            <v-card>
                <v-card-title class="d-flex align-items-center gap-3 text-danger fw-bold">
                    <i class="fa-solid fa-exclamation fs-5"></i>
                    <span class="fs-5">Notification</span>
                </v-card-title>
                <v-card-text>
                    Your combination is unavailable. Please try other combo.
                </v-card-text>
            </v-card>
          </template>
        </v-dialog>
</template>

<style scoped lang="scss">
#wrapper {
    background: linear-gradient(180deg, #000 0%, #1b0c0c 50%);
}

.carousel-container {
    max-width: 90vw;
}

.text-container {
    .btn {
        background-color: #2d091f;
        letter-spacing: 2.8px;
        transition: all linear 300ms;
        border-color: transparent;

        &:hover {
            border-color: rgba(236, 240, 241, 0.5);
            box-shadow: rgba(236, 240, 241, 0.15) 0px 5px 15px;
            animation: shake 1s ease-in-out both;
            perspective: 1000px;
        }
    }

    @keyframes shake {

        10%,
        90% {
            transform: translateX(-1px);
        }

        20%,
        80% {
            transform: translateX(2px);
        }

        30%,
        50%,
        70% {
            transform: translateX(-4px);
        }

        40%,
        60% {
            transform: translateX(4px);
        }
    }
}
</style>

<script>
export default {
    name: 'HomePage',
}
</script>
