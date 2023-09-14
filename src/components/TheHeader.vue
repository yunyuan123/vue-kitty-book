<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>

<header class="tm-site-header">
                <h1 class="tm-site-name">KITTY</h1>
                <p class="tm-site-description">Your Online Bookstore</p>
                
                <nav class="navbar navbar-expand-md tm-main-nav-container">

                    <div class="collapse navbar-collapse tm-main-nav" id="tmMainNav">
                        <ul class="nav nav-fill tm-main-nav-ul">
                            <li class="nav-item"><router-link class="nav-link active" :to="{name:'home'}">Home</router-link></li>
                            <li class="nav-item"><router-link class="nav-link" :to="{name:'list'}">List</router-link></li>
                        </ul>
                    </div>
                </nav>
                
            </header>

</template>

<style scoped>
</style>
