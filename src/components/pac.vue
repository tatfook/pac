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
          <div class="decoration">
            <div class="white-bg"></div>
            <div class="transparent-bg"></div>
          </div>
          <div class="content">
            <h1 class="title">
              <span>大赛简介</span>
            </h1>
            <p class="intro">国际智能创意大奖赛是的以培养青少年的科学技术“童子功”和计算机思维，提高自主创新创造能力，为人工智能未来产业提供网络技术支撑和人才储备为目的的国家级、国际性年度赛事。赛事指定创作软件《Paracraft》和作品展示平台[图片]Keepwork.com基于拥有自主知识产权的神经元并行计算机语言NPL写成。赛事主要面向学生群体和计算机从业人员，倡导参赛者利用Paracraft软件进行3D动画制作和编程，并将创作的作品集中在Keepwork平台上集中存储、分享、展示。大奖赛将表彰优秀的参赛者和参赛作品，采用“奖励基金+学习基金+培育基金”的激励模式，以此驱动人们在参赛中重塑学习方式。2018年的赛事时间为2018年5月-2018年12月，主题设定为“梦想·未来”，赛事口号为“智创未来·乘云而上”</p>
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
            <p class="paracraft-info"><img src="@/assets/pac/little_dot.png" alt="">Paracraft创意空间是官方指定唯一的比赛创作软件。<img class="transform-img" src="@/assets/pac/little_dot.png" alt=""></p>
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
                    <div>基于NPL及其原生引擎和代表软件《Paracraft创意空间》，通过研究、实践充分应用NPL相关各功能，以文字、视频、软件的形式设计、编撰相关课程和课件，便于他人学习研究《Paracraft创意空间》和NPL语言及相关功能</div>
                  </el-collapse-item>
                  <el-collapse-item name="3">
                    <template slot='title'>
                      <h3>NPL 最佳编程奖
                        <span>(1个，
                          <span>20万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《Paracraft创意空间》，通过研究、实践，使用用NPL语言开发出类似NPL CAD， 电影方块，自主动画系统，3D GIS校园等插件工具。或是基于《Paracraft创意空间》社区，设计可供单人或多人游乐体验之小程序。</div>
                  </el-collapse-item>
                  <el-collapse-item name="4">
                    <template slot='title'>
                      <h3>NPL 最佳场景设计奖
                        <span>(1个，
                          <span>15万元</span> )</span>
                      </h3>
                    </template>
                    <div>使用《Paracraft创意空间》的建筑功能，以单人或多人的形式搭建场景。充分发挥《Paracraft创意空间》优势特色，结合自定义材质、自定义模型等功能，创作宏伟壮丽的场景。</div>
                  </el-collapse-item>
                  <el-collapse-item name="5">
                    <template slot='title'>
                      <h3>NPL 最佳3D角色奖
                        <span>(1个，
                          <span>15万元</span> )</span>
                      </h3>
                    </template>
                    <div>于《创意空间》系列软件的模型设计功能，用FBX（不可包含动画）或彩色方块建模，用电影方块制作动画，每个角色至少包含走 跑 跳 待机4个动作，在电影中通过姓名、身世、皮肤、戏份、动作动画等手法塑造的成功角色，使观众留下极为深刻印象的主人公或配角。</div>
                  </el-collapse-item>
                  <el-collapse-item name="6">
                    <template slot='title'>
                      <h3>NPL 最佳开源贡献奖
                        <span>(1个，
                          <span>5万元</span> )</span>
                      </h3>
                    </template>
                    <div>用NPL语言开发出多个类似NPL CAD，电影方块，自主动画系统，3D GIS校园，等创作工具作品集。作品数量不少于5个，整个开发过程必须开源</div>
                  </el-collapse-item>
                  <el-collapse-item name="7">
                    <template slot='title'>
                      <h3>NPL 人气十佳
                        <span>(10个，
                          <span>1万元</span> )</span>
                      </h3>
                    </template>
                    <div>由网络人气投票产生，获奖作品可重叠获得此奖项。网络投票得分占比60%，合作媒体代表评审团投票得分占比40%。并按最终得分从高到低取前十名获得本次大赛人气奖</div>
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
                    <div>基于NPL及其原生引擎和代表软件《Paracraft创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《Paracraft创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="2">
                    <template slot='title'>
                      <h3>NPL 最佳游戏作品奖
                        <span>(20个，
                          <span>最高可获得5万元</span> )</span>
                      </h3>
                    </template>
                    <div>以主题材质包的形式，参照现有方块的类型制作全新风格的方块材质。所有参赛电影、小程序的自定义材质包同步参与本奖项的角逐，也能以材质包的形式独立参赛。</div>
                  </el-collapse-item>
                  <el-collapse-item name="3">
                    <template slot='title'>
                      <h3>NPL 最佳材质奖
                        <span>(20个，
                          <span>最高可获得5万元</span> )</span>
                      </h3>
                    </template>
                    <div>以主题材质包的形式，参照现有方块的类型制作全新风格的方块材质。所有参赛电影、小程序的自定义材质包同步参与本奖项的角逐，也能以材质包的形式独立参赛。</div>
                  </el-collapse-item>
                  <el-collapse-item name="4">
                    <template slot='title'>
                      <h3>NPL 最佳视觉特效奖
                        <span>(20个，
                          <span>最高可获得5万元</span> )</span>
                      </h3>
                    </template>
                    <div>以电影短片的形式，展现精彩卓绝的运镜和剪辑手法，或是勾勒宏伟壮阔的像素世界，带给观众以极具冲击力的视觉体验。</div>
                  </el-collapse-item>
                  <el-collapse-item name="5">
                    <template slot='title'>
                      <h3>NPL 最佳原创音效奖
                        <span>(20个，
                          <span>最高可获得5万元</span> )</span>
                      </h3>
                    </template>
                    <div>本奖项主要针对于在电影短片中专为推动电影情节、哄托场景气氛所作的场景的原创配乐和原创音效。参赛选手也可以从表现自然风光、主场场景的角度入手，组织相关的背景音乐。（即，是否允许用户以制作背景音乐的形式参赛，还是本奖只评判电影中的音乐）</div>
                  </el-collapse-item>
                  <el-collapse-item name="6">
                    <template slot='title'>
                      <h3>NPL 最佳剧本创意奖
                        <span>(20个，
                          <span>最高可获得5万元</span> )</span>
                      </h3>
                    </template>
                    <div>本奖项旨在鼓励那些具有极佳故事创作才能，受软件制作限制无法完整诠释自己作品的剧本作者。根据电影剧情、立意以及对人物的刻画进行相应的评判。</div>
                  </el-collapse-item>
                  <el-collapse-item name="7">
                    <template slot='title'>
                      <h3>NPL 人气十佳
                        <span>(10个，
                          <span>1万元</span> )</span>
                      </h3>
                    </template>
                    <div>由网络人气投票产生，获奖作品可重叠获得此奖项。网络投票得分占比60%，合作媒体代表评审团投票得分占比40%。并按最终得分从高到低取前十名获得本次大赛人气奖</div>
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
              <img src="@/assets/pac/little_dot.png" alt=""> 作品需使用电影方块，主题正面，电影类、创意类等均可。
            </li>
            <li>
              <img src="@/assets/pac/little_dot.png" alt=""> 所有参赛作品必须是在2017年12月29日及之前没有在任何创作平台公开发表过的作品。
            </li>
            <li>
              <img src="@/assets/pac/little_dot.png" alt=""> 参赛作者可同时报名多个作品，官方鼓励作品的原创与多样性，同时也鼓励改编和重构其他作品。
            </li>
            <li>
              <img src="@/assets/pac/little_dot.png" alt=""> 如果参考了创意空间的其它作品需要注明来源，如发现公开冒充他人作品则直接取消参赛资格。
            </li>
            <li>
              <img src="@/assets/pac/little_dot.png" alt=""> 参考非创意空间的其他作品，作者可自行决定是否引用来源。
            </li>
          </ul>
        </div>
      </div>
      <div class="row process-row">
        <h1 class="title">
          <img src="@/assets/pac/big_dot.png" alt="">评选流程<img class="transform-img" src="@/assets/pac/big_dot.png" alt="">
        </h1>
        <div class="time-shaft clearfix">
          <div class="shaft-item first">
            <p class='time'>2018年5月10日</p>
            <p class="dot-box">
              <span class="dot"></span>
            </p>
            <p class="shaft-title">作品征集</p>
          </div>
          <div class="shaft-item second">
            <p class='time'>11月30日</p>
            <p class="dot-box">
              <span class="dot"></span>
            </p>
            <p>截稿</p>
          </div>
          <div class="shaft-item third">
            <p class='time'>12月3日~10日</p>
            <p class="dot-box">
              <span class="dot"></span>
            </p>
            <el-popover placement="bottom" width="214" trigger="hover" popper-class='shaft-popper' content="此环节由网络投票和媒体代表投票产生人气十佳，评分标准：网络*60%+媒体代表*40%。">
              <p slot="reference">
                <span class="strip-bg">网络投票</span>
              </p>
            </el-popover>
          </div>
          <div class="shaft-item forth">
            <p class='time'>12月10日~17日</p>
            <p class="dot-box">
              <span class="dot"></span>
            </p>
            <el-popover placement="bottom" width="214" trigger="hover" popper-class='shaft-popper' content="所有作品按分类分配给相应组别的评委团，每部作品安排3位不同的评委打分，最后取平均分，周期为一个星期。">
              <p slot="reference">
                <span class="strip-bg">初赛</span>
              </p>
            </el-popover>
          </div>
          <div class="shaft-item fifth">
            <p class='time'>12月底</p>
            <p class="dot-box">
              <span class="dot"></span>
            </p>
            <el-popover placement="bottom" width="214" trigger="hover" popper-class='shaft-popper' content="邀请评委专家到深圳，对分类作品进行评审。同一幅作品由该类目的所有评委打分取平均分，按分数从高到低产生排序。">
              <p slot="reference">
                <span class="strip-bg">决赛</span>
              </p>
            </el-popover>
          </div>
          <div class="shaft-item sixth">
            <p class='time'>2019年1月</p>
            <p class="dot-box">
              <span class="dot"></span>
            </p>
            <p>颁奖典礼</p>
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
            <img src="@/assets/pac/code.jpg" alt="">
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
    <el-dialog :visible.sync="loginDialogVisible" width='500px' :show-close=false>
      <login @close='setDialogVisible("loginDialogVisible", false)' @showJoinDialog='setDialogVisible("joinDialogVisible", true)' @onLogined='reGetUserinfo'></login>
    </el-dialog>
    <el-dialog :visible.sync="joinDialogVisible" width='500px' :show-close=false>
      <join @close='setDialogVisible("joinDialogVisible", false)' @showLoginDialog='setDialogVisible("loginDialogVisible", true)' @onLogined='reGetUserinfo'></join>
    </el-dialog>
    <el-dialog :visible.sync='applyDialogVisible' width='500px'>
      <h1>报名</h1>
      <p>报名功能开发中， 敬请期待</p>
    </el-dialog>
  </div>
</template>

<script>
import login from './login'
import join from './join'
export default {
  name: 'pac',
  components: {
    login,
    join
  },
  data() {
    return {
      rank1ActiveName: '1',
      rank2ActiveName: '1',
      loginDialogVisible: false,
      joinDialogVisible: false,
      applyDialogVisible: false,
      userinfo: JSON.parse(localStorage.getItem('userinfo')),
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
    toLogout() {
      this.userinfo = undefined
      localStorage.removeItem('userinfo')
    },
    reGetUserinfo() {
      this.userinfo = JSON.parse(localStorage.getItem('userinfo'))
      this.loginDialogVisible = false
      this.joinDialogVisible = false
    }
  }
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

.shaft-popper.el-popper {
  background-color: #101011;
  color: #fff;
  margin-top: 25px;
  box-sizing: border-box;
  border-radius: 0;
  padding: 12px 15px;
  line-height: 24px;
  .popper__arrow {
    top: -7px;
  }
}
.el-dropdown-menu {
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
.el-dropdown {
  font-size: 16px;
  cursor: pointer;
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
      transparent,
      transparent 4px,
      #9d9d9d 5px,
      #9d9d9d 6px
    );
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
    img {
      vertical-align: middle;
      margin: 0 15px;
    }
  }
  .tooltip-no-radius {
    border-radius: 0;
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
      cursor: pointer;
      img {
        margin-right: 10px;
        vertical-align: middle;
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
      padding: 0 105px 40px;
      position: relative;
      top: -90px;
    }
    .content::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -20px;
      width: 100%;
      height: 20px;
      background-color: transparent;
      background-size: 20px 20px;
      background-image: repeating-linear-gradient(
        -45deg,
        white,
        white 5.6px,
        #d8d8d8 5.6px,
        #d8d8d8 6.1px,
        #3b3b3b 6.1px,
        #3b3b3b 6.6px,
        #d8d8d8 7.1px
      );
    }
    .intro {
      line-height: 37px;
      padding: 50px 0;
      margin-top: 30px;
      position: relative;
      // border-top: 8px solid #cfcfcf;
    }
    .intro::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 8px;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #cfcfcf;
    }
    .intro::after {
      content: '';
      display: inline-block;
      height: 8px;
      position: absolute;
      left: 20px;
      right: 20px;
      border: 15px solid #fff;
      border-width: 0 15px;
      top: 0;
      background-color: #cfcfcf;
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
      img {
        margin-right: 13px;
        vertical-align: middle;
      }
      .transform-img {
        transform: rotate(180deg);
      }
    }
    .decoration {
      display: flex;
      position: relative;
      top: -90px;
      height: 40px;
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
        box-shadow: 0px 10px 0px 0px #afafaf;
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
        box-shadow: 0px 10px 0px 0px #afafaf;
      }
    }
  }
  .wards-row {
    background-color: #e9e8e9;
    background-image: linear-gradient(
        rgba(211, 211, 211, 0.3) 1px,
        transparent 0
      ),
      linear-gradient(90deg, rgba(211, 211, 211, 0.3) 1px, transparent 0);
    background-size: 15px 15px, 15px 15px, 75px 75px, 75px 75px;
    padding: 60px 0 70px;
    .row-info {
      text-align: center;
      margin: 25px 0 55px;
      color: #606266;
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
      height: 620px;
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
      padding-top: 20px;
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
      background-size: 20px 20px;
      background-image: repeating-linear-gradient(
        -45deg,
        white,
        white 5.6px,
        #d8d8d8 5.6px,
        #d8d8d8 6.1px,
        #3b3b3b 6.1px,
        #3b3b3b 6.6px,
        #d8d8d8 7.1px
      );
    }
  }
  .process-row {
    background-color: #101011;
    position: relative;
    padding: 80px 0 190px;
    color: #fff;
    .transform-img {
      transform: rotate(180deg);
    }
    .time {
      font-weight: lighter;
    }
    .time-shaft {
      width: 940px;
      margin: 100px auto 0;
      display: flex;
      position: relative;
    }
    .time-shaft::after {
      content: '';
      height: 3px;
      left: 62px;
      display: inline-block;
      right: 72px;
      background-image: linear-gradient(90deg, #b10cfe, #2e0cfe);
      position: absolute;
      top: 53px;
    }
    .shaft-item {
      width: 140px;
      text-align: center;
      font-size: 18px;
      .strip-bg {
        padding-bottom: 10px;
        cursor: pointer;
      }
      .strip-bg::after {
        height: 6px;
      }
    }
    .shaft-item:first-child {
      flex: 1;
      text-align: left;
      .dot-box {
        padding-left: 50px;
      }
      .shaft-title {
        padding-left: 20px;
      }
    }
    .dot-box {
      padding: 16px 0 28px;
    }
    .dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: red;
    }
    .first .dot {
      background-color: transparent;
      width: 7px;
      height: 7px;
      border: 4px solid #b10cfe;
      position: relative;
      top: 3px;
    }
    .second .dot {
      background-color: #870dfe;
    }
    .third .dot {
      background-color: #710bfe;
    }
    .forth .dot {
      background-color: #5c0dfe;
    }
    .fifth .dot {
      background-color: #460dfe;
    }
    .sixth .dot {
      background-color: transparent;
      width: 7px;
      height: 7px;
      border: 4px solid #2f0bfe;
      position: relative;
      top: 3px;
    }
  }
  .process-row::after {
    content: '';
    display: inline-block;
    height: 140px;
    background-image: url('../assets/pac/iicc_bg.png');
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    opacity: 0.05;
    animation: backgroundMove 5s infinite;
  }
  @keyframes backgroundMove {
    from {
      background-position-x: left;
    }
    to {
      background-position-x: right;
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
      width: 200px;
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
