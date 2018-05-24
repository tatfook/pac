<template>
  <header class="pac-header">
    <div class="container clearfix">
      <div class="brand">
        <img src="@/assets/pac/logo.png" alt="">
      </div>
      <ul class="hidden-xs-only clearfix">
        <li :class="{'active': activeRoutePage ==='index'}">
          <a href='/'>首页</a>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="暂未开放，敬请期待" placement="top">
            <span class="disabled-link">参赛作品</span>
          </el-tooltip>
          <!-- <a href='#'>参赛作品</a> -->
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="暂未开放，敬请期待" placement="top">
            <span class="disabled-link">活动专区 <img src="@/assets/pac/bottom-dot.png" alt=""></span>
          </el-tooltip>
          <!-- <el-dropdown placement='bottom'>
            <span class="el-dropdown-link">
              活动专区
              <img src="@/assets/pac/bottom-dot.png" alt="">
            </span>
            <el-dropdown-menu class="header-dropdown" slot="dropdown">
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
          </el-dropdown> -->
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="暂未开放，敬请期待" placement="top">
            <span class="disabled-link">课程学习</span>
          </el-tooltip>
          <!-- <a href='#'>课程学习</a> -->
        </li>
        <li>
          <a href='http://www.paracraft.cn/download?lang=zh' target="_blank">相关下载</a>
        </li>
        <li class="join-btn" @click="toApply" v-show="!isApplyPage && !isApplied"><img src="@/assets/pac/camera.png" alt="">我要报名</li>
        <li class="join-btn" @click="toUpload" v-show="!isUploadWorkPage && isApplied"><img src="@/assets/pac/upload_icon.png" alt="">上传作品</li>
        <li class="login-btn" v-if="!userinfo || !userinfo.username" @click='setDialogVisible("loginDialogVisible", true)'>
          尚未登录
        </li>
        <li class="profile" v-if="userinfo && userinfo.username">
          <el-dropdown placement='bottom' trigger='click'>
            <span class="el-dropdown-link">
              <img class="profile-img" :src='getUserPortrait(userinfo)' alt="">
              <img src="@/assets/pac/bottom-dot.png" alt="">
            </span>
            <el-dropdown-menu class="header-dropdown" slot='dropdown'>
              <el-dropdown-item>
                <a href="#">我的资料</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="/#/mywork">我的作品</a>
              </el-dropdown-item>
              <el-dropdown-item @click.native='toLogout'>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
      <el-dropdown class="hidden-sm-and-up xs-dropdown" placement='bottom-end' @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-menu"></i>
        </span>
        <el-dropdown-menu class="header-dropdown xs-dropdown-menu" slot="dropdown">
          <el-dropdown-item>
            <a href="#">首页</a>
          </el-dropdown-item>
          <!-- <el-dropdown-item>
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
          </el-dropdown-item> -->
          <el-dropdown-item>
            <a href="http://www.paracraft.cn/download?lang=zh">相关下载</a>
          </el-dropdown-item>
          <el-dropdown-item command='apply' v-show="!isApplyPage">
            我要报名
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog :visible.sync="loginDialogVisible" width='500px' :show-close=false custom-class="login-dialog" :append-to-body=true>
      <login @close='setDialogVisible("loginDialogVisible", false)' @showJoinDialog='setDialogVisible("joinDialogVisible", true)' @onLogined='onLogined'></login>
    </el-dialog>
    <el-dialog :visible.sync="joinDialogVisible" width='500px' custom-class="join-dialog" :show-close=false :append-to-body=true>
      <join @close='setDialogVisible("joinDialogVisible", false)' @showLoginDialog='setDialogVisible("loginDialogVisible", true)' @onLogined='onLogined'></join>
    </el-dialog>
    <el-dialog class="applied-info-dialog" width='500px' title="" :visible.sync="appliedInfoDialogVisible">
      <p class="title">你已经报名过了!</p>
      <img src="@/assets/pac/flag.png" alt="">
      <p>
        <span class="fake-btn" @click="toUpload">去上传作品</span>
      </p>
      <p>
        <span class="cancel-btn" @click='setDialogVisible("appliedInfoDialogVisible", false)'>暂时不去</span>
      </p>
    </el-dialog>
  </header>
