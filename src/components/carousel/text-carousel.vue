<script setup>
const { list, activeSlide, keyToShow } = defineProps(['list', 'activeSlide', "keyToShow"])
</script>

<template>
    <div class="text-center">
        <h2
            v-for="(item, index) in list"
            :key="index"
            class="text-change text-capitalize"
            :class="{ active: index === activeSlide }"
        >
            {{ item[keyToShow] }}
        </h2>
    </div>
</template>

<style scoped lang="scss">
.text-change {
    font-style: italic;
    font-weight: 300;
    text-decoration: underline;
    opacity: 0;
    float: left;
    width: 100%;
    margin-right: -100%;
    transition: opacity linear 300ms;
}

.active {
    opacity: 1;
}
</style>
