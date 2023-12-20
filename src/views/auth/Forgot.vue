<script setup>
    import { ref } from 'vue';
    const formData = ref({
      email: '',
    });


    function submit(){
        console.log('Form data submitted:', formData.value);
    }
</script>

<template>
    <div class="bg-black vh-100 position-relative container mx-auto d-flex justify-space-between">
        <div class="circle" style="top: 2%; right: 25%; width: 300px; background: linear-gradient(180deg, #61003A 0%, #2D0A30 100%)"></div>
        <div class="circle" style=" bottom: 2%; right: 8%; width: 220px; transform: rotate(28.5deg); background: linear-gradient(180deg, #61004B 0%, #220A30 100%);"></div>
        <div class="header">
            <h1 class="text-light mb-3">No Worries.!!</h1>
            <router-link class="text-light text-decoration-none fst-italic" to="/auth/login">Take me back.!</router-link>
        </div>
        <form 
            name="login" 
            class="form text-white d-flex flex-column rounded-3 overflow-auto" 
            autocomplete="off"
            @submit.prevent="submit"
        >
            <div>
                <h1 class="fw-bold mb-1 fs-1">Forgot Password ?</h1>
                <h5 class="fw-normal fst-italic mb-4 fs-6">Please enter you’re email</h5>
            </div>
            <input name="email" v-model="formData.email" class="rounded mb-3" placeholder="Email" required />
            
            <button
                class="button d-block w-100 border-0 rounded-3 text-light fw-bold"
                type="submit"
            >
                Reset Password
            </button>
            <div class="register text-center mt-auto">Already Registered? <router-link class="link-white" to="/auth/login"> Login</router-link></div>
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
        width: 65%;
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
        width: 25%;
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
        background-image: linear-gradient(to left, #E948C5 0%, #CD407B 26%, #75042D 50%, #CD407B 75%, #E948C5 100%);
        
        &:hover, &:focus-visible {
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            background-position: right center;
        }
    }
</style>

<script>
    export default {
      name: 'ForgotPage'
    }
</script>