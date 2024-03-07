<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const {
    list = [],
    onChange,
    arrow_side,
    item_to_show = 3,
    width,
    height,
    shape,
    link,
} = defineProps([
    'list',
    'onChange',
    'arrow_side',
    'item_to_show',
    'onChange',
    'width',
    'shape',
    'height',
    'link',
])

const activeIndex = ref(Math.ceil(item_to_show/2) - 1)
const router = useRouter();

const handleChange = (direction) => {
    typeof onChange === 'function' && onChange(list[activeIndex.value], activeIndex.value)
    direction()
}

const handleRouter = (toggle, isSelected, item)=>{
    console.log(link(item))
    isSelected
        ? router.push(link(item))
        : toggle()
}

</script>

<template>
    <v-sheet class="mx-auto bg-transparent" :width="width" :height="height">
        <v-slide-group center-active show-arrows mandatory v-model="activeIndex">
            <template #prev="{ prev }">
                <v-button @click="handleChange(prev)">
                    <i class="fa-solid fa-chevrons-left" :style="{ fontSize: arrow_side }" />
                </v-button>
            </template>
            <template #next="{ next }">
                <v-button @click="handleChange(next)">
                    <i class="fa-regular fa-chevrons-right" :style="{ fontSize: arrow_side }" />
                </v-button>
            </template>
            <v-slide-group-item v-for="(item, index) in list" :key="index" v-slot="{ isSelected, toggle }">
                <v-card
                    @click="handleRouter(toggle, isSelected, item)"
                    :width="width / item_to_show - 16 * (item_to_show + 1)"
                    :height="height"
                    class="slide-item"
                    :class="{ active: isSelected }"
                >
                    <img
                        :src="item?.image"
                        class="object-fit-cover w-100 h-100"
                        :class="{ circle: shape === 'circle' }"
                        alt="image"
                    />
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<style scoped lang="scss">
.slide-item {
    transition: all ease-in-out 300ms;
    margin: 0 16px;
    opacity: 0.5;
    transform: scale(0.7);
    filter: blur(2px);
    background-color: transparent;
    border-radius: 6px;
    position: relative;
}

.circle {
    border-radius: 50%;
    aspect-ratio: 1/1;
}

.active {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
}

.link{
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--yellow);
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid var(--yellow);
    padding: 6px 16px;
    border-radius: 6px;
}

</style>
