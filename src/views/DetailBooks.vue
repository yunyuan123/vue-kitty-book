<script setup>
import {ref, onBeforeMount} from "vue"
import { useRoute } from 'vue-router'
import axios  from 'axios';

const route = useRoute()
console.log("coucou")
const bookId = route.params.id

const API_ENDPOINT = 'http://localhost:3000/books/'+bookId
const currentBook = ref()
console.log(API_ENDPOINT)

onBeforeMount( async()=>{
    const book = await axios.get(API_ENDPOINT)
    console.log(currentBook.value)
    
    currentBook.value = book.data
    
})

</script>

<template>
    
    <section class="row tm-item-preview">
            <div class="col-md-6 col-sm-12 mb-md-0 mb-5">
                <img :src="currentBook.coverUri" alt="Image" class="img-fluid tm-img-center-sm">
            </div>
            <div class="col-md-6 col-sm-12">
        
                <h2 class="tm-blue-text tm-margin-b-p">{{ currentBook.author.firstName }} {{ currentBook.author.lastName }}</h2>
                <h2 class="tm-blue-text tm-margin-b-p">{{ currentBook.title }}</h2>
                <p class="tm-margin-b-p">Suspendisse suscipit tortor eu nunc fermentum pellentesque. Donec vaius diam ut velit porttitor accumsan. Cras ac porttitor urna, in vehicula diam. Ut ultricies leo dapibus, facilisis justo vel, dignissim tortor.</p>        
             </div>
    </section>

</template>

