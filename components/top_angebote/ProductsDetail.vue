<template>
  <div class="p-6 rounded-3xl bg-white w-full product overflow-auto">
    <div class="flex items-center justify-between gap-3 flex-wrap mb-4">
      <h2 class="font-medium text-xl text-black mb-0">Top Angebote</h2>
      <div class="flex items-center lg:py-[11px] lg:ps-4 lg:pe-6 py-2 ps-3 pe-4 rounded-full bg-gunSmoke border border-solid border-lightGrey cursor-pointer">
        <p class="font-medium text-base text-jetBlack me-4">This month</p>
        <CommonIconsDropDown/>
      </div>
    </div>
    <div class="overflow-x-auto">
    <table class="w-full min-w-[360px] text-nowrap overflow-x-auto">
        <thead>
            <tr class="border-b border-b-solid border-b-gunSmoke">
                <td class="font-medium text-sm text-mountainMist">
                    No.
                </td>
                <td class="font-medium text-sm text-mountainMist">
                    Product
                </td>
                <td class="font-medium text-sm text-mountainMist text-center">
                 Price
                </td>
                <td class="font-medium text-sm text-mountainMist text-right">
                    Item Sold
                </td>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-b-solid border-b-gunSmoke">
                <td class="font-medium text-xs text-mountainMist px-2">
                    1
                </td>
                <td>
                    <p class="font-normal text-sm text-black mb-1">Trail-Bike, Insel Elba</p>
                    <p class="font-normal text-xs text-whiteSmoke mb-0">27.04.2024 - 04.05.2024</p>
                </td>
                <td class="font-normal text-sm text-carrotOrange mb-0 text-center">
                    1 460 CHF
                </td>
                <td class="font-normal text-sm text-right text-silverChalice">
                    10 pcs
                </td>
            </tr>
            <tr class="border-b border-b-solid border-b-gunSmoke">
                <td class="font-medium text-xs text-mountainMist px-2">
                    2
                </td>
                <td>
                    <p class="font-normal text-sm text-black mb-1">Trail-Bike, Insel Elba</p>
                    <p class="font-normal text-xs text-whiteSmoke mb-0">04.05.2024 - 11.05.2024</p>
                </td>
                <td class="font-normal text-sm text-carrotOrange mb-0 text-center">
                    1 460 CHF
                </td>
                <td class="font-normal text-sm text-right text-silverChalice">
                    12 pcs
                </td>
            </tr>
            <tr>
                <td class="font-medium text-xs text-mountainMist px-2">
                    3
                </td>
                <td>
                    <p class="font-normal text-sm text-black mb-1">Trail-Bike, Insel Elba</p>
                    <p class="font-normal text-xs text-whiteSmoke mb-0">11.05.2024 - 18.05.2024</p>
                </td>
                <td class="font-normal text-sm text-carrotOrange mb-0 text-center">
                    1 460 CHF
                </td>
                <td class="font-normal text-sm text-right text-silverChalice">
                    3 pcs
                </td>
            </tr>
        </tbody>
    </table>
    </div>
  </div>
</template>
