<template lang="pug">
  #app
    div(v-if="displayLoginPage")
      el-container.full-height
        Login
    div(v-else)
      Navbar(class="navbar")
      el-main(style="padding-top: 20px; padding-right: 50px; padding-left: 50px")
        router-view
      AppFooter
</template>

<script>
  import { isLoggedIn } from '@/services/auth'
  import Home from '@/components/Home'
  import AppFooter from './components/AppFooter'
  import Login from '@/components/Login'
  import Navbar from '@/components/Navbar'

  export default {
  name: 'App',
  data() {
    return {
      input: ''
    }
  },
  components: {
    Home,
    AppFooter,
    Login,
    Navbar
  },
  computed: {
    displayLoginPage () {
      console.log(isLoggedIn())
      return (this.$route.name !== 'Callback' && !isLoggedIn())
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #141f50;
}
h1 h2 h3 h4 {
  color: #141e50;
}

#nav {
  padding: 15px;
  border-bottom: 1px solid #141e50;
  background-color: #f5f4f6;
}

#nav a {
  font-weight: bold;
  color: #141f50;
}

#nav a.router-link-exact-active {
  color: #f5d71d;
}

.full-height {
  height: 100vh;
}

body {
  margin: 0;
}

.navbar {
  margin-bottom: 50px;
}
</style>
