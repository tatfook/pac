<template>
  <div class="pac">
    <header class="pac-header">
      <div class="container clearfix">
        <div class="brand">
          <img src="@/assets/pac/logo.png" alt="">
        </div>
        <ul class="clearfix">
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
          <li class="join-btn"><img src="@/assets/pac/camera.png" alt="">我要报名</li>
          <li class="profile">profile</li>
        </ul>
      </div>
    </header>
    <main>
      <div class="row">
        <div class="banner">
          <img class="bg" src="@/assets/pac/banner.png" alt="">
          <div class="container">
            <div class="banner-content">
              <img src="@/assets/pac/banner-title.png" alt="">
              <div class="buttons">
                <img src="@/assets/pac/button-join.png" alt="">
                <img src="@/assets/pac/button-download.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row intro-row">
        <div class="container">
          <div class="content">
            <h1 class="title">
              <span>大赛简介</span>
            </h1>
            <p class="intro">PAC全国3D创作大赛2017夏季赛 由Shenzhen ACM SIGGRAPH Chapter与Tatfook Inc 联合举办。PAC全称是Paracraft Animation Contest, 每年举办两届，主要面向中小学和大学生，旨在让参赛者通过Paracraft软件学习3D动画创作和计算机编程，制作出有意义的个人电脑作品，并以开源的形式保存和分享到互联网中。同时参加PAC大赛也是北京开放大学创意学院，计算机语言课程的唯一毕业方式。 参赛作品所有权归举办方和参赛者共同所有。</p>
            <div class="paracraft">
              <img src="@/assets/pac/paracraft_topmenu_logo.png" alt="">
              <div class="paracraft-intro">
                <p>
                  <span>Paracraft 创意空间</span>是一款面向7岁以上用户的免费的3D创作软件。</p>
                <p>你可以用它创建3D场景和人物，制作动画和电影，学习和编写计算机程序。下载软件后，</p>
                <p>可观看百部优秀的用户电影作品，创造属于你的个人作品。</p>
              </div>
              <div class="more">
                <img src="@/assets/pac/know.png" alt="">
                <p>了解更多</p>
              </div>
            </div>
            <p class="paracraft-info">Paracraft创意空间是官方指定唯一的比赛创作软件。</p>
          </div>
        </div>
      </div>
      <div class="row wards-row">
        <div class="container">
          <h1 class="title">
            <span>奖金奖项</span>
          </h1>
          <p class="row-info">努力，并不容易，而你一直在努力，付出，并不容易，而你付出了很多很多。</p>
          <div class="classify clearfix">
            <div class="item-box">
              <img class="trophy-img" src="@/assets/pac/trophy.png" alt="">
              <div class="rank-item">
                <h1>
                  <span>公开组
                    <img class="circle-decoration" src="@/assets/pac/circle.png" alt="">
                  </span>
                </h1>
                <p class="item-info">针对优秀的动画制作团队<br>及动画爱好者</p>
                <el-collapse v-model="rank1ActiveName" accordion>
                  <el-collapse-item name="1">
                    <template slot='title'>
                      <h3>NPL 大奖
                        <span>(1个，
                          <span>100万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="2">
                    <template slot='title'>
                      <h3>NPL 最佳教程奖
                        <span>(1个，
                          <span>20万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="3">
                    <template slot='title'>
                      <h3>NPL 最佳编程奖
                        <span>(1个，
                          <span>20万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="4">
                    <template slot='title'>
                      <h3>NPL 最佳场景设计奖
                        <span>(1个，
                          <span>15万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="5">
                    <template slot='title'>
                      <h3>NPL 3D角色制作奖
                        <span>(1个，
                          <span>15万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="6">
                    <template slot='title'>
                      <h3>NPL 最佳开源贡献奖
                        <span>(1个，
                          <span>5万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
            <div class="item-box">
              <img class="trophy-img" src="@/assets/pac/trophy.png" alt="">
              <div class="rank-item">
                <h1>
                  <span>
                    学生组
                    <img class="circle-decoration" src="@/assets/pac/circle.png" alt="">
                  </span>
                </h1>
                <p class="item-info">针对在校学生</p>
                <el-collapse v-model="rank2ActiveName" accordion>
                  <el-collapse-item name="1">
                    <template slot='title'>
                      <h3>NPL 最佳故事短片奖
                        <span>(1个，
                          <span>10万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="2">
                    <template slot='title'>
                      <h3>NPL 最佳游戏作品奖
                        <span>(20个，
                          <span>最高可获得5万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="3">
                    <template slot='title'>
                      <h3>NPL 最佳材质奖
                        <span>(20个，
                          <span>最高可获得5万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="4">
                    <template slot='title'>
                      <h3>NPL 最佳视觉特效奖
                        <span>(20个，
                          <span>最高可获得5万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="5">
                    <template slot='title'>
                      <h3>NPL 最佳原创音效奖
                        <span>(20个，
                          <span>最高可获得5万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="6">
                    <template slot='title'>
                      <h3>NPL 最佳剧本创意奖
                        <span>(20个，
                          <span>最高可获得5万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="row requirement-row">
        <div class="container">
          <h1 class="title">
            <span>作品要求</span>
          </h1>
          <ul>
            <li>
              <img src="@/assets/pac/little dot.png" alt=""> 作品需使用电影方块，主题正面，电影类、创意类等均可。
            </li>
            <li>
              <img src="@/assets/pac/little dot.png" alt=""> 所有参赛作品必须是在2017年12月29日及之前没有在任何创作平台公开发表过的作品。
            </li>
            <li>
              <img src="@/assets/pac/little dot.png" alt=""> 参赛作者可同时报名多个作品，官方鼓励作品的原创与多样性，同时也鼓励改编和重构其他作品。
            </li>
            <li>
              <img src="@/assets/pac/little dot.png" alt=""> 如果参考了创意空间的其它作品需要注明来源，如发现公开冒充他人作品则直接取消参赛资格。
            </li>
            <li>
              <img src="@/assets/pac/little dot.png" alt=""> 参考非创意空间的其他作品，作者可自行决定是否引用来源。
            </li>
          </ul>
        </div>
      </div>
      <div class="row process-row">
        <h1 class="title">
          <span>评选流程</span>
        </h1>
        <div class="time-shaft clearfix">
          <div class="shaft-item">
            <p>作品征集</p>
            <p>2017年12月23日</p>
          </div>
          <div class="shaft-item">
            <p>截稿</p>
            <p>2017年12月23日</p>
          </div>
          <div class="shaft-item">
            <p>评选获奖作品</p>
            <p>2017年12月23日</p>
          </div>
          <div class="shaft-item">
            <p>公布获奖作品</p>
            <p>2017年12月23日</p>
          </div>
        </div>
      </div>
      <div class="row guest-row">
        <div class="container">
          <h1 class="title">
            <span>评选嘉宾</span>
          </h1>
          <div class="guests">
            <div class="guest-item strip-bg">
              <img src="@/assets/pac/guest-1.png" alt="">
              <h3>奇仔</h3>
              <p>中国教育家协会会员</p>
              <p>Paracraft明星玩家</p>
            </div>
            <div class="guest-item strip-bg">
              <img src="@/assets/pac/guest-1.png" alt="">
              <h3>奇仔</h3>
              <p>中国教育家协会会员</p>
              <p>Paracraft明星玩家</p>
            </div>
            <div class="guest-item strip-bg">
              <img src="@/assets/pac/guest-1.png" alt="">
              <h3>奇仔</h3>
              <p>中国教育家协会会员</p>
              <p>Paracraft明星玩家</p>
            </div>
            <div class="guest-item strip-bg">
              <img src="@/assets/pac/guest-1.png" alt="">
              <h3>奇仔</h3>
              <p>中国教育家协会会员</p>
              <p>Paracraft明星玩家</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row partner-row">
        <div class="container">
          <div class="partners">
            <div class="partner-item">
              <el-tooltip popper-class='tooltip-no-radius' effect="dark" content="中国教育电视台" placement="top">
                <img src="@/assets/pac/partner-1.png" alt="">
              </el-tooltip>
            </div>
            <div class="partner-item">
              <el-tooltip popper-class='tooltip-no-radius' effect="dark" content="香港天极数码" placement="top">
                <img src="@/assets/pac/partner-2.png" alt="">
              </el-tooltip>
            </div>
            <div class="partner-item">
              <el-tooltip popper-class='tooltip-no-radius' effect="dark" content="大富配天" placement="top">
                <img src="@/assets/pac/partner-3.png" alt="">
              </el-tooltip>
            </div>
            <div class="partner-item">
              <el-tooltip popper-class='tooltip-no-radius' effect="dark" content="KEEPWORK" placement="top">
                <img src="@/assets/pac/partner-4.png" alt="">
              </el-tooltip>
            </div>
          </div>
          <div class="accounts">
            <img src="@/assets/pac/code.png" alt="">
            <h4>关注公众号，了解比赛实时动态</h4>
          </div>
        </div>
      </div>
    </main>
    <footer class="pac-footer">
      <div class="container">
        <ul>
          <li>
            <a href="#">开放平台</a>
          </li>
          <li>
            <a href="#">加入我们</a>
          </li>
          <li>
            <a href="#">网站统计</a>
          </li>
          <li>
            <a href="#">更新信息</a>
          </li>
          <li>
            <a href="">问题反馈</a>
          </li>
          <li>
            <a href="#">投诉本页</a>
          </li>
          <li>
            <a href="#">POWER BY NPL</a>
          </li>
        </ul>
        <p>粤ICP备14002196号-2 © Tatfook</p>
      </div>
    </footer>
  </div>
</template>

<script>
// import EditorViewport from '@/components/editor/EditorViewport'
export default {
  name: 'pac',
  data () {
    return {
      rank1ActiveName: '1',
      rank2ActiveName: '1'
    }
  }
  // components: {
  //   EditorViewport
  // }
}
</script>

<style lang="scss">
html,
body {
  font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
  /* height: 100%; */
  margin: 0;
  padding: 0;
}
.pac {
  color: #606266;
  font-size: 16px;
  color: #303133;
  h1 {
    font-size: 30px;
    margin: 0;
  }
  h3 {
    font-size: 18px;
    margin: 0;
    span {
      color: #606266;
      font-size: 13px;
      span {
        color: #e25555;
      }
    }
  }
  h4 {
    font-size: 16px;
    color: #303031;
    margin: 0;
  }
  a {
    color: #606266;
    text-decoration: none;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  p {
    margin: 0;
  }
  .strip-bg {
    position: relative;
  }
  .strip-bg:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 10px;
    background-color: transparent;
    background-image: repeating-linear-gradient(
      -45deg,
      white,
      white 4px,
      #9d9d9d 5px,
      #9d9d9d 6px
    );
  }
  .container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }
  // .clearfix:after,
  // .clearfix:before {
  // content: ' ';
  // display: table;
  // }
  // .clearfix:before{
  // clear: both;
  // }
  .clearfix::after {
    content: '';
    clear: both;
    display: table;
  }
  .title {
    text-align: center;
    span {
      position: relative;
      z-index: 1;
    }
    span::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: -1;
      width: 100%;
      height: 10px;
      background-color: #fee40c;
    }
  }
  .tooltip-no-radius {
    border-radius: 0;
  }
  .el-dropdown-menu {
    margin-top: 0;
    border: none;
    border-radius: 0;
    padding: 5px 0;
    background-color: #303133;
    a {
      color: #fff;
    }
    .popper__arrow::after {
      border-bottom-color: #303133;
    }
    .el-dropdown-menu__item {
      padding: 0 27px;
    }
    .el-dropdown-menu__item:not(.is-disabled):hover {
      background-color: #181619;
    }
  }
  .el-dropdown {
    font-size: 16px;
    cursor: pointer;
  }
  .pac-header {
    height: 70px;
    line-height: 70px;
    .brand {
      float: left;
    }
    img {
      vertical-align: middle;
    }
    ul {
      float: right;
    }
    li {
      float: left;
      padding: 0 24px;
    }
    a:hover {
      color: #303133;
      font-weight: bold;
    }
    .join-btn {
      background-color: #181619;
      color: #fff;
      font-weight: bold;
      margin-left: 24px;
      img {
        margin-right: 10px;
        vertical-align: middle;
      }
    }
    .profile {
      display: none;
    }
  }
  .banner {
    height: 724px;
    position: relative;
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
      padding-top: 100px;
    }
    .buttons {
      margin-top: 60px;
    }
  }
  .intro-row {
    background-color: #f5f5f5;
    .content {
      background-color: #fff;
      padding: 40px 105px;
      position: relative;
      top: -60px;
    }
    .content::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -20px;
      width: 100%;
      height: 20px;
      background-color: transparent;
      background-image: repeating-linear-gradient(
        -45deg,
        white,
        white 8px,
        #383838 8px,
        #383838 9px
      );
    }
    .intro {
      line-height: 37px;
      padding: 50px 0;
      margin-top: 30px;
      border-top: 8px solid #cfcfcf;
    }
    .paracraft {
      display: flex;
      align-items: center;
      background-color: #fee40c;
      box-shadow: 0px 8px 0px 0px #b8a613;
      border: 4px dashed;
      padding: 10px 30px;
      p {
        line-height: 28px;
        font-size: 14px;
        color: #282828;
      }
    }
    .paracraft-intro {
      flex: 1;
      padding: 0 24px;
      border-right: 6px solid #fff;
    }
    .more {
      padding-left: 26px;
    }
    .paracraft-info {
      text-align: center;
      color: #e25555;
      font-size: 14px;
      font-weight: bold;
      margin-top: 40px;
    }
  }
  .wards-row {
    background-color: #e8e8e8;
    padding: 60px 0 70px;
    .row-info {
      text-align: center;
      margin: 25px 0 55px;
    }
    .classify {
      padding: 0 60px;
    }
    .item-box {
      float: left;
      width: 460px;
      position: relative;
      margin-top: 60px;
    }
    .item-box:last-child {
      float: right;
    }
    .rank-item {
      height: 560px;
      overflow-y: auto;
      background-color: #fff;
      padding: 20px 28px;
      box-sizing: border-box;
      box-shadow: 0px 8px 0 0px rgba(208, 206, 206, 0.4);
      h1 {
        span {
          position: relative;
          z-index: 0;
        }
      }
    }
    .circle-decoration {
      position: absolute;
      right: -12px;
      top: -2px;
      z-index: -1;
    }
    .trophy-img {
      position: absolute;
      right: 60px;
      top: -56px;
    }
    .item-info {
      font-size: 17px;
      color: #6b6e74;
      padding: 24px 0 22px;
      line-height: 27px;
      height: 50px;
      border-bottom: 8px solid #e6e6e8;
    }
    .el-collapse {
      border: none;
      padding-left: 30px;
    }
    .el-collapse-item__header {
      border: none;
      height: 40px;
      line-height: 40px;
      position: relative;
    }
    .el-collapse-item__header::before {
      content: '';
      width: 8px;
      height: 8px;
      position: absolute;
      left: -25px;
      top: 16px;
      background-color: #fee40c;
    }
    .el-collapse-item__arrow {
      display: none;
    }
    .el-collapse-item__content {
      color: #606266;
      padding-bottom: 20px;
    }
    .el-collapse-item__wrap {
      border: none;
    }
  }
  .requirement-row {
    padding: 70px 0;
    ul {
      padding: 70px 0 90px 210px;
    }
    li {
      font-size: 16px;
      margin-bottom: 28px;
      color: #606866;
      img {
        margin-right: 20px;
        vertical-align: middle;
      }
    }
    .container {
      position: relative;
    }
    .container::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 20px;
      background-color: transparent;
      background-image: repeating-linear-gradient(
        -45deg,
        white,
        white 8px,
        #383838 8px,
        #383838 9px
      );
    }
  }
  .process-row {
    background-color: #101011;
    color: #fff;
    .time-shaft {
      width: 840px;
      margin: 0 auto;
    }
    .shaft-item {
      float: left;
      width: 25%;
    }
  }
  .guest-row {
    background-color: #f5f5f5;
    padding: 66px 0 90px;
    h3 {
      margin: 20px 0 30px;
    }
    .guests {
      display: flex;
      justify-content: space-around;
      margin-top: 84px;
      position: relative;
      z-index: 0;
    }
    .guests::before {
      content: '';
      width: 100%;
      height: 175px;
      background-image: url('../assets/pac/add.png');
      position: absolute;
      z-index: -1;
      top: -42px;
      background-size: 25px;
    }
    .guest-item {
      float: left;
      width: 190px;
      background-color: #fff;
      padding: 19px 14px 27px;
      box-sizing: border-box;
      text-align: center;
    }
    p {
      font-size: 14px;
      color: #606266;
    }
  }
  .partner-row {
    text-align: center;
    h4 {
      padding: 12px 0 58px;
    }
    .partners {
      display: flex;
      justify-content: space-around;
      padding: 88px 85px;
      align-items: stretch;
    }
    .partner-item {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .partner-item::after {
      content: '';
      width: 2px;
      height: 18px;
      background-color: #b2b2b2;
      position: absolute;
      right: 0;
      top: 20px;
    }
  }
  .pac-footer {
    background-color: #18181a;
    ul {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #303031;
    }
    li {
      padding: 30px 0 22px;
    }
    a {
      color: #909399;
    }
    p {
      text-align: center;
      padding: 20px 0;
      color: #909399;
    }
  }
}
</style>
