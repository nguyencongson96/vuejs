<script setup>
import { onBeforeMount, ref, watch } from 'vue'
import imageCarousel from '@/components/carousel/image-carousel.vue'
import drinksData from '../../../public/data/drinks'
import flavorData from '../../../public/data/flavor'
import cardTab from '@/components/tab/card-tab.vue'

const filterList = ref(drinksData)
const loading = ref(false)
const cardList = [{ label: 'All', value: '' }].concat(flavorData.map((item) => ({ label: item.title, value: item.id })))

async function handleChange({ activeTab, inputVal }) {
    loading.value = true
    filterList.value = drinksData.filter(
        (subItem) =>
            (!activeTab ? true : subItem.flavor?.includes(activeTab)) &&
            (!inputVal ? true : subItem.name.toLowerCase()?.includes(inputVal.toLowerCase())),
    )

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
    loading.value = false
}

watch(loading, () => {
    console.log(loading.value)
})

onBeforeMount(async () => {
    console.log('run')
})
</script>

<template>
    <div id="wrapper" class="container-fluid text-white py-3">
        <div class="container">
            <div class="text-center">
                <h1 class="title mb-4">Recipes by Flavors</h1>
                <h5 class="px-5 sub_title mb-4">
                    Whether sweet, fruity and smoky to bitter, sour, savory and spicy, there's a cocktail recipe to fit
                    the flavors you're looking for. Check out all the options and get mixing to find your new favorite.
                </h5>
                <div class="mb-5">
                    <imageCarousel
                        height="350"
                        :list="drinksData"
                        arrow_side="25px"
                        :item_to_show="3"
                        shape="rounded"
                        width="88%"
                        :link="(item) => `/${item.id}`"
                    />
                </div>
            </div>
            <div class="mb-5">
                <cardTab :list="cardList" classItem="fw-bold" :onChange="handleChange" :hasSearch="true" />
            </div>
            <div class="list">
                <div
                    v-for="(item, index) in filterList"
                    :key="index"
                    class="rounded overflow-hidden position-relative list-item"
                >
                    <img :src="item.image" alt="item" class="object-fit-cover w-100" />
                    <div class="item-content">
                        <div class="item-title text-ellipsis mb-4">{{ item.name }}</div>
                        <div>
                            <p class="content fw-light para-ellipsis ellipsis-5">
                                {{ item.content }}
                            </p>
                            <router-link
                                :to="item.id"
                                density="compact"
                                @click="handleClick(item, index)"
                                class="mt-3 text-white text-decoration-none"
                            >
                                <span>Find out more</span>
                                <i class="fa-light fa-arrow-right ms-2"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div v-if="loading" class="loading-container" >
                    <v-progress-circular class="loading" indeterminate></v-progress-circular>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#wrapper {
    background: var(--red_to_black);
}

.loading-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg_blur);
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
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.5rem;
    row-gap: 1.5rem;

    .list-item {
        img {
            aspect-ratio: 4/5;
            transition: all ease-in-out 250ms;
        }

        .item-content {
            position: absolute;
            top: 85%;
            width: 90%;
            margin: 0 5%;
            transition: top 0.4s ease-in-out;

            .item-title {
                font-size: 1.25rem;
                margin: 0;
                transition: inset 0.3s 0.3s ease-in-out;
                text-transform: uppercase;
                font-weight: 600;
            }

            .content,
            a {
                opacity: 0;
            }
        }

        &:hover {
            transition: all 0.5s 0.4s ease-in-out;
            box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;

            img {
                transform: rotate(1deg) scale(1.2);
                filter: brightness(50%);
                transition: all 0.5s 0.3s ease-in-out;
            }

            .item-content {
                top: 35%;
            }

            .content,
            a {
                opacity: 1;
                transition: all 0.5s 0.4s ease-in-out;
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
