  
<template>


  <div v-for="lesson in lessons" :key="lesson.id">
    <div class="card">
      <router-link :to="`/lessons/${lesson.id}`">
        <h3>{{ lesson.title }}</h3>
        <div class="inline-block mr-2 mt-2		">
                <router-link :to="`/lessons/edit/${lesson.id}`">
                  <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-l">
                    Edit
                  </button>
                </router-link>
                <div class="inline-block mr-2 mt-2		">
                  <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg" @click="deleteLesson(id)">
                    Delete
                  </button>
                </div>
                <div class="inline-block mr-2 mt-2		">
                  
                  <button class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg" @click="deleteLesson(id)">
                    Add Content
                  </button>
                  
                </div>
                </div>
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  props: ['lessons'],
}
</script>