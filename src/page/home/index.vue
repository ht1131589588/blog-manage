<template>
  <div>
    首页
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      msg: '主页',
      chatDatas:[
          [321, 132, 101, 555, 90, 230, 210],
          [220, 182, 191, 234, 290, 330, 310],
          [820, 932, 901, 400, 1290, 1320, 1320]
        ],
    }
  },
  components:{
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
  #mainChat{
    height: 500px;
  }
  .data-line{
    display: flex;
    height: 40px;
    line-height: 40px;
    width:500px;
    margin-bottom: 10px;
    li{
      flex: 1;
      text-align: center;
      box-sizing: border-box;
      padding: 0px 10px;
      span{
        display: block;
        height: 100%;
        border-radius: 4px;
        background: #ddd
      }
    }
  }
</style>


