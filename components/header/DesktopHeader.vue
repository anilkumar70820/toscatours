<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import LogOut from "../common/icons/LogOut.vue";
import Setting from "../common/icons/Setting.vue";
import Message from '../common/icons/Message.vue';
import Notification from '../common/icons/Notification.vue';
import Profile from '../common/icons/Profile.vue';
import DropDown from '../common/icons/DropDown.vue';

const dropdownOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    dropdownOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div
    class="max-w-full py-[19px] lg:px-12 ps-4 pe-6 bg-white flex items-center justify-between"
  >
    <div class="md:block hidden">
      <p class="font-bold text-2xl text-black mb-1">Hi Stéphane</p>
      <p class="font-medium text-base text-silverChalice">
        Lass uns heute den Umsatz überprüfen!
      </p>
    </div>
    <a class="md:hidden" href="#"
      ><img
        class="max-w-[138px]"
        src="/public/assets/images/Logo.png"
        alt="logo"
    /></a>
    <div class="flex items-center">
      <div class="flex items-center sm:gap-4 gap-2">
        <Message />
        <Notification />
      </div>
      <span class="h-10 w-[1px] lg:block hidden bg-gunSmoke ms-4 me-4"></span>
      <div class="relative cursor-pointer" ref="dropdownRef">
        <div class="flex items-center lg:ms-0 ms-4" @click="toggleDropdown">
          <img src="/public/assets/icons/profile-image.svg" alt="profile" />
          <div class="ms-4 me-6 lg:block hidden">
            <p class="font-bold text-base text-black mb-1">Stéphane</p>
            <p class="font-normal text-xsm leading-[12px] mb-0">
              Geschäftsführer
            </p>
          </div>
          <DropDown  :class="{'rotate-180': dropdownOpen}" class="transition-all duration-300 lg:block hidden" />
        </div>
        <div class="w-[254px] p-4 bg-white rounded-3xl absolute right-0 top-20 shadow-lg" v-show="dropdownOpen">
          <a @click="toggleDropdown"
            class="flex items-center px-2 py-3 font-medium text-sm text-black group hover:text-carrotOrange duration-300"
            href="#"
            ><span class="me-2"><Profile /></span>Mein Profile</a
          >
          <a @click="toggleDropdown"
            class="flex items-center px-2 py-3 font-medium text-sm text-black group hover:text-carrotOrange duration-300"
            href="#"
            ><span class="me-2"><Setting /></span>Einstellungen</a
          >
          <a @click="toggleDropdown"
            class="flex items-center px-2 py-3 font-medium text-sm text-black group hover:text-carrotOrange duration-300"
            href="/"
            ><span class="me-2"><LogOut /></span>Logout</a
          >
          <span class="w-full h-[1px] bg-gunSmoke my-2 block"></span>
          <a @click="toggleDropdown"
            class="flex items-center px-2 py-3 font-medium text-sm text-black hover:text-carrotOrange duration-300"
            href="#"
            >Privacy Policy</a
          >
          <a @click="toggleDropdown"
            class="flex items-center px-2 py-3 font-medium text-sm text-black hover:text-carrotOrange duration-300"
            href="#"
            >About</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
