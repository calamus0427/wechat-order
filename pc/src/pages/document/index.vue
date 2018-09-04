<template>
  <div class="cl-flex-center">
    <cl-canvasBg1></cl-canvasBg1>
    <router-link to="/" class="cl-welcome-title">说明文档</router-link>
  </div>
</template>

<script>
import '../../components/canvasBg/canvas1'
export default {
    data () {
        return {
        }
    },
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

