<template>
  <div>
    <Header @onLogOut='toLogout'></Header>   
    <main>
      <Banner></Banner>
      <div class="intro-row-reg">
        <div class="container-reg">
          <div class="decoration hidden-xs-only">
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
                      <input type="radio" id="radio_1" name="group_name"/><label for="radio_1"></label><span class="group_name">学生组</span>
                      <input type="radio" id="radio_2" name="group_name"/><label for="radio_2"></label><span class="group_name">公开组</span>
                    </td>
                  </tr>
                  <tr>
                    <td>作品名称</td>
                    <td><input type="text" id="qq" v-model="qq_no" placeholder="请输入您的作品名称"/></td>
                  </tr>
                  <tr>
                    <td>作品简介</td>
                    <td><input type="text" id="tel" v-model="tel" placeholder="请输入作品简介"/></td>
                  </tr>
                  <tr>
                    <td>学校名称</td>
                    <td><input type="text" id="idcard" v-model="idcard_no" placeholder="请输入您的学校全名"/></td>
                  </tr>
                  <tr>
                    <td>作品封面</td>
                    <td><input type="text" id="idcard" class="work_face" v-model="idcard_no" placeholder="请输入您的身份证号码"/></td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div class="tip">(一张JPG格式，分辨率1024*768以上)</div>
                      <div class="preview">预览区域<div class="del"></div></div>
                    </td>
                  </tr>
                  <tr>
                    <td>选择作品</td>
                    <td class="compete_works">
                      <el-select id="my-compete-works" v-model="aim_work">
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
                    <td><div>报名奖项</div></td>
                    <td>
                      <div class="item_wrap">
                        <div>
                          <p><input type="checkbox" id="checkbox_1"><label for="checkbox_1"></label><span class="group_name">NPL 大奖</span></p>
                          <p><input type="checkbox" id="checkbox_2"><label for="checkbox_2"></label><span class="group_name">NPL 最佳编辑奖</span></p>
                          <p><input type="checkbox" id="checkbox_3"><label for="checkbox_3"></label><span class="group_name">NPL 最佳教程奖</span></p>
                        </div>
                        <div>
                          <p><input type="checkbox" id="checkbox_4"><label for="checkbox_4"></label><span class="group_name">NPL 最佳场景设置奖</span></p>
                          <p><input type="checkbox" id="checkbox_5"><label for="checkbox_5"></label><span class="group_name">NPL 3D角色制作奖</span></p>
                          <p><input type="checkbox" id="checkbox_6"><label for="checkbox_6"></label><span class="group_name">NPL 最佳开源贡献奖</span></p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div class="idcard">
                        <div class="idcard-type">身份证复印件/扫描件</div>
                        <div class="clicktoup"><div class="add"></div>点击上传</div>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td colspan="2"><div class="preview">预览区域</div></td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div class="idcard">
                        <div class="idcard-type">生活照</div>
                        <div class="clicktoup clicktoup2"><div class="add"></div>点击上传</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2"><div class="preview">预览区域</div></td>
                  </tr>
                </table>
                <div style="margin:8px auto;text-align:center;color:red" v-show="showerr">{{errmsg}}</div>
                <input type="submit" value="提交信息" :disabled="!_pass" :class="_pass ? 'btnok' : 'btn'">
              </form>
            </div> 
          </div>
        </div>
      </div>  
    </main> 
    <Footer></Footer>    
  </div>
</template>
<script>
import Header from "./common/header";
import Banner from "./common/banner";
import Footer from "./common/footer";
import "element-ui/lib/theme-chalk/display.css";
import axios from 'axios'

export default {
  name: "register",
  data() {
      return {
        myworks: [{
            value: '1',
            label: '1太阳'
          }, {
            value: '2',
            label: '2星星',
            disabled: true
          }, {
            value: '3',
            label: '3月亮'
          }, {
            value: '4',
            label: '4云朵'
        }],
        aim_work:"选择您要比赛的作品"
      }
  },
  computed: {
  },
  components: {
    Header,
    Banner,
    Footer
  },
  methods:{
    toLogout() {
      this.userinfo = undefined
      localStorage.removeItem('userinfo')
    },
  }
};
</script>
<style lang="scss" scoped>
.reg_info .uploadwork_table tr td{
  padding: 10px 0;
  input {
    border-radius: 0;
    width: 372px;
    margin: 0 0 0 9px;
    padding-left: 16px;
    height: 48px;
    
  }
}
 
