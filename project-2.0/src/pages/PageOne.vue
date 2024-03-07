
<template>
  <div>
    <h1>Personal info</h1>
    <p>Please provide your name, email address, and phone number</p>
    <form>
      <label for="name">Name</label>
      <input v-model="userInfoStore.name" type="input" id="name" name="name" /><br />
      <label for="email">Email</label>
      <input v-model="userInfoStore.email" type="email" id="email" name="email" /><br />
      <label for="number">Number</label>
      <input v-model="userInfoStore.number" type="tel" id="number" name="number" /><br>
    </form>
    <NavBar @handle-next-page="saveInfo"></NavBar>
    <SideBar></SideBar>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import NavBar from '../components/NavBar.vue'
import SideBar from '../components/SideBar.vue'
import { useUserInfoStore } from '@/stores/userInfo'
import { usePageNumStore } from '@/stores/counter'
import { useRouter, useRoute } from 'vue-router'

const pageCounter = usePageNumStore()
const router = useRouter()
const route = useRoute()

const userInfoStore = useUserInfoStore();
// const name = ref('')
// const email = ref('')
// const number = ref('')

// const name = computed({
//   get(){
//     return userInfoStore.name;
//   },
//   set(newValue){
//     userInfoStore.saveUserData(newValue)
//   }
// })

// const email = computed({
//   get(){
//     return userInfoStore.email;
//   },
//   set(newValue){
//     userInfoStore.saveUserData(newValue)
//   }
// })

// const number = computed({
//   get(){
//     return userInfoStore.number;
//   },
//   set(newValue){
//     userInfoStore.saveUserData(newValue)
//   }
// })

const createComputedProperty = propertyName => computed({
  get: () => userInfoStore[propertyName],
  set: newValue => userInfoStore.saveUserData(newValue)
});

const name = createComputedProperty('name');
const email = createComputedProperty('email');
const number = createComputedProperty('number');


const saveInfo =  (pageNumber) => {
  userInfoStore.saveUserData(name.value, email.value, number.value)
  console.log(pageNumber)
  pageCounter.incrementPage()
  router.push({ path: `/page/${pageCounter.pageNumber}` })
  // console.log(userInfoStore.name, "NAME", userInfoStore.email, "email", userInfoStore.number, 'number')
  
}




// console.log(name.value, 'name')

</script>
