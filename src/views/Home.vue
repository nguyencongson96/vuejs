<script setup>
    import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
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
        <!-- <img src="https://picsum.photos/200/300" class="rounded-circle object-fit-cover" style="width: 30vh; height: 30vh"/>
        <img src="https://picsum.photos/200/300" class="rounded-circle object-fit-cover" style="width: 30vh; height: 30vh"/> -->
        <Carousel>
            <Slide v-for="slide in list" :key="slide">
                <img :src="slide" class="carousel__item rounded-circle object-fit-cover" style="width: 30vh; height: 30vh"/>
            </Slide>
            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<style scoped lang="scss">
.home{
    min-height: 90vh;
    background: linear-gradient(180deg, #000 0%, #3d131b 80%);
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>

<script>
export default {
    name: 'HomePage',
}
</script>