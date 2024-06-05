<script setup lang="ts">
import Search from "../common/icons/Search.vue";
</script>

<template>
  <div class="w-full rounded-3xl bg-white py-6 customer_details">
    <div class="px-6 pb-6">
      <div class="flex items-center sm:flex-row flex-col gap-6">
        <div class="relative w-full">
          <Search class="absolute top-[50%] left-4 -translate-y-[50%]" />
          <input
            type="search"
            placeholder="Suche mit Name oder Email"
            class="w-full outline-none placeholder:text-base placeholder:font-medium placeholder:text-mountainMist ps-[52px] pe-4 py-[11px] border border-solid border-lightGrey rounded-full bg-gunSmoke"
          />
        </div>
        <div
          class="py-[11px] px-6 bg-gunSmoke rounded-full flex gap-2 items-center"
        >
          <CommonIconsFilter />
          <p class="font-medium text-base text-black">Filters</p>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full min-w-[950px] overflow-x-auto text-nowrap">
        <thead>
          <tr
            class="border-t border-t-solid border-t-lightGrey border-b border-b-solid border-b-lightGrey"
          >
            <th class="ps-2">
              <input type="checkbox" />
            </th>
            <th class="font-medium text-base text-charcoalGrey">
              <div class="flex items-center">
                Customer name
                <span class="ms-2"><CommonIconsUpDownArrow /></span>
              </div>
            </th>
            <th class="font-medium text-base text-charcoalGrey">
              <div class="flex items-center">
                Email <span class="ms-2"><CommonIconsUpDownArrow /></span>
              </div>
            </th>
            <th class="font-medium text-base text-charcoalGrey">
              <div class="flex items-center justify-center">
                Location <span class="ms-2"><CommonIconsUpDownArrow /></span>
              </div>
            </th>
            <th class="font-medium text-base text-charcoalGrey">
              <div class="flex items-center">
                Booking <span class="ms-2"><CommonIconsUpDownArrow /></span>
              </div>
            </th>
            <th class="font-medium text-base text-charcoalGrey">
              <div class="flex items-center justify-center">
                Amount <span class="ms-2"><CommonIconsUpDownArrow /></span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-b-solid border-b-lightGrey">
            <td class="text-center ps-2">
              <input type="checkbox" />
            </td>
            <td>
              <div class="flex items-center gap-3">
                <img
                  src="/public/assets/icons/customer-profile-image.svg"
                  alt="customer-profile"
                />
                <p class="font-semibold text-base text-jetBlack">
                  Emery Lipshutz
                </p>
              </div>
            </td>
            <td class="font-semibold text-base text-jetBlack">name@email.ch</td>
            <td class="font-semibold text-base text-jetBlack text-center">
              Location
            </td>
            <td class="font-semibold text-base text-jetBlack">10</td>
            <td class="font-semibold text-base text-jetBlack text-center">
              22 400,98 CHF
            </td>
            <td><CommonIconsThreeDots /></td>
          </tr>
          <tr class="border-b border-b-solid border-b-lightGrey">
            <td class="text-center ps-2">
              <input type="checkbox" />
            </td>
            <td>
              <div class="flex items-center gap-3">
                <img
                  src="/public/assets/icons/customer-profile-image.svg"
                  alt="customer-profile"
                />
                <p class="font-semibold text-base text-jetBlack">
                  Emery Lipshutz
                </p>
              </div>
            </td>
            <td class="font-semibold text-base text-jetBlack">name@email.ch</td>
            <td class="font-semibold text-base text-jetBlack text-center">
              Location
            </td>
            <td class="font-semibold text-base text-jetBlack">10</td>
            <td class="font-semibold text-base text-jetBlack text-center">
              22 400,98 CHF
            </td>
            <td><CommonIconsThreeDots /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="px-6 pt-6 flex sm:flex-row flex-col justify-center items-center gap-3 sm:justify-between">
      <div class="flex items-center gap-4">
        <p class="font-medium text-sm text-charcoalGrey">Show result:</p>
        <div
          class="px-3 py-2 border border-solid border-lightGrey rounded-lg flex items-center gap-6"
        >
          <p class="font-medium text-sm text-jetBlack">5</p>
          <CommonIconsDropDown class="opacity-10" />
        </div>
      </div>
      <div class="flex items-center">
        <CommonIconsDropDown class="rotate-90 opacity-10 m-4"/>
        <p class="font-medium text-sm text-silverChalice flex items-center justify-center min-h-10 min-w-10 rounded-xl hover:text-carrotOrange hover:bg-lightOrange duration-300">1</p>
        <p class="font-medium text-sm text-silverChalice flex items-center justify-center min-h-10 min-w-10 rounded-xl hover:text-carrotOrange hover:bg-lightOrange duration-300">2</p>
        <p class="font-medium text-sm text-silverChalice flex items-center justify-center min-h-10 min-w-10 rounded-xl hover:text-carrotOrange hover:bg-lightOrange duration-300">3</p>
        <p class="font-medium text-sm text-silverChalice flex items-center justify-center min-h-10 min-w-10 rounded-xl hover:text-carrotOrange hover:bg-lightOrange duration-300">4</p>
        <p class="font-medium text-sm text-silverChalice flex items-center justify-center min-h-10 min-w-10 rounded-xl hover:text-carrotOrange hover:bg-lightOrange duration-300">...</p>
        <p class="font-medium text-sm text-silverChalice flex items-center justify-center min-h-10 min-w-10 rounded-xl hover:text-carrotOrange hover:bg-lightOrange duration-300">20</p>
        <CommonIconsDropDown class="-rotate-90 opacity-10 m-4"/>
      </div>
    </div>
  </div>
</template>
