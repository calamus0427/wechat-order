<template>
    <Row >
        <Col span="20">
          <div class="cl-header-logo">
            医院食堂移动订餐平台
          </div>
        </Col>
        <Col span="4">
          <Dropdown @on-click="toUser">
              <a href="javascript:void(0)">
                <a><Avatar  src="http://p3i10hjs7.bkt.clouddn.com/user.jpg" /></a>
              </a>
              <DropdownMenu  slot="list">
                  <DropdownItem name='userInfo'>食堂信息管理</DropdownItem>
                  <DropdownItem name='login'>退出</DropdownItem>
              </DropdownMenu>
          </Dropdown>
        </Col>
    </Row>
</template>
<script>
  export default{
    name:'Header',
    props:{},
    data(){
      return {
        userInfo:{
          name:"calamus"
        },
        appItem: '',
        appList: []

      }
    },
    watch:{
      '$route' (to, from) {
          if(to.params.id){
            this.appItem = parseInt(to.params.id);
          }else{
            this.appItem = '';
          }
      }
    },
    mounted(){
      console.log("%c【用户 "+this.$store.state.login.user.name+ "】","color:#E1244E;font-size:14px;text-shadow:3px 1px 2px #e1244e9e;")
      this.getAppList();
      if(this.$route.params.id){
            this.appItem = parseInt(this.$route.params.id);
      }
    },
    methods:{
      toAppList(){
          var _this = this ;
          this.appItem = '';
          this.$nextTick(() => this.$router.push('/appList'))
      },
      changeItem(res){
        if(res && res!=this.$route.params.id){
          this.$router.push({ name: '应用', params: { id: res }})
        }
      },
      toUser(res){
        if(res == 'login'){
          this.$store.dispatch('logout').then(() => {
              this.$router.push('/login');
              this.$storage.removeStorage("user")
          })
        }else{
          this.$router.push('/'+ res)
        }
      },
      getAppList(){
        this.$http.get(this.$request.app+'?'+'page=1&size=100')
          .then( (res)=> {
            if(res.data.code == 1000){
                this.appList = res.data.data.data ;
            }
          },(err)=>{
            console.error('get dataTable failed',err);
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
a{
  color: #495060;
  font-weight: bold;
}
.cl-header-logo{
  font-size: 23px;
  text-align:center;
  font-weight: bold;
  color: #495060;
}
.ivu-select-dropdown{
  z-index:10000;
}
.cl-header-container{
  display:flex;
}
.cl-header-user{
  cursor: pointer;
}

</style>

