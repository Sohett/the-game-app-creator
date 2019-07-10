<template lang="pug">
  div
    h1
      b La salle de bain 🛁
    h3
    p
      u Indices
    p Prends une douche 🚿! L'eau chaude ça aide à voir les choses plus clairement 💨...
    h3
      u Ta réponse:
    <el-form :model="showerForm" :rules="rules" ref="showerForm" label-width="120px" label-position="top">
      <el-form-item label="" prop="name">
        <el-input placeholder="" v-model="showerForm.name"></el-input>
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
        if (value.toUpperCase() !== 'ENVIE DE TOI') {
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
