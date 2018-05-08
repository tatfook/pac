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
              <span><img src="@/assets/pac/fill_reg_info.png" alt=""></span>
            </h1>
            <div class="line"></div>
           <div class="reg_info">
              <form action="" >
                <table>
                  <tr>
                    <td width='94'><label for="name">姓名</label></td>
                    <td colspan="2"><input type="text" id="name" class="inputsty" v-model="user_name" placeholder="请输入您的姓名" /></td>
                  </tr>
                  <tr>
                    <td><label for="qq">QQ号码</label></td>
                    <td colspan="2"><input type="text" id="qq" class="inputsty" v-model="qq_no" placeholder="请输入您的QQ号"/></td>
                  </tr>
                  <tr>
                    <td><label for="tel">手机号码</label></td>
                    <td width="82">
                     <el-select v-model="value2">
                        <el-option
                          v-for="item in options2"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          :disabled="item.disabled">
                        </el-option>
                      </el-select>
                    </td>
                    <td><input type="text" id="tel" class="inputtel" v-model="tel" placeholder="请输入您的手机号码"/></td>
                  </tr>
                  <tr>
                    <td><label for="idcard">身份证件</label></td>
                    <td colspan="2"><input type="text" id="idcard" class="inputsty" v-model="idcard_no" placeholder="请输入您的身份证号码"/></td>
                  </tr>
                </table>
                <p class="hint">提示：信息一旦确认不得修改，如作品获得现金奖需提供与此身份证有关的银行卡方可领奖</p>
                <div class="radio_1">
                  <input type="checkbox" id="isagree" name="agree" v-model="isdisabled"><label for="isagree"></label>同意<span style="color:#5196e7;">《2018国际智能创意大奖赛比赛协议》</span><br>
                </div>
                <input type="submit" value="提价信息" :disabled="!_pass" :class="_pass ? 'btnok' : 'btn'">
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
export default {
  name: "register",
  data() {
      return {
        options2: [{
            value: '1',
            label: '+86'
          }, {
            value: '2',
            label: '+87',
            disabled: true
          }, {
            value: '3',
            label: '+88'
          }, {
            value: '4',
            label: '+89'
        }],
        value2: '+86',
        isdisabled:false,
        user_name: '',
        qq_no: '',
        tel: '',
        idcard_no: '',
      }
  },
  computed: {
    _pass: function(){
      if (this.user_name && this.qq_no && this.tel && this.idcard_no && this.isdisabled) {
        return this.pass = true
      }
      return this.pass = false
    }
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
    }
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

