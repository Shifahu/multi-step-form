import { defineStore } from 'pinia'



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
      return this
    }

  },
})