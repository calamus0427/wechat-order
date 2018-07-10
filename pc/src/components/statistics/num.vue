<template>
<Row :gutter="20">
            <Col :xs="24" :sm="8" :lg="8">
                <div class="ra-data-preview">
                    <div class="ra-data-preview-icon"><i class="ivu-icon ivu-icon-pie-graph"></i></div>
                    <div class="ra-data-preview-description">
                        <div class="card-panel-text">总数：</div>
                        <span>{{data.totalCount}}</span>
                        <!--<ra-count :endVal="data.totalCount"></ra-count>-->
                    </div>
                </div>
            </Col>
            <Col :xs="12" :sm="8" :lg="8">
                <div class="ra-data-preview">
                    <div class="ra-data-preview-icon"><i class="ivu-icon ivu-icon-arrow-graph-up-right"></i></div>
                    <div class="ra-data-preview-description">
                        <div class="card-panel-text">昨日新增：</div>
                        <span>{{data.totalIncremental}}</span>
                        <!--<ra-count :endVal="data.totalIncremental"></ra-count>-->
                    </div>
                </div>
            </Col>
            <Col :xs="12" :sm="8" :lg="8">
                <div class="ra-data-preview">
                    <div class="ra-data-preview-icon"><i class="ivu-icon ivu-icon-stats-bars"></i></div>
                    <div class="ra-data-preview-description">
                        <div class="card-panel-text">昨日活跃：</div>
                        <span>{{data.active}}</span>
                    </div>
                </div>
            </Col>
</Row>
</template>
<script>
  export default {
    name:'appNum',
    props:{
      data:{
            type:Object,
            default:function(){
              return {'totalCount':0,'totalIncremental':0,'active':0}
              }
        }
    },
    data(){
      return {

      }
    }
  };
</script>
<style lang="scss" scoped>
.ra-data-preview{
    height: 108px;
    border-radius:20px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    background: #fff;
    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(243,243,245, 1);
}
.ra-data-preview:hover{
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
}
.ra-data-preview:hover .ra-data-preview-icon{
    background-color: #40c9c6;
}
.ra-data-preview:hover .ra-data-preview-icon i{
    color:white;
}
.ra-data-preview-icon{
    float: left;
    margin: 14px 0 0 14px;
    padding: 16px;
    -webkit-transition: all 0.38s ease-out;
    transition: all 0.38s ease-out;
    border-radius: 6px;

}
.ra-data-preview-icon i{
    font-size: 48px;
    color: #40c9c6;
}
.ra-data-preview-description{
    font-weight: bold;
    margin: 26px;
    margin-left: 20px;
    float: left;
}
.card-panel-text{
    line-height: 18px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    margin-bottom: 12px;
}
.ra-data-preview-description span{
    font-size: 20px;
}
</style>

