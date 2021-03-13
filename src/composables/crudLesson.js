import 'firebase/firestore'
import { ref, onUnmounted } from 'vue'
import {firebaseApp, config} from '../firebase/config'

const db = firebaseApp.firestore()
const lessonsCollection = db.collection('lessons')

export const getLesson = async id => {
  const lesson = await lessonsCollection.doc(id).get()
  return lesson.exists ? lesson.data() : null
}

export const createLesson = lesson => {
  return lessonsCollection.add(lesson)
}

export const updateLesson = (id, lesson) => {
  return lessonsCollection.doc(id).update(lesson)
}

export const deleteLesson = id => {
  return lessonsCollection.doc(id).delete()
}

export const useLoadLessons = () => {
  const lessons = ref([])
  const close = lessonsCollection.onSnapshot(snapshot => {
    lessons.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return lessons
}