<template lang="pug">
  <el-row justify="center" type="flex">
    <el-col :xs="24" v-if='!lost && !won'>
      <Navbar class="countdown"></Navbar>
      <div class="main-section">
        <div v-if='introductionStep'>
          <Introduction></Introduction>
        </div>
        <div v-if='instructionStep'>
          <Instructions></Instructions>
        </div>
        <div v-if='livingRoom'>
          <LivingRoom></LivingRoom>
        </div>
        <div v-if='office'>
          <Office></Office>
        </div>
        <div v-if='kitchen'>
          <Kitchen></Kitchen>
        </div>
        <div v-if='shower'>
          <Shower></Shower>
        </div>
        <div class="footer" v-if='playing'>
          <el-button icon="el-icon-arrow-left" size="small" @click="back">Back</el-button>
          br
          //- br
          //- <el-button type="warning" size="small" @click="clearCookies">Clear Cookies</el-button>
        </div>
      </div>
      </el-col>
      <el-col :xs="24" v-if='lost'>
        h1.lost Désolé Astrid, ton temps est dépassé. Tu as perdu !!! 😓
      </el-col>
      <el-col :xs="24" v-if='won'>
        h1.won 🎉Bravo Astrid, tu as assuré✌️ Tu as gagné !👏
    </el-col>
  </el-row>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Navbar from '@/components/Navbar.vue'
  import Introduction from '@/components/Introduction.vue'
  import Instructions from '@/components/Instructions.vue'
  import Office from '@/components/Room/Office.vue'
  import LivingRoom from '@/components/Room/LivingRoom.vue'
  import Kitchen from '@/components/Room/Kitchen.vue'
  import Shower from '@/components/Room/Shower.vue'

  export default {
    data() {
      return {
        now: Date.now()
      }
    },
    created () {
      var self = this;
      setInterval(function () {
         self.now = Date.now()
      }, 1000)
    },
    components: {
      Navbar,
      Introduction,
      Instructions,
      Office,
      LivingRoom,
      Kitchen,
      Shower,
    },
    name: 'TheGame',
    computed: {
      ...mapGetters(['getCurrentStep', 'gameStartTime', 'countdownValue', 'finalCode']),
      lost () {
        if (this.won) {
          return false
        } else {
          return this.gameStartTime ? ( this.now - this.gameStartTime > this.countdownValue ) : false
        }
      },
      won () {
        return this.getCurrentStep === 6
      },
      instructionStep () {
        return this.getCurrentStep === 1
      },
      introductionStep () {
        return this.getCurrentStep === 0
      },
      playing () {
        return this.getCurrentStep !== 0
      },
      livingRoom () {
        return this.getCurrentStep == 2
      },
      office () {
        return this.getCurrentStep == 3
      },
      kitchen () {
        return this.getCurrentStep == 4
      },
      shower () {
        return this.getCurrentStep == 5
      }
    },
    methods: {
      ...mapActions(['incrementStep', 'decrementStep', 'clearStorage']),
      back () {
        this.decrementStep();
      },
      clearCookies() {
        this.clearStorage();
        location.reload();
      }
    }
  }
</script>

<style scoped>
  .countdown {
    left: 0px;
    top: 0px;
    padding-top: 20px;
    background-color: #fafafa;
    position: fixed;
    padding-bottom: 10px;
    border-bottom: 1px solid #f3f3f3;
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
  }
  .main-section {
    margin-top: 90px;
  }
  .footer {
    margin-top: 30px;
    position: relative;
    bottom: 1%;
    right: 0%;
    text-align: center;
  }
  div {
    text-align: center;
  }
  .center {
    text-align: center;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .lost {
    font-size: 300%;
    margin-top: 40%
  }
  .won {
    font-size: 300%;
    margin-top: 40%
  }
</style>
