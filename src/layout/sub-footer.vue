<script setup>
    const year = new Date().getFullYear()
</script>

<template>
    <div class="d-flex align-items-center justify-content-between mt-5 pt-5 text-white">
        <div>
            <div class="icon position-relative mb-2">
                <div class="round-1"></div>
                <div class="round-2"></div>
                <div class="round-3"></div>
            </div>
            <h5 class="quote">
                Music-Mixing Site: Pair Your Tunes with Perfect<br />
                Cocktails
            </h5>
            <p class="opacity-75">Steven, {{ year }}.</p>
        </div>
        <div class="d-flex align-items-center gap-3">
            <v-btn
                class="fw-bold"
                size="large"
                rounded="xl"
                variant="tonal"
                color="#000"
                style="background-color: #7bde42"
                >Contact Us</v-btn
            >
            <v-btn class="fw-bold" size="large" rounded="xl" variant="outlined" border="2">Donate Us</v-btn>
        </div>
    </div>
    <div class="my-4 border-bottom w-100 opacity-75"></div>
    <p class="text-light opacity-75 fst-italic">© {{ year }} Creation.</p>
</template>

<style scoped lang="scss">
.icon {
    width: 30px;
    height: 30px;
    & > * {
        width: 20px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
    }
    .round-1 {
        background-color: #87db1c;
        left: 50%;
        top: 0;
        z-index: 2;
    }
    .round-2 {
        left: 30%;
        top: 35%;
        background-color: #5b8829;
        z-index: 1;
    }
    .round-3 {
        left: 70%;
        top: 35%;
        background-color: #495c1d;
    }
}

.quote {
    letter-spacing: 1px;
    line-height: 1.5;
    font-weight: 700;
}
</style>
