<template>
  <div class="cl-flex-center">
    <cl-canvasBg1></cl-canvasBg1>
    <router-link to="/" class="cl-welcome-title">医院食堂移动订餐平台</router-link>
  </div>
</template>

<script>
import '../../components/canvasBg/canvas1'
export default {
    data () {
        return {
        }
    },
    mounted(){
      this.text()
    },
    methods:{
      text(){
        var url = 'http://localhost:8080/user/1' ;
          this.$http.get(url)
            .then( (res)=> {
                console.log("success",res)
            },(err)=>{
              console.error('get dataTable failed',err);
            })
      },
    }
}
</script>
<style lang="scss" scoped>
.cl-welcome-title{
  font-size:50px;
  font-family:"Georgia", Tahoma, Sans-Serif;
}
.cl-flex-center{
  display: flex;
  height: 100vh;
  align-items:center;
  justify-content:center;
}
</style>

