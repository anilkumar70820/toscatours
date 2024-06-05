<template>
  <div class="min-h-screen w-full flex justify-center items-center py-5 login_bg_animation">
    <div
      class="sm:max-w-[488px] sm:w-full w-[90%] rounded-3xl bg-white sm:p-16 p-5 text-black overflow-y-auto"
    >
      <a href="/"><img
        class="max-w-[360px] w-full mb-6"
        src="/public/assets/images/Logo.png"
        alt="logo"
      /></a>
      <p class="font-semibold text-xl text-black mb-6">Schön, dich wiederzusehen</p>
      <form>
        <div class="mb-4">
        <label for="email" class="text-xsm leading-[12px] font-normal text-silverChalice mb-2 ms-2">
            Login
        </label>
        <input id="email" class="placeholder:text-mountainMist placeholder:text-base placeholder:font-medium text-jetBlack px-4 py-[11px] rounded-full w-full border border-solid border-lightGrey outline-none bg-gunSmoke mt-2" type="text" placeholder="Email or phone number">
        </div>
        <div class="mb-5 relative">
          <CommonIconsEyeIcon class="absolute top-[55%] right-4"/>
        <label for="password">
           <span class="text-xsm leading-[12px] font-normal text-silverChalice ms-2">Password</span>
            <input id="password" class="placeholder:text-mountainMist placeholder:text-base placeholder:font-medium text-jetBlack ps-4 pe-12 py-[11px] rounded-full w-full border border-solid border-lightGrey outline-none bg-gunSmoke mt-2" type="text" placeholder="Enter password">
        </label>
        </div>
        <div class="flex items-center justify-between mb-6">
        <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer">
    <div class="relative w-11 h-6 bg-gunSmoke border border-solid border-lightGrey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.4px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-carrotOrange"></div>
    <span class="ms-2 text-sm font-medium text-jetBlack">Remember me</span>
  </label>
  <a class="font-normal text-xs text-carrotOrange" href="#">Forgot password?</a>
  </div>
  <button class="w-full hover:bg-carrotOrange hover:text-white duration-300 transition-all text-silverChalice text-xl font-medium bg-lightGrey py-[9px] px-3 rounded-full">Log in</button>
      </form>
    </div>
  </div>
</template>
