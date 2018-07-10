<template>
  <div>
        <Form :model="form" ref="form" label-position="left" :label-width="100">
          <div class="ra-setting">
            <div class="ra-setting-title">添加菜品分类</div>
            <FormItem label="名称：">
                <Input v-model="form.name"></Input>
            </FormItem>
            <FormItem label="备注：">
                <Input v-model="form.des"></Input>
            </FormItem>
            <FormItem label="是否立即启用：">
                <i-switch v-model="form.status" size="large">
                <span slot="open">是</span>
                <span slot="close">否</span>
            </i-switch>
            </FormItem>
            <FormItem label="选择分类菜品：">
                <Button type="text">选择</Button>
                {{form.food}}
            </FormItem>
          </div>
          <FormItem>
                <Button type="primary" @click="addFood()">确定</Button>
                <Button type="ghost" @click="cancelAddFood()" style="margin-left: 8px">取消</Button>
          </FormItem>
        </Form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value:'',
      passwordForm:{
        "loginName":this.$store.state.login.user.name,
        "oldpassword":'',
        "newpassword":''
      },
      passwordRules:{},
      form: {
        'name':'',
        'status':'on',
        'des':'',
        'food':''
      },
      rules: {
          loginName: [
              { required: true, message: '请输入用户名', trigger: 'change' }
          ]
      }
    }
  },
  mounted(){
  },
  methods:{
   cancelAddFood(){
     this.$router.push('/Classification')
   },
   addFood(){
     this.$router.push('/Classification')
   }
  }
}
</script>
<style lang="scss" scoped>
.ra-setting{
  width:100%;
  background-color: #F5F7F9;
  margin:10px;
  padding:20px;
  border-radius:10px;
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
.avatar{
      transition: all 0.5s ease-in-out;
      &:hover{
          transform:rotate(360deg);
      }

}
</style>

