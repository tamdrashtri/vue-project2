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
            <LessonList :lessons="documents" />

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
  name: 'Lessons',
  components: {LessonList},
  setup() {
    const { error, documents } = getCollection('lessons')
    const { addDoc } = useCollection('lessons')


    const title = ref('')
    const isPending = ref(false)


    const onSubmit = async () => {
      isPending.value = true
      await addDoc({
        title: title.value,
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