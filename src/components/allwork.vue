<template>
  <div class="all-works">
    <div class="main-container">
      <div class="decoration hidden-xs-only">
        <div class="white-bg"></div>
        <div class="transparent-bg"></div>
      </div>
      <div class="container">
        <h1 class="title">
          <img src="@/assets/pac/all_works_title.png" alt="">
        </h1>
        <div class="search-row clearfix">
          <div class="search-item">
            <span class="label">组别：</span>
            <el-dropdown @command="setSelectWorksFlag" class="flag-select search-dropdown">
              <span class="el-dropdown-link">
                {{selectWorksFlag}}
                <img class="dropdown-icon" src="@/assets/pac/bottom-dot.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>全部</el-dropdown-item>
                <el-dropdown-item :command=3>公开组</el-dropdown-item>
                <el-dropdown-item :command=4>学生组</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="search-item">
            <span class="label">奖项类别筛选：</span>
            <el-dropdown @command="setSelectAward" class="award-select search-dropdown">
              <span class="el-dropdown-link">
                {{searchParams.awords || '全部'}}
                <img class="dropdown-icon" src="@/assets/pac/bottom-dot.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown" class="awards-dropdown-menu">
                <el-dropdown-item v-for="(award, index) in usableAwards" :key="index" :command=award>{{award}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="search-item">
            <span class="label">排序：</span>
            <el-dropdown @command="setSelectOrder" class="order-select search-dropdown">
              <span class="el-dropdown-link">
                {{selectOrder}}
                <img class="dropdown-icon" src="@/assets/pac/bottom-dot.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(order, index) in usableOrders" :key="index" :command=order>{{order.text}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="search-item">
            <div class="input-group">
              <input v-model="searchParams.keyword" type="text" placeholder="请输入作品名称/编号/作者">
              <span class="iconfont icon-search" @click="doSearch"></span>
            </div>
          </div>
        </div>
        <div class="works">
          <div class="work-item" v-for="(work, index) in allWorksArr" :key='index'>
            <span class="id-label">{{work.worksId}}</span>
            <img class="cover" :src="work.worksLogo" alt="" @click="enterWorkDetail(work.worksUrl)">
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
                <span>{{work.username}}</span>
              </div>
              <el-popover class="pull-right" ref='share' trigger='click' @show='showSocialShare(work)' width='130'>
                <span class="share-trigger-btn" slot="reference">分享</span>
                <div :id="'work'+work.worksId" class="iicc-social-share"></div>
              </el-popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import keepwork from '@/api/keepwork'
const iiccWebsiteId = process.env.IICC_WEBSITE_ID
const Awards = {
  default: {
    key: undefined,
    text: '全部'
  },
  '3': [
    'NPL 大奖',
    'NPL 最佳教程奖',
    'NPL 最佳编程奖',
    'NPL 最佳场景设计奖',
    'NPL 最佳3D角色奖',
    'NPL 最佳开源贡献奖',
    'NPL 老顽童奖',
    'NPL 小小梦想家',
    'NPL 人气十佳'
  ],
  '4': [
    'NPL 最佳故事短片奖',
    'NPL 优秀游戏作品奖',
    'NPL 优秀材质奖',
    'NPL 优秀视觉特效奖',
    'NPL 优秀原创音效奖',
    'NPL 优秀剧本创意奖',
    'NPL 人气十佳'
  ]
}
export default {
  name: 'allwork',
  data() {
    return {
      userinfo: JSON.parse(localStorage.getItem('userinfo')),
      allWorksArr: [],
      worksCount: 0,
      usableOrders: [
        {
          key: 'createDate',
          text: '最新上传',
          commondValue: { createDate: 'desc' }
        },
        {
          key: 'visitCount',
          text: '最多浏览',
          commondValue: { visitCount: 'desc' }
        },
        {
          key: 'voteCount',
          text: '最多投票',
          commondValue: { voteCount: 'desc' }
        }
      ],
      selectOrder: '',
      searchParams: {
        websiteId: iiccWebsiteId,
        worksFlag: undefined,
        awords: '',
        order: {
          createDate: 'desc'
        },
        keyword: ''
      }
    }
  },
  mounted() {
    this.doSearch()
    this.searchParams.awords = this.usableAwards[0].key
    this.searchParams.order = this.usableOrders[0].commondValue
    this.selectOrder = this.usableOrders[0].text
  },
  methods: {
    enterWorkDetail(url) {
      this.$router.push({
        name: 'workdetail',
        query: {
          workUrl: url
        }
      })
    },
    reGetUserinfo() {
      this.userinfo = JSON.parse(localStorage.getItem('userinfo'))
    },
    toLogout() {
      this.userinfo = undefined
      localStorage.removeItem('userinfo')
      localStorage.removeItem('token')
    },
    setSelectWorksFlag(value) {
      if (value === this.searchParams.worksFlag) {
        return
      }
      switch (value) {
        case 3:
        case 4:
          this.searchParams.worksFlag = value
          break
        default:
          this.searchParams.worksFlag = undefined
          break
      }
      this.searchParams.awords = this.usableAwards[0].key
      this.doSearch()
    },
    setSelectAward(value) {
      this.searchParams.awords = value === '全部' ? undefined : value
      this.doSearch()
    },
    setSelectOrder(order) {
      this.searchParams.order = order.commondValue
      this.selectOrder = order.text
      this.doSearch()
    },
    doSearch() {
      keepwork.websiteWorks
        .search(this.searchParams)
        .then(result => {
          console.log(result)
          if (result.data) {
            this.allWorksArr = result.data.list
            this.worksCount = result.data.total
          }
        })
        .catch(error => {
          console.log(error)
        })
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
    }
  },
  computed: {
    selectWorksFlag() {
      let selectWorksFlagText = ''
      switch (this.searchParams.worksFlag) {
        case 3:
          selectWorksFlagText = '公开组'
          break
        case 4:
          selectWorksFlagText = '学生组'
          break
        default:
          selectWorksFlagText = '全部'
          break
      }
      return selectWorksFlagText
    },
    usableAwards() {
      let worksFlag = this.searchParams.worksFlag
      let result = []
      switch (worksFlag) {
        case 3:
        case 4:
          result = [Awards['default'].text].concat(Awards[worksFlag])
          break
        default:
          result = [Awards['default'].text]
            .concat(Awards['3'])
            .concat(Awards['4'])
          break
      }
      return result
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
.search-row {
  margin: 24px 0 36px;
  text-align: center;
}
.search-item {
  display: inline-block;
  margin-right: 32px;
  .input-group {
    background-color: #303133;
    border: 2px solid;
    input {
      height: 34px;
      border: none;
      padding: 0 13px;
      background-color: #eee;
    }
    input:focus {
      outline: none;
    }
    .iconfont {
      color: #fff;
      display: inline-block;
      width: 48px;
      margin: 0;
      text-align: center;
      font-size: 26px;
    }
  }
}
.search-item:last-child {
  margin-right: 0;
}
.search-dropdown {
  text-align: left;
  font-size: 13px;
  padding: 0 13px;
  background-color: #eee;
  color: #606266;
  height: 38px;
  line-height: 38px;
  box-sizing: border-box;
  position: relative;
  .el-dropdown-link {
    display: inline-block;
    min-width: 100%;
  }
}
.dropdown-icon {
  position: absolute;
  right: 13px;
  top: 16px;
}
.flag-select {
  min-width: 88px;
}
.award-select {
  min-width: 165px;
}
.order-select {
  min-width: 100px;
}
.awards-dropdown-menu {
  max-height: 250px;
  overflow: auto;
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
  align-items: flex-start;
}
.work-item {
  width: 300px;
  border: 2px solid #f5f5f5;
  margin-bottom: 40px;
  margin: 0 40px 40px 0;
  position: relative;
  box-sizing: border-box;
}
.work-item:nth-child(3n + 0) {
  margin-right: 0;
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
.share-trigger-btn {
  cursor: pointer;
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
