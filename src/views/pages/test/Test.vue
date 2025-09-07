
<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const posts = ref<Post[]>([])

onMounted(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()

})
</script>

<template>
  <div class="container">

    <ul class="m-[40px]">
      <li v-for="item in posts" :key="item.id" class="mb-6">
        <h2>id: {{ item.id }}</h2>
        <h2>userId: {{ item.userId }}</h2>
        <h2>title: {{ item.title }}</h2>
        <h2>body: {{ item.body }}</h2>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>