<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter, route } from 'vue-router'
import axios from 'axios'

const API_ENDPOINT = 'http://localhost:3000/books'

const localBooks = ref()
const isLoaded = ref(false)

const router = useRouter()

const goToDetail = (id) => {
    router.push({
      name: 'detail',
      params: {
        id: id
      }
    })
  console.log("hey clickage sur" +id)
}

const bookId = route.params.id
const deleteBtn = (id) => {

}

onBeforeMount(async() => {
    const books = await axios.delete(API_ENDPOINT+bookId)
    const {data, status} = books
    if(status===200){
        localBooks.value = data
        isLoaded.value = true
        console.log(data)
    }else{
        console.error('OUPS :(')
    }
})

</script>

<template>
  <div class="container px-4 px-lg-5 mt-5">
      <h5 v-if="!isLoaded">Data is loading...</h5>
                <table class="table" v-else>
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Year</th>
                        <th scope="col">Action</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="book in localBooks"
                          :key="book._id">
                        <th scope="row">{{ book.author.firstname }} {{ book.author.lastName }}</th>
                        <td>{{ book.title }}</td>
                        <td>{{ book.genre }}</td>
                        <td>{{ book.publicationYear }}</td>
                        <td>
                          <button @click="goToDetail(book._id)" type="button" class="btn btn-success"> Detail </button>
                        </td>
                        <td>
                          <button @click="deteleBtn(book._id)" type="button" class="btn btn-outline-danger"> Delete </button>
                        </td>
                      </tr>

                    </tbody>
                  </table>
            </div>
</template>

<style>

</style>
