<template>
  <div class="ra-tv-container">
    <div class="ra-tv-alert" :class="positionClass">
      <div class="ra-tv-alert-header clearfix">
        <span><i class="fa fa-users" style="color:#C6D4D7"></i>  {{data.title || "消息标题"}}</span>
        <span style="float: right;color:slategray" type="text">{{data.focusTime || "5"}}s后可关闭</span>
      </div>
      <div class="ra-tv-content" :style="data.uiType == '2' ? 'justify-content: center;' : ''">
        <div v-if="data.uiType!='1'" class="ra-tv-content-img">
            <img :src="data.iconPath || '../../../static/defaultApp.jpg'" alt="海报">
        </div>
        <div v-if="data.uiType!='2'" class="ra-tv-content-content">{{data.content || "消息内容"}}</div>
      </div>
      <div class="ra-tv-button">
            <Button size="small" type="primary">按[确定]按钮查看</Button>
      </div>
    </div>
</div>
</template>
<script>
let dom = null
  export default {
    name:'CLTv',
    props:{
      data: {
            type: Object,
            default: function(){
              var data = {
                uiType:'1',
                uiPosition:'1',
                title:'消息标题',
                content:'消息内容',
                iconPath:'http://p3i10hjs7.bkt.clouddn.com/user.jpg'
              }
              return data
            }
      },
    },
    computed: {
      positionClass(){
            switch(this.data.uiPosition){
                case '1':
                    return 'position-right-top';
                    break;
                case '2':
                    return 'position-right-bottom';
                    break;
                case '3':
                    return 'position-center';
                    break;}
        }
    },
    data(){
      return {
      }
    },
    mounted(){
    },
    methods:{
    }
  }
</script>
<style lang="scss" scoped>
.drop{
  width:400px;
  height: 400px;
  background-color:#fff;
}
.cl-tv{
  display:flex;
  align-items: center;
  justify-content:center;
  width:500px;
  height:300px;
  background: url('../../../static/tvbg.jpg') no-repeat center;
  background-size:100% 100%;
}
.cl-tv-alert{
  background-color:#fff;
  width:200px;
  .content{
    background-color:#dcdcdc;
    padding:2px;
    height: 50px;
    word-wrap:break-word ;
    overflow: hidden;
    // width:80px;
  }
  .img{
        // text-align: center;
    img{
      display:block;
      width:50px;
      margin:0 auto;
    }
  }
}

////////////////////////////////////////
.ra-tv-container{
    // width:768px;
    // height:432px;
    width:500px;
    height:300px;
    background: url('../../../static/tvbg.jpg') no-repeat center;
    background-size:100% 100%;
    font-size:12px;
}
.ra-tv-alert{
    position:absolute;
    width:300px;
    min-height:120px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s
}
.position-right-top{
    top: 0px;
    right: 34px;
}
.position-right-bottom{
    top: 105px;
    right: 34px;
}
.position-center{
    top: 65px;
    left: 100px;
}
.ra-tv-alert-header{
    display: flex;
    padding: 5px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
}
.ra-tv-alert-header span:nth-child(1){
    width: 195px;
    height: 20px;
    overflow: hidden;
    display: block;
}
.ra-tv-content{
    display:flex;

    padding: 10px 0;
}
.ra-tv-content img{
    width:80px;
    height:70px;
}
.ra-tv-content-content{
    height: 70px;
    word-wrap:break-word ;
    overflow: hidden;
    padding-left: 5px;
}
.ra-tv-button{
    text-align: center;
    margin:10px 0;
}
</style>


