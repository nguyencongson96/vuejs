<script>
export default {
    name: 'headerLayout',
}
</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex justify-content-between align-items-center gap-2 py-3">
            <router-link to="/" class="img-container">
                <v-img src="/img/logo-without-bg.png" height="60" width="60" cover alt="logo"/>
            </router-link>
            <nav class="flex-fill">
                <div class="text-light d-flex justify-content-end align-items-center gap-4">
                    <router-link class="link-white" to="/recipe">Recipe</router-link>
                    <router-link class="link-white" to="/match/123">Shop</router-link>
                    <router-link class="link-white" to="/about">About Us</router-link>
                    <div>Hi, User</div>
                </div>
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">

nav > div {
    $border-width: 1px;
    $font-size: 1.25rem;
    & > * {
        color: var(--yellow) !important;
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
            transform: skew(-81deg, 0);
            border-top: $border-width solid transparent;
            border-bottom: $border-width solid transparent;
        }
        
        &:after {
            border-left: $border-width solid transparent;
            border-right: $border-width solid transparent;
            transform: skew(0, 40deg);
        }

        &:hover {
            &:before,
            &:after {
                border-color: var(--yellow);
                transform: skew(0, 0);
            }
        }
    }
}
</style>
