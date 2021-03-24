import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
<<<<<<< HEAD
import Lessons from '../views/Lessons.vue'
import EditLesson from '../views/EditLesson.vue'
import LessonDetails from '../views/LessonDetails.vue'
import LessonSlides from '../views/LessonSlides.vue'
import { projectAuth } from '../firebase/config'
=======
>>>>>>> parent of f1a8988 (auth guard)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
<<<<<<< HEAD
  },
  {
    path: '/lessons',
    name: 'Lessons',
    component: Lessons,
    beforeEnter: requireAuth
  },
  {
    path: '/lessons/edit/:id',
    name: 'EditLesson',
    component: EditLesson,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/lessons/:id',
    name: 'LessonDetails',
    component: LessonDetails,
    props: true,
    beforeEnter: requireAuth
  },
  ,
  {
    path: '/lessons/:id/start',
    name: 'LessonSlides',
    component: LessonSlides,
    props: true,
    beforeEnter: requireAuth
=======
>>>>>>> parent of f1a8988 (auth guard)
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
