
<template>
  <div>
    <h1>Select your plan</h1>
    <p>You have the option of monthly or </p>
    <div>selected Option: {{ selectedOption }}</div>
    <form>
      
    <div class="planType">
  <input type="radio" id="Arcade" value="arcade" v-model="selectedOption" />
  <label for="Arcade">Arcade</label>
  
    <input type="radio" id="Advanced" value="advanced" v-model="selectedOption" />
    <label for="Advanced">Advanced</label>
    
    <input type="radio" id="Pro" value="pro" v-model="selectedOption" />
    <label for="Pro">Pro</label>
  </div>
  
</form>
    <NavBar @handle-next-page="saveOption"></NavBar>
    <SideBar></SideBar>
  </div>
</template>

<script setup>

import NavBar from '../components/NavBar.vue'
import SideBar from '../components/SideBar.vue'
import {ref, computed} from 'vue'
import { useUserInfoStore } from '@/stores/userInfo'
import { usePageNumStore } from '@/stores/counter'
import { useRouter, useRoute } from 'vue-router'

const pageCounter = usePageNumStore()
const router = useRouter()
const userInfoStore = useUserInfoStore();






// const selectedOption = ref("")

const selectedOption = computed({
  get(){
    for(const plan in userInfoStore.planOptions){
      if( userInfoStore.planOptions[plan].selected){
        return plan
      }
      console.log(userInfoStore.planOptions, 'plan options')
      console.log(plan, 'plan')
    }
  },
  set(newValue){
    console.log(newValue)
    userInfoStore.saveUserSelection(newValue)
    //if not new value, selected = false
  }
})

const saveOption = (pageNumber) => {
  pageCounter.incrementPage()
  router.push({ path: `/page/${pageCounter.pageNumber}` })
userInfoStore.saveUserSelection(selectedOption.value)
}
</script>

<style scoped>
.planType{
  display: flex;
  flex-direction: column;
}
</style>
  