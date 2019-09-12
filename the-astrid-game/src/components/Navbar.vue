<template lang="pug">
  <div class="countdown">
    <el-button v-if="joker" class="joker" type="success"><a class="call-text" href="tel:0498431947">Joker <i class="el-icon-phone-outline"></i></a></el-button>
    <countdown :time="countdown" :auto-start="countdownAutoStart" ref="countdown">
      <template slot-scope="props">Il te reste：{{ props.hours }} heure, {{ props.minutes }} minutes, {{ props.seconds }} secondes.</template>
    </countdown>
    <el-steps v-if='playing' class="steps" :active="activeStep" finish-status="success" align-center>
      <el-step v-for='i in 4'></el-step>
    </el-steps>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    mounted () {
      if ( this.playedTime > 0 ) this.$refs.countdown.start();
      this.$root.$on('clickedCountdownStart', () => {
        this.$refs.countdown.start();
      })
    },
    name: 'Navbar',
    computed: {
      ...mapGetters(['playedTime', 'restoredGame', 'countdownValue', 'getCurrentStep']),
      countdown() {
        return this.countdownValue - this.playedTime
      },
      countdownAutoStart() {
        return this.restoredGame;
      },
      joker () {
        return this.getCurrentStep !== 0 && 1
      },
      activeStep () {
        return this.getCurrentStep - 2
      },
      playing () {
        return this.getCurrentStep !== 0
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.joker {
  padding: 5px;
  margin-right: 5px;
  margin-left: 5px;
  text-align: center;
}
.steps {
  padding: 5px;
  margin: 5px;
  margin-top: 10px;
}
.call-text {
  text-decoration: none;
  color: inherit;
}
</style>
