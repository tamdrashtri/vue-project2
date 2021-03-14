<template>
    <div class="flex flex-row flex-wrap min-h-screen -m-4">
    <div class="container mx-auto">
        <div class="card">
          <div class="m-7">
                <form @submit.prevent="onSubmit">
                    <div class="mb-6">
                        <input type="text" v-model="title" optional placeholder="Lesson Title" class="input-text" >
                    </div>
                    <div class="mb-6">
                        <button type="submit" class="button">Add</button>
                    </div>
                </form>
            </div>
            
          </div>
          <div v-if="error" class="error">Could not fetch the data</div>
          <div v-if="documents">
              <div v-for="doc in documents" :key="doc.id">
                <div class="card">
                <h2 class="text-lg font-medium title-font mb-2">{{ doc.title }}</h2>
              <div class="inline-block mr-2 mt-2		">
                <router-link :to="`/lessons/${id}`">
                  <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-l">
                    Edit
                  </button>
                </router-link>
                <div class="inline-block mr-2 mt-2		">
                  <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg" @click="deleteLesson(id)">
                    Delete
                  </button>
                </div>
                </div>
              </div>
              
          </div>
          

          
    
        </div>

          
  </div>
    </div>
 
  
 
</template>

<script>
// import { useRoute } from 'vue-router'
import LessonList from '../components/LessonList'
import { ref } from 'vue'
import { timestamp } from '@/firebase/config'
import useCollection from '../composables/useCollection'
import getCollection from '../composables/getCollection'

export default {
  name: 'Home',
  setup() {
    const { documents } = getCollection('lessons')
    const { error, addDoc } = useCollection('lessons')


    const title = ref('')
    const isPending = ref(false)


    const onSubmit = async () => {
      isPending.value = true
      await addDoc({
        title: title.value,
        // songs: [],
        createdAt: timestamp()
      })
      isPending.value = false
      if (!error.value) {
        console.log('lesson title added')
      }
    
  }
    
    return { title, onSubmit, isPending, documents, error}
  }
}
</script>