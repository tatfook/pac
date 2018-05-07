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
<style lang="scss">
.banner {
  height: 625px;
  position: relative;
  img {
    max-width: 100%;
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .banner-content {
    padding-top: 110px;
    text-align: center;
  }
  .buttons {
    margin-top: 70px;
  }
  .img-btn {
    cursor: pointer;
    margin-right: 30px;
  }
  .img-btn:last-child {
    margin-right: 0;
  }
}
</style>
<style lang="scss">
@media (max-width: 768px) {
  .banner {
    height: 460px;
    .banner-content {
      padding-top: 20px;
    }
    .buttons {
      text-align: center;
      margin-top: 0;
    }
  }
}
</style>