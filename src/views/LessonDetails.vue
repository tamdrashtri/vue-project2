<template>
      <div class="flex min-h-screen ">
    <div class="container mx-auto">
        <div class="card">
              <AddContent :lesson="lesson" />
        </div>
        <div class="card">
            <div class="text-center">
                <h2 class="title">{{ lesson.title }}</h2>
                <div class="error" v-if="error">{{ error }}</div>
                <router-link :to="`/lessons/${lesson.id}/start`">
                  <button class="button">Start Lesson</button>
                </router-link>
            </div>
        </div>

       <!-- <button v-if="ownership" @click="handleDelete">Delete lesson</button>  -->
      
        <div v-if="!lesson.contents.length">No contents have been added to this lesson yet.</div>
      <div v-for="content in lesson.contents" :key="content.id" class="single-content">

        <div class="card">
          <h3>{{ content.detail }}</h3>
        </div>
        <!-- <button v-if="ownership">delete</button> -->
      </div>
      
    </div> 
      </div>
</template>

<script>
import AddContent from '@/components/AddContent.vue'
import useDocument from '@/composables/useDocument'
import getDocument from '@/composables/getDocument'
// import getUser from '@/composables/getUser'
// import { computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
  props: ['id'],
  components: { AddContent },
  setup(props) {
    const { error, document: lesson } = getDocument('lessons', props.id)
    // const { user } = getUser()
    const { deleteDoc } = useDocument('lessons', props.id)
    // const { deleteImage } = useStorage()
    // const router = useRouter()
    // const ownership = computed(() => {
    //   return lesson.value 
    //     && user.value 
    //     && user.value.uid == lesson.value.userId
    // })
    const handleDelete = async () => {
      await deleteDoc()
      router.push({ name: 'lessons' })
    }
    return { error, lesson, handleDelete }
  }
}
</script>