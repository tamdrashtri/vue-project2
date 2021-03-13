<template>
    <div class="flex flex-row flex-wrap min-h-screen -m-4">
    <div class="container mx-auto">
        <div class="card">
          <div class="m-7">
                <form @submit.prevent="onSubmit">
                    <div class="mb-6">
                        <input type="text" v-model="form.title" optional placeholder="Title (optional)" class="input-text" >
                    </div>
                    <div class="mb-6">
                        <textarea rows="2" v-model="form.desc" name="message" id="message" placeholder="Descriptions" class="input-text" required></textarea>
                    </div>
                    <div class="mb-6">
                        <button type="submit" class="button">Add</button>
                    </div>
                </form>
            </div>
          </div>
          <div v-for="{ id, title, desc } in lessons" :key="id">
          
            
            <div class="card">
          <h2 class="text-lg font-medium title-font mb-2">{{ title }}</h2>
          <p class="leading-relaxed text-base">{{desc}}</p>
          <div class="inline-block mr-2 mt-2		">
            <router-link :to="`edit/${id}`">
              <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-l">
                Edit
              </button>
            </router-link>
              
            
        
          </div>
          <div class="inline-block mr-2 mt-2		">
            <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg" @click="deleteLesson(id)">
              Delete
            </button>
          </div>
    
        </div>
  </div>
    </div>
  </div>
  
 
</template>

<script>
// import { useRoute } from 'vue-router'
import { reactive } from 'vue'
import { useLoadLessons, createLesson, deleteLesson } from '../composables/crudLesson'
export default {
  setup() {
    const lessons = useLoadLessons()

    
    // new lesson
    const form = reactive({ title: '', desc: '' })
    const onSubmit = async () => {
      await createLesson({ ...form })
      form.title = ''
      form.desc = ''
    }
    
    return {createLesson, deleteLesson, lessons, form, onSubmit}
  }
}
</script>