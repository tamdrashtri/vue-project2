  
<template>

  <div v-for="lesson in lessons" :key="lesson.id">
        <h3>{{ lesson.title }}</h3>
        
    </div>
</template>


<script>
export default {
  props: ['lessons'],
}
</script>