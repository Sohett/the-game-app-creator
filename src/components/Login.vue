/* eslint-disable */
<template>
  <div class="splash">
    <el-container direction="vertical">
      <el-row :gutter="20">
        <el-col :span="10" :offset="14" style="height:100vh; position:relative">
          <div class="login">
            <h1>Create a digital escape game app in a few minutes</h1>
            <p>The only limit is your creativity</p>
            <p>Transform any places into a game.</p>
            <br>
            <el-button type="primary" @click="handleLog" icon="el-icon-success">Login</el-button>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import { login } from '@/services/auth'

export default {
  name: 'Login',
  methods: {
    handleLog () {
      login()
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 800;
}
.splash {
  background-image: url('https://images.unsplash.com/photo-1566240344928-f3dfb44cf89f?w=1600');
  background-size: cover;
  height: 100vh;
  width: 100vw;

  &:before {
    content: '';
  	position: absolute;
  	top: 0;
  	right: 0;
  	bottom: 0;
  	left: 0;
  	background-image: linear-gradient(to bottom right,black,grey);
  	opacity: .4;
  }
}

.login {
  text-align: center;
  position:absolute;
  top:30%;
  margin: auto;
  background-color: white;
  height: 170px !important;
  width: 200px !important;
  padding: 50px;
  border-radius: 8px;
  border: 1px solid lighten(black, 60%);
  -webkit-box-shadow: 0 20px 40px 0 rgba(0,0,0,.2);
  -moz-box-shadow: 0 20px 40px 0 rgba(0,0,0,.2);
  box-shadow: 0 20px 40px 0 rgba(0,0,0,.2);
}
</style>
