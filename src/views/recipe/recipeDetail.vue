<script setup>
import { onBeforeMount, ref, onMounted } from 'vue'
import api from '@/utils/api'
import { useRoute } from 'vue-router'
import subFooter from "@/layout/sub-footer.vue"

const drinkObj = ref({steps: []})
const rating = ref(3.5)
const route = useRoute()
const height = 380

function handleRating(){
    api.post("/rate", {
        drinkId: drinkObj.value._id,
        rate: rating.value
    })
}


onBeforeMount(async () => {
    const res = await api.get(`/drink/${route.params.id}`)
    drinkObj.value = res.data.data
    rating.value = res.data.data.rate
    document.title = res.data.data.name
})
</script>

<template>
    <head>
        <title>{{ drinkObj.name }}</title>
    </head>
    <div id="wrapper" class="container-fluid text-white py-3">
        <div class="container">
            <div class="text-center mb-5">
                <h1 class="title mb-4">{{ drinkObj.name }}</h1>
                <h5 class="px-5 sub_title mb-4">{{ drinkObj.title }}</h5>
            </div>
            <v-lazy
                :options="{'threshold':0.5}"
                transition="fade-transition"
            >
                <v-row class="p-5" align="center">
                    <v-col cols="5">
                        <v-img :src="drinkObj.image" :height="height" :width="height" class="rounded-3 mx-auto reflect-img"/>
                    </v-col>
                    <v-col cols="7" class="d-flex flex-column" :style="{maxHeight: height + 50 + 'px'}">
                        <h2 class="content-title">Some Facts</h2>
                        <h6 class="content-description px-3 overflow-auto scrollbar">{{ drinkObj.content }}</h6>
                    </v-col>
                    <div class="border-bottom w-100 my-3"></div>
                    <v-col cols="12">
                        <h3 class="content-title">Ingredients</h3>
                        <ul class="ingredient-group">
                            <v-row>
                                <v-col class="py-1" v-for="(item) in drinkObj.ingredients" :key="item._id" cols="6">
                                    <li>
                                        {{ item.amount }} {{ item.calUnit }} {{ item.ingredient }}
                                    </li>
                                </v-col>
                            </v-row>
                        </ul>
                    </v-col>
                    <div class="border-bottom w-100 my-3"></div>
                    <v-col cols="12">
                        <h2 class="content-title">Steps</h2>
                        <ol class="step-group">
                            <li class="py-1" v-for="(item) in drinkObj.steps.sort((a, b) => a.index < b.index )" :key="item._id">
                                {{ item.content }}
                            </li>
                        </ol>
                    </v-col>
                    <div class="border-bottom w-100 my-3"></div>
                    <v-col cols="12">
                        <h2 class="content-title">Rate this Recipe</h2>
                        <div class="text-center">
                            <v-rating
                                v-model="rating"
                                length="5"
                                :ripple="false"
                                full-icon="fa-solid fa-star fs-4 text-yellow"
                                empty-icon="fa-thin fa-star fs-4"
                                half-icon="fa-solid fa-star-sharp-half fs-4 text-yellow"
                                hover
                                @click="handleRating"
                                half-increments
                                item-label-position="top"
                                size="50"
                            />
                        </div>
                    </v-col>
                    <v-col cols="12" class="mt-5">
                        <div class="w-75 mx-auto extra p-4 pb-0">
                            <h4 class="content-title text-uppercase">{{ drinkObj.extra?.title }}</h4>
                            <p class="extra-description">{{ drinkObj.extra?.description }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-lazy>
            <subFooter/>
        </div>
    </div>
</template>

<style scoped lang="scss">
#wrapper {
    background: var(--red_to_blue);
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

.content-title{
    text-align: center;
    font-family: "Averia Serif Libre";
    color: var(--yellow);
    letter-spacing: 1px;
    padding-bottom: 16px;
    margin-bottom:0;
}
.content-description, .extra-description{
    font-family: "Averia Serif Libre";
    text-align: center;
    color: var(--smoke);
    line-height: 1.4;
}

.ingredient-group, .step-group{
    padding-left: 16px;
    padding-right: 16px;
    li{
        font-family: "Averia Serif Libre";
        font-size: 1rem;
        font-style: italic;
    }
}

.extra{
    border: 2px dashed #fff;
    border-radius: 6px;

    .extra-description{
        font-size: 1rem;
        line-height: 1.5;
    }
}
</style>

<script>
export default {
    name: 'RecipeDetail',
}
</script>
