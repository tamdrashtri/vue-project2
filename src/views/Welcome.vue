<template>
  <div class="flex min-h-screen ">
    <div class="container mx-auto">
        <div class="card">
    <div v-if="showLogin">
      <LoginForm @login="enterLessons"/>
      <p class="text-center">No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else>
      <SignupForm @signup="enterLessons" />
      <p class="text-center">Already registered? <span @click="showLogin = true">Login</span> instead.</p>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import {useRouter} from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterLessons = () => {
      router.push({ name: 'Lessons' })
    }
    return { showLogin, enterLessons }
  }
}
</script>

<style>
  span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
