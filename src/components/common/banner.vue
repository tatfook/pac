<template>
  <div class="banner">
    <img class="bg" src="@/assets/pac/banner.png" alt="">
    <div class="container">
      <div class="banner-content">
        <img src="@/assets/pac/banner-title.png" alt="">
        <div class="buttons">
          <img @click="toApply" class="img-btn" src="@/assets/pac/button-join.png" alt="">
          <a href="http://www.paracraft.cn/download?lang=zh" target="_blank" class="img-btn">
            <img src="@/assets/pac/button-download.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="loginDialogVisible" width='500px' :show-close=false>
      <login @close='setDialogVisible("loginDialogVisible", false)' @showJoinDialog='setDialogVisible("joinDialogVisible", true)' @onLogined='onLogined'></login>
    </el-dialog>
    <el-dialog :visible.sync="joinDialogVisible" width='500px' :show-close=false>
      <join @close='setDialogVisible("joinDialogVisible", false)' @showLoginDialog='setDialogVisible("loginDialogVisible", true)' @onLogined='onLogined'></join>
    </el-dialog>
    <el-dialog :visible.sync='applyDialogVisible' width='500px'>
      <h1>报名</h1>
      <p>报名功能开发中， 敬请期待</p>
    </el-dialog>
  </div>
</template>
<script>
import login from '../login'
import join from '../join'
export default {
  name: 'CommonBanner',
  components: {
    login,
    join
  },
  props: {
    userinfo: Object
  },
  data() {
    return {
      loginDialogVisible: false,
      joinDialogVisible: false,
      applyDialogVisible: false,
      isLogined: this.userinfo ? true : false
    }
  },
  methods: {
    setDialogVisible(key, value) {
      this[key] = value
    },
    toApply() {
      if (this.userinfo) {
        this.applyDialogVisible = true
        return
      }
      this.loginDialogVisible = true
    },
    onLogined() {
      this.loginDialogVisible = false
      this.joinDialogVisible = false
      this.$emit('onLogined')
    }
  }
}
</script>
