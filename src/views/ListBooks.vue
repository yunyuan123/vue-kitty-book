<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

//const API_ENDPOINT = 'http://localhost:3000/books'
const API_ENDPOINT = "http://localhost/api/index.php"
const localBooks = ref([])
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

onBeforeMount(async() => {
    const books = await axios.get(API_ENDPOINT)
    const {data, status} = books
    if(status===200){
        localBooks.value = data.results
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
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Name</th>
                        <th scope="col">Year</th>
                        <th scope="col">Action</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="book in localBooks"
                          :key="book.id"
                          :book = "book">
                        <th scope="row">{{ book.id }}</th>
                        <td>{{ book.title }}</td>
                        <td>{{ book.author.firstname }}</td>
                        <td>{{ book.publicationYear }}</td>
                        <td>
                          <button @click="goToDetail(book.id)" type="button" class="btn btn-success"> Detail </button>
                        </td>
                      </tr>

                    </tbody>
                  </table>
            </div>
</template>

<style>

</style>
