import { defineStore } from 'pinia'
import { usePageNumStore } from '@/stores/counter'
import { useRouter, useRoute } from 'vue-router'





export const useUserInfoStore = defineStore('UserInfo', {
  state: () => ({
    name: '',
    email: '',
    number: ''
  }),
  

  actions: {
    saveUserData(name, email, number) {
      this.name = name;
      this.email = email;
      this.number = number
      console.log(this.name, 'name', this.email, 'email', this.number, 'number')
    }

  },
})