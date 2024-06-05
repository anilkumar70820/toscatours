<template>
  <div class="p-6 rounded-3xl bg-white w-full">
    <div class="flex items-center justify-between gap-3 flex-wrap mb-4">
      <h2 class="font-medium text-xl text-black mb-0">Verkäufe</h2>
      <div
        class="flex items-center lg:py-[11px] lg:ps-4 lg:pe-6 py-2 ps-3 pe-4 rounded-full bg-gunSmoke border border-solid border-lightGrey cursor-pointer"
      >
        <p class="font-medium text-base text-jetBlack me-4">This month</p>
        <CommonIconsDropDown />
      </div>
    </div>
    <div><img class="w-full"src="/public/assets/images/graph-image.png" alt="graph" /></div>
  </div>
</template>
