<template>
  <div>
    <div  :class="type=='enable'?'cl-overview-enable':'cl-overview-disable'">
      <Row class="cl-overview">
        <Col span="4" class="cl-overview-avator">
            <img src="../../../static/app.jpg" alt="">
        </Col>
        <Col span="10">
          <div class="cl-overview-detail">
            <Row>
                <Col span="24">{{appDetail.name}}（id：{{appDetail.id}}）</Col>
            </Row>
            <Row>
                <Col span="24">包名：{{appDetail.packageName}}</Col>
            </Row>
            <Row>
                <Col span="24">备注：{{appDetail.remark}}</Col>
            </Row>
          </div>
        </Col>
        <Col span="10">
          <div class="cl-overview-detail">
            <Row>
                <Col span="24">创建时间：<Icon type="clock" /> {{new Date(appDetail.createDate).Format("yyyy-MM-dd hh:mm:ss")}}</Col>
            </Row>
            <Row>
                <Col span="24">更新时间：<Icon type="clock" /> {{new Date(appDetail.updateDate).Format("yyyy-MM-dd hh:mm:ss")}}</Col>
            </Row>
            <Row>
              <Col span="24">
          <ButtonGroup  v-if="type=='enable'">
            <Tooltip content="查看更多">
              <Button type="ghost" @click="showDetail()" icon="eye"></Button>
            </Tooltip>
             <Tooltip content="编辑">
              <Button type="ghost" @click="goRoute('/editApp/'+id)" icon="edit">编辑</Button>
            </Tooltip>
            <Tooltip content="禁用">
              <Button type="warning" @click="enable()" icon="alert">禁用</Button>
            </Tooltip>
            <Tooltip content="启用">
              <Button type="success" @click="enable()" disabled icon="checkmark">启用</Button>
            </Tooltip>
            <Tooltip content="删除">
              <Button type="error" @click="del()" icon="close">删除</Button>
            </Tooltip>
          </ButtonGroup>
          <ButtonGroup  v-if="type=='disable'">
            <Tooltip content="查看更多">
              <Button type="ghost" @click="showDetail()" icon="eye"></Button>
            </Tooltip>
            <Tooltip content="编辑">
              <Button type="ghost" @click="goRoute('/editApp/'+id)" icon="edit">编辑</Button>
            </Tooltip>
            <Tooltip content="禁用">
              <Button type="default" @click="enable()" disabled icon="alert">禁用</Button>
            </Tooltip>
            <Tooltip content="启用">
              <Button type="success" @click="enable()"  icon="checkmark">启用</Button>
            </Tooltip>
            <Tooltip content="删除">
              <Button type="error" @click="del()"  icon="close">删除</Button>
            </Tooltip>
          </ButtonGroup>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row v-if="appDetail.serIp" v-show="seeMore" class="cl-overview">
        <div class="ra-setting-title">IP</div>
        <ul  style="margin-left:20px;">
          <li v-for="(item,index) in appDetail.serIp.split(',')" :key="index">{{item}}</li>
        </ul>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  name:'ClAppDetail',
  props:{

  },
  computed:{

  },
  data () {
    return {
      seeMore:true,
      id:this.$route.params.id,
      appDetail:{
            "id": '',
            "name": "",
            "devId": "",
            "apiSecret": "",
            "appId": "",
            "packageName": "",
            "company": "",
            "phone": "",
            "realName": "",
            "email": "",
            "serIp": "",
            "status": '1',
            "createDate": '',
            "updateDate": '',
            "delFlag": '',
            "remark":''
      },
    // @param type [enable|disable]
      type:'enable'
    }
  },
  watch:{
      '$route' (to, from) {
          if(to.params.id){
            this.getAppDetail()
          }else{
            this.$router.push('/appList')
          }
      }
    },
  mounted(){
    this.getAppDetail()
  },
  methods:{
    goRoute(res){
      this.$router.push({path:res})
    },
    showDetail(){
      this.seeMore = this.seeMore == true ? false : true ;
    },
    enable(){
      this.$http.patch(this.$request.app+'update_app_status?'+this.$Qs.stringify({'id':this.$route.params.id}),{'withCredentials': true})
        .then( (res)=> {
          if(res.data.code == 1000){
            this.getAppDetail()
          }else{
            this.$Message.error(res.data.msg);
          }
        },(err)=>{
          console.error('get app detail failed',err);
        })
    },
    getAppDetail(){
      this.$http.get(this.$request.app+'%7Bid%7D?id='+this.$route.params.id)
        .then( (res)=> {
          if(res.data.code == 1000){
            this.appDetail = res.data.data.app_info;
            this.type = res.data.data.app_info.status == 1 ? 'enable' :'disable';
          }else{
            this.$Message.error(res.data.msg);
          }
        },(err)=>{
          console.error('get app detail failed',err);
        })
    },
    del(){

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
.ra-setting-title{
    color: #999999;
    text-align: left;
    height: 45px;
    line-height: 45px;
    margin-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px solid #cccccc;
}
.cl-overview{
  width: 100%;
  min-height: 20px;
  border:1px solid #dcdcdc;
  &:hover{
    box-shadow: 1px 1px 2px #dcdcdc;
  }
  .cl-overview-avator{
    margin:10px;
    border-radius:10px;
    display: flex;
    // align-items: center;
    // justify-content:center;
    width:100px;
    height:100px;
      img{
        border-radius:25px;
        border:1px #dcdcdc solid;
        box-shadow:1px 1px 1px #dcdcdc ;
        z-index:100;
        width:100%;
        height:100%;
        transition: all 0.5s ease-in-out;
        &:hover{
            transform: scale(1.1)
        }
      }
  }
  .cl-overview-detail{
    margin-left:10px;
    .ivu-row{
      margin-top:10px;
    }
  }
}
.cl-overview-enable{
  background: url('../../../static/enable.png') no-repeat  top right;
}
.cl-overview-disable{
  opacity: 0.7;
  background: url('../../../static/disable.png') no-repeat  top right;
}
.cl-overview-add{
  display: flex;
  align-items: center;
  width: 120px;
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


