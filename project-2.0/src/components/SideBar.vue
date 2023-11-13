<template>
  <div>
    <div v-for="(page, index) in pageIndicator" :key="index" :class="{ active: page.number === pageInd }">
      {{ page.number }}
    </div>
  </div>
</template>

<script>
import { usePageNumStore } from '@/stores/counter'
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'



export default {
  setup() {
    const pageCounter = usePageNumStore()
    const pageInd = pageCounter.pageNumber
    onMounted(() => {
    //   console.log(pageCounter.pageNumber, "page counter")
    })
    return {
      pageCounter,
      pageInd,
      active: false,
      pageIndicator: [
        {
          name: 'One',
          number: 1
        },
        {
          name: 'Two',
          number: 2
        },
        {
          name: 'Three',
          number: 3
        },
        {
          name: 'Four',
          number: 4
        }
      ]
    }
  }
}
</script>

<style scoped>
.active {
  background-color: #007bff;
  color: white;
}
</style>