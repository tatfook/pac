<template>
  <div class="myworks">
    <Header :userinfo='userinfo' @onLogined='reGetUserinfo' @onLogOut='toLogout'></Header>
    <main>
      <Banner :userinfo='userinfo' @onLogined='reGetUserinfo'></Banner>
      <div class="main-container">
        <div class="decoration hidden-xs-only">
          <div class="white-bg"></div>
          <div class="transparent-bg"></div>
        </div>
        <div class="container">
          <h1 class="title">
            <img src="@/assets/pac/my_works_title.png" alt="">
          </h1>
          <div class="works" v-if="myworksArr.length > 0">
            <div class="work-item" v-for="(work, index) in myworksArr" :key="index">
              <div class="work-title">
                <h3>{{work.worksName}}</h3>
                <p class="time">{{formatDate(work.updateDate)}}</p>
                <span class="id-label" :title="(work.worksState === 'normal') ? '作品编号': '正在审核中'" :class="{'warning': work.worksState !== 'normal'}">{{(work.worksState === 'normal') ? work._id : '待审核'}}</span>
              </div>
              <div class="work-content">
                <img class="profile" :src='work.worksLogo' alt="">
                <div class="info">
                  <div class="info-item">
                    <span class="label">参赛组别：</span>
                    <div class="info-content">{{(work.worksFlag === 4) ? '学生组' : '公开组'}}</div>
                  </div>
                  <div class="info-item">
                    <span class="label">参赛奖项：</span>
                    <div class="info-content">
                      <span class="ward-item" v-for="(ward, index) in work.awords.split(',')" :key='index'>{{ward}}</span>
                    </div>
                  </div>
                  <div class="info-item intro">
                    <span class="label">作品简介：</span>
                    <div class="info-content">{{work.worksDesc}}</div>
                  </div>
                  <div class="other-info clearfix">
                    <div class="pull-left">
                      <span class="other-info-item">
                        <i class="iconfont icon-visit"></i>{{work.visitCount || 0}}</span>
                      <span class="other-info-item">
                        <i class="iconfont icon-comment"></i>{{work.commentCount || 0}}</span>
                      <span class="other-info-item">
                        <i class="iconfont icon-star"></i>{{work.starCount || 0}}</span>
                    </div>
                    <el-popover class="pull-right" ref='share' trigger='click' @show='showSocialShare(work)' width='130'>
                      <span class="share-trigger-btn" slot="reference">分享</span>
                      <div :id="'work'+work._id" class="kp-social-share"></div>
                    </el-popover>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="empty" v-if="myworksArr.length <= 0">
            <p>还没有上传过作品
              <span class="fake-btn" @click="toUpload">立马上传</span>
            </p>
          </div>
          <el-dialog :visible.sync='uploadDialogVisible' width='500px'>
            <h1>上传作品</h1>
            <p>上传作品功能开发中， 敬请期待</p>
          </el-dialog>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import keepwork from '@/api/keepwork'
