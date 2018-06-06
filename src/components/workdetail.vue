<template>
  <div class="work-detail">
    <div class="main-container">
      <div class="decoration hidden-xs-only">
        <div class="white-bg"></div>
        <div class="transparent-bg"></div>
      </div>
      <div class="detail-header">
        <div class="top-square">
        </div>
        <div style="padding:8px 30px 0;background:#fff;width:88%">
            <h2 style="margin-bottom:0;height:30px">{{work.worksName}}
            <span class="info">作品编号：{{work._id}}</span>
          </h2>
        </div>
        <div style="background:#fff;padding:8px 30px;height:28px;">
          <p class="time">{{createYear}}年{{createMonth}}月{{createDay}}日</p>
        </div>
      </div>
      <div class="container row">
        
        <div class="content">
          <img :src="work.worksLogo" class="work-cover" alt="">
          <div class="detail">
            <div class="upload-work-info">
              <p>作品作者：
                <span>{{work.username}}</span>
              </p>
              <p>参赛组别：
                <span>{{worksFlag}}</span>
              </p>
              <p>参赛奖项：
                <span class="award-item" v-for="(aword, index) in work.awords" :key="index">{{aword}}</span>
              </p>
            </div>
            <div class="paracraft-info">
              <p>软件版本：
                <span>{{revision}}</span>
              </p>
              <p>作品大小：
                <span>{{filesTotals}}</span>
              </p>
            </div>
            <div class="other-info">
              <span class="info-item">
                <i class="iconfont icon-visit"></i>{{work.visitCount}}
              </span>
              <span class="info-item">
                <i class="iconfont icon-comment"></i>{{commentDataArr.length}}
              </span>
            </div>
          </div>
        </div>
        <div class="operates">
          <div class="fake-btn visit-btn">
            <span class="visit-inner-btn" @click="visitWork">参观</span>
            <span @click="showSocialShare(work)" class="fake-btn share-btn">
              <i class="iconfont icon-share"></i>
            </span>
            <el-popover class="pull-right" ref='share' trigger='click' @show='showSocialShare(work)' width='130'>
                <!-- <span class="share-trigger-btn" slot="reference">分享</span> -->
                <span class="share-trigger-btn fake-btn share-btn" slot="reference">
                  <i class="iconfont icon-share"></i>
                </span>
                <div :id="'work'+work.worksId" class="iicc-social-share"></div>
              </el-popover>
          </div>
        </div>
      </div>
      <div class="container row intro-row">
        <!-- <h1 class="title">
          <img src="@/assets/pac/video_title.png" alt="">
        </h1>
        <div class="work_video">
          <video id="video_1" class="" controls preload="none" width="785" height="435" poster="http://git.keepwork.com/gitlab_rls_xiaoyao/world_test1/raw/master/preview.jpg" data-setup="{}">
              <source src="@/assets/pac/defaultVideo.mp4" type='video/mp4' />
              <source src="http://视频地址格式2.webm" type='video/webm' />
              <source src="http://视频地址格式3.ogv" type='video/ogg' />
          </video>
        </div> -->
        <h1 class="title">
          <img src="@/assets/pac/work_intro_title.png" alt="">
        </h1>
        <p class="intro">
          {{work.worksDesc}}
        </p>
        <!-- <div class="vote-area">
          <p class="vote-info">
            <span>喜欢他的作品，就为他投上宝贵的一票吧</span>
          </p>
          <span v-show="!showLike" @click="toVote" class="iconfont icon-star vote-btn"></span>
          <transition name="fade">
          <span v-show="showLike" class="iconfont icon-star vote-btn vote-btn2"></span>
          </transition>
        </div> -->
      </div>
      <div class="container row comment-row">
        <textarea v-model.trim="work_comments" placeholder="谈谈你的感受"></textarea>
        <div class="clearfix">
          <span class="comment-btn pull-right" @click="toComment">评论</span>
        </div>
        <div class="comments">
          <h3>
            <i class="iconfont icon-comment"></i>作品评论
            <span class="info">{{commentDataArr.length}}条评论</span>
          </h3>
          <div v-for="(comment,index) in commentDataArr" :key="index" class="comments-box" v-show="index < showCommentCount">
            <div class="comment-item clearfix">
              <img :src='getUserPortrait(comment)' alt="" class="profile pull-left">
              <div class="comment-detail pull-left">
                <h4>{{comment.userInfo && comment.userInfo.username}}</h4>
                <p class="time">{{comment.createTime.split(' ')[0].split('-')[0]}}年{{comment.createTime.split(' ')[0].split('-')[1]}}月{{comment.createTime.split(' ')[0].split('-')[2]}}日 {{comment.createTime.split(' ')[1].split('-')[0]}}:{{comment.createTime.split(' ')[1].split('-')[1]}}:{{comment.createTime.split(' ')[1].split('-')[2]}}</p>
                <p class="comment-content">
                  {{comment.content}}
                </p>
              </div>
            </div>
          </div>
            <div v-if="commentDataArr.length > 3" class="viewMore" @click="viewMore">{{commentBottom}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import keepwork from '@/api/keepwork'
import axios from 'axios'
import sensitiveWord from '@/api/sensitiveWord'
const iiccWebsiteId = process.env.IICC_WEBSITE_ID
export default {
  name: 'workdetail',
  data() {
    return {
      userinfo: JSON.parse(localStorage.getItem('userinfo')),
      work: '',
      worksFlag: '',
      createYear: '',
      createMonth: '',
      createDay: '',
      showLike: false,
      work_comments: '',
      commentDataArr: [],
      showCommentCount: 3,
      commentBottom: '查看更多>',
      workUrl: this.$route.query.workUrl,
      revision: '',
      filesTotals: '',
      isSensitive: false
    }
  },
  created: function() {
    let authorization = 'bearer ' + JSON.parse(localStorage.getItem('token'))
    keepwork.websiteWorks
      .updateVisitCount({
        websiteId: iiccWebsiteId,
        worksUrl: this.workUrl
      })
      .then(result => {
        // console.log(result);
      })
      .catch(function(err) {
        console.log(err)
      })
    keepwork.websiteComment
      .getByPageUrl({
        url: this.workUrl,
        pageSize: 10000000
      })
      .then(result => {
        // console.log('全部评论')
        // console.log(result)
        this.commentDataArr = result.data.commentList
      })
      .catch(err => {})
    keepwork.websiteWorks
      .getByWorksUrl({
        websiteId: iiccWebsiteId,
        worksUrl: this.workUrl
      })
      .then(result => {
        console.log(result)
        let work = result.data
        this.work = work
        this.worksFlag = work.worksFlag == 3 ? '公开组' : '学生组'
        this.createYear = work.createDate.split(' ')[0].split('-')[0]
        this.createMonth = work.createDate.split(' ')[0].split('-')[1]
        this.createDay = work.createDate.split(' ')[0].split('-')[2]
        let baseUrl = ''
        switch (process.env.NODE_ENV) {
          case 'production':
            baseUrl = 'keepwork.com'
            break
          default:
            baseUrl = 'fix.pac.stage.keepwork.com'
            break
        }
        axios
          .create({
            baseURL: 'http://' + baseUrl,
            headers: { Authorization: authorization }
          })
          .post('/api/mod/worldshare/models/worlds/getWorldByFilePath', {
            filePath: work.worksUrl
          })
          .then(result => {
            let data = result.data.data
            this.revision = data.revision + '.0.0'
            this.filesTotals = (data.filesTotals / 1024).toFixed(2) + 'MB'
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        // console.log(error)
      })
  },
  methods: {
    visitWork() {
      window.location.href = '#'
    },
    getUserPortrait(comment) {
      if (comment.userInfo) {
        let portrait = comment.userInfo.portrait
        let KPOldDefaultPortrait = /^\/wiki\/assets\/imgs\/default_portrait.png/
        if (!portrait || KPOldDefaultPortrait.test(portrait)) {
          return 'http://keepwork.com/wiki/assets/imgs/default_portrait.png'
        }
        return portrait
      } else {
        return 'http://keepwork.com/wiki/assets/imgs/default_portrait.png'
      }
    },
    showSocialShare(work) {
      let worksName = work.worksName || '未知标题'
      window.socialShare(`#work${work.worksId}`, {
        mode: 'prepend',
        description: `快来看${work.username}做的作品《${worksName}》`,
        title: `${worksName}`,
        sites: ['qq', 'qzone', 'weibo', 'wechat'],
        wechatQrcodeTitle: '', // 微信二维码提示文字
        wechatQrcodeHelper: '扫描二维码打开网页',
        url: `${window.location.origin}/#/detail?workUrl=${work.worksUrl}`
      })
    },
    toVote() {
      this.showLike = true
      keepwork.websiteWorks
        .toVote({
          websiteId: iiccWebsiteId,
          worksUrl: this.workUrl
        })
        .then(result => {
          console.log(result)
        })
    },
    async checkSensitive(){
      let checkedWords = this.work_comments
      await sensitiveWord.checkSensitiveWords(checkedWords).then(result => {
        if(result && result.length > 0){
          this.isSensitive = true
        }else{
          this.isSensitive = false
        }
      }).catch(err => {
        console.log(err)
        this.isSensitive = false
      })
    },
    async toComment() {
      if (this.work_comments == '') return
      await this.checkSensitive()
      if(this.isSensitive){
        this.$message({ message: '评论中包含敏感词', center: true,type: 'warning' })
        return
      }
      if (this.commentDataArr.length >= this.showCommentCount) {
        this.commentBottom = '查看更多>'
      }
      keepwork.websiteComment
        .create({
          websiteId: iiccWebsiteId,
          userId: this.userinfo._id,
          url: this.workUrl,
          content: this.work_comments
        })
        .then(result => {
          keepwork.websiteComment
            .getByPageUrl({
              url: this.workUrl,
              pageSize: 10000000
            })
            .then(result => {
              this.commentDataArr = result.data.commentList
            })
            .catch(err => {})
        })
      this.work_comments = ''
    },
    viewMore() {
      if (this.commentDataArr.length <= this.showCommentCount) {
        this.showCommentCount = this.commentDataArr.length
        this.commentBottom = '到底了，没有更多评论了'
      } else {
        this.showCommentCount += 4
      }
    },
    reGetUserinfo() {
      this.userinfo = JSON.parse(localStorage.getItem('userinfo'))
    },
    toLogout() {
      this.userinfo = undefined
      localStorage.removeItem('token')
      localStorage.removeItem('userinfo')
    }
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.main-container {
  background-color: #f5f5f5;
  color: #909399;
  padding: 26px 0 80px;
}
.container {
  width: 90%;
  margin: 0 auto;
  max-width: 850px;
  font-size: 14px;
  background-color: #fff;
  position: relative;
  box-sizing: border-box;
}
.pull-right {
  float: right;
  color: #b0b4bb;
}
.clearfix::after {
  content: '';
  clear: both;
  display: table;
}
.title {
  margin: 0;
  padding: 26px 0;
  text-align: center;
  line-height: 1;
}
.row {
  margin-bottom: 26px;
  box-shadow: 0 10px 0 0 #d3d3d3;
}
h2 {
  font-size: 24px;
  color: #303133;
  margin: 0 0 15px;
  .info {
    font-size: 12px;
    color: #909399;
    font-weight: normal;
    margin-left: 10px;
  }
}
h3 {
  margin: 0;
  font-size: 18px;
  color: #303133;
  border-bottom: 1px solid #ddd;
  padding-bottom: 18px;
  .iconfont {
    font-size: 22px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .info {
    font-size: 12px;
    color: #909399;
  }
}
h4 {
  margin: 0;
  font-size: 14px;
  color: #fc721f;
}
p {
  margin: 0;
}
.detail-header {
  width: 90%;
  margin: 0 auto;
  max-width: 850px;
  font-size: 14px;
  height: 84px;
  position: relative;
  // background-color: #fff;
  box-sizing: border-box;
  // border:1px solid red;
  // padding: 8px 30px;
  border-bottom: 2px solid #f5f5f5;
  .top-square {
    width: 15%;
    height: 40px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .top-square:after {
    content: '';
    display: inline-block;
    width: 40px;
    height: 27px;
    background-color: #fff;
    position: absolute;
    right: -10px;
    top: -10px;
    box-shadow: 0px 10px 0px 0px #afafaf;
  }
  .top-square:before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 27px;
    background-color: #fff;
    position: absolute;
    right: -50px;
    top: 18px;
    box-shadow: 0px 10px 0px 0px #afafaf;
  }
}
.time {
  font-size: 14px;
  color: #606266;
}
.content {
  padding: 15px 30px;
  display: flex;
  border-bottom: 2px solid #f5f5f5;
}
.work-cover {
  width: 233px;
  height: 131px;
  object-fit: cover;
}
.detail {
  flex: 1;
  padding: 0 30px;
  font-size: 14px;
  p {
    margin-bottom: 5px;
  }
  span {
    color: #303133;
    margin-right: 10px;
  }
}
.paracraft-info {
  margin: 18px 0;
}
.other-info {
  font-size: 12px;
  span {
    color: #b0b4bb;
    margin-right: 16px;
  }
  .iconfont {
    margin-right: 5px;
    font-size: 23px;
    vertical-align: middle;
  }
}
.operates {
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.fake-btn {
  height: 36px;
  text-align: center;
  color: #fff;
  display: inline-block;
  border-radius: 4px;
}
.visit-btn {
  position: relative;
  .visit-inner-btn {
    display: inline-block;
    width: 160px;
    font-size: 18px;
    background-color: #3b5bed;
    box-shadow: 0 8px 0 0 #3047b0;
    line-height: 36px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
  }
}
.share-btn {
  width: 50px;
  background-color: #253994;
  box-shadow: 0 8px 0 0 #1a2b7c;
  position: absolute;
  right: -70px;
  top: 31px;
  line-height: 40px;
  .iconfont {
    font-size: 30px;
    font-weight: normal;
  }
}
.intro-row {
  padding: 0 30px;
  text-align: center;
  // padding-bottom: 200px;
  // position: relative;
  .vote-area {
    position: relative;
    padding-bottom: 150px;
    .vote-btn {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      display: inline-block;
      text-align: center;
      line-height: 72px;
      font-size: 42px;
      background-color: #fc721f;
      color: #fff;
      font-weight: bold;
      margin: 30px auto;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .vote-btn2 {
      background-color: #ccc;
    }
  }
}
.work-video {
  width: 100%;
  height: 440px;
}
.intro {
  font-size: 14px;
  color: #606266;
  text-align: left;
  padding-bottom: 35px;
}
.work_video {
  height: 440px;
  // border: 1px solid black;
}
.vote-info {
  position: relative;
  span {
    background-color: #fff;
    z-index: 1;
    position: relative;
    padding: 0 10px;
  }
}
.vote-info::after {
  content: '';
  display: inline-block;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #ddd;
  position: absolute;
  top: 10px;
}
textarea {
  width: 100%;
  height: 113px;
  resize: none;
  border: 2px solid #d4d4d4;
  background-color: #eee;
  padding: 10px;
  font-size: 14px;
  color: #909399;
  box-sizing: border-box;
  font-family: inherit;
}
textarea:focus {
  outline: none;
}
.comment-btn {
  width: 94px;
  height: 39px;
  line-height: 39px;
  font-size: 14px;
  color: #fff;
  background-color: #3b5bed;
  text-align: center;
  border-radius: 4px;
  margin: 10px 0 20px;
  cursor: pointer;
}
.comment-row {
  padding: 35px 30px 20px;
}
.comment-item {
  position: relative;
  padding: 31px 0;
  border-bottom: 1px solid #dddddd;
}
.comment-item::after {
  content: '';
  height: 1px;
  width: 100px;
  background-color: #ffffff;
  position: absolute;
  bottom: -1px;
}
.viewMore {
  height: 100px;
  text-align: center;
  line-height: 120px;
  text-decoration: underline;
  color: #303133;
  cursor: pointer;
}
.profile {
  width: 76px;
  height: 76px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
  position: absolute;
  padding: 31px 0;
  left: 0;
  top: 0;
}
.comment-detail {
  padding-left: 96px;
}
.comment-content {
  margin-top: 20px;
  font-size: 12px;
  color: #606266;
}
</style>
<style lang="scss">
.iicc-social-share.social-share {
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