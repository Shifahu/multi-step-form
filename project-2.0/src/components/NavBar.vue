<template>
  <div class="navBar">
    <button @click="goBack" class="goBackBttns" :class="{ hide: pageCounter.pageNumber === 1 }">
      Go Back
    </button>
    <button @click="$emit('handleNextPage', pageCounter.pageNumber)" class="nextPageBttns" :class="{ hide: pageCounter.pageNumber === 4 }">
      Next Step
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
  console.log(route, 'route')
  router.push({ path: `/page/${pageCounter.pageNumber}` })
  // console.log(route, 'route')
  //   console.log(router, 'router')
}
const goBack = () => {
  pageCounter.decrementPage()
  // router.push({ path: `/page/${pageCounter.pageCount}` })
  router.push({ path: `/page/${pageCounter.pageNumber}` })
}

defineProps()
</script>


<style scoped>
.hide {
  visibility: hidden;
}

.navBar{
  margin-right: 10px;
}

.nextPageBttns{
  height: 45px;
    width: 100px;
    background: hsl(213, 96%, 18%);
    border: none;
    border-radius: 5px;
    color: white;
    font-family: 'Ubuntu';
}
</style>
