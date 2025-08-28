<template>
  <section>
    <div class="w-full pt-[5px] text-[white]" :class="isHomePage ? 'bg-[#49BBBD]' : 'bg-white text-black'">
      <div class="flex justify-center sm:justify-between gap-[40px] sm:px-[126px] sm:h-[83px]">
        <div class="h-[83px] w-[114px] hidden sm:block  bg-[url(@/assets/images/logo.png)] bg-cover"></div>

        <Menu/>
        <div class="flex justify-around gap-[10px] sm:w-[346px] sm:h-[83px] items-center sm:justify-center">
          <div
              class="bg-[#FFFFFF] rounded-[10px] sm:rounded-[80px] text-[black] sm:text-[22px] sm:w-[160px] sm:h-[60px] sm:flex items-center justify-center">
            Login</div>
          <div
              class="bg-[#FFFFFF4D] rounded-[10px] sm:rounded-[80px] sm:text-[22px] sm:w-[160px] sm:h-[60px] sm:flex items-center justify-center">
            Sign Up</div>
        </div>
      </div>

    </div>
  </section>


</template>

<script setup lang="ts">
import Menu from "@/components/Menu.vue";
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();
const isHomePage = ref<boolean>(route.path === "/home")
</script>