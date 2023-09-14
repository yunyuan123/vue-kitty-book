<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';
import axios from 'axios';

const localBooks = ref([])
const router = useRouter()
const API_ENDPOINT = "http://localhost/api/index.php"
//const API_ENDPOINT = 'http://localhost:3000/books'

onBeforeMount(async()=>{
    const {data} = await axios.get(API_ENDPOINT)
    localBooks.value = data.results
    console.log(data.results)
})

</script>

<template>
  <div class="tm-gallery">
                        <div class="row">
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item" v-for="book in localBooks"
                                :key="book.id"
                                :book = "book">
                                <router-link :to="{name: 'detail', params: { id: book.id }}">
                                    <div class="tm-gallery-item-overlay">
                                        <img :src="book.image" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">{{ book.title }}</p>
                                </router-link>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-02.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Integer ornare</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-03.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Cras non augue</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-04.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Dolor lacus</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-05.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Quisque velit</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-06.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Suspendisse suscipit</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-07.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Facilisis justo</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-08.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Vivamus facilisis</p>
                                </a>
                            </figure> 
                        </div>   
                    </div>
</template>
