<template>
  <div class="login-form">
    <img @click="closeDialog" class="close-btn" src="@/assets/pac/close.png" alt="">
    <h1 class="title">
      <img src="@/assets/pac/form_big_dot_left.png" alt="">登录账号<img src="@/assets/pac/form_big_dot_right.png" alt="">
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
      <p class="error-msg" v-show="loginErrMsg">{{loginErrMsg}}</p>
      <div class="login-button" @click='toLogin'>
        立即登录
      </div>
      <p class="extra-operations">
        <span class="to-join-button" @click="showJoinDialog">立即注册</span>
      </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      loginErrMsg: ''
    }
  },
  methods: {
    closeDialog(){
      this.$emit('close')
    },
    showJoinDialog(){
      this.$emit('showJoinDialog')
      this.closeDialog()
    },
    toLogin() {
      this.loginErrMsg = ''
      if (!this.username) {
        this.loginErrMsg = '用户名不能为空'
        return
      }
      if (!this.password) {
        this.loginErrMsg = '密码不能为空'
        return
      }
      let that = this
      axios
        .create({
          baseURL: 'http://keepwork.com/api/wiki/models'
        })
        .post('/user/login', {
          username: this.username,
          password: this.password
        })
        .then(function(result) {
          let data = result.data
          if (data.data) {
            let userinfo = JSON.stringify(data.data.userinfo)
            let token = JSON.stringify(data.data.token)
            localStorage.setItem('userinfo', userinfo)
            localStorage.setItem('token', token)
            that.$emit('onLogined')
            return
          }
          that.loginErrMsg = data.error.message
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-form {
  text-align: center;
  padding: 0 28px;
  .close-btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    cursor: pointer;
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
  .login-button {
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
  .login-button::after {
    content: '';
    width: 100%;
    height: 10px;
    background-color: #cdc401;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .extra-operations {
    span {
      font-size: 14px;
      color: #909399;
    }
  }
  .error-msg {
    text-align: left;
    color: red;
  }
  .to-join-button{
    cursor: pointer;
  }
}
</style>
