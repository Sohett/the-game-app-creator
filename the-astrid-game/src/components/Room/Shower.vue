<template lang="pug">
  div
    h1
      b La salle de bain 🛁
    h3
    p
      u Indices
    p A toi de trouver les 8 moments de notre histoire cacher dans la pièce. Attention 📅 !
    h3
      u Ta réponse:
    <el-form :model="showerForm" :rules="rules" ref="showerForm" label-width="120px" label-position="top">
      <el-form-item label="" prop="name">
        <el-input placeholder="Réponse de style: UCJDWMNX" v-model="showerForm.name"></el-input>
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
        if (value.length != 8) {
          callback(new Error('La réponse doit être 8 lettres'));
        } else if (value.toUpperCase() !== 'CRTBVNDG') {
          callback(new Error('Mauvaise réponse'));
        } else {
          callback();
        }
      };
      return {
        showerForm: {
          name: ''
        },
        rules: {
          name: [
            { required: true, validator: validateOfficeRoom, trigger: 'blur' }
          ],
        }
      }
    },
    name: 'Shower',
    methods: {
      ...mapActions(['incrementStep']),
      submitForm() {
        this.$refs.showerForm.validate((valid) => {
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
</style>
