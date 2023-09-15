<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheNav from './components/TheNav.vue';



</script>

<template>

<div class="container">
    
            <TheHeader/>
            
                       
            <router-view> </router-view>

            <TheNav />

            <TheFooter />    
</div>
  
</template>

<style scoped>




  
</style>
