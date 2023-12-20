<script>
export default {
    name: 'HomePage',
}
</script>

<template>
    <div class="home container-fluid text-light">
        <img src="https://picsum.photos/200/300" class="rounded-circle object-fit-cover" style="width: 30vh; height: 30vh"/>
        <img src="https://picsum.photos/200/300" class="rounded-circle object-fit-cover" style="width: 30vh; height: 30vh"/>
    </div>
</template>

<style scoped lang="scss">
.home{
    min-height: 90vh;
    background: linear-gradient(180deg, #000 0%, #3d131b 80%);
}
</style>
