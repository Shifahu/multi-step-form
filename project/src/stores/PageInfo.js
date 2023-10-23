import { defineStore } from "pinia";

export const usePageInfoStore = defineStore("PageInfoStore", {
    state: () => ({
        pages:
        [
            {
                component: 'PageOne',
                pageNum: 1
            },
             {
                component: 'PageTwo',
                pageNum: 2
            },
            {
                component: 'PageThree',
                pageNum: 3
            },
            {
                component: 'PageFour',
                pageNum: 4
            }
        ]

    }),
    getters: {},
    //This would be used to fetch the data in the api and store it there
    actions: {
        async fetchUser() {
            try { }
            catch (error) {
                throw new Error(error)
            }
        }
    }
})
