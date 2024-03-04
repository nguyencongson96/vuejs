<script setup>
import { ref } from 'vue';

const { list, defaultActive } = defineProps(['list', 'defaultActive']);
const active = ref(defaultActive || 0)

function handleClick(item, index){
    active.value = index
}

</script>

<template>
    <div class="tab-container">
        <div v-for="(item, index) in list" :key="index" @click="handleClick(item, index)" :class="{'active-tab': active === index}" class="p-3">
            {{ item }}
        </div>
    </div>
</template>

<style scoped lang="scss">
.tab-container{
    display: flex;
    align-items: center;
}
    .active-tab{
        background-color: #000;
    }
</style>
