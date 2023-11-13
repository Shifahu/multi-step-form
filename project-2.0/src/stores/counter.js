import { ref, computed } from 'vue'
// stores/counter.js
import { defineStore } from 'pinia'
import { useRouter, useRoute } from 'vue-router'



export const usePageNumStore = defineStore('pageNum', {
  state: () => {
    const route = useRoute()
    function extractNumberFromString(s) {
      const match = s.match(/[-+]?\d+(\.\d+)?/);
      return match ? parseFloat(match[0]) : null;
    }
    const number = extractNumberFromString(route.path)
    return { pageCount: 1, pageNumber: number }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    incrementPage() {
      // this.pageCount++
      this.pageNumber++
    },
    decrementPage() {
      // this.pageCount--
      this.pageNumber--
    },
    
  },
})