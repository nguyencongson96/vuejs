<script>
export default {
    name: 'headerLayout',
}
</script>

<template>
    <div class="header bg-black container py-4 d-flex align-items-center gap-2">
        <i class="fa-brands fa-drupal text-light fs-1"></i>
        <nav class="text-light d-flex align-items-center gap-3 ms-auto">
            <router-link class="link-white" to="/auth/login">Home</router-link>
            <router-link class="link-white" to="/auth/register">Recipe</router-link>
            <router-link class="link-white" to="/auth/forgot">Shop</router-link>
            <router-link class="link-white" to="/auth/forgot">About Us</router-link>
            <div>Hi, user</div>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.header {
    max-height: 10vh;
}
nav {
    $color: #f0d67c;
    $border-width: 2px;
    & > * {
        color: $color !important;
        font-weight: 500;
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
            transition: all 500ms ease-in-out;
            pointer-events: none;
            transform: translateZ(0);
        }

        &:before {
            border-top: $border-width solid transparent;
            border-bottom: $border-width solid transparent;
            transform: skew(-81deg, 0);
        }

        &:after {;
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
