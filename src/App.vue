<template>
  <div id="app">
    <Header :userinfo='userinfo' @onLogined='reGetUserinfo' @onLogOut='toLogout'></Header>
    <Banner v-show="isBannerShow" :userinfo='userinfo' @onLogined='reGetUserinfo'></Banner>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/header'
import Banner from './components/common/banner'
import Footer from './components/common/footer'
export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Footer
  },
  data() {
    return {
      userinfo: JSON.parse(localStorage.getItem('userinfo'))
    }
  },
  methods: {
    reGetUserinfo() {
      this.userinfo = JSON.parse(localStorage.getItem('userinfo'))
    },
    toLogout() {
      this.userinfo = undefined
      localStorage.removeItem('token')
      localStorage.removeItem('userinfo')
    }
  },
  computed: {
    isBannerShow() {
      return this.$route.name !== 'workdetail'
    }
  }
}
</script>

<style>
html,
body {
  font-family: 'Microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
  /* height: 100%; */
  margin: 0;
  padding: 0;
}
input {
  font-family: 'Microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
}
body {
  margin: 0;
}
</style>
