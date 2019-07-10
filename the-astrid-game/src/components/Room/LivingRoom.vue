<template lang="pug">
  div
    h1
      b La salle de séjour/salon 🛋️
    h3
     u Indice
    h2 Tu prétends bien connaître Bruxelles, prouve le 🗺️🖼️
    hr
    p ℹ️Google Maps est autorisé
    ol
      li Mannekenpis
      li Les Serres Royales de Bruxelles
      li Le Parc Astrid
      li Le Chalet Robinson
      li Le Planetarium de Bruxelles
      li Le SNUB
      li La Basilique de Koekelberg
      li Le Cimetière de Bruxelles
      li Le Parc Parmentier
      li La Gare du Midi
    h3
      u Ta réponse:
    <el-form :model="livingRoomForm1" :rules="rules1" ref="livingRoomForm1" label-width="120px" label-position="top">
      <el-form-item prop="name">
        <el-input placeholder="La réponse est du style '9H7JSV23L5'" v-model="livingRoomForm1.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm1">Soumettre ma réponse<i class="el-icon-arrow-right el-icon-right"></i></el-button>
      </el-form-item>
    </el-form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      var validateBrusselsMapQuestion = (rule, value, callback) => {
        if (value.length != 10) {
          callback(new Error('La réponse doit être 10 charactères'));
        } else if (value.toUpperCase() != 'R4C79ZG2HK') {
          callback(new Error('Mauvaise réponse'));
        } else {
          callback();
        }
      };
      return {
        livingRoomForm1: {
          name: ''
        },
        rules1: {
          name: [
            { required: true, validator: validateBrusselsMapQuestion, trigger: 'blur' },
          ],
        }
      }
    },
    name: 'LivingRoom',
    methods: {
      ...mapActions(['incrementStep']),
      submitForm1() {
        this.$refs.livingRoomForm1.validate((valid) => {
          if (valid) {
            this.$message({
              message: 'Bonne réponse. 2eme question ...',
              type: 'success'
            });
            this.incrementStep();
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style>
  ol {
    margin-left: -35px;
  }
</style>
