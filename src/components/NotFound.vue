<template>
  <div class="min-h-screen bg-white flex flex-col justify-center items-center text-center px-4">
    <h1 class="text-6xl font-bold text-red-500">404</h1>
    <p class="text-xl mt-4 text-gray-700">Oops! Trang bạn tìm không tồn tại.</p>
    <el-button
        @click="goBack"
        class="mt-6 flex bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition"
    >
      Quay về trang trước
    </el-button>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>
