<template>
  <div>
    <div class="align_center">
      <Avatar class="avatar" src="http://p3i10hjs7.bkt.clouddn.com/user.jpg" size="large" />
      <span>{{form.loginName}}</span>
    </div>

<Tabs>
        <TabPane label="食堂信息">
<Form :model="form" ref="form" label-position="left" :label-width="100">
      <div class="ra-setting">
        <div class="ra-setting-title">院区信息</div>
        <FormItem label="所属医院：">
          {{form.type}}
            <!-- <Input v-model="form.type"></Input> -->
        </FormItem>
        <FormItem label="院区：">
          {{form.loginName}}
            <!-- <Input v-model="form.loginName"></Input> -->
        </FormItem>
      </div>
      <div class="ra-setting">
        <div class="ra-setting-title">位置信息</div>
        <FormItem label="详细地址：">
          {{form.address}}
          <!-- Todo:添加地图 -->
            <!-- <Input v-model="form.phone"></Input> -->
        </FormItem>
      </div>
      <!-- <FormItem>
            <Button type="primary" @click="updateUserInfo('form')">确定</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
      </FormItem> -->
    </Form>
        </TabPane>
</Tabs>

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
        "id": 38,
        "phone": null,
        "developerIdentity": null,
        "developerSecretKey": null,
        "loginName": "",
        "companyName": null,
        "type": "",
        "email": "",
        "officeName":'',
        "officeId":'1',// 归属部门
        "salt":'1', // 佐料
        "no":'1', // 工号
        "name":'', // 姓名
        "mobile":'', // 手机
        "userType":'1', // 用户类型, 如，1系统管理员，开发人员，2为部门经理
        "loginIp":'11.11.11.111',  // 最后登陆IP
        "loginFlag":'1',   // 是否允许登陆
        "defaultAppid":'26',//默认应用Id
        "address":'' //地址
      },
      rules: {
          loginName: [
              { required: true, message: '请输入用户名', trigger: 'change' }
          ]
      }
    }
  },
  mounted(){
    this.getUserInfo()
  },
  methods:{
    getUserInfo(){
          this.$http.get(this.$request.user+this.$store.state.login.user.name)
            .then( (res)=> {
              if(res.data.code == 1000){
                this.form = res.data.data;
              }else{
                this.$Message.error(res.data.msg);
              }
            },(err)=>{
              console.error('获取用户信息失败',err);
            })
    },
    updateUserInfo(name){
      this.$refs[name].validate((valid) => {
                    if (valid) {
                          var biList=this.$Qs.stringify(this.form);
                          this.$http.put(this.$request.user,biList)
                            .then( (res)=> {
                              if(res.data.code == 1000){
                                this.$Message.successs("更新用户信息成功");
                              }else{
                                this.$Message.error(res.data.msg);
                              }
                            },(err)=>{
                              console.error('更新用户信息失败',err);
                            })
                    }
                    else{
                      this.$Message.error("更新用户信息失败");
                    }
                })
    },
    updatePassword(name){
      this.$refs[name].validate((valid) => {
                    if (valid) {
                          var biList=this.$Qs.stringify(this.passwordForm);
                          this.$http.put(this.$request.user,biList)
                            .then( (res)=> {
                              if(res.data.code == 1000){
                                this.$Message.error("修改密码成功");
                              }else{
                                this.$Message.error(res.data.msg);
                              }
                            },(err)=>{
                              this.$Message.error(res.data.msg);
                            })
                    }
                    else{
                      this.$Message.error("修改密码失败");
                    }
                })
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

