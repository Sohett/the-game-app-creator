<template lang="pug">
  #app
    TheGame.the-game
</template>

<script>
  import TheGame from './components/TheGame'
  import { mapActions } from 'vuex'

  export default {

    name: 'App',
    components: {
      TheGame
    },
    mounted () {
      this.initializeApp()
    },
    computed: {},
    metaInfo: {
      title: 'The Astrid Escape Game',
      meta: [
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'description', content: 'Will you get out in time ?'},
        {name: 'theme-color', content: '#fafafa'}
      ]
    },
    methods: {
      ...mapActions(['initializeApp']),
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 0px;
    text-decoration: none;
  }
  .the-game {
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px
  }
</style>
