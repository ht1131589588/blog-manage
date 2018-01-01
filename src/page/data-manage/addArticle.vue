<template>
  <div class="add-article-container">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="输入文章标题..." v-model="title">
    </div>
    <div class="form-group add-article-content">
      <mark-editor ref="markEditor"></mark-editor>
    </div>
    <div class="form-group text-center">
      <button class="btn btn-success" @click="submitFn()">发布</button>
    </div>
  </div>
</template>

<script>
import {addArticle} from '@/api/data'
import MarkEditor from '@/components/markEditor'
export default {
  data () {
    return {
      title:'',
      content:''
    }
  },
  watch:{

  },
  components:{
    MarkEditor
  },
  methods:{
    async submitFn(){
      var title = this.title;
      var content = this.$refs.markEditor.getMarkdownContent();
      const res = await addArticle({title: title, content: content});
      if(res.status==1){
        this.$message('发布成功');
        setTimeout(function(){
          this.$router.push('/articlelist');
        },200)
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>