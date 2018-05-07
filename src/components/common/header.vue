<template>
  <header class="pac-header">
    <div class="container clearfix">
      <div class="brand">
        <img src="@/assets/pac/logo.png" alt="">
      </div>
      <ul class="hidden-xs-only clearfix">
        <li>
          <a href='#'>首页</a>
        </li>
        <li>
          <a href='#'>参赛作品</a>
        </li>
        <li>
          <el-dropdown placement='bottom'>
            <span class="el-dropdown-link">
              活动专区
              <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
              <img src="@/assets/pac/bottom-dot.png" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <a href="#">公开课</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">校园活动</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">主题长廊</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">人物访谈</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">版权交易</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">颁奖典礼</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">作品展示</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- <a href='#'>活动专区</a> -->
        </li>
        <li>
          <a href='#'>课程学习</a>
        </li>
        <li>
          <a href='#'>相关下载</a>
        </li>
        <li class="join-btn" @click="toApply"><img src="@/assets/pac/camera.png" alt="">我要报名</li>
        <li class="profile" v-if="userinfo && userinfo.portrait">
          <el-dropdown placement='bottom' trigger='click'>
            <span class="el-dropdown-link">
              <img class="profile-img" :src='userinfo.portrait' alt="">
              <img src="@/assets/pac/bottom-dot.png" alt="">
            </span>
            <el-dropdown-menu slot='dropdown'>
              <el-dropdown-item>
                <a href="#">我的资料</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#">我的作品</a>
              </el-dropdown-item>
              <el-dropdown-item @click.native='toLogout'>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
      <el-dropdown class="hidden-sm-and-up xs-dropdown" placement='bottom-end'>
        <span class="el-dropdown-link">
          <i class="el-icon-menu"></i>
        </span>
        <el-dropdown-menu class="xs-dropdown-menu" slot="dropdown">
          <el-dropdown-item>
            <a href="#">首页</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">参赛作品</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">公开课</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">校园活动</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">主题长廊</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">人物访谈</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">版权交易</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">颁奖典礼</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">作品展示</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">课程学习</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">相关下载</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">我要报名</a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
  </header>
</template>
<script>
import login from '../login'
import join from '../join'
export default {
  name: 'CommonHeader',
  components: {
    login,
    join
  },
  data() {
    return {
      loginDialogVisible: false,
      joinDialogVisible: false,
      applyDialogVisible: false,
      isLogined: this.userinfo ? true : false
    }
  },
  props: {
    userinfo: Object
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
    toLogout() {
      this.$emit('onLogOut')
    },
    onLogined() {
      this.loginDialogVisible = false
      this.joinDialogVisible = false
      this.$emit('onLogined')
    }
  }
}
</script>
