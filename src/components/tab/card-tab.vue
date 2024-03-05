<script setup>
import { ref } from 'vue';

const { list, defaultActive, classItem, onChange } = defineProps(['list', 'defaultActive', 'classItem', 'onChange']);
const active = ref(defaultActive || 0)

function handleClick(item, index){
    active.value = index
    typeof onChange === "function" && onChange(item, index)
}

</script>

<template>
    <div class="tab-container">
        <div v-for="(item, index) in list" :key="index" @click="handleClick(item, index)" :class="{'active-tab': active === index, [classItem]: true}" class="p-3">
            {{ item.label }}
        </div>
    </div>
</template>

<style scoped lang="scss">
.tab-container{
    display: flex;
    align-items: center;
    position: relative;
    & > *{
        cursor: pointer;
        transition: all linear 200ms;
        border: 1px solid transparent;
        border-bottom-color: #fff;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        text-align: center;
    }
    &:before{
        position: absolute;
        bottom: 0;
        width: 100%;
        content: "";
        border-bottom: 1px solid #fff;
    }
}
.active-tab{
    border-color: #fff;
    border-bottom-color: transparent;
    background-color: #000;
    z-index: 2;
}
</style>
