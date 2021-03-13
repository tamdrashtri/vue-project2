  
<template>
<h3>{{ lessons.title }}</h3>
  <div v-for="lesson in lessons" :key="lesson.id">
        <h3>{{ lessons.title }}</h3>
        
    </div>
</template>

<script>
export default {
  props: ['lessons']
}
</script>