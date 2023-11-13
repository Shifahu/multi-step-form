
<template>
  <div>
    <h1>Personal info</h1>
    <p>Please provide your name, email address, and phone number</p>
    <form>
      <label for="name">Name</label>
      <input v-model="name" type="input" id="name" name="name" /><br />
      <label for="email">Email</label>
      <input v-model="email" type="email" id="email" name="email" /><br />
      <label for="number">Number</label>
      <input v-model="number" type="tel" id="number" name="number" /><br>
      <input @click.prevent="console.log(name)" type="submit" value="Submit">
    </form>
    <NavBar @next-page="nextPage"></NavBar>
    <SideBar></SideBar>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import SideBar from '../components/SideBar.vue'
import { useUserInfoStore } from '@/stores/userInfo'

const userInfoStore = useUserInfoStore();
const name = ref('')
const email = ref('')
const number = ref('')

const nextPage = () => {
  userInfoStore.saveUserData(name.value, email.value, number.value)
  console.log(userInfoStore.name, "NAME", userInfoStore.email, "email", userInfoStore.number, 'number')
  
}




// console.log(name.value, 'name')

</script>