.reg_info .uploadwork_table .work_face{
  border-radius: 50px;
}
.uploadwork_table .groups label {
  margin-left: 30px;
}
.uploadwork_table .groups td [type="radio"] {
  display: none;
}
.uploadwork_table .groups td label {
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
.tip{
  font-size: 12px;
  padding-left: 90px;
  color: #606266;
}

.preview{
  text-align: center;
  line-height: 146px;
  width: 275px;
  height: 146px;
  color: #606266;position: relative;
  background-color: rgba(239, 239, 239, 0.3);;
  border: 2px dashed rgba(0, 0, 0, 0.3);
  .del{
    position: absolute;
    top: 12px;
    right: 3px;
    width: 15px;
	  height: 15px;
	  border: 2px solid #db1616;
  }
  .del::after{
    content: "";
    position: absolute;
    top: 3px;
    left: 4px;
    width: 7px;
    height: 9px;
    background: #db1616;
  }
  .del::before{
    content: "";
    position: absolute;
    top: -8px;
    left: 5px;
    width: 6px;
    height: 4px;
    background: #db1616;
  }
}
.uploadwork_table .groups td label::after {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 6px;
  height: 6px;
  cursor: pointer;
  transform: scale(0);
  transition: transform 0.2s ease-out;
}
.uploadwork_table .groups td [type="radio"]:checked + label {
  border: 2px #303133 solid;
  background-color: #eee;
  transition: background-color 0.2s ease-in;
}
.uploadwork_table .groups td [type="radio"]:checked + label::after {
  background-color: #303133;
  transform: scale(1);
  transition: transform 0.2s ease-out;
}

// 奖项选择
.uploadwork_table .select_items{
  .item_wrap{
    display: flex;
    div{
      flex: 1;
      height: 120px;
      padding-left: 6px;
    }
  }
  div {
    flex: 1;
    height: 120px;
  }
  
  p{
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
  width: 480px;
  margin: 0 auto;
  .btn {
    background-color: rgb(144, 147, 153);
    display: block;
    color: #ffffff;
    border: none;
    width: 360px;
    height: 50px;
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
  .sel_work{
    width: 391px;
    margin-left: 10px;
    height: 48px;
    border: 0;
    

  }
}
.reg_info .group_name{
  color: rgba(48, 49, 51, 0.5);
  font-size: 14px;
}
.reg_info tr td input {
  background-color: #efefef;
  border: none;
  height: 36px;
  border-radius: 6px;
  padding:0 5px;
  font-size: 14px;
}

 .uploadwork_table .compete_works .el-select{
  border-radius: 0;
  border: 0;
  background: #efefef;
  width: 100%;
  height: 48px;
  margin-left: 8px;
}
// 点击上传
.idcard{
  display: flex;
  .idcard-type{
    flex: 1;
  }
  .clicktoup{
    width:313px;
    height: 48px;
    background-color: #efefef;
    text-align: center;
    color: #606266;
    position: relative;
    border-radius: 24px;
  }
  .clicktoup2{
    width: 391px;
  }
}
.add{
  width: 18px;
  height: 18px;
  border: 2px solid #444444;
  border-radius: 100%;
  position: absolute;
  top: 12px;
  left: 100px;
}
.add::before{
  content: '';
  width: 12px;
  height: 2px;
  background-color: #444444;
  position: absolute;
  top: 8px;
  left: 3px;
}
.add::after{
  content: '';
  width: 2px;
  height: 12px;
  background-color: #444444;
  position: absolute;
  top: 3px;
  left: 8px;
}

</style>
<style>

 /* .uploadwork_table .compete_works .el-input .el-input__inner{
  border-radius: 0;
  border: 0;
  background: blue;
  width: 386px;
  height: 48px;
  margin-left: 8px;
} */
</style>


