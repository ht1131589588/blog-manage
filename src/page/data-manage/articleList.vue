<template>
  <div>
    <div class="right">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="formInline.title" placeholder="文章标题"></el-input>
        </el-form-item>
        <el-form-item label="标签名">
          <el-select v-model="formInline.classify" placeholder="标签">
            <el-option label="前端" value="qianduan"></el-option>
            <el-option label="Java" value="java"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%;">
        <el-table-column
          type="index"
          label="序号"
          width="auto">
        </el-table-column>
        <el-table-column
          prop="id"
          label="ID"
          width="auto">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="auto">
        </el-table-column>
        <el-table-column
          label="标签"
          width="auto">
          <template slot-scope="scope">
            <el-tag type="success" v-for="item in scope.row.classifys">{{item}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="createdAt"
          label="发布日期">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="auto">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="handleDelete(scope.$index,scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {getArticleLists, deleteArticle, modifyArticle} from '@/api/data'
export default {
  data () {
    return {
      tableData: [],
      formInline: {
        title: '',
        classify: ''
      }
    }
  },
  created(){
    this.initData();
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    onSubmit() {
      console.log('submit!');
    },
    async initData(){
      const res = await getArticleLists();
      if(res.status==1){
        var datas = JSON.parse(JSON.stringify(res.data));
        datas.map(function(item,all){
          if(item.classifys){
            item.classifys = item.classifys.split(',');
          }else{
            item.classifys = ['前端','vue.js','node'];
          }
          item.createdAt = new Date(item.createdAt).toLocaleString();
          item.updatedAt = new Date(item.updatedAt).toLocaleString();
          return item;
        })
        this.tableData = datas;
      }
      
    },
    async handleDelete(index,id){
      console.log(id);
      const res = await deleteArticle({id});
      if(res.status==1){
        this.$message({
          type: 'success',
          message: '删除成功'
        });
        this.tableData.splice(index, 1);
      }
    }
  },
  components:{
  }
}
</script>
<style lang="scss" scoped>
  
</style>