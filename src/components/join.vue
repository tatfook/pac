<template>
  <div class="join-form">
    <img class="close-btn" src="@/assets/pac/close.png" alt="">
    <h1 class="title">
      <img src="@/assets/pac/form_big_dot_left.png" alt="">账号注册<img src="@/assets/pac/form_big_dot_right.png" alt="">
    </h1>
    <div class="form">
      <div class="input-group">
        <img class="input-addon" src="@/assets/pac/user.png" alt="">
        <input v-model="username" class="input-content" type="text" name="username" placeholder="请输入账号">
      </div>
      <div class="input-group">
        <img class="input-addon" src="@/assets/pac/unlock.png" alt="">
        <input v-model="password" class="input-content" type="text" name="password" placeholder="请输入密码">
      </div>
      <div class="input-group">
        <input v-model="rePassword" class="input-content" type="text" name="rePassword" placeholder="确认密码">
      </div>
      <div class="input-group">
        <img class="input-addon" src="@/assets/pac/mobile-Phone.png" alt="">
        <input v-model="phone" class="input-content" type="text" name="phone" placeholder="请输入手机号码">
      </div>
      <div class="input-group">
        <img class="input-addon" src="@/assets/pac/security.png" alt="">
        <input v-model="code" class="input-content" type="text" name="code" placeholder="请输入验证码">
        <div class="get-code-btn" :class="{'get-code-btn-disabled': reSendCodeTime>0}" @click='getVerifyCode'>{{sendCodeBtnText}}</div>
      </div>
      <p class="error-msg" v-show="joinErrMsg">{{joinErrMsg}}</p>
      <div class="register-button" @click='toRegister'>
        立即注册
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
let axiosInstance = axios.create({
  baseURL: 'http://keepwork.com/api/wiki/models'
})
export default {
  name: 'join',
  computed: {
    sendCodeBtnText() {
      return this.reSendCodeTime > 0
        ? `重新发送(${this.reSendCodeTime}s)`
        : '发送验证码'
    }
  },
  data() {
    return {
      username: '',
      password: '',
      rePassword: '',
      phone: '',
      code: '',
      joinErrMsg: '',
      reSendCodeTime: 0,
      reSendCodeInteval: undefined
    }
  },
  methods: {
    startReSendCodeTimer() {
      this.reSendCodeTime = 60
      let that = this
      this.reSendCodeInteval = setInterval(() => {
        that.reSendCodeTime--
        if (that.reSendCodeTime <= 0) {
          clearInterval(that.reSendCodeInteval)
        }
      }, 1000)
    },
    getVerifyCode() {
      this.joinErrMsg = ''
      if (this.reSendCodeTime > 0) {
        return
      }
      if (!this.phone) {
        this.joinErrMsg = '请先输入手机号'
        return
      }
      if (!/^[0-9]{11}$/.test(this.phone)) {
        this.joinErrMsg = '请输入正确的手机号'
        return
      }
      let that = this
      axiosInstance
        .post('/user/verifyCellphoneOne', {
          cellphone: this.phone
        })
        .then(function(result) {
          let data = result.data
          console.log(data.data)
          if (data.data) {
            that.smsId = data.data.smsId
            that.startReSendCodeTimer()
            return
          }
          that.joinErrMsg = data.error.message
        })
        .catch(function(error) {
          console.log(error)
        })
      console.log(this.phone)
    },
    toRegister() {
      console.log('aa')
      this.joinErrMsg = ''
      if (!this.username) {
        this.joinErrMsg = '请输入账号'
        return
      }
      if (this.password.length < 6) {
        this.joinErrMsg = '密码最少为6位数'
        return
      }
      if (!this.smsId) {
        this.joinErrMsg = '请先获取验证码'
        return
      }
      if (!this.phone) {
        this.joinErrMsg = '请输入手机号'
        return
      }
      if (!this.code) {
        this.joinErrMsg = '请输入验证码'
        return
      }
      if (this.username.length > 30) {
        this.joinErrMsg = '账号需小于30位'
        return
      }
      if (this.password !== this.rePassword) {
        this.joinErrMsg = '两次输入的密码不一致'
        return
      }
      let joinParams = {
        username: this.username,
        password: this.password,
        cellphone: this.phone,
        smsCode: this.code,
        smsId: this.smsId,
        portrait: 'http://keepwork.com/wiki/assets/imgs/default_portrait.png'
      }
      let that = this
      axiosInstance
        .post('/user/register', joinParams)
        .then(function(result) {
          let data = result.data
          if (data.data) {
            console.log(data)
            return
          }
          that.joinErrMsg = data.error.message
        })
        .catch(function(error) {
          console.log(error)
        })
      console.log(joinParams)
    }
  }
}
</script>
<style lang="scss" scoped>
.join-form {
  text-align: center;
  padding: 0 28px;
  .close-btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
  }
  .form {
    padding: 0 20px;
  }
  .title {
    border-bottom: 7px solid #dcdcdc;
    padding-bottom: 40px;
    margin-bottom: 30px;
  }
  .input-group {
    border: 5px solid #e0e0e0;
    padding-left: 40px;
    position: relative;
    height: 48px;
    line-height: 48px;
    margin-bottom: 16px;
    background-color: #efefef;
  }
  .input-content {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 15px;
    color: #909199;
    box-sizing: border-box;
    background-color: transparent;
    padding: 0 20px;
  }
  .input-addon {
    position: absolute;
    left: 18px;
    top: 10px;
  }
  .register-button {
    width: 100%;
    border: 4px solid;
    height: 65px;
    line-height: 50px;
    font-size: 20px;
    background-color: #fef50c;
    color: #434103;
    font-weight: bold;
    position: relative;
    margin: 32px 0 22px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .register-button::after {
    content: '';
    width: 100%;
    height: 10px;
    background-color: #cdc401;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .error-msg {
    text-align: left;
    color: red;
  }
  .get-code-btn {
    width: 100px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #faac23;
    color: #434103;
    font-weight: bold;
    outline: 5px solid;
    box-sizing: border-box;
    cursor: pointer;
  }
  .get-code-btn-disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
}
</style>