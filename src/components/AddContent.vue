<template>
    
            <div class="text-center">
                <h1 class="title">Add Content Pages</h1>
                <p class="text-gray-400 dark:text-gray-400">Add Multiple Pages to create a lesson</p>
            </div>
            <div class="m-7">
                <form @submit.prevent="handleSubmit">
                    <div class="mb-6">
                        <textarea v-model="detail" rows="5" name="message" id="message" placeholder="Explain something" class="input-text" required></textarea>
                    </div>
                    <div class="mb-6">
                        <button type="submit" class="button">Add</button>
                    </div>
                </form>
            </div>
        

</template>

<script>
import { ref } from 'vue'
import useDocument from '../composables/useDocument'
export default {
  props: ['lesson'],
  setup(props) {
    const detail = ref('')
    const showForm = ref(false)
    const { updateDoc } = useDocument('lessons', props.lesson.id)
    const handleSubmit = async () => {
      const newContent = {
        detail: detail.value,
        id: Math.floor(Math.random() * 1000000),
  
      }
      console.log(newContent)
      const res = await updateDoc({
        contents: [...props.lesson.contents, newContent]
      })
      detail.value = ''
    }
    return { detail, showForm, handleSubmit }
  }
}
</script>