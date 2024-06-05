<script setup lang="ts">
import LogOut from "../common/icons/LogOut.vue";
import Setting from "../common/icons/Setting.vue";
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
        <CommonIconsMessage />
        <CommonIconsNotification />
      </div>
      <span class="h-10 w-[1px] lg:block hidden bg-gunSmoke ms-4 me-4"></span>
      <div class="flex items-center lg:ms-0 ms-4">
        <img src="/public/assets/icons/profile-image.svg" alt="profile" />
        <div class="ms-4 me-6 lg:block hidden">
          <p class="font-bold text-base text-black mb-1">Stéphane</p>
          <p class="font-normal text-xsm leading-[12px] mb-0">
            Geschäftsführer
          </p>
        </div>
        <CommonIconsDropDown class="lg:block hidden" />
      </div>
    </div>
  </div>
  <!-- <div class="max-w-[254px] w-full p-4 bg-white rounded-3xl mt-10">
    <a
      class="flex items-center px-2 py-3 font-medium text-sm text-black group hover:text-carrotOrange duration-300"
      href="#"
      ><span class="me-2"><CommonIconsProfile /></span>Mein Profile</a
    >
    <a
      class="flex items-center px-2 py-3 font-medium text-sm text-black group hover:text-carrotOrange duration-300"
      href="#"
      ><span class="me-2"><Setting /></span>Einstellungen</a
    >
    <a
      class="flex items-center px-2 py-3 font-medium text-sm text-black group hover:text-carrotOrange duration-300"
      href="#"
      ><span class="me-2"><LogOut /></span>Logout</a
    >
    <span class="w-full h-[1px] bg-gunSmoke my-2 block"></span>
    <a
      class="flex items-center px-2 py-3 font-medium text-sm text-black hover:text-carrotOrange duration-300"
      href="#"
      >Privacy Policy</a
    >
    <a
      class="flex items-center px-2 py-3 font-medium text-sm text-black hover:text-carrotOrange duration-300"
      href="#"
      >About</a
    >
  </div> -->
</template>
