<template>
    <div class="layout" >
      <BackTop :bottom="80" :height="64" style="border-radius:0px;"></BackTop>
        <!-- <Layout :style="{height: '100vh'}"> -->
        <Layout>
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
              <cl-header></cl-header>
            </Header>
            <Layout style="margin-top:64px;">
              <Sider hide-trigger width="220" ref="subsider" collapsible :collapsed-width="50" v-model="isCollapsed">
                  <Menu @on-select="redirectTo" accordion :open-names="['setting','应用列表','app','应用']" :active-name="activeMenu" theme="dark" width="auto" :class="menuitemClasses" >
                      <MenuItem name="菜品分类管理"><Icon type="ios-american-football" /><span>菜品分类管理</span></MenuItem>
                      <MenuItem name="菜品管理"><Icon type="ios-pizza-outline" /><span>菜品管理</span></MenuItem>
                      <MenuItem name="套餐管理"><Icon type="md-appstore" /><span>套餐管理</span></MenuItem>
                      <MenuItem name="数据统计"><Icon type="ios-stats-outline" /><span>数据统计</span>
                      </MenuItem>
                      <MenuItem name="食堂人员管理"><Icon type="md-contact" /><span>食堂人员管理</span></MenuItem>
                      <MenuItem name="人员角色管理"><Icon type="ios-contacts" /><span>人员角色管理</span></MenuItem>
                      <MenuItem name="食堂信息管理"><Icon type="md-copy" /><span>食堂信息管理</span></MenuItem>
                  </Menu>
              </Sider>
              <a :style="buttonTogger" class="cl-submenu-toggle" @click="collapsedSider">
                      <Icon type="ios-paw"></Icon>
              </a>
              <Layout>
                  <Content  :style="contentStyle">
                      <Breadcrumb :style="{margin: '16px 0'}">
                          <BreadcrumbItem to="/welcome">首页</BreadcrumbItem>
                          <BreadcrumbItem :to="$route.path">{{$route.name}}</BreadcrumbItem>
                      </Breadcrumb>
                      <Card>
                          <div style="min-height: 600px"><router-view/></div>
                      </Card>
                      <cl-info></cl-info>
                  </Content>
              </Layout>
            </Layout>
            <!-- <Footer class="layout-footer-center">2018 &copy; coocaa</Footer> -->
        </Layout>
    </div>
</template>
<script>
import '../components/info/info'
import '../components/header/header'

    export default {
        data () {
            return {
                isCollapsed: false,
                isSubCollapsed:false,
                search:'',
                position: {scrollTop: 301, scrollLeft: 0},
                contentStyle:{padding: '0 16px 16px'},
                buttonTogger:{'margin-left':'220px'}
            };
        },
        mounted(){
        },
        watch:{
          isCollapsed(cur,old){
            if(cur){
              this.buttonTogger = {'margin-left':'50px'}
            }else{
              this.contentStyle = {padding: '0 16px 16px'}
              this.buttonTogger = {'margin-left':'220px'}
            }
          }
        },
        computed: {
          activeMenu(){
            var menu = this.$route.name
            return menu
          },
          menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
          },
          menuitemSubClasses: function () {
                return [
                    'menu-item',
                    this.isSubCollapsed ? 'collapsed-menu' : ''
                ]
          },
          menuShow(){
            let show = true ;
            return show
          }
        },
        methods:{
          redirectTo(res){
              this.$router.push({ name: res})
          },
          onScroll:function(e, position){
            this.position = position;
          },
          backToTop(){
            this.position.scrollTop = 301 ;
          },
          collapsedSider () {
                this.$refs.subsider.toggleCollapse();
          }
        }
    }
</script>
<style lang="scss">
.ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title {
    padding: 14px 10px !important;
}
.cl-submenu-toggle{
  display: block;
  width:14px;
  height:35px;
  background-color:rgba(#2c3e50,0.4);
  border-top-right-radius: 15px 7px;
  border-bottom-right-radius: 15px 7px;
  position:fixed;
  top:50%;
  font-size:15px;
  line-height:35px;
  color:white;
  &:hover{
    color:pink;
    background-color:rgba(#2c3e50,0.1);
  }
}
  .ivu-layout-sider-trigger{
      bottom:69px;
  }
</style>

<style scoped>

.subSider{
  background-color:#fff;
  /* margin-top:16px; */
  height:calc(100% - 32px);
}
.ivu-layout-header{
  position:fixed;
  top:0px;
  width:100%;
  z-index:1000;
}
 .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
.fade-enter, .fade-leave-active {
  opacity: 0
}
.ivu-layout-header{
  padding:0;
}
.layout-con{
    height: 100%;
    width: 100%;
}
.menu-item span{
    display: inline-block;
    overflow: hidden;
    /* width: 69px; */
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
}
.menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
}
.collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
}
.collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}
.layout-footer-center{
text-align: center;
}

</style>
