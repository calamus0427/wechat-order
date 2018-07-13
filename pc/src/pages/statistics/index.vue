<template>
  <div>
    <div class="ra-setting">
        <div class="ra-setting-title">菜品售卖量统计</div>
        <cl-detail-chart id="chart1"></cl-detail-chart>
    </div>
    <div class="ra-setting">
        <div class="ra-setting-title">菜品评价统计</div>
        <cl-charts-barchart2 id="chart2"></cl-charts-barchart2>
    </div>
  </div>
</template>
<script>
import './components/detail-line'
import '../../components/echarts/bar/demo2'
import '../../components/statistics/num.js'
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.ivu-row{
    margin-bottom:15px;
}
</style>


