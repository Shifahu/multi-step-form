import { defineStore } from 'pinia'





export const useUserInfoStore = defineStore('UserInfo', {
  state: () => ({
    name: '',
    email: '',
    number: '',
    planOptions : {
      arcade: {
        price: 90,
        selected: false,
        name: 'Arcade'
      },
      advanced: {
        price: 120,
        selected: false,
        name: 'Advanced'
      },
      pro: {
        price: 150,
        selected: false,
        name: 'Pro'
      },
    },
    addOns : {
      onlineService:{
        checked:false,
        description:"Access to multiplayer games", 
        price: 1,
        id:'OS',
        name: 'Online Service'
      },
      largerStorage:{
        checked:false,
        description:"Extra 1TB of cloud save",
        price: 2,
        id:'LS',
        name: 'Larger Storage'
      },
      customizableProfile:{
        checked:false,
        description:"Custom theme on your profile",
        price: 2,
        id:'CS',
        name: 'Customizable Profile'
      },
    }
  }),
  

  actions: {
    saveUserData(name, email, number) {
      this.name = name;
      this.email = email;
      this.number = number
      console.log(this.name, 'name', this.email, 'email', this.number, 'number')
    },

    saveUserSelection(selection){
      console.log(selection)
      // this.planOptions[selection].selected = true
      for(const planOptions in this.planOptions){
        console.log(planOptions, 'planOptions')
        if(planOptions === selection){
          this.planOptions[selection].selected = true
        } else {
          this.planOptions[planOptions].selected = false
        }
      }
    },

    saveUserAddOn(value, propertyName){
      console.log(propertyName, 'propName'),
      console.log(value, 'valuee')
      this.addOns[propertyName].checked = value
      // this.addOns[selection].checked= true
    }

  },
})