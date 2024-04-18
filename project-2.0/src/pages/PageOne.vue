
<template>
  <div class="parent">
    <div class="sidebars">
      <SideBar></SideBar>
    </div>
    <div class="card">
      <h1 class="header">Personal info</h1>
      <p class="instruction">Please provide your name, email address, and phone number</p>
      <form class="form_section">
        <label for="name">Name</label>
        <input v-model="userInfoStore.name" type="input" id="name" name="name" /><br />
        <label for="email">Email</label>
        <input v-model="userInfoStore.email" type="email" id="email" name="email" /><br />
        <label for="number">Phone Number</label>
        <input v-model="userInfoStore.number" type="tel" id="number" name="number" /><br>
      </form>
    </div>
    <div class="navbar">
      <NavBar @handle-next-page="saveInfo"></NavBar>
    </div>
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
<style lang="scss">

@import url(//fonts.googleapis.com/css?family=Ubuntu);

.header{
  font-weight: 700;
  color: hsl(213, 96%, 18%);
  font-size: 23px;
}
label{
  color: hsl(213, 96%, 18%);
  font-weight: 400;

}

.instruction{
  color: hsl(231, 11%, 63%);
  font-weight: 500;
  font-size: 16px;
}


.sidebars{
  display: grid;
  width: 100%
}
.parent{
  height:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
  // background-image: url('../assets/bg-sidebar-mobile.svg');
  // background-position: top;

}
.card{
  padding: 30px;
  font-family: 'Ubuntu';
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
  color:black;
}
.form_section{
  display: grid;
  font-size: 16px
}

.navbar {
  // margin-top: auto; 
  background: white;
  width: 100%;
  height: 90px
}

</style>
