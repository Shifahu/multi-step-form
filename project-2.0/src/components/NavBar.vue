<template>
  <div class="navBar">
    <button @click="goBack" class="goBackBttns" :class="{ hide: pageCounter.pageNumber === 1 }">
      Go Back
    </button>
    <button @click="$emit('nextPage')" class="nextPageBttns" :class="{ hide: pageCounter.pageNumber === 4 }">
      Next Page
    </button>
    <!-- <div>{{ pageCounter.pageCount }}</div> -->
  </div>
</template>

<script setup>
import { usePageNumStore } from '@/stores/counter'
import { useRouter, useRoute } from 'vue-router'

const pageCounter = usePageNumStore()
const router = useRouter()
const route = useRoute()
let hide = false

const nextPage = () => {
  pageCounter.incrementPage()
  // router.push({ path: `/page/${pageCounter.pageCount}` })
  router.push({ path: `/page/${pageCounter.pageNumber}` })
  // console.log(route, 'route')
  //   console.log(router, 'router')
}
const goBack = () => {
  pageCounter.decrementPage()
  // router.push({ path: `/page/${pageCounter.pageCount}` })
  router.push({ path: `/page/${pageCounter.pageNumber}` })
}

defineProps({})
</script>


<style scoped>
.hide {
  visibility: hidden;
}
</style>
