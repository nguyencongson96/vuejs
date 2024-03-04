<script setup>
import { onBeforeMount, ref } from 'vue'
import imageCarousel from '@/components/carousel/image-carousel.vue'
import recipeData from '../../../public/data/recipes'
import cardTab from '@/components/tab/card-tab.vue'
// import api from "../utils/api"
const list = recipeData.list
const showContentIndex = ref('')

function handleClick(index) {
    showContentIndex.value = index === showContentIndex.value ? '' : index
}

onBeforeMount(async () => {
    console.log('run')
})
</script>

<template>
    <div id="wrapper" class="container-fluid text-center text-white">
        <div class="container">
            <h1 class="title mb-4">Recipes by Flavors</h1>
            <h5 class="px-5 sub_title mb-4">
                Whether sweet, fruity and smoky to bitter, sour, savory and spicy, there's a cocktail recipe to fit the
                flavors you're looking for. Check out all the options and get mixing to find your new favorite.
            </h5>
            <div class="mb-5">
                <imageCarousel :list="list" arrow_side="25px" :item_to_show="3" />
            </div>
            <cardTab :list="list.map(item => item.genre)"/>
            <div class="list">
                <div
                    v-for="(item, index) in list"
                    :key="index"
                    class="rounded overflow-hidden position-relative list-item"
                    @click="handleClick(index)"
                >
                    <img :src="item.image" alt="item" class="object-fit-cover w-100" />
                    <div class="item-title">{{ item.genre }}</div>
                    <div class="item-content p-3" :class="{ 'active-content': index === showContentIndex }">
                        {{ item.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#wrapper {
    background: linear-gradient(180deg, #000 0%, #2a0606 20%);
}

.title {
    font-family: Bad Script;
    color: var(--yellow);
    letter-spacing: 3px;
}

.sub_title {
    color: #cec6c6;
    font-style: italic;
    font-family: Averia Serif Libre;
}

.list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3rem;
    row-gap: 2rem;

    .list-item {
        cursor: pointer;
        &:hover {
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            img{
                transform: rotate(1deg) scale(1.1);
            }
            .item-title {
                color: var(--yellow);
                background-color: rgba(152, 152, 153, 0.7);
            }
        }
        img {
            aspect-ratio: 4/5;
            transition: all linear 300ms;
        }
        .item-title {
            position: absolute;
            bottom: 0;
            width: 100%;
            font-size: 1.25rem;
            padding: 0.5rem 0;
            text-align: center;
            transition: all linear 300ms;
            background-color: transparent;
        }
        .item-content {
            position: absolute;
            bottom: 0;
            opacity: 0;
            height: 0;
            transition: all ease-in-out 300ms;
        }
        .active-content {
            opacity: 1;
            background-color: rgba(152, 152, 153, 0.7);
            height: 100%;
        }
    }
}
</style>

<script>
export default {
    name: 'RecipeHome',
}
</script>