</template>
<script>
import keepwork from '@/api/keepwork'
import login from '../login'
import join from '../join'
import 'element-ui/lib/theme-chalk/display.css'
const iiccWebsiteId = process.env.IICC_WEBSITE_ID
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
      activeRoutePage: this.$route.name,
      isLogined: this.userinfo ? true : false,
      isUploadWorkPage: this.$route.name === 'uploadwork',
      isApplyPage: this.$route.name === 'register',
      isApplied: false,
      loginBeforFn: undefined,
      appliedInfoDialogVisible: false
    }
  },
  props: {
    userinfo: Object
  },
  mounted() {
    this.initIsApplied()
  },
  methods: {
    getUserPortrait() {
      let portrait = this.userinfo.portrait
      let KPOldDefaultPortrait = /^\/wiki\/assets\/imgs\/default_portrait.png/
      if (!portrait || KPOldDefaultPortrait.test(portrait)) {
        return 'http://keepwork.com/wiki/assets/imgs/default_portrait.png'
      }
      return this.userinfo.portrait
    },
    setDialogVisible(key, value) {
      this[key] = value
    },
    toApply() {
      this.loginBeforFn = undefined
      if (this.userinfo) {
        if (this.isApplied) {
          this.appliedInfoDialogVisible = true
          return
        }
        this.$router.push({ path: '/register' })
        return
      }
      this.loginBeforFn = 'toApply'
      this.loginDialogVisible = true
    },
    toUpload() {
      this.$router.push({ path: '/uploadwork' })
    },
    toLogout() {
      this.$emit('onLogOut')
      this.$router.push({ path: '/' })
    },
    onLogined() {
      this.loginDialogVisible = false
      this.joinDialogVisible = false
      this.$emit('onLogined')
    },
    handleCommand(type) {
      switch (type) {
        case 'apply':
          this.toApply()
          break
        default:
          break
      }
    },
    async initIsApplied() {
      if (this.userinfo && this.userinfo.username) {
        let username = this.userinfo.username
        await keepwork.websiteMember
          .getBySiteUsername({
            websiteId: iiccWebsiteId,
            username: username
          })
          .then(result => {
            if (result.data) {
              this.isApplied = true
              return
            }
          })
      } else {
        this.isApplied = false
      }
    }
  },
  watch: {
    async userinfo() {
      await this.initIsApplied()
      if (this.loginBeforFn) {
        this[this.loginBeforFn].apply(this)
      }
    }
  }
}
</script>
<style lang="scss">
.login-dialog,
.join-dialog {
  max-width: 90%;
}
.applied-info-dialog {
  .el-dialog__body {
    text-align: center;
    padding: 20px 0 25px;
    box-shadow: 0 12px 0 0 #d0d0d0;
  }
  .el-dialog__close {
    font-size: 36px;
    font-weight: bold;
  }
  .title {
    font-size: 28px;
    color: #353535;
    font-weight: bold;
    margin: 0 0 45px;
  }
  .fake-btn {
    display: inline-block;
    border-radius: 4px;
    max-width: 90%;
    width: 360px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background-color: #0ca6fe;
    box-shadow: 0 15px 0 0 #0e75af;
    margin: 30px 0;
    max-width: 90%;
    cursor: pointer;
  }
  .cancel-btn {
    cursor: pointer;
    color: #606266;
  }
  .cancel-btn:hover {
    color: #0e75af;
  }
}
.header-dropdown.el-popper {
  margin-top: 0;
  border: none;
  border-radius: 0;
  padding: 5px 0;
  background-color: #303133;
  a {
    color: #fff;
    text-decoration: none;
  }
  .popper__arrow::after {
    border-bottom-color: #303133;
  }
  .el-dropdown-menu__item {
    padding: 0 27px;
    color: #fff;
  }
  .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: #181619;
    color: #fff;
  }
}
.pac-header {
  height: 70px;
  line-height: 48px;
  padding: 11px 0;
  box-sizing: border-box;
  .brand {
    float: left;
    top: -3px;
    position: relative;
  }
  .container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }
  .clearfix::after {
    content: '';
    clear: both;
    display: table;
  }
  img {
    vertical-align: middle;
  }
  ul {
    float: right;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    float: left;
    padding: 0 24px;
  }
  a {
    color: #606266;
    text-decoration: none;
  }
  a:hover {
    color: #303133;
    font-weight: bold;
  }
  .join-btn {
    background-color: #253994;
    color: #fff;
    font-weight: bold;
    margin-left: 24px;
    border-radius: 4px;
    padding: 0 20.5px;
    font-size: 15px;
    cursor: pointer;
    img {
      margin-right: 10px;
      vertical-align: middle;
      top: -2px;
      position: relative;
    }
  }
  .login-btn {
    color: #606266;
    cursor: pointer;
    .iconfont {
      font-size: 24px;
      vertical-align: sub;
    }
  }
  .profile {
    // display: none;
    .profile-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .el-dropdown {
    font-size: 16px;
    cursor: pointer;
  }
  .disabled-link {
    cursor: not-allowed;
    color: #606266;
  }
  li.active a {
    font-weight: bold;
    color: #303133;
    position: relative;
  }
  li.active a::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background-color: #253994;
  }
}
</style>
<style lang="scss">
@media (max-width: 768px) {
  .pac-header {
    padding: 8px 15px;
    .xs-dropdown {
      float: right;
      font-size: 28px;
    }
  }
}
</style>
