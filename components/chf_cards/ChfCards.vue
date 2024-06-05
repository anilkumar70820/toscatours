<script setup lang="ts">
import GrowDown from '../common/icons/GrowDown.vue';
</script>

<template>
  <div class="grid lg:grid-cols-3 sm:grid-cols-2  xl:gap-8 gap-4">
    <!-- ========= UMSATZ CARD ========== -->
    <div class="bg-white rounded-3xl p-6">
      <div class="flex items-center gap-2 mb-2">
        <img src="/public/assets/icons/trolly-icon.svg" alt="trolly" />
        <p class="font-normal text-base text-black mb-0">Umsatz</p>
      </div>
      <p class="font-medium text-custom-3xl text-black leading-[48px] mb-2">
        166,580 CHF
      </p>
      <p class="mb-0 font-medium text-base text-mountainMist flex items-center">
        <span><CommonIconsGrowUp /></span>
        <span class="text-green mx-1">5%</span> im letzten Monat
      </p>
    </div>
    <!-- =============== BUCHUNGEN CARD =============== -->
    <div class="bg-white rounded-3xl p-6">
      <div class="flex items-center gap-2 mb-2">
        <img src="/public/assets/icons/buchungen-icon.svg" alt="Buchungen" />
        <p class="font-normal text-base text-black mb-0">Buchungen</p>
      </div>
      <p class="font-medium text-custom-3xl text-black leading-[48px] mb-2">
      567
      </p>
      <p class="mb-0 font-medium text-base text-mountainMist flex items-center">
        <span><CommonIconsGrowUp /></span>
        <span class="text-green mx-1">2%</span> im letzten Monat
      </p>
    </div>
    <!-- ============= KUNDEN CARD ============= -->
    <div class="bg-white rounded-3xl p-6">
      <div class="flex items-center gap-2 mb-2">
        <img src="/public/assets/icons/kunden-icon.svg" alt="kunden" />
        <p class="font-normal text-base text-black mb-0">Kunden</p>
      </div>
      <p class="font-medium text-custom-3xl text-black leading-[48px] mb-2">
        801
      </p>
      <p class="mb-0 font-medium text-base text-mountainMist flex items-center">
        <span><GrowDown /></span>
        <span class="text-carrotOrange mx-1">3%</span> im letzten Monat
      </p>
    </div>
  </div>
</template>
