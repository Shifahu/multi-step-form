
<template>
  <div>
    <h1>Page Three</h1>
    <h2>Pick add-ons</h2>
    <p>Add-ons help enchance your gaming gaming experience</p>
    <div>Checked add ons: {{ addOns }}</div>

    <input type="checkbox" id="OS" value="Online serive" v-model="addOns">
    <label for="onlineService">Online service</label>

    <input type="checkbox" id="LR" value="Larger storage" v-model="addOns">
    <label for="largerStorage">Larger storage</label>

    <input type="checkbox" id="CP" value="Customisable Profile" v-model="addOns">
    <label for="customizableProfile">Customizable Profile</label>
    <NavBar></NavBar>
    <SideBar></SideBar>

  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import SideBar from '../components/SideBar.vue';
import { ref, computed } from 'vue'
import { useUserInfoStore } from '@/stores/userInfo'
import { usePageNumStore } from '@/stores/counter'
import { useRouter, useRoute } from 'vue-router'

const pageCounter = usePageNumStore()
const router = useRouter()
const userInfoStore = useUserInfoStore();

const addOns = ref([])

</script>
  