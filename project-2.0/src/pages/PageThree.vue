
<template>
  <div>
    <h1>Page Three</h1>
    <h2>Pick add-ons</h2>
    <p>Add-ons help enchance your gaming gaming experience</p>
    <!-- <div>Checked add ons: {{ addOns}}</div> -->

    <!-- <div v-for="(addOn, index) in Object.keys(userInfoStore.addOns)" :key="index">
      <input type="checkbox" id="index" :value="addOn" :v-model="addOn">
      <label :for="addOn">{{ addOn }}</label>
    </div> -->


    <input type="checkbox" id="OS" value="onlineService" v-model="onlineService">
    <label for="onlineService">Online service</label>

    <input type="checkbox" id="LR" value="largerStorage" v-model="largerStorage">
    <label for="largerStorage">Larger storage</label>

    <input type="checkbox" id="CP" value="customizableProfile" v-model="customizableProfile">
    <label for="customizableProfile">Customizable Profile</label>
    <NavBar @handle-next-page="saveAddOn"></NavBar>
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

const createComputedProperty = propertyName => computed({
  get: () => userInfoStore.addOns[propertyName].checked,
  set: newValue => userInfoStore.saveUserAddOn(newValue, propertyName)

});

const onlineService = createComputedProperty('onlineService');
const largerStorage = createComputedProperty('largerStorage');
const customizableProfile = createComputedProperty('customizableProfile');

const saveAddOn = (pageNumber) => {
  pageCounter.incrementPage()
  router.push({ path: `/page/${pageCounter.pageNumber}` })
// userInfoStore.saveUserAddOn(selectedOption.value)
}

</script>
  