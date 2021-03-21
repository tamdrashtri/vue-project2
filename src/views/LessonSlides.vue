<template>
  <vueper-slides  >
  <vueper-slide v-for="content in lesson.contents" :key="content.id" :style="'background-color: #F7E7CE'">
    <template v-slot:content>
        <div class="flex min-h-screen ">
    <div class="container mx-auto">
        <div class="card-slide" v-if="!lesson.contents.length">
            <i class="icon icon-check"></i>
              {{ content.detail }}
        </div>
        </div>
        </div>
     
     
    </template>
  </vueper-slide>
</vueper-slides>
</template>

<script>
import getDocument from '@/composables/getDocument'
import { ref } from 'vue'

// In your Vue.js component.
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    props: ['id'],
    components: { VueperSlides, VueperSlide },
    setup(props) {
      const contents = ref(null)
      const { error, document: lesson } = getDocument('lessons', props.id)

    return { error, lesson, contents }
}
}
</script>

