<template>
  <div>
    <Header :userinfo='userinfo' @onLogined='reGetUserinfo' @onLogOut='toLogout'></Header>   
    <main>
      <Banner></Banner>
      <div class="myworks">
        <h2>上传作品功能开发中，敬请期待</h2>
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
};
</script>
<style lang="scss">
</style>

