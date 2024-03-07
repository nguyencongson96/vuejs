<script setup>
import { ref } from 'vue'

const { list, defaultActive, classItem, onChange, hasSearch } = defineProps([
    'list',
    'defaultActive',
    'classItem',
    'onChange',
    'hasSearch',
])
const activeTab = ref(defaultActive || 0)
const activeInput = ref(false)
const inputVal = ref("")

function handleClick(item, index) {
    activeTab.value = index
    typeof onChange === 'function' && onChange({activeTab: item.value, inputVal: inputVal.value})
}

function handleInputChange() {
    typeof onChange === 'function' && onChange({activeTab: list[activeTab.value].value, inputVal: inputVal.value})
}

function handleFocus(isFocus) {
    activeInput.value = (isFocus || inputVal.value)
}
</script>

<template>
    <div class="card-container d-flex align-items-center justify-content-between">
        <div class="tab-container">
            <div
                v-for="(item, index) in list"
                :key="index"
                @click="handleClick(item, index)"
                :class="{ 'active-tab': activeTab === index, [classItem]: true }"
                class="p-3 text-capitalize"
            >
                {{ item.label }}
            </div>
        </div>
        <div v-if="hasSearch" class="search">
            <v-text-field
                v-model="inputVal"
                @update:focused="handleFocus"
                class="input"
                :class="{ expand: activeInput }"
                hide-details
                variant="solo-filled"
                bg-color="transparent"
                density="compact"
                @input="handleInputChange"
            >
                <template v-slot:prepend-inner>
                    <v-icon>
                        <i class="fa-light fa-magnifying-glass fs-6"></i>
                    </v-icon>
                </template>
            </v-text-field>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-container {
    position: relative;

    &:before {
        position: absolute;
        bottom: 0;
        width: 100%;
        content: '';
        border-bottom: 1px solid #fff;
    }

    .input {
        width: 50px;
        transition: width 300ms ease-in-out;
    }
    .expand {
        width: 200px;
    }
}

.tab-container {
    display: flex;
    align-items: center;
    position: relative;

    & > * {
        cursor: pointer;
        transition: all linear 200ms;
        border: 1px solid transparent;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        text-align: center;
    }
}

.active-tab {
    border-color: #fff;
    border-bottom-color: transparent;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
}
</style>
