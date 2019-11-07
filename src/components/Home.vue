<template lang="pug">
  div
    h1
      b(style='color: #2c3e50') Create your digital escape game: how does it works ⚙️💻
    br
    div(class="steps")
      el-steps(direction="vertical" align-center :active="status" finish-status="success")
        el-step(title="First answer a few questions about the app you want to create (time of game, number of rooms, ...) 📝")
        el-step(title="Define each and every single step of the game and submit your information 🤔💭👨‍💻")
        el-step(title="You will receive a confirmation email ✉️. From then, wait 48 hours for the server to be created ⏳")
        el-step(title="Receive an email with the link to your 'Web Application' 🔗📱. You can then modify the information of the game from this website 🖊️")
        el-step(title="Once you're happy with the result 🎉, share with your friends and play 🎮🕵️")
    el-button(type="primary" v-if="displayCta")
      a(href='/create' style="color: white;") {{ cta }}
    br
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import GeneralForm from '@/components/Forms/General'

export default {
  computed: {
    ...mapGetters(['getStatus']),
    status() {
      return this.getStatus - 1;
    },
    cta() {
      if (this.getStatus == 1 ) {
        return 'Start creating my app'
      } else if (this.getStatus == 2 ) {
        return 'Finish completing all the steps'
      }
    },
    displayCta() {
      if (this.getStatus <= 2) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    ...mapActions(['initializeApp'])
  },
  mounted () {
    const loading = this.$loading();
    this.initializeApp()
      .then(_ => {
        loading.close();
      })
  }
}
</script>

<style scoped="true">
  .steps {
    height: 400px;
    text-align: center;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
</style>
