<template lang="pug">
  div
    GeneralForm
</template>

<script>
import { mapActions } from 'vuex'
import GeneralForm from '@/components/Forms/General'
export default {
  components: {
    GeneralForm
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

<style lang="css" scoped>
</style>
