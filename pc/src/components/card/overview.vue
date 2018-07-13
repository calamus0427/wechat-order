<template>
  <div>
    <div v-if="type=='enable'" class="cl-overview cl-overview-enable">
      <div class="cl-overview-avator" v-bind:style="{backgroundImage:'url(' + data.img + ')'}">

      </div>
      <div class="cl-overview-detail">
        <Row>
            <Col span="24">{{data.name}}（id：{{data.id}}）</Col>
        </Row>
        <Row>
            <Col span="24"><Icon type="clock" />{{new Date(data.createDate).Format("yyyy-MM-dd")}}</Col>
        </Row>
        <Row>
            <Col span="24">备注：{{data.des}}</Col>
        </Row>
      </div>
    </div>
    <div v-if="type=='add'" class="cl-overview-add">
      <Icon class="icon" type="plus-round" />
      <span class="child">新建分类</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'ClAppOverview',
  props:{
    /**
     * @params 状态 [add | enable |disable]
    */
      type:{
              type:String,
              default:'enable'
            },
      data:{
        type:Object,
        default:function () {
          return {
            "devId": "",
            "updateDate": new Date().getTime(),
            "appId": "JyD69c4u",
            "name": "测试新建应用",
            "id": 26,
            "createDate": new Date().getTime(),
            "status": 2,
            "img":'../../../static/app.jpg'
          }
        }
      }
  },
  data () {
    return {

    }
  },
  methods:{
    goRoute(res){
      this.$router.push({path:res})
    }
  }
}
</script>
<style lang="scss" scoped>
a div,span,text{
  color:#495060;
  &:hover{
    color:#2d8cf0;
  }
}

.cl-overview{
  display: flex;
  align-items: center;
  width: 310px;
  height: 120px;
  border:1px solid #dcdcdc;
  border-radius: 5px;
  &:hover{
    box-shadow: 1px 1px 2px #dcdcdc;
  }
  .cl-overview-avator{
    margin-left:10px;
    border-radius:10px;
    display: flex;
    width:100px;
    height:100px;
    background-repeat:no-repeat;
    background-position:center center;
    background-size: cover;
    &:hover{
            width:140px;
        }
  }
  .cl-overview-detail{
    margin-left:10px;
    .ivu-row{
      margin-top:10px;
    }
  }
}

.cl-overview-add{
  display: flex;
  align-items: center;
  width: 310px;
  height: 120px;
  border:1px solid #dcdcdc;
  border-radius: 5px;

  justify-content: center;/*水平居中*/
  .icon{
    font-size:20px;
  }
  &:hover{
    border:dotted orange 2px;
    .child{
      display:block;
    }
    .icon{
      display:none;
    }
  }
  .child{
    display:none;
  }
  .icon{
    display:block;
  }
}
</style>


