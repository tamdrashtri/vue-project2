<template>
  <div class="flex min-h-screen ">
    <div class="container mx-auto">
        <div class="card">
    <div v-if="showLogin">
<<<<<<< HEAD
      <LoginForm @login="enterLessons"/>
      <p class="text-center">No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else>
      <SignupForm @signup="enterLessons" />
      <p class="text-center">Already registered? <span @click="showLogin = true">Login</span> instead.</p>
    </div>
  </div>
=======
      <h2>Login</h2>
      <LoginForm />
      <p>No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm />
      <p>Already registered? <span @click="showLogin = true">Login</span> instead.</p>
>>>>>>> parent of f1a8988 (auth guard)
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)

    return { showLogin }
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
