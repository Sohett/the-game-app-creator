<template lang="pug">
  div
    h1
      b Le bureau 📚
    i « Les gouvernements suspectent la littérature parce qu’elle est une force qui leur échappe. » E. Zola
    h3
      u Indices 📖📚
    ul
      li Marc Levy - p.211
      br
      li Nuit sur la neige p.91
      br
      li Petit Prince p.81
      br
      li Francs Massons p.187
      br
      li Elon Musc 🚀 p.53
      br
      li Computer Science p.16
    h3
      u Ta réponse:
    <el-form :model="officeForm" :rules="rules" ref="officeForm" label-width="120px" label-position="top">
      <el-form-item label="" prop="name">
        <el-input type='number'placeholder="Please input" v-model="officeForm.name">
          <template class="grey" slot="append">km</template>
        </el-input>
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
        if (value !== '245') {
          callback(new Error('Mauvaise réponse'));
        } else {
          callback();
        }
      };
      return {
        officeForm: {
          name: ''
        },
        rules: {
          name: [
            { required: true, validator: validateOfficeRoom, trigger: 'blur' }
          ],
        }
      }
    },
    name: 'Office',
    methods: {
      ...mapActions(['incrementStep']),
      submitForm() {
        this.$refs.officeForm.validate((valid) => {
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
      },
      resetForm() {
        this.$refs.officeForm.resetFields();
      }
    }
  }
</script>

<style>
  ul {
    margin-left: -px;
    list-style-type: none;
  }

  .grey {
    color: grey;
  }
</style>
