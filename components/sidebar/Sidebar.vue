<script setup lang="ts">
import AngeboteIcon from "../common/icons/AngeboteIcon.vue";
import BuchungenIcon from "../common/icons/BuchungenIcon.vue";
import KundenIcon from "../common/icons/KundenIcon.vue";
</script>

<template>
  <div class="w-[256px] h-screen bg-white">
    <div class="py-6 ps-6 pe-7">
      <a href="/"
        ><img
          class="max-w-[200px] w-full"
          src="/public/assets/images/Logo.png"
          alt="logo"
      /></a>
    </div>
    <div
      class="h-[calc(100vh-150px)] flex flex-col justify-between overflow-y-auto pb-10"
    >
      <div class="flex flex-col gap-4">
        <a class="dashboard_links group" href="#"
          ><span><CommonIconsDashBoardIcon /></span>Dashboard</a
        >
        <a class="dashboard_links group" href="#"
          ><span><KundenIcon /></span>Kunden</a
        >
        <a class="dashboard_links group" href="#"
          ><span><AngeboteIcon /></span>Angebote</a
        >
        <a class="dashboard_links group" href="#"
          ><span><BuchungenIcon /></span>Buchungen</a
        >
      </div>
      <div class="px-[33px] pt-10">
        <div
          class="py-[30px] px-[10px] border border-dashed border-lightGrey rounded-xl bg-gunSmoke"
        >
          <div
            class="w-10 h-10 rounded-full bg-carrotOrange flex justify-center items-center mx-auto mb-1"
          >
            <CommonIconsPlusIcon />
          </div>
          <p class="font-semibold text-xsm leading-[19px] text-center mb-1">
            Daten importieren
          </p>
          <p
            class="font-medium text-2xsm leading-[13px] text-mountainMist text-center"
          >
            <span class="underline text-carrotOrange">Datei aussuchen</span>
            oder hierher ziehen.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
