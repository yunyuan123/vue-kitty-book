<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';
import axios from 'axios';

const localBooks = ref([])
const router = useRouter()

const API_ENDPOINT = 'http://localhost:3000/books'

onBeforeMount(async () => {
    const { data } = await axios.get(API_ENDPOINT)
    localBooks.value = data
    console.log(data)
})

</script>


<template>
    <div class="tm-gallery">
        <div class="row">
            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item" v-for="book in localBooks" :key="book._id"
                :book="book">
                <router-link :to="{ name: 'detail', params: { id: book._id } }">
                    <div class="tm-gallery-item-overlay">
                        <img :src="book.coverUri" alt="Image" class="img-fluid tm-img-center">
                    </div>
                    <p class="tm-figcaption">{{ book.title }}</p>
                </router-link>
            </figure>
        </div>
    </div>
</template>