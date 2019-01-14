<template>
  <header class="main-header">
    <a href="#/" class="logo hidden-xs"><img width="24" height="24" src="data:image/png;base64,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"><span style="padding-left:10px;">API网关</span></a>
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="header-breadcrumb">
        <span>
        	<a href="#/dashboard" class="link-active">首页</a>
        </span>
        <p style=" display:inline;" v-for="(bread,index) in breadcrumb" :key="index">
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current" v-if="index==breadcrumb.length-1">{{bread.name}}</span>
        <a :href="bread.url" class="link-active" v-else>{{bread.name}}</a>
        </p>
      </div>
      
       <el-dropdown @command="handleCommand" class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <a class="dropdown-toggle">
              <span class="user-image"><i class="fa fa-user-circle" style="font-size:24px;"></i></span>
              <span class="hidden-xs">{{username}}</span>
            </a>
          </li>
        </ul>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="loginOut"><i class="fa fa-sign-out pr10"></i>退出登录</el-dropdown-item>
      </el-dropdown-menu>
      </el-dropdown>
    </nav>
  </header>
</template>

<script>
import Auth from '@a/js/myAuth.js'
export default {
  name: 'HeaderCom',
  data () {
    return {
      loginInfo:Auth.hasToken()
    }
  },
  computed:{
    username(){
      if(this.loginInfo){
        return JSON.parse(this.loginInfo).username
      }
      return ''
    },
    breadcrumb(){
      return this.$store.state.breadCrumb
    }
  },
  methods: {
    handleCommand(command){
      if(command === 'loginOut'){
        if(Auth.isLogin()){
          Auth.removeToken()
          Auth.removeUser()
          Auth.removeLoginStatus()
          location.reload()
          // this.$router.push({path:'login', replace:true})
        }
      }
    }
  }
}
</script>
<style scoped>
.navbar-nav>li>a{
  line-height:30px;
}
</style>
