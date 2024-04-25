<template>
  <div class="sidebars">
    <div v-for="(page, index) in pageIndicator" :key="index" :class="{ active: page.number === pageInd }" class="pageNum">
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
@import url(//fonts.googleapis.com/css?family=Ubuntu);

.sidebars{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px
}
.pageNum{
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display:flex;
  justify-content: center;
  align-items: center;
  border: solid 1px white;
  font-family: inherit;
  font-weight: 700;
}
.active {
  background-color: hsl(206, 94%, 87%);
  color: hsl(213, 96%, 18%);
  border: none;
 
}
</style>