import Header from './common/header'
import Banner from './common/banner'
import Footer from './common/footer'
import 'element-ui/lib/theme-chalk/display.css'
import 'social-share.js/dist/js/social-share.min.js'
import 'social-share.js/dist/css/share.min.css'
const iiccWebsiteId = process.env.IICC_WEBSITE_ID
export default {
  name: 'register',
  components: {
    Header,
    Banner,
    Footer
  },
  data() {
    return {
      myworksArr: [],
      uploadDialogVisible: false,
      userinfo: JSON.parse(localStorage.getItem('userinfo'))
    }
  },
  mounted() {
    this.getAllWorks()
  },
  methods: {
    reGetUserinfo() {
      this.userinfo = JSON.parse(localStorage.getItem('userinfo'))
    },
    toLogout() {
      this.userinfo = undefined
      localStorage.removeItem('userinfo')
      localStorage.removeItem('token')
    },
    getAllWorks() {
      keepwork.websiteWorks
        .getByUsername({
          websiteId: iiccWebsiteId
        })
        .then(result => {
          if (result.data) {
            this.myworksArr = result.data
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    showSocialShare(work) {
      window.socialShare(`#work${work._id}`, {
        mode: 'prepend',
        description: `快来看我做的作品《${work.worksName}》`,
        title: `${work.worksName}`,
        sites: ['qq', 'qzone', 'weibo', 'wechat'],
        wechatQrcodeTitle: '', // 微信二维码提示文字
        wechatQrcodeHelper: '扫描二维码打开网页',
        url: `${window.location.origin}${work.worksUrl}`
      })
    },
    formatDate(date) {
      let dateParams = date.split('-')
      return `${dateParams[0]}年${dateParams[1]}月${dateParams[2]}日`
    },
    toUpload() {
      this.uploadDialogVisible = true
    }
  }
}
</script>
<style lang="scss" scoped>
.main-container {
  background-color: #f5f5f5;
  margin-bottom: -70px;
}
.container,
.decoration {
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
  font-size: 14px;
  padding: 0 50px 50px;
  background-color: #fff;
  position: relative;
  top: -95px;
  box-sizing: border-box;
}
.container::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;
  background-color: transparent;
  background-size: 20px 20px;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 5.6px,
    #d8d8d8 5.6px,
    #d8d8d8 6.1px,
    #3b3b3b 6.1px,
    #3b3b3b 6.6px,
    #d8d8d8 7.1px
  );
}
h3 {
  font-size: 18px;
  margin: 0;
  color: #303133;
}
p {
  margin: 0;
}
.pull-left {
  float: left;
}
.pull-right {
  float: right;
}
.clearfix::after {
  content: '';
  clear: both;
  display: table;
}
.decoration {
  display: flex;
  position: relative;
  top: -95px;
  height: 40px;
  padding: 0;
  background-color: transparent;
  .white-bg {
    background-color: #fff;
    flex: 1;
  }
  .transparent-bg {
    width: 40px;
    background-color: transparent;
    position: relative;
  }
  .transparent-bg::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 27px;
    background-color: #fff;
    position: absolute;
    left: 15px;
    bottom: 25px;
    box-shadow: 0px 8px 0px 0px #afafaf;
  }
  .transparent-bg::after {
    content: '';
    display: inline-block;
    width: 40px;
    height: 27px;
    background-color: #fff;
    position: absolute;
    left: 55px;
    bottom: -12px;
    box-shadow: 0px 8px 0px 0px #afafaf;
  }
}
.title {
  margin: 0;
  text-align: center;
  padding-bottom: 40px;
  margin-bottom: 50px;
  position: relative;
}
.title::before {
  content: '';
  display: inline-block;
  width: 100%;
  height: 8px;
  position: absolute;
  left: 0;
  bottom: -8px;
  background-color: #cfcfcf;
}
.title::after {
  content: '';
  display: inline-block;
  height: 8px;
  position: absolute;
  left: 20px;
  right: 20px;
  border: 15px solid #fff;
  border-width: 0 15px;
  bottom: -8px;
  background-color: #cfcfcf;
}
.work-item {
  margin-bottom: 30px;
  transition: all 0.5s;
}
.work-item:hover {
  transition: all 0.5s;
  box-shadow: 0px 8px 0px 0px #e5e5e5;
}
.work-title {
  padding: 6px 20px;
  background-color: #f5f5f5;
  position: relative;
  border: 2px solid #e5e5e5;
  .time {
    font-size: 12px;
    color: #909399;
    margin-top: 5px;
  }
}
.id-label {
  display: inline-block;
  width: 60px;
  height: 26px;
  background-color: #3b5bed;
  color: #fff;
  font-size: 12px;
  position: absolute;
  right: -2px;
  top: 12px;
  text-align: center;
  line-height: 26px;
  z-index: 0;
}
.id-label::before {
  content: '';
  display: inline-block;
  position: absolute;
  left: -10px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #3b5bed;
  z-index: -1;
}
.id-label.warning,
.id-label.warning::before {
  background-color: #e25555;
}
.work-content {
  display: flex;
  align-items: stretch;
  padding: 20px;
  border: 2px solid #e5e5e5;
  border-top: none;
}
.profile {
  width: 280px;
  height: 160px;
  object-fit: cover;
  margin-right: 20px;
  flex-shrink: 0;
}
.info {
  flex: 1;
  position: relative;
}
.info-item {
  display: flex;
  margin-bottom: 5px;
  .label {
    color: #909399;
    flex-shrink: 0;
  }
  .info-content {
    color: #303133;
  }
  .ward-item {
    margin-right: 15px;
  }
}
.intro {
  .info-content {
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
}
.other-info {
  color: #b0b4bb;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  .other-info-item {
    margin-right: 15px;
  }
  .iconfont {
    font-size: 24px;
    vertical-align: middle;
    margin-right: 5px;
  }
}
.share-trigger-btn {
  cursor: pointer;
}
.fake-btn {
  cursor: pointer;
  color: #019fe8;
}
.empty {
  text-align: center;
}
</style>
<style lang="scss">
.kp-social-share.social-share {
  text-align: center;

  .icon-wechat {
    visibility: hidden;
    height: 150px;

    .wechat-qrcode {
      top: 0;
      left: -40px;
      width: 110px;
      background-color: transparent;
      box-shadow: none;
      border: none;
      visibility: visible;
      display: block;
      height: 165px;
    }
    .wechat-qrcode::after {
      content: none;
    }
    h4 {
      display: none;
    }
  }
}
</style>

