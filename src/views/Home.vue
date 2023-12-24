<script setup>
import { onMounted, ref } from 'vue';
import api from "../utils/api"
    const activeSlide = ref(0);
    const changeText = ref(false)
    const list = [
        {
            genre: "Classical",
            image: "https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/1VhGCAPTtL4McrhW%2Fclassical.jpg?alt=media&token=8e99ea00-e108-4f9d-9e02-edd7179407cb"
        },
        {
            genre: "Electronic",
            image: "https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/7su69sTcafSpgsih%2Felectronic.jpg?alt=media&token=716a8ad3-9234-476f-84b1-d2c0e760fac5"
        },
        {
            genre: "Jazz",
            image: "https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/AwPku3OkTVbrvKeA%2Fjazz.jpg?alt=media&token=63a8def5-8fe0-483f-aa20-8b6c67574345"
        },
        {
            genre: "Hip Hop",
            image: "https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/NJ9QC5f1l0entwOO%2Fhiphop.jpg?alt=media&token=c396e85b-8628-4df6-a678-67674339e8dc"
        },
        {
            genre: "Lounge",
            image: "https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/PQ2uISC3YeAUvTXU%2Flounge.jpg?alt=media&token=c9c6df80-788f-450c-8075-4b607e1e741a"
        },
        {
            genre: "R&B",
            image: "https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/eSGnAvTJOANJDz80%2Fr%26b.jpg?alt=media&token=43cee135-f587-44dd-a501-505b30aeb938"
        },
        {
            genre: "Soul",
            image: "https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/jds0zwE31NtOXcyA%2Fsoul.jpg?alt=media&token=a807ae51-c344-487e-90a9-78aca41028e3"
        }
    ]

    function handleChange(type){
        changeText.value = true;
        setTimeout(()=> changeText.value = false, 300)
        switch (type) {
            case "previous":
                activeSlide.value = activeSlide.value === 0 ? list.length-1 : activeSlide.value-1
                break;

            case "next":
                activeSlide.value = activeSlide.value === list.length-1 ? 0 : activeSlide.value+1
                break;
            default:
                break;
        }
    }

    onMounted(async()=>{
        try {
            const res = await api.get("/drink");
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    })
</script>

<template>
    <div class="home container-fluid text-light d-flex align-items-center">
        <div class="carousel-container d-flex align-items-center justify-content-around flex-fill">
            <div class="carousel slide carousel-fade">
                <div class="carousel-inner p-0">
                    <div v-for="(item, index) in list" :key="index" class="carousel-item d-block p-4" :class="{active: index === activeSlide}">
                        <img :src="item?.image" class="rounded-circle object-fit-cover w-100" alt="image">
                    </div>
                </div>
                <button class="carousel-control-prev w-auto" @click="handleChange('previous')">
                    <i class="fa-solid fa-chevrons-left"></i>
                </button>
                <button class="carousel-control-next w-auto" @click="handleChange('next')">
                    <i class="fa-regular fa-chevrons-right"></i>
                </button>
            </div>
            <div class="text-container d-flex flex-column align-items-center gap-3 position-relative text-center">
                <h2 class="fw-bold">I would like to listen to some</h2>
                <h1 class="text-genre" :class="{activeText: changeText}">
                    {{ list[changeText 
                        ? activeSlide === 0 
                            ? list.length-1 
                            : activeSlide-1 
                        : activeSlide].genre }}
                </h1>
                <h2 class="fw-bold">and drink something</h2>
                <h1 class="fw-light text-decoration-underline fst-italic">Bitter</h1>
                <button class="btn btn-primary border-0 lh-1 fs-2 rounded-pill fw-light fst-italic position-relative">Surprise me !!!</button>
            </div>
            <div class="carousel slide carousel-fade">
                <ul class="carousel-inner p-0">
                    <li v-for="(item, index) in list" :key="index" class="carousel-item d-block p-4" :class="{active: index === activeSlide}">
                        <img :src="item?.image" class="rounded-circle object-fit-cover w-100" alt="image">
                    </li>
                </ul>
                <button class="carousel-control-prev w-auto" @click="activeSlide = activeSlide === 0 ? list.length-1 : activeSlide-1">
                    <i class="fa-solid fa-chevrons-left"></i>
                </button>
                <button class="carousel-control-next w-auto" @click="activeSlide = activeSlide === list.length-1 ? 0 : activeSlide+1">
                    <i class="fa-regular fa-chevrons-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.home{
    min-height: 88vh;
    background: linear-gradient(180deg, #000 0%, #1b0c0c 50%);
}
.carousel-container{
    $carousel_scale: 450px;
    $arrow-side: 20px;
    height: $carousel_scale;
    .carousel{
        width: $carousel_scale;
    }
    button > i{
        font-size: $arrow-side;
        margin: 0 (-$arrow-side);
    }
    .carousel-item >img{
        aspect-ratio: 1/1;
    }
}
.text-container{
    & > *{ margin-bottom: 0 }
    .text-genre {
        font-style: italic;
        font-weight: 300;
        text-decoration: underline;
        opacity: 1;
        transition: 300ms all ease-in-out;
    }
    .activeText{
        opacity: 0;
    }
    .btn{
        background-color: #2D091F;
        top: 5vh;
        letter-spacing: 7.8px;
        padding: 30px 50px;
    }
}
</style>

<script>
export default {
    name: 'HomePage',
}
</script>