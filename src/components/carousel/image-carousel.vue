<script setup>
import { ref } from 'vue'
const {
    list = [],
    arrow_side,
    item_to_show = 3,
    item,
    onChange,
} = defineProps(['list', 'arrow_side', 'item_to_show', 'item', 'onChange'])

const activeSlide = ref(0)

function handleChange(action = 'next') {
    switch (action) {
        case 'previous':
            activeSlide.value = activeSlide.value === 0 ? list.length - 1 : activeSlide.value - 1
            break

        case 'next':
            activeSlide.value = activeSlide.value === list.length - 1 ? 0 : activeSlide.value + 1
            break
        default:
            break
    }
    typeof onChange === 'function' && onChange(list[activeSlide.value], activeSlide.value)
}

function generateItemStyle(index) {
    const isActive = index === activeSlide.value
    const isShowOnlyOne = item_to_show === 1
    const isShow =
        activeSlide.value === 0
            ? index <= item_to_show - 1
            : activeSlide.value <= index + Math.floor(item_to_show / 2) &&
              activeSlide.value >= index - Math.floor(item_to_show / 2)
    const prevSlide = index === activeSlide.value - 1 || (activeSlide.value === 0 && index === list.length - 1)
    const nextSlide = index === activeSlide.value + 1 || (activeSlide.value === list.length - 1 && index === 0)
    return {
        minWidth: 100 / item_to_show + '%',
        transform: `scale(${isActive ? 1 : (nextSlide || prevSlide) ? 0.7 : isShowOnlyOne ? 0.3 : 0.7})`,
        opacity: isShow ? 1 : 0,
    }
}
</script>

<template>
    <div id="carousel" class="position-relative">
        <div class="carousel-wrapper h-100 overflow-hidden">
            <div
                class="carousel-track"
                :style="{
                    transform: `translateX(${-((activeSlide - Math.floor(item_to_show / 2)) * 100) / item_to_show}%)`,
                }"
            >
                <div
                    v-for="(itemList, index) in list"
                    :key="index"
                    class="item"
                    :class="{
                        active: index === activeSlide,
                        prevSlide: index === activeSlide - 1 || (activeSlide === 0 && index === list.length - 1),
                        nextSlide: index === activeSlide + 1 || (activeSlide === list.length - 1 && index === 0),
                        show:
                            activeSlide === 0
                                ? index <= item_to_show - 1
                                : activeSlide <= index + Math.floor(item_to_show / 2) &&
                                  activeSlide >= index - Math.floor(item_to_show / 2),
                    }"
                    :style="generateItemStyle(index)"
                >
                    <div v-if="item">{{ item }}</div>
                    <img v-else :src="itemList?.image" class="rounded-circle object-fit-cover w-100" alt="image" />
                </div>
            </div>
        </div>
        <button class="prev" @click="handleChange('previous')">
            <i
                class="fa-solid fa-chevrons-left"
                :style="{
                    fontSize: arrow_side,
                }"
            ></i>
        </button>
        <button class="next" @click="handleChange('next')">
            <i
                class="fa-regular fa-chevrons-right"
                :style="{
                    fontSize: arrow_side,
                }"
            ></i>
        </button>
    </div>
</template>

<style scoped lang="scss">
.item {
    opacity: 0;
    filter: blur(2px);
    transition: all linear 300ms;
    & > img {
        aspect-ratio: 1/1;
    }
}

.carousel-track {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    transition: transform 0.4s ease-in;
}

.show {
    opacity: 1;
}

.active {
    transform: scale(2);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    filter: blur(0);
    z-index: 2;
    & > img {
        border: 1px solid #cec6c6;
    }
}

button {
    position: absolute;
    top: 50%;
    color: white;
    transform: translateY(-50%);
    font-size: v-bind(arrow_side);
    background-color: transparent;
    border: 0;
    padding: 0 5px;
    opacity: 1;
    z-index: 10;
    transition: opacity linear 300ms;
    &:hover {
        opacity: 0.6;
    }
}
.prev {
    right: 100%;
}

.next {
    left: 100%;
}
</style>
