<!--<script setup lang="ts">-->
<!--import {ref } from 'vue'-->
<!--const msg = ref('Rachel');-->

<!--async function GetData() {-->
<!--  const datas = await fetch("https://jsonplaceholder.typicode.com/posts");-->
<!--  const responses = await datas.json();-->
<!--  const id = ref(responses[0].id)-->
<!--  let htmls = responses.map(item => {-->
<!--    return `-->
<!--      <li class ="m-[40px]">-->
<!--        <h2> id : ${item.id}</h2>-->
<!--        <h2> userId : ${item.userId}</h2>-->
<!--        <h2> title :${item.title}</h2>-->
<!--        <h2>  body :${item.body}</h2>-->
<!--      </li>-->
<!--    `;-->
<!--  });-->
<!--  let html = htmls.join("\n");-->
<!--  let uEle = document.querySelector("ul");-->
<!--  if (uEle) {-->
<!--    uEle.innerHTML = html;-->
<!--  }-->
<!--}-->
<!--GetData();-->

<!--</script>-->

<!--<template>-->
<!--  <div class="container">-->
<!--  </div>-->
<!--</template>-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const posts = ref<Post[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
    posts.value = await res.json()
  } catch (e: any) {
    error.value = e?.message ?? 'Fetch failed'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="container">
    <p v-if="loading">Đang tải…</p>
    <p v-else-if="error">Lỗi: {{ error }}</p>

    <!-- Không dùng innerHTML, render bằng v-for -->
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