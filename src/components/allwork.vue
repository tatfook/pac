<template>
  <div class="all-works">
    <Header :userinfo='userinfo' @onLogined='reGetUserinfo' @onLogOut='toLogout'></Header>
    <Banner :userinfo='userinfo' @onLogined='reGetUserinfo'></Banner>
    <Footer></Footer>
  </div>
</template>
<script>
// import keepwork from '@/api/keepwork'
import Header from './common/header'
import Banner from './common/banner'
import Footer from './common/footer'
export default {
  name: 'allwork',
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
      localStorage.removeItem('userinfo')
    }
  }
}
</script>
