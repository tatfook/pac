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
              <form @submit.prevent="register">
                <table>
                  <tr>
                    <td width='94'><label for="name">参赛组别</label></td>
                    <td><input type="text" id="name" class="inputsty" v-model="user_name" placeholder="请输入您的姓名" /></td>
                  </tr>
                  <tr>
                    <td><label for="qq">作品名称</label></td>
                    <td><input type="text" id="qq" class="inputsty" v-model="qq_no" placeholder="请输入您的QQ号"/></td>
                  </tr>
                  <tr>
                    <td><label for="tel">作品简介</label></td>
                    <td><input type="text" id="tel" class="inputtel" v-model="tel" placeholder="请输入您的手机号码"/></td>
                  </tr>
                  <tr>
                    <td><label for="idcard">学校名称</label></td>
                    <td><input type="text" id="idcard" class="inputsty" v-model="idcard_no" placeholder="请输入您的身份证号码"/></td>
                  </tr>
                  <tr>
                    <td><label for="idcard">作品封面</label></td>
                    <td><input type="text" id="idcard" class="inputsty" v-model="idcard_no" placeholder="请输入您的身份证号码"/></td>
                  </tr>
                  <tr>
                    <td colspan="2"><div>预览区域</div></td>
                  </tr>
                  <tr>
                    <td>选择作品</td>
                    <td>
                      <select name="sel_work" id="">
                        <option value="1">作品1</option>
                        <option value="1">作品2</option>
                        <option value="1">作品3</option>
                        <option value="1">作品4</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>报名奖项</td>
                    <td>
                      <div>
                        <input type="checkbox">NPL 大奖
                        <input type="checkbox">NPL 最佳编辑奖
                        <input type="checkbox">NPL 最佳教程奖
                      </div>
                      <div>
                        <input type="checkbox">NPL 最佳场景设置奖
                        <input type="checkbox">NPL 3D角色制作奖
                        <input type="checkbox">NPL 最佳开源贡献奖
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>身份证复印件/扫描件</td>
                    <td>点击上传</td>
                  </tr>
                  <tr>
                    <td colspan="2">预览区域</td>
                  </tr>
                  <tr>
                    <td>生活照</td>
                    <td>点击上传</td>
                  </tr>
                  <tr>
                    <td colspan="2">预览区域</td>
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
<style lang="scss">
.radio_1 [type="checkbox"] {
  display: none;
}
.radio_1 label {
  margin-right: 10px;
  display: inline-block;
  position: relative;
  top: 3px;
  width: 10px;
  height: 10px;
  border: 3px #c0c1c1 solid;
  background-color: #fff;
  cursor: pointer;
}
.radio_1 label::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 4px;
  height: 4px;
  background-color: #c0c1c1;
  cursor: pointer;
  transform: scale(0);
  transition: transform 0.2s ease-out;
}
.radio_1 [type="checkbox"]:checked + label {
  border: 3px #303133 solid;
  background-color: #eee;
  transition: background-color 0.2s ease-in;
}
.radio_1 [type="checkbox"]:checked + label::after {
  background-color: #303133;
  transform: scale(1);
  transition: transform 0.2s ease-out;
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
  .hint {
    color: red;
    font-size: 14px;
    text-align: left;
  }
  .btn {
    background-color: rgb(144, 147, 153);
    display: block;
    color: #ffffff;
    border: none;
    width: 360px;
    height: 50px;
    font-size: 24px;
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
    font-size: 24px;
    margin: 34px auto;
    box-shadow: inset 0px -8px 0px 0px rgb(9, 20, 138);
  }
}
.reg_info tr {
  height: 48px;
  line-height: 58px;
}
.inputsty {
  width: 320px;
}
.smallinput {
  width: 38px;
}
.inputtel {
  width: 234px;
}
.reg_info tr td {
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  // padding-right: 14px;
}
.reg_info tr td input {
  background-color: #efefef;
  border: none;
  height: 36px;
  border-radius: 6px;
  padding:0 5px;
  // width: 320px;
}
.slash {
  height: 20px;
  border: 1px solid red;
}
</style>

