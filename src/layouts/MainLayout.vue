<template>
  <div class ="w-full min-h-[500px]">
    <Header/>
<router-view>
</router-view>
    <Footer/>
  </div>
</template>

<script setup lang="ts">

import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
</script>