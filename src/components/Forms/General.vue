<template>
  <el-row>
    <p>{{state}}</p>
    <el-col :span="12">
      <el-form :model="appForm" :rules="rules" ref="appForm" class="form">
        <el-form-item label="Email">
          <el-input v-model="appForm.email" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Name" prop="name" >
          <el-input v-model="appForm.name" placeholder="Name of the app"></el-input>
        </el-form-item>
        <el-form-item label="URL" prop="url">
          <el-input v-model="appForm.url" :placeholder="appForm.name.toLowerCase()">
            <template slot="prepend">https://</template>
            <template slot="append">.the-game.website.com</template>
          </el-input>
        </el-form-item>
        <el-form-item label="Number of steps (usually number of rooms)" prop="steps">
          <span>👣</span>
          <el-slider v-model="appForm.steps" :step="1" :max="appForm.maxStep"></el-slider>
        </el-form-item>
        <el-form-item label="How long should the game last" prop="time">
          <span>⏱️</span>
          <el-slider v-model="appForm.time" :step="1" :format-tooltip="formatTooltip" :max="appForm.maxTime"></el-slider>
        </el-form-item>
        <el-form-item label="Introduction" prop="introduction">
          <el-input type="textarea" autosize :rows="4" placeholder="Write the introduction text" v-model="appForm.introduction">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('appForm')">Go create the first step</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="12">
      <div class="container">
        <img src="../../assets/iphone-frame.png" class="frame">
        <div class="game-preview">
          <div class="navbar-preview">
            <p v-if="appForm.time">Il te reste {{ appForm.time }} heure(s), 0 min, 0 sec</p>
            <el-steps v-if="appForm.steps" class="steps" align-center size="mini">
              <el-step size="small" v-for='i in appForm.steps'></el-step>
            </el-steps>
          </div>
          <div class="instruction-preview">
            <br>
            <p v-if="appForm.name"><b>Bienvenue au "{{ appForm.name }}" digital Escape Game</b></p>
            <span v-html="appForm.introduction"></span>
            <br>
            <el-button class="button-preview" type="primary" size="mini" disabled>Aller aux instructions</el-button>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import { operatorEmail } from '@/services/auth'
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        appForm: {
          email: '',
          name: '',
          url: '',
          steps: null,
          time: null,
          maxStep: 10,
          maxTime: 5,
          introduction: "<p>🎲 😮 ❓🤔 😂</p><p>Concrêtement tu as un temps prédéfinis ci-dessus pour résoudre les énigmes🤞!</p><p>Bonne chance</p>"
        },
        rules: {
          name: [
            { required: true, message: 'Please input App name', trigger: 'change' }
          ],
          url: [
            { required: true, message: 'Please input an URL', trigger: 'change'  }
          ],
          steps: [
            { required: true, message: 'Please choose a number of steps', trigger: 'change'  }
          ],
          time: [
            { required: true, message: 'Please choose a countdown', trigger: 'change'  }
          ],
          introduction: [
            { required: true, message: 'Please write an introduction', trigger: 'change'  }
          ]
        }
      }
    },
    computed: {
      ...mapState({state: 'user'}),
    },
    methods: {
      formatTooltip(val) {
        return `${val} hour(s)`;
      },
      submitForm(appForm) {
        this.$refs[appForm].validate((valid) => {
          if (valid) {
            this.$message({
              message: `Congrats, the app ${this.appForm.name} was successfuly created.`,
              type: 'success'
            });
          } else {
            this.$message({
              message: `Failed to create the app ${this.appForm.name}.`,
              type: 'error'
            });
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped="true">
  .form {
    text-align: center;
    width: 70vh;
  }
  .el-input-group__prepend .el-input-group__append {
    color: #67696d
  }

  .container {
    position: relative;
    text-align: center;
  }

  .frame {
    width: 400px;
  }

  .game-preview {
    position: absolute;
    left: 50%;
    top: 12%;
    transform: translate(-48.75%, -10%);
    max-width: 300px;
  }

  .navbar-preview {
    width: 294px;
    font-size: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #fafafa;
    border-bottom: 1px solid #f3f3f3;
  }

  .instruction-preview {
    background-color: #ffffff;
    font-size: 10px;
    max-width: 280px;
  }

  .button-preview {
    cursor: default;
  }
</style>
