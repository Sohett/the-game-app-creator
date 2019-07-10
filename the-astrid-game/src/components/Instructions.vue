<template lang="pug">
  div
    h1
      b Instructions du jeu
    p Le jeu est relativement simple. L'objectif: finir le jeu en une heure tout en prenant ton pied et en découvrant les petits recoins de notre appart.
    p Il existe 4 pièces de jeu:
    ol
      li 1. Salle de séjour/salon 🛋️
      li 2. Bureau 📚
      li 3. Cuisine 🍽️
      li 4. Salle de bain 🛁
    p Le premier indice de chaque pièce te sera donné ici, via ce site.
    p Chaque pièce commence avec des indices et termine par une (ou plusieurs) question(s) finale(s), question(s) qui une fois répondue(s) te permet de passer à la pièce suivante.
    br
    <el-button type="primary" @click="nextStep">Aller à la première pièce<i class="el-icon-arrow-right el-icon-right"></i></el-button>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'StepOne',
    methods: {
      ...mapActions(['incrementStep']),
      nextStep () {
        this.incrementStep();
      }
    }
  }
</script>

<style media="screen" scoped>
  .small {
    font-size: x-small;
  }
  ol {
    margin-left: -35px;
    list-style-type: none;
    text-decoration: none;
    text-align: center;
  }
</style>
