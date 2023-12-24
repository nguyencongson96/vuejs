<script>
export default {
    name: 'headerLayout',
}
</script>

<template>
    <div class="header bg-black py-3 container d-flex align-items-stretch gap-2">
        <router-link to="/" class="img-container">
            <img class="object-fit-cover" src="/logo-without-bg.png" alt="logo"/>
        </router-link>
        <nav class="text-light d-flex align-items-center gap-5 ms-auto">
            <router-link class="link-white" to="/auth/register">Recipe</router-link>
            <router-link class="link-white" to="/auth/forgot">Shop</router-link>
            <router-link class="link-white" to="/auth/forgot">About Us</router-link>
            <div>Hi, user</div>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.header {
    max-height: 12vh;
}
.img-container{
    img{
        max-height: 100%;
        max-width: 100%;
        aspect-ratio: 1/1;
    }
}
nav {
    $color: #f0d67c;
    $border-width: 2px;
    $font-size: 1.5rem;
    & > * {
        color: $color !important;
        font-weight: 500;
        font-size: $font-size;
    }
    & > a {
        border-radius: 4px;
        padding: 8px 20px;
        transition: all linear 0.2s;
        position: relative;
        overflow: hidden;
        transform: translateZ(0);
        border: none;
        &:before, &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transition: all 400ms ease-in-out;
            pointer-events: none;
            transform: translateZ(0);
        }

        &:before {
            border-top: $border-width solid transparent;
            border-bottom: $border-width solid transparent;
            transform: skew(-81deg, 0);
        }

        &:after {
            transform: skew(0, 40deg);
            border-left: $border-width solid transparent;
            border-right: $border-width solid transparent;
        }

        &:hover {
            &:before,
            &:after {
                border-color: $color;
                transform: skew(0, 0);
            }
        }
    }
}
</style>
