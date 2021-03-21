  
<template>


  <div v-for="lesson in lessons" :key="lesson.id">
    <div class="card">
      
        <h3>{{ lesson.title }}</h3>
        <div class="inline-block mr-2 mt-2		">
                <router-link :to="`/lessons/edit/${lesson.id}`">
                  <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-l">
                    Edit
                  </button>
                </router-link>
                
                <div class="inline-block mr-2 mt-2		">
                <router-link :to="`/lessons/${lesson.id}`"> 
                  <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg">
                    Add Content
                  </button>
                </router-link>
                </div>
                </div>
      
    </div>
  </div>
</template>

<script>
import useDocument from '../composables/useDocument'
import getDocument from '../composables/getDocument'


export default {
  props: ['lessons'],
  setup(props) {
    const {deleteDoc} = useDocument('lessons', props.id)

    const deleteLesson = async () => {
      await deleteDoc()
      console.log("deleting")
    }
    
    return {deleteLesson}
  }

}
</script>