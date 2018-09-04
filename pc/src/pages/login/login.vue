<template>
  <div class="cl-flex-center">

    <cl-canvasBg1></cl-canvasBg1>
    <div class="cl-login">
      <h1>医院食堂移动订餐平台</h1>
        <Form ref="form" :model="form" :rules="ruleInline" >
          <FormItem prop="user">
              <Input type="text" v-model="form.name" placeholder="Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" @keyup.enter.native="handleSubmit('form')" v-model="form.password" placeholder="Password">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
            <Row>
              <Col span="10">
                <Button  type="primary" @click="handleSubmit('form')">登录</Button>
              </Col>
              <Col span="14">
                没有账号==》
                <router-link to="/signin">注册
              </router-link></Col>
            </Row>
          </FormItem>
        </Form>
    </div>

  </div>
</template>

<script>
import '../../components/canvasBg/canvas1'
export default {
    data () {
        return {
          form: {
                    name: '',
                    password: ''
          },
          ruleInline: {
              name: [
                  { required: true, message: '请输入用户名', trigger: 'change' }
              ],
              password: [
                  { required: true, message: '请输入密码', trigger: 'change' },
                  { type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'change' }
              ]
          }
        }
    },
    mounted(){
      // var token = this.$storage.getStorage('user') == null ? ''  : this.$storage.getStorage('user').token ;
      // if(token){
      //   this.$router.push('/Classification')
      // }
    },
    methods:{
      handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                            this.$Message.success('登录成功!');
                            setTimeout(()=> {
                              this.$router.push('/Classification')
                            }, 500);
                    }
                })
            },
    }
}
</script>
<style lang="scss" scoped>
.cl-flex-center{
  display: flex;
  height:80vh;
  align-items:center;
  justify-content: center;
}
.cl-login{
  width:400px;
  text-align:center;
  h1{
    margin-bottom:50px;
    font-size:40px;
  }
}
</style>
