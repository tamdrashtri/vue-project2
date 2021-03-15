<template>
  <div class="flex flex-row flex-wrap min-h-screen -m-4">
    <div class="container mx-auto">
        <div class="card">
          <div class="m-7">
                <form @submit.prevent="update">
                    <div class="mb-6">
                        <input type="text" v-model="form.title" optional placeholder="Title (optional)" class="input-text" >
                    </div>
                    <div class="mb-6">
                        <button type="submit" class="button">Add</button>
                    </div>
                </form>
            </div>
          </div>
          
  </div>
    </div>
  
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getLesson, updateLesson } from '../composables/crudLesson'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const lessonId = computed(() => route.params.id)
    

    //edit lesson
    const form = reactive({ title: '', desc: '' })
    onMounted(async () => {
      const lesson = await getLesson(lessonId.value)
      console.log(lesson, lessonId.value)
      form.title = lesson.title
      form.desc = lesson.desc
    })
    const update = async () => {
      await updateLesson(lessonId.value, { ...form })
      router.push('/lessons')
      form.title = ''
      form.desc = ''
    }
    return { form, update }

}
}
</script>