import { defineStore } from "pinia";

export const useUserInfoStore = defineStore("UserInfoStore", {
    state: () => ({  
        user: [{
            // define what I want in the store for each use
            userName: '',
            userEmail: '',
            userNumber:'',
            userPlanselection:''
        }]
    }),
    getters: {},
    //This would be used to fetch the data in the api and store it there
    actions: {
        async fetchUser() {
            try {}
            catch(error){
                throw new Error(error)
            }
        }
    }
})
