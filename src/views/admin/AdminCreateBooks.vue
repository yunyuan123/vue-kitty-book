<script setup>

import { ref } from 'vue'
import axios from 'axios'

const API_ENDPOINT =  "http://localhost:3000/books"

const title  = ref()
const genre  = ref()
const author = ref()

const createBook = async () => {
  console.log(title)
  const newBooks = await axios.post(API_ENDPOINT, {
      title: title.value
      
    })
  console.log(newBooks)
}

</script>

<template>

<form>
  <div class="row mb-3">
    <label for="title" class="col-sm-2 col-form-label">Titre</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="title" v-model="title">
    </div>
  </div>
  <div class="row mb-3">
    <label for="author" class="col-sm-2 col-form-label">Author</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="author">
    </div>
  </div>
  <div class="row mb-3">
    <label for="genre" class="col-sm-2 col-form-label">Genre</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="genre" v-model="genre">
    </div>
  </div>

  <div class="text-center">
    <button type="button" class="btn btn-primary mb-4"  @click="createBook">Create</button>

  </div>
</form>


</template>

<style scoped>


</style>