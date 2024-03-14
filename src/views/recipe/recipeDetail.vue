<script setup>
import { onBeforeMount, ref, watch } from 'vue'
import api from '@/utils/api'
import { useRoute } from 'vue-router'
import subFooter from "@/layout/sub-footer.vue"

const loading = ref(false)
const drinkObj = ref({})
const rating = ref(3.5)
const route = useRoute()

watch(loading, () => {
    console.log(loading.value)
})

onBeforeMount(async () => {
    const res = await api.get(`/drink/${route.params.id}`)
    drinkObj.value = res.data.data
    console.log(res.data.data)
})
</script>

<template>
    <div id="wrapper" class="container-fluid text-white py-3">
        <div class="container">
            <div class="text-center mb-5">
                <h1 class="title mb-4">{{ drinkObj.name }}</h1>
                <h5 class="px-5 sub_title mb-4">{{ drinkObj.title }}</h5>
            </div>
            <v-row align="stretch" class="p-5" >
                <v-col cols="6">
                    <div >
                        <v-img :src="drinkObj.image" class="rounded-4" cover/>
                    </div>
                </v-col>
                <v-col cols="6" class="d-flex flex-column">
                    <h3 class="content-title">Some Facts</h3>
                    <h5 class="content-description para-ellipsis ellipsis-15 px-3">{{ drinkObj.content }}</h5>
                </v-col>
                <div class="border-bottom w-100 mt-5 mb-3"></div>
                <v-col cols="12">
                    <h3 class="content-title">Ingredients</h3>
                    <ul class="ingredient-group">
                        <v-row>
                            <v-col class="py-1" v-for="(item) in drinkObj.ingredients" :key="item._id" cols="6">
                                <li>
                                    {{ item.amount }} {{ item.ingredient }} {{ item.calUnit }}
                                </li>
                            </v-col>
                        </v-row>
                    </ul>
                </v-col>
                <div class="border-bottom w-100 mt-5 mb-3"></div>
                <v-col cols="12">
                    <h3 class="content-title">Steps</h3>
                    <ol class="step-group">
                        <li class="py-1" v-for="(item) in drinkObj.steps.sort((a, b) => a.index < b.index )" :key="item._id">
                            {{ item.content }}
                        </li>
                    </ol>
                </v-col>
                <div class="border-bottom w-100 mt-5 mb-3"></div>
                <v-col cols="12">
                    <h3 class="content-title">Rate this Recipe</h3>
                    <div class="text-center">
                        <v-rating
                            v-model="rating"
                            length="5"
                            :ripple="false"
                            full-icon="fa-solid fa-star fs-1 text-yellow"
                            empty-icon="fa-thin fa-star fs-1"
                            half-icon="fa-solid fa-star-sharp-half fs-1 text-yellow"
                            hover
                            half-increments
                            item-label-position="top"
                            size="100"
                        />
                    </div>
                </v-col>
            </v-row>
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
.content-description{
    font-family: "Averia Serif Libre";
    text-align: center;
    color: var(--smoke);
    line-height: 1.5;
}

.ingredient-group, .step-group{
    li{
        font-family: "Averia Serif Libre";
        font-size: 1.25rem;
        font-style: italic;
    }
}

</style>

<script>
export default {
    name: 'RecipeDetail',
}
</script>
