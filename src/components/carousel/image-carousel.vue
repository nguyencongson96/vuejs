<script setup>
const {
    list = [],
    activeSlide,
    handleChange,
    type,
    transition_fade = false,
    arrow_side = "20px"
} = defineProps(['list', 'activeSlide', 'handleChange', 'type', 'transition_fade', 'arrow_side'])
</script>

<template>
    <div id="carousel" class="position-relative" :class="{ 'carousel-fade': transition_fade }">
        <div>
            <div v-for="(item, index) in list" :key="index" class="item p-4" :class="{ active: index === activeSlide }">
                <img :src="item?.image" class="rounded-circle object-fit-cover w-100" alt="image" />
            </div>
        </div>
        <button class="prev" @click="handleChange('previous', type)">
            <i class="fa-solid fa-chevrons-left"></i>
        </button>
        <button class="next" @click="handleChange('next', type)">
            <i class="fa-regular fa-chevrons-right"></i>
        </button>
    </div>
</template>

<style scoped lang="scss">
.item {
    opacity: 0;
    float: left;
    width: 100%;
    margin-right: -100%;
    transition: opacity linear 300ms;
    & > img {
        aspect-ratio: 1/1;
    }
}

button{
    position: absolute;
    top: 50%;
    color: white;
    transform: translateY(-50%);
    font-size: v-bind(arrow_side);
    background-color: transparent;
    border: 0;
    opacity: 1;
    transition: opacity linear 300ms;
    &:hover{
        opacity: 0.6;
    }
}
.prev{
}

.next{
    right: 0%;
}
.active {
    opacity: 1;
}
</style>
