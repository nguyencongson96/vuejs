<script setup>
import { onBeforeMount, ref } from 'vue'
import imageCarousel from '@/components/carousel/image-carousel.vue'
import textCarousel from '@/components/carousel/text-carousel.vue'
import genreData from '../../public/data/genres'
import flavorData from '../../public/data/flavor'
// import api from "../utils/api"
const activeGenreSlide = ref(0)
const activeFlavorSlide = ref(0)
const changeText = ref('')
const listGenre = genreData.list
const listFlavor = flavorData.list

function handleChange(actionType = 'next', type = 'genre') {
    const listType = type === 'genre' ? listGenre : listFlavor
    const refType = type === 'genre' ? activeGenreSlide : activeFlavorSlide
    const currentValue = refType.value
    changeText.value = type
    switch (actionType) {
        case 'previous':
            refType.value = currentValue === 0 ? listType.length - 1 : currentValue - 1
            break

        case 'next':
            refType.value = currentValue === listType.length - 1 ? 0 : currentValue + 1
            break
        default:
            break
    }
}

onBeforeMount(async () => {
    console.log('run')
    // try {
    //     const res = await api.get("/drink");
    //     console.log(res)
    // } catch (error) {
    //     console.log(error)
    // }
})
</script>

<template>
    <div id="wrapper" class="container-fluid text-light d-flex align-items-center">
        <div class="carousel-container d-flex align-items-center justify-content-center gap-2 flex-fill">
            <imageCarousel
                :transition_fade="true"
                :list="listGenre"
                type="genre"
                :activeSlide="activeGenreSlide"
                :handleChange="handleChange"
                arrow_side="20px"
            />
            <div class="text-container d-flex flex-column align-items-center gap-3 position-relative text-center">
                <h2 class="fw-bold">I would like to listen to some</h2>
                <textCarousel :list="listGenre" :activeSlide="activeGenreSlide" keyToShow="genre" />
                <h2 class="fw-bold">and drink something</h2>
                <textCarousel :list="listFlavor" :activeSlide="activeFlavorSlide" keyToShow="genre" />
                <button class="mt-5 btn btn-primary fs-3 rounded-pill fst-italic px-4 py-3">Surprise me !!!</button>
            </div>
            <imageCarousel
                :list="listFlavor"
                type="flavor"
                :activeSlide="activeFlavorSlide"
                :handleChange="handleChange"
                arrow_side="20px"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
#wrapper {
    background: linear-gradient(180deg, #000 0%, #1b0c0c 50%);
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

<style lang="scss">
.carousel-container {
    $carousel_scale: 25vw;
    $arrow-side: 20px;
    height: $carousel_scale;

    #carousel {
        width: $carousel_scale;
    }
}
</style>

<script>
export default {
    name: 'HomePage',
}
</script>
