<template>
    <div>
        <router-view
        v-slot="{Component}">
    <transition>
        <component :is="Component" 
        :key="$route.path"/>
    </transition>
    </router-view>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import PageOne  from '@/pages/PageOne.vue'

export default ({
name: "Home",
components: {
    PageOne
}
})
</script>
