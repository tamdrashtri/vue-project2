<template>
  <vueper-slides>
  <vueper-slide v-for="content in lesson.contents" :key="content.id" :style="'background-color: #F7E7CE'">
    <template v-slot:content>
        <div class="flex min-h-screen ">
    <div class="container mx-auto">
        <div class="card-slide">
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

// In your Vue.js component.
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    props: ['id', 'contents'],
    components: { VueperSlides, VueperSlide },
    setup(props) {
        const { error, document: lesson } = getDocument('lessons', props.id)

    return { error, lesson }
}
}
</script>

