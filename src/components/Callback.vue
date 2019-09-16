<template>
  <div class="spinner">
    <h1>Test</h1>
    <img src="../assets/loading.svg" alt="loading"/>
  </div>
</template>

<script>
import { setIdToken, setAccessToken } from '@/services/auth'

export default {
  mounted () {
    this.$nextTick(() => {
      setAccessToken()
      setIdToken()
      window.location.href = '/'
    })
  }
}
</script>

<style>
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
