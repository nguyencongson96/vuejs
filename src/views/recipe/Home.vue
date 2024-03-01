<script setup>
import { onBeforeMount, ref } from 'vue'
import imageCarousel from '@/components/carousel/image-carousel.vue'
import textCarousel from '@/components/carousel/text-carousel.vue'
import genreData from '../../../public/data/genres'
import flavorData from '../../../public/data/flavor'
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
    setTimeout(() => (changeText.value = ''), 300)
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
    <div id="wrapper" class="container-fluid text-center">
        <div class="container">
            <h1 class="title mb-4">Recipes by Flavors</h1>
            <h5 class="px-5 sub_title">Whether sweet, fruity and smoky to bitter, sour, savory and spicy, there's a cocktail recipe to fit the flavors you're looking for. Check out all the options and get mixing to find your new favorite.</h5>
        </div>
    </div>
</template>

<style scoped lang="scss">

#wrapper{
    background: linear-gradient(180deg, #000 0%, #2a0606 20%);
}

.title{
    font-family: Bad Script;
    color: var(--yellow);
    letter-spacing: 3px;
}

.sub_title{
    color: #cec6c6;
    font-style: italic;
    font-family: Averia Serif Libre
}

</style>

<script>
export default {
    name: 'RecipeHome',
}
</script>
