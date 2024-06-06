<template>
  <div class="h-screen w-full login_bg_animation overflow-hidden">
    <div class="h-screen overflow-y-auto py-10 flex justify-center items-center w-full">
    <div
      class="sm:max-w-[488px] sm:w-full w-[90%] rounded-3xl bg-white sm:p-16 p-5 text-black"
    >
      <a href="/"><img
        class="max-w-[360px] w-full mb-6"
        src="/public/assets/images/Logo.png"
        alt="logo"
      /></a>
      <p class="font-semibold text-xl text-black mb-6">Schön, dich wiederzusehen</p>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4 relative">
          <label for="email" class="text-xsm leading-[12px] font-normal text-silverChalice mb-2 ms-2">
              Login
          </label>
          <input 
            id="email" 
            v-model="email" 
            class="placeholder:text-mountainMist placeholder:text-base placeholder:font-medium text-jetBlack px-4 py-[11px] rounded-full w-full border border-solid border-lightGrey outline-none bg-gunSmoke mt-2" 
            type="text" 
            placeholder="Email or phone number"
          >
          <span v-if="errors.email" class="text-red-500 text-xs absolute left-0 -bottom-4">{{ errors.email }}</span>
        </div>
        <div class="mb-5 relative">
          <EyeIcon class="absolute top-[55%] right-4 cursor-pointer" @click="togglePasswordVisibility"/>
          <label for="password">
            <span class="text-xsm leading-[12px] font-normal text-silverChalice ms-2">Password</span>
            <input 
              id="password" 
              :type="showPassword ? 'text' : 'password'" 
              v-model="password" 
              class="placeholder:text-mountainMist placeholder:text-base placeholder:font-medium text-jetBlack ps-4 pe-12 py-[11px] rounded-full w-full border border-solid border-lightGrey outline-none bg-gunSmoke mt-2" 
              type="password" 
              placeholder="Enter password"
            >
          </label>
          <span v-if="errors.password" class="text-red-500 text-xs absolute -bottom-4 left-0">{{ errors.password }}</span>
        </div>
        <div class="flex items-center justify-between mb-6">
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer">
            <div class="relative w-11 h-6 bg-gunSmoke border border-solid border-lightGrey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.4px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-carrotOrange"></div>
            <span class="ms-2 text-sm font-medium text-jetBlack">Remember me</span>
          </label>
          <a class="font-normal text-xs text-carrotOrange" href="#">Forgot password?</a>
        </div>
        <button 
          class="w-full hover:bg-carrotOrange hover:text-white duration-300 transition-all text-silverChalice text-xl font-medium bg-lightGrey py-[9px] px-3 rounded-full"
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import EyeIcon from '../common/icons/EyeIcon.vue';

const email = ref('');
const password = ref('');
const errors = ref({ email: '', password: '' });
const showPassword = ref(false);
const router = useRouter();

function validateEmail() {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
  return re.test(email.value);
}

function validatePassword() {
  return password.value.length >= 6;
}

function validateForm() {
  let valid = true;
  if (!validateEmail()) {
    errors.value.email = 'Invalid email address';
    valid = false;
  } else {
    errors.value.email = '';
  }

  if (!validatePassword()) {
    errors.value.password = 'Password must be at least 6 characters';
    valid = false;
  } else {
    errors.value.password = '';
  }

  return valid;
}

function handleSubmit() {
  if (validateForm()) {
    console.log({ email: email.value, password: password.value });

    // Clear input fields
    email.value = '';
    password.value = '';

    // Redirect to dashboard page
    router.push('/dashboard');
  }
}
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}
</script>

