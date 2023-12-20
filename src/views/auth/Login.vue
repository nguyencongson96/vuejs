<script setup>
    import { ref } from 'vue';
    const showPassword = ref(false)
    const formData = ref({
      username: '',
      password: '',
      rememberMe: false,
    });

    function changeShowPwd(){
        showPassword.value = !showPassword.value
    }

    function changeRemember(){
        formData.value.rememberMe = !formData.value.rememberMe
    }

    function submit(){
        console.log('Form data submitted:', formData.value);
    }
</script>

<template>
    <div class="bg-black vh-100 position-relative container mx-auto d-flex justify-space-between">
        <div class="circle" style="top: 2%; right: 25%; width: 300px; background: linear-gradient(180deg, #530061 0%, #0d0a30 100%)"></div>
        <div class="circle" style=" bottom: 2%; right: 8%; width: 220px; transform: rotate(28.5deg); background: linear-gradient(180deg, #300061 0%, #0a1030 100%);"></div>
        <div class="header">
            <h1 class="text-light mb-3">Welcome Back .!</h1>
            <router-link class="text-light text-decoration-none fst-italic" to="/">Skip the lag ?</router-link>
        </div>
        <form 
            name="login" 
            class="form text-white d-flex flex-column rounded-3 overflow-auto" 
            autocomplete="off"
            @submit.prevent="submit"
        >
            <div>
                <h1 class="fw-bold mb-1 fs-1">Login</h1>
                <h5 class="fw-normal fst-italic mb-4 fs-6">Glad you’re back!</h5>
            </div>
            <input name="username" v-model="formData.username" id="username" class="rounded mb-3" placeholder="Username" required />
            <div class="position-relative">
                <input
                    v-model="formData.password"
                    name="password"
                    id="password" 
                    class="rounded password w-100" 
                    placeholder="Password" 
                    :type="showPassword ? 'text' : 'password'"
                    minlength="8"
                    maxlength="16"
                    required
                />
                <i 
                    class="fa-solid position-absolute top-50 translate-middle-y" 
                    :class="showPassword ? 'fa-eye-slash': 'fa-eye'" 
                    @click="changeShowPwd()" 
                    style="right: 10px; cursor: pointer; font-size: 0.8rem;"
                    :style="`color: ${showPassword ? '#95a5a6' : '#34495e'}`"
                />
            </div>
            
            <div class="mt-2 mb-4 d-flex align-items-center" style="cursor: pointer; width: fit-content" @click="changeRemember">
                <input type="checkbox" class="remember me-1" v-model="formData.rememberMe"/>
                <span>Remember me</span>
            </div>
            
            <button
                class="button d-block w-100 border-0 rounded-3 text-light fw-bold"
                type="submit"
            >
                Log in
            </button>

            <router-link class="link-white text-center my-3" to="forgot"> Forgot password ? </router-link>

            <div class="login text-center mt-auto">Don’t have an account? <router-link class="link-white" to="/auth/register"> Sign up</router-link></div>
        </form>
    </div>
</template>

<style scoped lang="scss">
    .circle {
        position: fixed;
        aspect-ratio: 1/1;
        border-radius: 50% !important;
        clip-path: circle(50% at 50% 50%);
    }
    .header {
        width: 75%;
        margin: auto 0;
        h1 {font-size: 5rem}
        a {
            font-size: 1.5rem;
            border: 2px solid #fff;
            padding: 0.8rem;
        }
    }
    .form {
        position: relative;
        flex: 1;
        min-width: 500px;
        margin: 5% 0;
        padding: 10% 2.5% 2%;
        backdrop-filter: blur(5px);
        border: 2px solid rgba(77, 77, 77, 1);
        box-shadow: -8px 4px 5px 0px rgba(0, 0, 0, 0.24);
        
        input {
            color: #fff;
            background-color: transparent;
            padding: 8px;
            border: 1px solid rgba(189, 195, 199, 0.5);
            transition: all linear 300ms;
            ::placeholder{
                opacity: 0.5;
            }
        }
    }

    .button {
        position: relative;
        transition: 200ms all linear;
        font-size: 18px !important;
        padding: 8px !important;
        background-size: 200% auto;
        background-image: linear-gradient(to left, #628eff 0%, #8740cd 26.29%, #580475 50%, #8740cd 76.29%, #628eff 100%);
        
        &:hover, &:focus-visible {
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            background-position: right center;
        }
    }
</style>

<script>
    export default {
      name: 'LoginPage'
    }
</script>