<template lang="pug">
  el-menu(mode="horizontal" background-color="#f5f7fa")
    el-menu-item(index="1")
      a(href="/") Home
    el-menu-item(index="2")
      a(href="/create") Create
    el-menu-item(index="3")
      a(@click="handleLog") Logout<i class="el-icon-circle-close"></i>
</template>

<script>
import { logout } from '@/services/auth'
export default {
  methods: {
    handleLog() { logout() }
  }
}
</script>
