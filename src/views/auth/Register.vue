<script setup>
    import { ref } from 'vue';
    const showPassword = ref(false)
    const showPasswordCf = ref(false)
    const formData = ref({
      username: '',
      email:"",
      password: '',
      passwordcf: "",
    });

    function changeShowPwd(type){
        if(type === "confirm-pwd") showPasswordCf.value = !showPasswordCf.value
        else showPassword.value = !showPassword.value
    }

    function submit(){
        console.log('Form data submitted:', formData.value);
    }
</script>

<template>
    <div class="bg-black vh-100 position-relative container mx-auto d-flex justify-space-between">
        <div class="circle" style="top: 2%; right: 25%; width: 300px; background: linear-gradient(180deg, #190061 0%, #0A1B30 100%);"></div>
        <div class="circle" style="bottom: 2%; right: 8%; width: 220px; transform: rotate(28.5deg); background: linear-gradient(180deg, #190061 0%, #0A1B30 100%);"></div>
        <div class="header">
            <h1 class="text-light mb-3">Roll the Carpet.!</h1>
            <router-link class="text-light text-decoration-none fst-italic" to="/">Skip the lag ?</router-link>
        </div>
        <form 
            name="login" 
            class="form text-white d-flex flex-column rounded-3 overflow-auto" 
            autocomplete="off"
            @submit.prevent="submit"
        >
            <div>
                <h1 class="fw-bold mb-1 fs-1">Sign up</h1>
                <h5 class="fw-normal fst-italic mb-4 fs-6">Just some details to get you in.!</h5>
            </div>
            <input name="username" v-model="formData.username" class="rounded mb-3" placeholder="Username" required />
            <input name="email" v-model="formData.email" class="rounded mb-3" placeholder="Email/Phone" required />
            <div class="position-relative mb-3">
                <input
                    v-model="formData.password"
                    name="password"
                    class="rounded password w-100" 
                    placeholder="Password" 
                    :type="showPassword ? 'text' : 'password'"
                    minlength="8"
                    maxlength="16"
                    required
                />
                <i 
                    id="pwd"
                    class="fa-solid position-absolute top-50 translate-middle-y" 
                    :class="showPassword ? 'fa-eye-slash': 'fa-eye'" 
                    @click="changeShowPwd('password')" 
                    style="right: 10px; cursor: pointer; font-size: 0.8rem;"
                    :style="`color: ${showPassword ? '#95a5a6' : '#34495e'}`"
                />
            </div>
            <div class="position-relative mb-3">
                <input
                    v-model="formData.passwordcf"
                    name="passwordcf"
                    class="rounded password w-100" 
                    placeholder="Confirm Password" 
                    :type="showPasswordCf ? 'text' : 'password'"
                    minlength="8"
                    maxlength="16"
                    required
                />
                <i 
                    class="fa-solid position-absolute top-50 translate-middle-y"
                    id="confirm-pwd" 
                    :class="showPasswordCf ? 'fa-eye-slash': 'fa-eye'" 
                    @click="changeShowPwd('confirm-pwd')" 
                    style="right: 10px; cursor: pointer; font-size: 0.8rem;"
                    :style="`color: ${showPasswordCf ? '#95a5a6' : '#34495e'}`"
                />
            </div>
        
            <button
                class="button d-block w-100 border-0 rounded-3 text-light fw-bold"
                type="submit"
            >
                Signup
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
        font-size: 18px;
        padding: 8px;
        background-size: 200% auto;
        background-image: linear-gradient(to left, #2E4CEE 0%, #221EBF 26.29%, #040F75 50%, #221EBF 78.29%, #2E4CEE 100%);
        
        &:hover, &:focus-visible {
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            background-position: right center;
        }
    }
</style>

<script>
    export default {
      name: 'RegisterPage'
    }
</script>