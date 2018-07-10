<template>
  <div class="cl-info" :style="styleObject">
    <a class="getHelp" :href="document">
      <Icon class="icon" type="help" />
      <span class="child">查看<br>文档</span>
    </a>
  </div>
</template>
<script>
  export default {
    name:'CLInfo',
    props:{
      bottom: {
            type: Number,
            default: 40
      },
      right:{
        type:Number,
        default:30
      }
    },
    computed: {
      styleObject: function () {
        return {
          bottom:this.bottom + 'px',
          right:this.right + 'px',
        }
      }
    },
    data(){
      return {
        document:this.$request.api
      }
    },
    mounted(){
    },
    methods:{
      getHelp(){
              this.$router.push('/ducument')
          }
    }
  }
</script>
<style scoped lang="scss">
.cl-info{
  position: fixed;
  background-color:rgba(0,0,0,.6);
  border-radius: 2px;
  transition: all .2s ease-in-out;
  &:hover{
    background-color:rgba(0,0,0,.7);
  }
  .getHelp{
    display:block;
    height: 40px;
    width:45px;
    text-align:center;
    color:#dcdcdc;
    &:hover{
      cursor: pointer;
      box-shadow: 0 1px 6px rgba(0,0,0,.2);
      .icon{
        font-size:25px;
        display:none;
      }
      .child{
        font-size:14px;
        display:block;
      }
    }
    .icon{
      font-size:25px;
      display:block;
      line-height:40px;
    }
    .child{
      font-size:14px;
      display:none;
    }
  }
}
</style>

