<script setup>
import { onBeforeMount, ref } from 'vue'
import imageCarousel from '@/components/carousel/image-carousel.vue'
import textCarousel from '@/components/carousel/text-carousel.vue'
import api from "../utils/api"
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'
import app from '../main.js';

const genreData = ref([])
const flavorData = ref([])
const activeGenreSlide = ref(0)
const activeFlavorSlide = ref(0)
const isNotMatched = ref(false)
const router = useRouter()

function onChange(value, index, type) {
    type === 'genre' ? (activeGenreSlide.value = index) : (activeFlavorSlide.value = index)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 

async function handleClick() {
    const selectGenre = genreData.value[activeGenreSlide.value]
    const selectFlavor = flavorData.value[activeFlavorSlide.value]
    const selectGenreTitle = capitalizeFirstLetter(selectGenre.title)
    const selectFlavorTitle = capitalizeFirstLetter(selectFlavor.title)
    try {
        const res = await api.get("/drink/match", {params: {
            genre_id: selectGenre._id,
            flavor_id: selectFlavor._id
        }})
        const result = res.data.data
        app.config.globalProperties = {
            $playlist: result.playlist,
            $drink: result.drink,
            $genre: result.genre,
            $flavor: selectFlavor
        }
        router.push({ path: `/match/${result.drink._id}`, query: { genreId: selectGenre._id, flavorId: selectFlavor._id} })
    } catch (error) {
        const status = error.response.status
        status === 403
            ? toast("Please login to use this function!", {type: "error"})
            : toast(`There is no combination of ${selectGenreTitle} and ${selectFlavorTitle}`, {type: "warning"})
        
    }
}

onBeforeMount(async () => {
    const res = await Promise.all([
        api.get("/genre"),
        api.get("/flavor")
    ]) 
    genreData.value = res[0].data.data
    flavorData.value = res[1].data.data
})


</script>

<template>
    <div id="wrapper" class="container-fluid text-light d-flex align-items-center main">
        <div class="carousel-container m-auto d-flex align-items-stretch justify-content-center gap-2">
            <imageCarousel :list="genreData" arrow_side="20px" :item_to_show="1" shape="circle"
                :onChange="(value, index) => onChange(value, index + 1, 'genre')" width="30%" height="360" />
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
                :onChange="(value, index) => onChange(value, index + 1, 'flavor')" width="30%" height="360" />
        </div>
    </div>
    <v-dialog v-model="isNotMatched" max-width="540">
          <template>
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
