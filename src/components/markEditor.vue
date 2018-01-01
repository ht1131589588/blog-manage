<template>
  <div class="mark-editor">
    <el-row>
      <el-col :span="12" class="mark-editor-input">
        <editor id="editor-textarea" v-model="input" @init="editorInit();" lang="markdown" theme="chrome"></editor>
        <!-- <el-input id="editor-textarea" type="textarea" :rows="2" v-model="input"></el-input> -->
      </el-col>
      <el-col :span="12">
        <div class="markdown-container">
          <div v-html="compiledMarkdown"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'highlight.js/styles/github.css'
import Marked from 'marked'
import highlightjs from 'highlight.js'
var editor = require('vue2-ace-editor')

export default {
  props:['content'],
  data () {
    return {
      input: ''
    }
  },
  created(){
    
    Marked.setOptions({
      highlight: function (code) {
        return highlightjs.highlightAuto(code).value;
      }
    });
    this.input = this.content || '';
  },
  computed:{
    compiledMarkdown: function(){
      return Marked(this.input)
    }
  },
  methods:{
    editorInit:function () {
      require('vue2-ace-editor/node_modules/brace/mode/html');
      require('vue2-ace-editor/node_modules/brace/mode/javascript');
      require('vue2-ace-editor/node_modules/brace/mode/less');
      require('vue2-ace-editor/node_modules/brace/theme/chrome');
      require('vue2-ace-editor/node_modules/brace/mode/markdown');
    },
    getMarkdownContent(){
      return this.compiledMarkdown;
    },
    getContent(){
      return this.input;
    }
  },
  components: {
    editor: editor
  }
}
</script>

<style lang="scss">
  .mark-editor{
    height: inherit;
    .mark-editor-input{
      position: relative;
      box-shadow: 1px 0px 1px #ddd;
    }
    #editor-textarea{
      width: 100%;
      min-height: 450px;
      // border: none;
      background-color: #fefefa;
    }
    .ace_gutter{display: none}
    
  }
  
  .markdown-container{
    padding: 0 10px; 
    height: 450px;
    overflow-y: auto;
  }
  
</style>
