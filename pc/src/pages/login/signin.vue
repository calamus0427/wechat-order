<template>
  <div class="cl-flex-center">
    <cl-canvasBg1></cl-canvasBg1>
    <div class="cl-login">
      <h1>医院食堂移动订餐平台</h1>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="Password">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <Row>
                <Col span="10">
                  <Button type="primary" @click="handleSignin('formInline')">注册</Button>
                </Col>
                <Col span="14">
                    已有账号==》
                  <router-link to="/login">登录
                  </router-link>
                </Col>
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
          formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
                    ]
                }
        }
    },
    methods:{
      handleSignin(name) {
        this.$refs[name].validate((valid) => {
              if (valid) {
                  this.$Message.success('Success!');
                  this.$router.push('/login')
              } else {
                  this.$Message.error('Fail!');
              }
          })
      }
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
