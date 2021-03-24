<template>
  <div class="text-center">
                <h1 class="title">Sign Up</h1>
            </div>
  <div class="m-7">
    <form @submit.prevent="handleSubmit">
      <div class="mb-6">
        <input class="input-text" type="text" required placeholder="display name" v-model="displayName">
      </div>
      <div class="mb-6">
        <input class="input-text" type="email" required placeholder="email" v-model="email">
      </div>
      <div class="mb-6">
        <input class="input-text" type="password" required placeholder="password" v-model="password">
      </div>
    <div class="error">{{ error }}</div>
    <button class="button">Sign up</button>
  </form>

  </div>
  
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
  setup() {
    // refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    // useSignup
    const { error, signup } = useSignup()

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        console.log('user signed up')
      }      
    }

    return { displayName, email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>