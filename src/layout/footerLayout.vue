<script setup>
import { getCurrentInstance, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const appContext = getCurrentInstance().appContext;
const playlistURL = ref("")
const expand = ref(true)

watch(route, ()=>{
    playlistURL.value = appContext.config.globalProperties.$playlist.url
})


</script>

<template>
    <div class="bg-black" v-if="playlistURL">
        <v-btn @click="expand = !expand" variant="plain" size="small" :icon="`fa-regular fa-chevrons-${expand ? 'down' : 'up'} text-white`" :ripple="false" class="button"></v-btn>
        <iframe
            class="frame"
            :class="{hidden: !expand}"
            style="border-radius: 12px"
            :src="playlistURL + '&theme=0'"
            width="100%"
            :height="152"
            frameBorder="0"
            allowfullscreen=""
            autoplay
            allow="autoplay; clipboard-write; encrypted-media"
            loading="lazy"
        ></iframe>
    </div>
    <div v-else></div>
</template>

<style scoped lang="scss">

.frame{
    transition: 300ms all linear
}
.hidden{
    height: 80px;
}

.button{
    opacity: 1 !important;
    color: #fff;
    position: absolute;
    right: 10px;
    z-index: 2;
    background-color: transparent;
    animation: UpAndDown infinite ease-in-out 1500ms both;

    &:hover{
        animation-play-state: paused;
    }
}

@keyframes UpAndDown {
    0%, 100% {
        top: -45px;
    }
    50% {
        top: -35px;
    }
}

</style>
