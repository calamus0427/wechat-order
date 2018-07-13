<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col offset="8" span="4">
                <ul class="left">
                <li class="cl-binding"><span >消息名称：</span>消息1</li>
                <li class="cl-binding"><span>消息Id：</span>1</li>
                <li class="cl-binding"><span>消息名称：</span>消息1</li>
                <li class="cl-binding"><span>消息名称：</span>消息1</li>
              </ul>
            </Col>
            <Col span="12">
                <ul class="right">
                <li class="cl-binding"><span >DMP总数：</span>1</li>
                <li class="cl-binding"><span>事实接收数：</span>1</li>
                <li class="cl-binding"><span>触达接受数：</span>1</li>
                <li class="cl-binding"><span>消息下发总数：</span>1</li>
                <li class="cl-binding"><span>客户端收到总量：</span>1</li>
                <li class="cl-binding"><span>消息弹出量：</span>1</li>
                <li class="cl-binding"><span>弹窗点击量：</span>1</li>
                <li class="cl-binding"><span>快捷-消息点击：</span>1</li>
                <li class="cl-binding"><span>消息-消息点击：</span>1</li>
              </ul>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    };
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  .cl-binding{
    margin-top: 5px;
    color: #696969;
    span{
      display: inline-block;
      width: 100px;
      margin-right: 25px;
      font-weight: 600;
      text-align: right;
      color: #696969;
    }
  }
}
</style>

