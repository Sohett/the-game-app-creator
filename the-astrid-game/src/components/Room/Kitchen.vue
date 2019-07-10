<template lang="pug">
  div
    h1
      b La cuisine 🍽️
    h3
      u Indice:
    ul
      li ↗️ = 10
      //- li ↗️ = 10 Tessa
      br
      li <img src="@/assets/round_dot.png" style="width:20px; text-align:center"> = 20
      //- round_dot = 20 Alice
      br
      li 🔷 = 12
      //- 🔷 = 12 Maxou
      br
      li ➕ = 9
      //- li ➕ = 9 Nico
      br
      li <img src="@/assets/cross_within_circle.png" style="width:15px; text-align:center"> = 3
      //- round_dot = 20 Oli
      br
      li 💙 = 1
      //- li 💙 = 1 Gui
      br
      li ⭕ = 11
      //- li ⭕ = 11 Dona
      br
      li 🔲 = 5
      //- li 🔲 = 5 Antoine
      br
      li <img src="@/assets/cylindre.png" style="width:25px; text-align:center"> = 7
      //- Cyclindre 7 James
      br
    p
    h3
      //- https://www.codecogs.com/latex/eqneditor.php
    <img class="equation" src='@/assets/equation.svg'>
    <el-form :model="kitchenForm" :rules="rules" ref="kitchenForm" label-width="120px" label-position="top">
      <el-form-item label="" prop="name">
        <el-input type='number' placeholder="x = ?" v-model="kitchenForm.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Soumettre ma réponse<i class="el-icon-arrow-right el-icon-right"></i></el-button>
      </el-form-item>
    </el-form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      var validateOfficeRoom = (rule, value, callback) => {
        if (value != 15) {
          callback(new Error('Mauvaise réponse'));
        } else {
          callback();
        }
      };
      return {
        kitchenForm: {
          name: ''
        },
        rules: {
          name: [
            { required: true, validator: validateOfficeRoom, trigger: 'blur' }
          ],
        }
      }
    },
    name: 'Kitchen',
    methods: {
      ...mapActions(['incrementStep']),
      submitForm() {
        this.$refs.kitchenForm.validate((valid) => {
          if (valid) {
            this.$message({
              message: 'Bonne réponse. Bravo !',
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
  ul {
    margin-left: -35px;
    list-style-type: none;
  }

  .equation {
    width: 90%;
    margin-bottom: 20px;
  }
</style>
