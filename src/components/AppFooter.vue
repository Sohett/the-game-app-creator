<template lang="pug">
  el-footer © Thomas Sohet 2019 - Tous droits réservés.
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss">
  @import '@/style/element-variables.scss';

  .el-footer {
    background-color: #B3C0D1;
    background: white;
    color: lighten($--neutral-dark-bg, 30%);
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    max-height: 30px;
  }
</style>
