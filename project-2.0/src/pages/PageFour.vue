
<template>
  <div>
    <h1>Page Four</h1>
    <div v-for="(plan,index) in userInfoStore.planOptions">
      <div v-if="plan.selected === true">{{ plan.name }}</div>
    </div>
    <div v-for="addOn in userInfoStore.addOns">
    <div v-if="addOn.checked === true">{{addOn.name}}</div>
    </div>
    <div> Total ${{ totalCost() }}</div>
    <NavBar></NavBar>
    <SideBar/>
  </div>
</template>
      <script setup>
import NavBar from '../components/NavBar.vue'
import SideBar from '../components/SideBar.vue';
import { useUserInfoStore } from '@/stores/userInfo'


const userInfoStore = useUserInfoStore();

const totalCost = () => {
  let planOptionCost = 0
  
  Object.values(userInfoStore.planOptions).forEach(plan => {
    if(plan.selected){
       planOptionCost = plan.price
    }
  })

const addOnsCost = Object.values(userInfoStore.addOns).reduce((accumulator, addOn) => {
  const price = addOn.price;
  if(addOn.checked){
    accumulator+= price
  }
  return accumulator
}, 0)

return planOptionCost + addOnsCost
}


</script>
  