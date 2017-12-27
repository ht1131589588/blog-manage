<template>
  <div class="main-left">
    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo"
      @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/add-article">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/articlelist">
        <i class="el-icon-document"></i>
        <span slot="title">文章列表</span>
      </el-menu-item>
      <el-menu-item index="/classifylist">
        <i class="el-icon-star-off"></i>
        <span slot="title">标签列表</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item-group>
          <span slot="title" v-show="isCollapse">用户管理</span>
          <el-menu-item index="/user-manage/userlist">用户列表</el-menu-item>
          <el-menu-item index="/user-manage/managerlist">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/explain">
        <i class="el-icon-warning"></i>
        <span slot="title">说明</span>
      </el-menu-item>
    </el-menu>
  </div>
  
</template>
<script>
 export default {
    props:['collapse'],
    data() {
      return {
        isCollapse: false
      };
    },
    create:{
      isCollapse(){
        return this.collapse || false;
      }
    },
    computed:{
      defaultActive(){
        console.log(this.$route.path.replace('/', ''));
        return this.$route.path.replace('', '');
      }
    },
    mounted:function(){
      var self = this;
      this.$root.$on('navToggleCollapse',function(){
        self.isCollapse = !self.isCollapse;
      });
      
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>
<style type="text/sass" lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    height: 100%;
  }
  .main-left{
    height: 100%;;
  }

</style>