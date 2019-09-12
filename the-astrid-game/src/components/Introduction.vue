<template lang="pug">
  div
    <vue-markdown>test</vue-markdown>
    p Bienvenue Astrid à ton
    h1
      b "Escape-Appartment"
    p 🎲 😮 ❓🤔 😂
    p Concrêtement, tu as une heure pour résoudre les enigmes 🤞!
    p Bonne chance,
    p Thomas
    br
    <el-button type="primary" @click="startGame">{{startGameText}}<i class="el-icon-arrow-right el-icon-right"></i></el-button>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'StepZero',
    computed: {
      ...mapGetters(['gameStartTime']),
      startGameText () {
        return this.gameStartTime ? 'Retourner aux instructions 🎲' : 'Commencer le jeu 🎲'
      }
    },
    methods: {
      ...mapActions(['markStartGame', 'startGameStep']),
      startGame () {
        this.startGameStep();
        this.markStartGame();
        this.$root.$emit('clickedCountdownStart');
      }
    }
  }
</script>
