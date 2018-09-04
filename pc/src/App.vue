<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      value:''
    }
  },
  mounted(){
    console.log("%c医院食堂移动订餐平台φ(>ω<*)","color:#E1244E;font-size:16px;text-shadow:3px 1px 2px #e1244e9e;")
    console.log("%c ", "background: url(http://p3i10hjs7.bkt.clouddn.com/console.jpeg) no-repeat center;padding-left:640px;padding-bottom: 242px;")
   }
}
</script>

<style>
.colorful{
    background:#871317 -webkit-linear-gradient(left,#561214,#febaf7 50%,#ff0 90%,#561214) no-repeat 0 0;
    color: transparent;
    -webkit-background-clip: text;
    font-size: 5em!important;
}
input{
  user-select: auto;
}
.ivu-modal-footer {
    text-align: center !important;
}
#app {
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
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
/* 布局 */
.align_center {
    text-align: center;
}
</style>
