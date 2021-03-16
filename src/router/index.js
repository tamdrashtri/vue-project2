import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Lessons from '../views/Lessons.vue'
import EditLesson from '../views/EditLesson.vue'
import LessonDetails from '../views/LessonDetails.vue'
import { projectAuth } from '../firebase/config'


// auth guards
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('current user in auth guard: ', user)
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
