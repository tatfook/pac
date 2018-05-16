<template>
  <div class="all-works">
    <Header :userinfo='userinfo' @onLogined='reGetUserinfo' @onLogOut='toLogout'></Header>
    <Banner :userinfo='userinfo' @onLogined='reGetUserinfo'></Banner>
    <div class="main-container">
      <div class="container">
        <div class="decoration hidden-xs-only">
          <div class="white-bg"></div>
          <div class="transparent-bg"></div>
        </div>
        <h1 class="title">
          <img src="@/assets/pac/all_works_title.png" alt="">
        </h1>
        <div class="works">
          <div class="work-item" v-for="(work, index) in allWorksArr" :key='index'>
            <span class="id-label">{{work._id}}</span>
            <img class="cover" :src="work.worksLogo" alt="">
            <h2>{{work.worksName || '暂无标题'}}</h2>
            <p class="time">{{work.updateDate || '时间未知'}}</p>
            <p class="other-info">
              <span class="other-info-item">
                <i class="iconfont icon-visit"></i>{{work.visitCount || 0}}
              </span>
              <span class="other-info-item">
                <i class="iconfont icon-comment"></i>{{work.commentCount || 0}}
              </span>
              <span class="other-info-item">
                <i class="iconfont icon-star"></i>{{work.starCount || 0}}
              </span>
            </p>
            <div class="bottom clearfix">
              <div class="pull-left">
                <img class="profile" src="http://stage.keepwork.com/wiki/assets/imgs/default_portrait.png?bust=1526455131" alt="">
                <span>abcd</span>
              </div>
              <div class="pull-right">分享</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import keepwork from '@/api/keepwork'
import Header from './common/header'
import Banner from './common/banner'
import Footer from './common/footer'
const iiccWebsiteId = process.env.IICC_WEBSITE_ID
export default {
  name: 'allwork',
  components: {
    Header,
    Banner,
    Footer
  },
  data() {
    return {
      userinfo: JSON.parse(localStorage.getItem('userinfo')),
      allWorksArr: [],
      worksCount: 0
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
    },
    getAllWorks() {
      keepwork.websiteWorks
        .search({
          websiteId: iiccWebsiteId
        })
        .then(result => {
          if (result.data) {
            this.allWorksArr = result.data.list
            this.worksCount = result.data.total
          }
        })
        .catch(error => {
          console.log(error)
        })
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
  color: #303133;
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
h2 {
  font-size: 16px;
  color: #303133;
  margin: 14px 13px 9px;
}
.time {
  font-size: 12px;
  color: #909399;
  margin: 0 13px;
}
.other-info {
  font-size: 12px;
  color: #b0b4bb;
  margin: 15px 13px 6px;
}
.other-info-item {
  margin-right: 10px;
}
.iconfont {
  font-size: 22px;
  vertical-align: middle;
  margin-right: 5px;
}
.works {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.work-item {
  width: 300px;
  border: 2px solid #f5f5f5;
  margin-bottom: 40px;
  position: relative;
}
.id-label {
  position: absolute;
  left: -2px;
  top: 20px;
  width: 60px;
  height: 26px;
  color: #fff;
  font-size: 12px;
  background-color: #3b5bed;
  text-align: center;
  line-height: 26px;
}
.cover {
  width: 280px;
  height: 160px;
  object-fit: cover;
  margin: 10px auto;
  display: block;
}
.profile {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.bottom {
  border-top: 2px solid #f5f5f5;
  height: 50px;
  line-height: 50px;
  padding: 0 23px 0 15px;
}
</style>
