<template>
  <div>
    <div v-if="type=='enable'" class="cl-overview cl-overview-enable" :class="data.status == 1 ? 'enable' : 'disable'">
      <div class="cl-overview-avator" v-bind:style="{backgroundImage:'url(' + data.img + ')'}">

      </div>
      <div class="cl-overview-detail">
        <Row>
          <Tooltip max-width="200" :content="data.des || data.name">
              <Col span="24" style="color:#515a6e;font-weight:bold">{{data.name}}（id：{{data.id}}）</Col>
          </Tooltip>
        </Row>
        <Row>
            <Col span="24"><Icon type="ios-time-outline" />{{data.update_date}}</Col>
        </Row>
        <Row>
            <ButtonGroup size="small">
              <Tooltip max-width="200" content="编辑">
                <Button icon="md-brush" size="small" @click="handleEdit"></Button>                
              </Tooltip>
              <Tooltip max-width="200" :content="data.status == 1 ? '禁用' : '启用'">
                <Button @click="handleUpdate" :icon="data.status == 1 ? 'md-eye-off' : 'md-eye'" size="small"></Button>                
              </Tooltip>
              <Tooltip max-width="200" content="删除">
                <Button icon="md-trash" @click="handleDel" size="small"></Button>                
              </Tooltip>
            </ButtonGroup>
        </Row>
      </div>
    </div>
    <div v-if="type=='add'" class="cl-overview-add">
      <Icon class="icon" type="md-add" />
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
    },
    handleUpdate(){
      let status = this.data.status ;
      let text = status == 1 ? '禁用' :'启用' ;
      this.$Modal.confirm({
                title: '状态修改',
                content: '确认要 '+ text  +' 该分类么？',
                okText: '确认',
                cancelText: '取消',
                onOk:() => {
                    console.log("ok")
                    this.$Message.success('删除成功!');
                }
            });
    },
    handleEdit(){
      this.$emit('edit',this.data)
    },
    handleDel(){
      this.$Modal.confirm({
          title: '删除',
          content: '确认要删除该分类么？',
          okText: '删除',
          cancelText: '取消',
          onOk:() => {
              console.log("ok")
              this.$Message.success('删除成功!');

          }
      });
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
.disable{
  background-color: #8080808c;
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


