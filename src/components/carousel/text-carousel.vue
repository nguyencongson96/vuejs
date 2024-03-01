<script setup>
const { list, activeSlide, keyToShow } = defineProps(['list', 'activeSlide', "keyToShow"])
</script>

<template>
    <div class="text-center h-100">
        <h1
            v-for="(item, index) in list"
            :key="index"
            class="text-change"
            :class="{ active: index === activeSlide }"
        >
            {{ item[keyToShow] }}
        </h1>
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
