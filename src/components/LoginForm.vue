<template>
  <div class="text-center">
                <h1 class="title">Log In</h1>
            </div>
  <div class="m-7">
    <form @submit.prevent="handleSubmit">
      <div class="mb-6">
        <input class="input-text" type="email" required placeholder="email" v-model="email">
      </div>
      <div class="mb-6">
        <input class="input-text" type="password" required placeholder="password" v-model="password">
      </div>
    <div class="error">{{ error }}</div>
    <button class="button">Log In</button>
  </form>

  </div>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
  setup(props, context) {
    // refs
    const email = ref('')
    const password = ref('')

    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        context.emit('login')
      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>