<script setup>
    import { Carousel, Slide, Navigation } from 'vue3-carousel'
    const list =[
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
    ]
</script>

<template>
    <div class="home container-fluid text-light">
        <div class="carousel-container d-flex align-items-center justify-content-around">
            <Carousel :items-to-show="1" wrap-around="true" :autoplay="5000" :transition="500" pause-autoplay-on-hover="true">
                <Slide v-for="slide in list" :key="slide">
                    <img :src="slide" class="carousel__item h-100 w-100 rounded-circle object-fit-cover"/>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
            <Carousel :items-to-show="1" wrap-around="true" :autoplay="5000" :transition="500" pause-autoplay-on-hover="true">
                <Slide v-for="slide in list" :key="slide">
                    <img :src="slide" class="carousel__item h-100 w-100 rounded-circle object-fit-cover"/>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<style scoped lang="scss">
.home{
    min-height: 90vh;
    background: linear-gradient(180deg, #000 0%, #1b0c0c 50%);
}
.carousel-container{
    $carousel_scale: 500px;
    height: $carousel_scale;
    .carousel{
        width: $carousel_scale;
        .carousel__slide{
            transition: all linear 300ms;
            transform: scale(0.5);
            opacity: 0.5;
        }
        .carousel__slide--active{
            transform: scale(1);
            opacity: 1;
        }
        .carousel__item{
            max-width: $carousel_scale;
            max-height: $carousel_scale;
            aspect-ratio: 1/1;
        }
    }
    :deep(.carousel__prev), :deep(.carousel__next) {
        margin: 0 !important;
        color: #fff;
    }
    :deep(.carousel__icon){
        width: 30px;
        height: 30px;
    }
}
</style>

<script>
export default {
    name: 'HomePage',
}
</script>