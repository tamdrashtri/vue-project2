<template>
    <div class="flex min-h-screen ">
    <div class="container mx-auto">
        <div class="card">
            <div class="text-center">
                <h1 class="title">Add a Page</h1>
                <p class="text-gray-400 dark:text-gray-400">Add Multiple Pages to create a lesson</p>
            </div>
            <div class="m-7">
                <form @submit.prevent="handleSubmit">
                    <div class="mb-6">
                        <textarea v-model="content" rows="5" name="message" id="message" placeholder="Explain something" class="input-text" required></textarea>
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
import { ref } from 'vue'
import useDocument from '../composables/useDocument'
export default {
  props: ['lessons'],
  setup(props) {
    const content = ref('')
    const showForm = ref(false)
    const { updateDoc } = useDocument('lessons', props.lesson.id)
    const handleSubmit = async () => {
      const newSong = {
        content: content.value,
        id: Math.floor(Math.random() * 1000000)
      }
      const res = await updateDoc({
        contents: [...props.lessons.contents, newContent]
      })
      content.value = ''
    }
    return { content, showForm, handleSubmit }
  }
}
</script>