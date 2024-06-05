<template>
  <div class="max-w-[1920px] w-full mx-auto h-screen">
    <div class="flex">
      <div>
        <Sidebar class="md:block hidden" />
      </div>
      <div class="w-full">
          <HeaderDesktopHeader class="ms-[1px]" />
        <div class="xl:px-12 md:px-6 px-4 py-[60px] md:h-[calc(100vh-98px)] h-[calc(100vh-220px)] overflow-y-auto">
          <ChfCards />
          <div class="mt-8 grid lg:grid-cols-2 xl:gap-8 gap-4 w-full">
            <VerkaufeChfGraph/>
            <ProductsDetail/>
          </div>
          <CustomerDetail class="mt-6"/>
        </div>
        <div class="md:hidden fixed bottom-0 left-0 w-full"><SidebarSmNavbar/></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProductsDetail from "./top_angebote/ProductsDetail.vue";
</script>