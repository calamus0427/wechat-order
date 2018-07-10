<template>
  <div>
    <div  class="cl-tv" v-on:mousedown="dragable($event)" v-on:mouseup="dragdisable($event)" v-on:mousemove="drag($event)" :style="{ top: top + 'px', left: left + 'px' }" >
       <slot></slot>
    </div>
  </div>
</template>
<script>
let dom = null
  export default {
    name:'CLTv',
    props:{
      data: {
            type: Object,
            default: function(){
              return {
                position:'1',
                title:'消息标题',
                content:'消息内容',
                img:'http://p3i10hjs7.bkt.clouddn.com/user.jpg'
              }
            }
      },
    },
    computed: {
    },
    data(){
      return {
        dragFlag:false,
        currentX:'',
        currentY:'',
        top:0,
        left:0
      }
    },
    mounted(){
    },
    methods:{
      dragable(event){
        this.dragFlag = true ;
        this.currentX = event.x;
        this.currentY = event.y;
      },
      dragdisable(event){
        this.dragFlag = false ;
      },
      drag:function(event){
        if(this.dragFlag == true){
          // this.left += 1;
          // this.top += 1 ;
        }else{
        }
      },
    }
  }
</script>
<style lang="scss" scoped>
.drop{
  width:400px;
  height: 400px;
  background-color:#fff;
}
.cl-tv{
  z-index:1000000000;
  position: absolute;
  width:400px;
  height:400px;
  background:#fff url('../../../static/电视机_1.png') no-repeat center;
  background-size:100% 100%;
}
</style>


