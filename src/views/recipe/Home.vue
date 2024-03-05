<script setup>
import { onBeforeMount, ref } from 'vue'
import imageCarousel from '@/components/carousel/image-carousel.vue'
import recipeData from '../../../public/data/recipes'
import cardTab from '@/components/tab/card-tab.vue'

// import api from "../utils/api"
const list = recipeData.list
const filterList = ref(list)
const detail = ref({})
const cardList = [{ label: 'Tất cả', value: '' }].concat(list.map((item) => ({ label: item.genre, value: item.genre })))
const openModal = ref(false)

function handleClick(item, index) {
    openModal.value = true
    detail.value = item
}

function handleChange(e, index) {
    filterList.value = list.filter((item) => e.value === '' || item.genre === e.value)
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
            <div class="mb-5">
                <cardTab :list="cardList" classItem="fw-bold" :onChange="handleChange" />
            </div>
            <div class="list">
                <div
                    v-for="(item, index) in filterList"
                    :key="index"
                    class="rounded overflow-hidden position-relative list-item"
                >
                    <img :src="item.image" alt="item" class="object-fit-cover w-100" />
                    <div class="item-title">{{ item.genre }}</div>
                    <div class="item-content p-3">
                        <h4 class="content-title mb-1">{{ item.genre }}</h4>
                        <p class="content">{{ item.content }}</p>
                        <button @click="handleClick(item, index)" class="btn-outline-warning btn">Chi tiết</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="surface-variant" text="Open Dialog" variant="flat"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Dialog">
                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
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

            img {
                transform: rotate(1deg) scale(1.1);
            }

            .item-title {
                opacity: 0;
            }

            .item-content {
                opacity: 1;
                background-color: rgba(152, 152, 153, 0.8);
                height: 100%;

                .content-title {
                    color: var(--yellow);
                }
            }
        }

        img {
            aspect-ratio: 4/5;
            transition: all ease-in-out 250ms;
        }

        .item-title {
            position: absolute;
            bottom: 0;
            width: 100%;
            font-size: 1.25rem;
            padding: 0.5rem 0;
            text-align: center;
            transition: all linear 300ms;
            background-color: rgba(152, 152, 153, 0.5);
        }

        .item-content {
            position: absolute;
            bottom: 0;
            opacity: 0;
            height: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            transition: all ease-in-out 300ms;
            overflow: hidden;

            .content {
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 5;
                -webkit-box-orient: vertical;
            }
        }
    }
}
</style>

<script>
export default {
    name: 'RecipeHome',
}
</script>
