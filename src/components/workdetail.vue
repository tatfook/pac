<template>
  <div class="work-detail">
    <Header :userinfo='userinfo' @onLogined='reGetUserinfo' @onLogOut='toLogout'></Header>
    <div class="main-container">
      <div class="decoration hidden-xs-only">
        <div class="white-bg"></div>
        <div class="transparent-bg"></div>
      </div>
      <div class="container row">
        <div class="detail-header">
          <h2>Heart And Hands
            <span class="info">作品编号：123456</span>
          </h2>
          <p class="time">{{createYear}}年{{createMonth}}月{{createDay}}日</p>
        </div>
        <div class="content">
          <img :src="worksLogo" class="work-cover" alt="">
          <div class="detail">
            <div class="upload-work-info">
              <p>作品作者：
                <span>{{username}}</span>
              </p>
              <p>参赛组别：
                <span>{{worksFlag}}</span>
              </p>
              <p>参赛奖项：
                <span class="award-item">{{awords}}</span>
              </p>
            </div>
            <div class="paracraft-info">
              <p>软件版本：
                <span>1.0.0.6</span>
              </p>
              <p>作品大小：
                <span>2MB</span>
              </p>
            </div>
            <div class="other-info">
              <span class="info-item">
                <i class="iconfont icon-visit"></i>{{visitCount}}
              </span>
              <span class="info-item">
                <i class="iconfont icon-comment"></i>{{commentCount}}
              </span>
            </div>
          </div>
        </div>
        <div class="operates">
          <div class="fake-btn visit-btn">
            <span>参观</span>
            <span class="fake-btn share-btn">
              <i class="iconfont icon-share"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="container row intro-row">
        <h1 class="title">
          <img src="@/assets/pac/video_title.png" alt="">
        </h1>
        <img src="http://git.keepwork.com/gitlab_rls_xiaoyao/world_test1/raw/master/preview.jpg" class="work-video" alt="">
        <h1 class="title">
          <img src="@/assets/pac/work_intro_title.png" alt="">
        </h1>
        <p class="intro">
          {{worksDesc}}
        </p>
        <div class="vote-area">
          <p class="vote-info">
            <span>喜欢他的作品，就为他投上宝贵的一票吧</span>
          </p>
          <span class="iconfont icon-star vote-btn"></span>
        </div>
      </div>
      <div class="container row comment-row">
        <textarea placeholder="谈谈你的感受"></textarea>
        <div class="clearfix">
          <span class="comment-btn pull-right">评论</span>
        </div>
        <div class="comments">
          <h3>
            <i class="iconfont icon-comment"></i>作品评论
            <span class="info">1234条评论</span>
          </h3>
          <div class="comments-box">
            <div class="comment-item clearfix">
              <img src="http://keepwork.com/wiki/assets/imgs/default_portrait.png" alt="" class="profile pull-left">
              <div class="comment-detail pull-left">
                <h4>A smooth traveler</h4>
                <p class="time">2017年4月28日 16:44</p>
                <p class="comment-content">
                  评论内容评论内容评论内容评论内容评论内容
                </p>
              </div>
            </div>
            <div class="comment-item clearfix">
              <img src="http://keepwork.com/wiki/assets/imgs/default_portrait.png" alt="" class="profile pull-left">
              <div class="comment-detail pull-left">
                <h4>A smooth traveler</h4>
                <p class="time">2017年4月28日 16:44</p>
                <p class="comment-content">
                  评论内容评论内容评论内容评论内容评论内容
                </p>
              </div>
            </div>
            <div class="comment-item clearfix">
              <img src="http://keepwork.com/wiki/assets/imgs/default_portrait.png" alt="" class="profile pull-left">
              <div class="comment-detail pull-left">
                <h4>A smooth traveler</h4>
                <p class="time">2017年4月28日 16:44</p>
                <p class="comment-content">
                  评论内容评论内容评论内容评论内容评论内容
                </p>
              </div>
            </div>
            <div class="viewMore">查看更多></div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import keepwork from "@/api/keepwork";
import Header from "./common/header";
import Footer from "./common/footer";
const iiccWebsiteId = process.env.IICC_WEBSITE_ID;
export default {
  name: "workdetail",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      userinfo: JSON.parse(localStorage.getItem("userinfo")),
      username: '',//作品作者
      worksFlag: '',//组别
      awords: '',//参赛奖项
      visitCount: '',//浏览数
      commentCount: '',//评论数
      createYear: '',
      createMonth: '',
      createDay: '',
      worksLogo: '',//作品封面
      worksDesc: '',//作品简介
    };
  },
  created: function() {
    let authorization = "bearer " + JSON.parse(localStorage.getItem("token"));
    let that = this
    keepwork.getByWorksUrl
      .worksUrl({
        websiteId: iiccWebsiteId,
        worksUrl: "xiaoyao/paracraft/index"
      })
      .then(function(result) {
        console.log(result);
        let data = result.data
        that.username = data.username;
        that.worksFlag = data.worksFlag == 3 ? '公开组' : '学生组'
        that.awords = data.awords
        that.visitCount = data.visitCount
        that.commentCount = data.commentCount
        that.createYear = data.createDate.split(' ')[0].split('-')[0]
        that.createMonth = data.createDate.split(' ')[0].split('-')[1]
        that.createDay = data.createDate.split(' ')[0].split('-')[2]
        that.worksLogo = data.worksLogo
        that.worksDesc = data.worksDesc
      })
      .catch(function(error) {
        // console.log(error)
      });
  },
  methods: {
    reGetUserinfo() {
      this.userinfo = JSON.parse(localStorage.getItem("userinfo"));
    },
    toLogout() {
      this.userinfo = undefined;
      localStorage.removeItem("token");
      localStorage.removeItem("userinfo");
    }
  }
};
</script>
<style lang="scss" scoped>
.main-container {
  background-color: #f5f5f5;
  color: #909399;
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
  content: "";
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
  padding: 8px 30px;
  border-bottom: 2px solid #f5f5f5;
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
  }
}
.paracraft-info {
  margin: 25px 0;
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
  width: 160px;
  font-size: 18px;
  background-color: #3b5bed;
  box-shadow: 0 8px 0 0 #3047b0;
  font-weight: bold;
  position: relative;
  line-height: 36px;
}
.share-btn {
  width: 50px;
  background-color: #253994;
  box-shadow: 0 8px 0 0 #1a2b7c;
  position: absolute;
  right: -70px;
  line-height: 40px;
  .iconfont {
    font-size: 30px;
    font-weight: normal;
  }
}
.intro-row {
  padding: 0 30px;
  text-align: center;
}
.work-video {
  width: 100%;
  height: 440px;
}
.intro {
  font-size: 14px;
  color: #606266;
  text-align: left;
  margin-bottom: 35px;
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
  content: "";
  display: inline-block;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #ddd;
  position: absolute;
  top: 10px;
}
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
  margin: 30px 0;
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
  content: "";
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
