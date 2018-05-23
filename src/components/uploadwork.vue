<template>
  <div class="uploadwork-wrap">
    <Header  :userinfo='userinfo' @onLogOut='toLogout'></Header>   
    <main>
      <Banner :userinfo='userinfo'></Banner>
      <div class="intro-row-reg">
        <div class="container-reg">
          <div class="top-square-uploadpage">
            <div class="white-bg"></div>
            <div class="transparent-bg"></div>
          </div>
          <div class="content">
            <h1 class="title">
              <span><img src="@/assets/pac/upload_work.png" alt=""></span>
            </h1>
            <div class="line"></div>
           <div class="reg_info">
              <form @submit.prevent="uploadwork">
                <table class="uploadwork_table">
                  <tr class="groups">
                    <td width='94'>参赛组别</td>
                    <td>
                      <input type="radio" id="radio_1" name="group_name" v-model="picked" value="4"/><label for="radio_1"></label><span :class="picked == 4 ? 'group_name_sel' : 'group_name'" >学生组</span>
                      <input type="radio" id="radio_2" name="group_name" v-model="picked" value="3"/><label for="radio_2"></label><span :class="picked == 3 ? 'group_name_sel' : 'group_name'" >公开组</span>
                    </td>
                  </tr>
                  <tr>
                    <td>作品名称</td>
                    <td><input type="text" v-model.trim="work_title" placeholder="请输入您的作品名称"/></td>
                  </tr>
                    <tr class="select_items">
                      <td>作品简介</td>
                      <td>
                        <div class="brief_wrap">
                          <textarea v-model.trim="work_brief" class="work_brief" name="work_brief" id="" cols="60" rows="5" placeholder="请输入您的作品简介..."></textarea>
                        </div>
                      </td>                
                  </tr>
                  <tr>
                    <td>学校名称</td>
                    <td><input type="text" v-model.trim="school_name" placeholder="请输入您的学校全名"/></td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div class="up_pic">
                        <div class="idcard">
                          <div class="idcard-type">作品封面</div>
                          <div class="clicktoup clicktoup2">
                            <div class="add-center">
                              <div class="add-icon">
                                <div class="add"></div>
                              </div>
                              点击上传
                            </div>
                            <input type="file" :disabled="!!imgCover" class="input_file" @change="uploadLifePhoto('workCover',$event)">                            
                          </div>
                          <div class="preview-location">
                            <div class="tip">(一张JPG格式,推荐比例16:9)</div> 
                          </div>
                        </div>
                        <div class="img-wrap">预览区域
                          <img v-if="imgCover" class='img' :src="imgCover" alt='img' />
                          <div class="img-mask" v-if="imgCover">
                            <span><img width="20px" src="@/assets/pac/enlarge.png" alt="" @click="enlargePic('imgCover')"></span>
                            <span><img width="18px" src="@/assets/pac/delete(1).png" alt=""  @click="deletePic('delWorksLogoFilePath','imgCover')"></span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>选择作品</td>
                    <td class="compete_works">
                      <el-select id="my-compete-works" v-model="value2" @visible-change='getWorkUrlDatas'>
                        <el-option
                          v-for="item in myworks"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          :disabled="item.disabled">
                        </el-option>
                      </el-select>
                    </td>
                  </tr>
                  <tr class="select_items">
                    <td class="item_wrap"><div style="padding-left:0;">报名奖项</div></td>
                    <td>
                      <div class="item_wrap">
                        <div>
                          <p class="item-content" v-for="(item,index) in awards_item_student" :key="index" v-if="index < 4  && picked == 4" @click="selItem_stu(index)"><input type="checkbox" :id="`checkbox_${index}`" v-model="checked_item_student[index]"><label :for="`checkbox_${index}`"></label><span :class="checked_item_student[index] ? 'group_name_sel' : 'group_name'">{{item}}</span></p>
                        </div>
                        <div>
                          <p class="item-content" v-for="(item,index) in awards_item_student" :key="index" v-if="index >= 4 && picked == 4" @click="selItem_stu(index)"><input type="checkbox" :id="`checkbox_${index}`" v-model="checked_item_student[index]"><label :for="`checkbox_${index}`"></label><span :class="checked_item_student[index] ? 'group_name_sel' : 'group_name'">{{item}}</span></p>
                        </div>
                      </div>
                      <div class="item_wrap">
                        <div>
                          <p class="item-content" v-for="(item,index) in awards_item_public" :key="index" v-if="index < 5 && picked == 3" @click="selItem_pub(index)"><input type="checkbox" :id="`checkbox_${index}`" v-model="checked_item_public[index]"><label :for="`checkbox_${index}`"></label><span :class="checked_item_public[index] ? 'group_name_sel' : 'group_name'">{{item}}</span></p>
                        </div>
                        <div>
                          <p class="item-content" v-for="(item,index) in awards_item_public" :key="index" v-if="index >= 5 && picked == 3" @click="selItem_pub(index)"><input type="checkbox" :id="`checkbox_${index}`" v-model="checked_item_public[index]"><label :for="`checkbox_${index}`"></label><span :class="checked_item_public[index] ? 'group_name_sel' : 'group_name'">{{item}}</span></p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding-bottom:0">
                      <div class="up_pic">
                        <div class="idcard">
                          <div class="idcard-type">
                            有效证件
                            <el-tooltip class="item" effect="dark" content="•身份证上传正反两面 •其他证件上传有效信息的一面" placement="top">
                              <el-button><i class="el-icon-question"></i></el-button>
                            </el-tooltip>
                          </div>
                          <div class="clicktoup clicktoup2">
                            <div class="add-center">
                              <div class="add-icon">
                                <div class="add"></div>
                              </div>
                              点击上传
                            </div>
                              <input type="file" :disabled="!!imgIdCard_1 && !!imgIdCard_2" class="input_file" @change="uploadLifePhoto('idcard',$event)">                            
                          </div>
                          <div class="preview-location">
                            <div class="tip">(大小不超过5M)</div> 
                          </div>
                        </div>
                        <div class="idcard-front-and-back">
                          <div class="img-wrap idcard-img-wrap">预览区域
                            <img v-if="imgIdCard_1" class='img' :src="imgIdCard_1" alt='img' />
                            <div class="img-mask" v-if="imgIdCard_1">
                              <span><img width="20px" src="@/assets/pac/enlarge.png" alt="" @click="enlargePic('imgIdCard_1')"></span>
                              <span><img width="18px" src="@/assets/pac/delete(1).png" alt=""  @click="deletePic('delimgIdCard_1FilePath','imgIdCard_1')"></span>
                            </div>
                          </div>
                          <div class="img-wrap">预览区域
                            <img v-if="imgIdCard_2" class='img' :src="imgIdCard_2" alt='img' />
                            <div class="img-mask" v-if="imgIdCard_2">
                              <span><img width="20px" src="@/assets/pac/enlarge.png" alt="" @click="enlargePic('imgIdCard_2')"></span>
                              <span><img width="18px" src="@/assets/pac/delete(1).png" alt="" @click="deletePic('delimgIdCard_2FilePath','imgIdCard_2')"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <!-- <tr>
                    <td colspan="2">
                      <div class="up_pic">
                        <div class="idcard">
                          <div class="idcard-type">生活照</div>
                          <div class="clicktoup clicktoup2">
                            <div class="add-center">
                              <div class="add-icon">
                                <div class="add"></div>
                              </div>
                              点击上传
                            </div>
                            <input type="file" class="input_file" @change="uploadLifePhoto('lifePhoto',$event)">                            
                          </div>
                          <div class="preview-location">
                            <div class="tip">(一张JPG格式，分辨率1024*768以上)</div> 
                          </div>
                        </div>
                        <div class="img-wrap">预览区域
                          <img v-if="imgLife" class='img' :src="imgLife" alt='img' />
                          <div class="img-mask" v-if="imgLife">
                            <span><img width="20px" src="@/assets/pac/enlarge.png" alt=""  @click="enlargePic('imgLife')"></span>
                            <span><img width="18px" src="@/assets/pac/delete(1).png" alt="" @click="deletePic('delimgLifeFilePath','imgLife')"></span>
                          </div>
                        </div>
                          
                      </div>
                    </td>
                  </tr> -->
                </table>
                <input type="submit" value="提交信息" :disabled="!_pass" :class="_pass ? 'btnok' : 'btn'">
              </form>
            </div> 
          </div>
        </div>
      </div>  
      <el-dialog
        title="提示"
        :visible.sync="dialogVisibleErr"
        width="30%">
        <span>{{uploadworkMsg}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisibleErr = false">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="enlargeImg" alt="">
      </el-dialog>
      <el-dialog :visible.sync="uploadworkSuccessVisible" width='500px' :show-close=false>
        <registerok @close='setDialogVisible("uploadworkSuccessVisible", false)'>
          <span slot="uploadWorkSucceed">{{uploadworkMsg}}</span>
        </registerok>
      </el-dialog>
       <el-dialog :visible.sync="loginDialogVisible" width='500px' :show-close=false custom-class="login-dialog" :append-to-body=true>
        <login @close='setDialogVisible("loginDialogVisible", false)' @showJoinDialog='setDialogVisible("joinDialogVisible", true)' @onLogined='reGetUserinfo'></login>
      </el-dialog>
      <el-dialog :visible.sync="joinDialogVisible" width='500px' :show-close=false custom-class="join-dialog" :append-to-body=true>
      <join @close='setDialogVisible("joinDialogVisible", false)' @showLoginDialog='setDialogVisible("loginDialogVisible", true)' @onLogined='reGetUserinfo'></join>
      </el-dialog>
    </main> 
    <Footer></Footer>    
  </div>
</template>
<script>
import Header from "./common/header";
import Banner from "./common/banner";
import Footer from "./common/footer";
import registerok from "./register-ok";
import login from "./login";
import join from "./join";
import "element-ui/lib/theme-chalk/display.css";
import keepwork from "@/api/keepwork";
import gitLabAPIGenerator from "@/api/node-gitlab-api";
import axios from "axios";
import sensitiveWord from "@/api/sensitiveWord";
const iiccWebsiteId = process.env.IICC_WEBSITE_ID;
export default {
  name: "register",
  data() {
    return {
      userinfo: JSON.parse(localStorage.getItem("userinfo")),
      loginDialogVisible: false,
      joinDialogVisible: false,
      myworks: [
        // {
        //   value: "1",
        //   label: "1太阳"
        // },
        // {
        //   value: "4",
        //   label: "4云朵"
        // }
      ],
      picked: 4,
      checked_item_student: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      checked_item_public: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      awards_item_public: [
        "NPL 大奖",
        "NPL 最佳编辑奖",
        "NPL 最佳教程奖",
        "NPL 最佳场景设计奖",
        "NPL 最佳3D角色制作奖",
        "NPL 最佳开源贡献奖",
        "NPL 老顽童奖",
        "NPL 小小梦想家",
        "NPL 人气十佳"
      ],
      awards_item_student: [
        "NPL 最佳故事短片奖",
        "NPL 优秀游戏作品奖",
        "NPL 优秀材质奖",
        "NPL 优秀视觉特效奖",
        "NPL 优秀原创音效奖",
        "NPL 优秀剧本创意奖",
        "NPL 人气十佳"
      ],
      work_title: "",
      work_brief: "",
      school_name: "",
      value2: "选择您要比赛的作品",
      uploadworkVisible: false,
      dialogVisibleErr: false,
      dialogImageUrl: "",
      dialogVisible: false,
      imgCover: "", //封面
      worksLogo: "", //作品封面地址
      imgIdCard_1: "", //身份证正面
      imgIdCard_2: "", //身份证反面
      identifyUrl: [], //身份证地址
      imgLife: "", //生活照
      liveUrl: "", //生活照地址
      enlargeImg: "",
      delWorksLogoFilePath: "",
      delimgIdCard_1FilePath: "",
      delimgIdCard_2FilePath: "",
      delimgLifeFilePath: "",
      uploadworkSuccessVisible: false,
      uploadworkMsg: "",
      isSensitive: false
    };
  },
  computed: {
    already_checked_item: function() {
      if (this.picked == 4) {
        for (let i = 0; i < this.checked_item_student.length; i++) {
          if (this.checked_item_student[i]) {
            return true;
          }
        }
        return false;
      } else {
        for (let i = 0; i < this.checked_item_public.length; i++) {
          if (this.checked_item_public[i]) {
            return true;
          }
        }
        return false;
      }
    },
    _pass: function() {
      if (
        this.work_title &&
        this.picked &&
        this.work_brief &&
        this.school_name &&
        this.value2 != "选择您要比赛的作品" &&
        this.already_checked_item &&
        this.imgCover &&
        this.imgIdCard_1
      ) {
        return true;
      }
      return false;
    },
    awords: function() {
      let tempArr = [];
      if (this.picked == 4) {
        for (let i = 0; i < this.checked_item_student.length; i++) {
          if (this.checked_item_student[i]) {
            tempArr.push(this.awards_item_student[i]);
          }
        }
        return tempArr.join();
      } else {
        for (let i = 0; i < this.checked_item_public.length; i++) {
          if (this.checked_item_public[i]) {
            tempArr.push(this.awards_item_public[i]);
          }
        }
        return tempArr.join();
      }
    }
  },
  components: {
    Header,
    Banner,
    Footer,
    registerok,
    login,
    join
  },
  mounted: function() {
    if (!localStorage.getItem("userinfo")) {
      this.loginDialogVisible = true;
    }
  },
  methods: {
    getWorkUrlDatas() {
      let that = this;
      let authorization = "bearer " + JSON.parse(localStorage.getItem("token"));
      let { projectId, username } = JSON.parse(
        localStorage.getItem("userinfo")
      ).defaultSiteDataSource;
      projectId = 367;
      username = "xiaoyao";
      axios
        .create({
          baseURL: "http://git.keepwork.com/api/v4",
          headers: { Authorization: authorization }
        })
        .get(
          `/projects/${projectId}/repository/tree?isFetchAll=true&path=${username}/paracraft&ref=master&recursive=false`
        )
        .then(function(result) {
          for (let i = 0; i < result.data.length; i++) {
            let obj = {};
            obj.value = result.data[i].path.split(".")[0];
            obj.label = result.data[i].path.split(".")[0];
            that.$set(that.myworks, i, obj);
          }
        })
        .catch(function(error) {
          // console.log(error)
        });
    },
    reGetUserinfo() {
      this.loginDialogVisible = false;
      this.joinDialogVisible = false;
      this.userinfo = JSON.parse(localStorage.getItem("userinfo"));
    },
    selItem_stu(index) {
      this.$set(
        this.checked_item_student,
        index,
        !this.checked_item_student[index]
      );
    },
    selItem_pub(index) {
      this.$set(
        this.checked_item_public,
        index,
        !this.checked_item_public[index]
      );
    },
    setDialogVisible(key, value) {
      this[key] = value;
    },
    toLogout() {
      this.userinfo = undefined
      localStorage.removeItem("userinfo")
      localStorage.removeItem('token')
    },
    uploadLifePhoto(type, e) {
      let files = e.target.files || e.dataTransfer.files;
      // console.log(files);
      let {
        projectId,
        dataSourceToken,
        apiBaseUrl,
        dataSourceUsername,
        projectName,
        rawBaseUrl
      } = JSON.parse(localStorage.getItem("userinfo")).dataSource[0];
      let filePath = `${dataSourceUsername}/${type}/pic${+new Date()}`;
      let base64img;
      let api = gitLabAPIGenerator({ url: apiBaseUrl, token: dataSourceToken });
      let imgURL;
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = e => {
        base64img = e.target.result;
        filePath =
          filePath +
          "." +
          base64img
            .split(",")[0]
            .split(";")[0]
            .split(":")[1]
            .split("/")[1];
        imgURL = `${rawBaseUrl}/${dataSourceUsername}/${projectName}/raw/master/${filePath}`;
        if (type == "workCover") {
          this.imgCover = e.target.result;
          this.worksLogo = imgURL;
          this.delWorksLogoFilePath = filePath;
        } else if (type == "idcard") {
          if (this.imgIdCard_1 == "") {
            this.imgIdCard_1 = e.target.result;
            this.$set(this.identifyUrl, 0, imgURL);
            this.delimgIdCard_1FilePath = filePath;
          } else {
            this.imgIdCard_2 = e.target.result;
            this.$set(this.identifyUrl, 1, imgURL);
            this.delimgIdCard_2FilePath = filePath;
          }
        } else if (type == "lifePhoto") {
          this.imgLife = e.target.result;
          this.liveUrl = imgURL;
          this.delimgLifeFilePath = filePath;
        }
        api.projects.repository.files.create(projectId, filePath, "master", {
          branch: "master",
          commit_message: "keepwork commit:files/aaa1",
          content: base64img.split(",")[1],
          encoding: "base64"
        });
      };
    },
    enlargePic(whichPiC) {
      this.dialogVisible = true;
      this.enlargeImg = this[whichPiC];
    },
    deletePic(delPicPath, delShowPreview) {
      let that = this;
      let {
        projectId,
        dataSourceToken,
        apiBaseUrl,
        dataSourceUsername
      } = JSON.parse(localStorage.getItem("userinfo")).dataSource[0];
      let api = gitLabAPIGenerator({ url: apiBaseUrl, token: dataSourceToken });
      api.projects.repository.files.remove(
        projectId,
        that[delPicPath],
        "master"
      );
      this[delShowPreview] = "";
    },
    async checkSensitive() {
      let checkedWords = [this.work_title, this.work_brief, this.school_name];
      await sensitiveWord
        .checkSensitiveWords(checkedWords)
        .then(result => {
          if (result && result.length > 0) {
            this.isSensitive = true;
          } else {
            this.isSensitive = false;
          }
        })
        .catch(error => {
          console.log(error);
          this.isSensitive = false;
        });
    },
    async uploadwork() {
      if (!this.work_title) {
        this.uploadworkMsg = "提交作品出错";
        this.dialogVisibleErr = true;
        return false;
      } else {
        await this.checkSensitive();
        if (this.isSensitive) {
          this.uploadworkMsg = "所填信息中包含敏感词！";
          this.dialogVisibleErr = true;
          return;
        }
        let that = this;
        keepwork.user
          .submitWorksApply({
            websiteId: iiccWebsiteId,
            username: JSON.parse(localStorage.getItem("userinfo")).username,
            realname: localStorage.getItem("realname"),
            userid: JSON.parse(localStorage.getItem("userinfo")).dataSource[0]
              .dataSourceUserId,
            worksName: this.work_title,
            worksDesc: this.work_brief,
            worksLogo: this.worksLogo,
            worksFlag: this.picked,
            worksUrl: this.value2, //作品地址
            schoolName: this.school_name,
            awords: this.awords, //奖项
            identifyUrl: this.identifyUrl.join(),
            liveUrl: this.liveUrl,
            visitCount: "",
            voteCount: "",
            todayVoteCount: "",
            commentCount: ""
          })
          .then(function(result) {
            if (result.error.id == 0) {
              // console.log(result);
              that.uploadworkMsg = "恭喜你，成功上传作品！";
              that.uploadworkSuccessVisible = true;
              return true;
            } else {
              that.uploadworkMsg = "提交失败，请稍后再试！";
              that.uploadworkSuccessVisible = true;
              return false;
            }
          })
          .catch(function(error) {
            console.log(err);
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.uploadwork-wrap {
  .reg_info .uploadwork_table {
    .group_name {
      color: rgba(48, 49, 51, 0.5);
      font-size: 14px;
    }
    .group_name_sel {
      cursor: pointer;
      color: #303133;
      font-size: 14px;
    }
    tr td {
      padding: 10px 0;
      input {
        border-radius: 0;
        width: 372px;
        margin: 0 0 0 9px;
        padding-left: 14px;
        height: 48px;
      }
    }
  }
  .reg_info .uploadwork_table .work_face {
    border-radius: 50px;
  }
  .uploadwork_table .groups {
    label {
      margin-left: 30px;
    }
    td [type="radio"] {
      display: none;
    }
    td label {
      margin-right: 10px;
      display: inline-block;
      position: relative;
      top: 3px;
      width: 16px;
      height: 16px;
      border: 3px #c0c1c1 solid;
      background-color: #fff;
      cursor: pointer;
    }
    td label::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 10px;
      height: 10px;
      cursor: pointer;
      transform: scale(0);
      transition: transform 0.2s ease-out;
    }
    td [type="radio"]:checked + label {
      border: 3px #303133 solid;
      background-color: #eee;
      transition: background-color 0.2s ease-in;
    }
    td [type="radio"]:checked + label::after {
      background-color: #303133;
      transform: scale(1);
      transition: transform 0.2s ease-out;
    }
  }
  // 奖项选择
  .uploadwork_table .select_items {
    .brief_wrap {
      margin-left: 9px;
      width: 391px;
      height: 93px;
      .work_brief {
        background-color: #efefef;
        border: none;
        padding: 8px;
        resize: none;
        width: 375px;
      }
    }
    .item_wrap {
      display: flex;
      .item-content {
        cursor: pointer;
      }
      div {
        flex: 1;
        // height: 120px;
        padding-left: 6px;
      }
    }
    div {
      flex: 1;
      // height: 120px;
      text-align: top;
    }

    p {
      margin: 0;
      height: 40px;
    }
  }
  .uploadwork_table .select_items td [type="checkbox"] {
    display: none;
  }
  .uploadwork_table .select_items td label {
    margin-right: 10px;
    display: inline-block;
    position: relative;
    top: 3px;
    width: 14px;
    height: 14px;
    border: 2px #c0c1c1 solid;
    background-color: #fff;
    cursor: pointer;
  }
  .uploadwork_table .select_items td label::after {
    content: "";
    position: absolute;
    top: 0;
    left: 1px;
    width: 9px;
    height: 5px;
    border: 2px solid #303133;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    cursor: pointer;
    transform: rotate(-55deg);
    visibility: hidden;
  }
  .uploadwork_table .select_items td [type="checkbox"]:checked + label {
    border: 2px #303133 solid;
    background-color: #eee;
    transition: border 0.2s ease-in;
  }
  .uploadwork_table .select_items td [type="checkbox"]:checked + label::after {
    visibility: visible;
    transition: visibility 0.2s ease-out;
  }
  .intro-row-reg {
    background-color: #f5f5f5;
    .container-reg {
      width: 100%;
      max-width: 1080px;
      margin: 0 auto;
      .content {
        position: relative;
        background-color: #ffffff;
        top: -90px;
        padding: 0 105px 40px;
        border: 1px solid transparent;
      }
    }
  }
  .content::after {
    content: "";
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
  .top-square-uploadpage {
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
      content: "";
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
      content: "";
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
  .line {
    height: 8px;
    margin: 20px auto;
    position: relative;
  }
  .line::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 8px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #cfcfcf;
  }
  .line::after {
    content: "";
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
  .title {
    text-align: center;
  }
  .reg_info {
    width: 476px;
    margin: 0 auto;
    .btn {
      background-color: rgb(144, 147, 153);
      display: block;
      color: #ffffff;
      border: none;
      width: 360px;
      height: 50px;
      border-radius: 4px;
      font-size: 20px;
      margin: 34px auto;
      box-shadow: inset 0px -8px 0px 0px rgb(81, 85, 92);
    }
    .btnok {
      background-color: rgb(59, 91, 237);
      display: block;
      color: #ffffff;
      border: none;
      width: 360px;
      height: 50px;
      border-radius: 4px;
      font-size: 20px;
      margin: 34px auto;
      box-shadow: inset 0px -8px 0px 0px rgb(9, 20, 138);
    }
  }
  .reg_info tr {
    height: 48px;
    line-height: 48px;
  }
  .smallinput {
    width: 38px;
  }
  .inputtel {
    width: 234px;
  }
  .reg_info tr td {
    font-weight: 700;
    font-size: 16px;
    text-align: left;
    .sel_work {
      width: 391px;
      margin-left: 10px;
      height: 48px;
      border: 0;
    }
  }
  .reg_info tr td input {
    background-color: #efefef;
    border: none;
    height: 36px;
    border-radius: 6px;
    padding: 0 5px;
    font-size: 14px;
  }
  .idcard {
    display: flex;
    margin-bottom: 30px;
    // height: 200px;
    .idcard-type {
      .el-tooltip{
        height: 20px;
        width: 16px;
        padding: 0;
        border: none;
        font-size: 18px
      }
      flex: 1;
    }
    .clicktoup {
      width: 313px;
      height: 48px;
      background-color: #efefef;
      text-align: center;
      color: #606266;
      position: relative;
      border-radius: 24px;
      .input_file {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: -10px;
        opacity: 0;
      }
    }
    .clicktoup2 {
      width: 391px;
    }
    .preview-location {
      position: absolute;
      top: 50px;
      width: 389px;
      .tip {
        font-size: 12px;
        padding: 8px 105px;
        color: #606266;
        line-height: 12px;
        width: 385px;
      }
      .preview {
        text-align: center;
        line-height: 146px;
        width: 273px;
        height: 144px;
        color: #606266;
        background-color: rgba(239, 239, 239, 0.3);
        border: 2px dashed rgba(0, 0, 0, 0.3);
        .del {
          position: absolute;
          top: -54px;
          right: 4px;
        }
      }
    }
  }
  .add-center {
    width: 84px;
    height: 48px;
    line-height: 48px;
    text-align: right;
    margin: 0 auto;
    position: relative;
    font-size: 14px;

    .add-icon {
      position: absolute;
      top: 12px;
    }
  }
  .add {
    width: 18px;
    height: 18px;
    border: 2px solid #444444;
    border-radius: 100%;
    position: relative;
  }
  .add::before {
    content: "";
    width: 12px;
    height: 2px;
    background-color: #444444;
    position: absolute;
    top: 8px;
    left: 3px;
  }
  .add::after {
    content: "";
    width: 2px;
    height: 12px;
    background-color: #444444;
    position: absolute;
    top: 3px;
    left: 8px;
  }
}
</style>
<style lang="scss">
.el-tooltip__popper{
  width: 120px !important;
}
.uploadwork-wrap {
  .uploadwork_table .compete_works .el-input {
    margin-left: 10px;
    background-color: #efefef;
    .el-input__inner {
      border-radius: 0;
      border: 0;
      width: 381px;
      height: 48px;
      background-color: #efefef;
    }
  }
  .up_pic {
    position: relative;
    .idcard-front-and-back {
      // border:1px solid red;
      display: flex;
      .idcard-img-wrap {
        margin-right: 14px;
      }
    }
    .img-wrap {
      width: 227px;
      height: 127px;
      text-align: center;
      line-height: 127px;
      color: #606266;
      background-color: rgba(239, 239, 239, 0.3);
      border: 2px dashed #ccc;
      position: relative;
      overflow: hidden;
      .img-mask {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        line-height: 127px;
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 0;
        span {
          margin-right: 5px;
        }
        z-index: 99;
      }
      .img-mask:hover {
        opacity: 1;
      }
      .img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>


