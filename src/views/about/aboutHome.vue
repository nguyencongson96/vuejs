<script setup>
import subFooter from '@/layout/sub-footer.vue'
const imageSize = 400
</script>

<template>
    <div class="container py-5 d-flex flex-column">
        <v-row align="stretch" class="flex-fill">
            <v-col cols="6">
                <div class="px-5 d-flex flex-column justify-content-center h-100">
                    <h3 class="name">Hello, I'm Son,</h3>
                    <h2 class="position">
                        Front-end <br />
                        Developer
                    </h2>
                    <h3 class="location">based in Vietnam</h3>
                    <div class="d-flex align-items-center gap-4">
                        <v-btn variant="tonal" size="x-large" class="fs-4 fw-bold resume">Resume</v-btn>
                        <i class="fa-regular fa-down-long fs-2"></i>
                    </div>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="px-5 d-flex flex-column justify-content-center align-items-end h-100">
                    <div class="position-relative">
                        <v-img
                            :width="imageSize"
                            :height="imageSize"
                            :max-width="imageSize"
                            :max-height="imageSize"
                            cover
                            lazy-src="/img/default.jpg"
                            src="https://c4.wallpaperflare.com/wallpaper/598/77/84/korean-beautiful-girl-wallpaper-preview.jpg"
                            class="rounded-circle avatar"
                        />
                        <div class="avatar-border"></div>
                        <div class="plus-group">
                            <span>+</span>
                            <span>+</span>
                            <span>+</span>
                        </div>
                        <div class="slash-group">/////</div>
                    </div>
                </div>
            </v-col>
        </v-row>
        <subFooter/>
    </div>
</template>

<style scoped lang="scss">
.container {
    color: var(--yellow);
}

.name {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 16px;
    line-height: 1;
}

.position {
    font-size: 6rem;
    font-weight: 900;
    margin-bottom: 24px;
    line-height: 1;
}

.location {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 32px;
    line-height: 1;
}

.resume {
    position: relative;
    background-color: var(--yellow);
    color: #000;
}

.avatar-border {
    position: absolute;
    top: 12px;
    left: -12px;
    width: 100%;
    height: 100%;
    border: 1px solid var(--yellow);
    opacity: 75%;
    border-radius: 50%;
}

.plus-group{
    position: absolute;
    opacity: 75%;
    top: 0px;
    right: 20px;
    & > *{
        position: absolute;
        font-weight: bold;
        font-size: 3rem;
        &:first-child{
            top: 0;
            right: 0;
        }
        &:nth-child(2){
            top: 20px;
            right: 20px;
        }
        &:last-child{
            top: 40px;
            right: 0;
        }
    }
}

.slash-group{
    opacity: 75%;
    position: absolute;
    bottom: 0;
    left: 10px;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 5px;
}
</style>
