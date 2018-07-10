<template>
  <div>
    <Row>
      <cl-count></cl-count>
    </Row>
    <Row>
      <Card :padding="0">
          <p slot="title" class="card-title">
              <Icon type="map"></Icon>
              用户数据统计
          </p>
          <div class="map-con" style="height: 400px;">
              <Col :span="24" class="map-incon" style="height: 100%;">
                  <Row type="flex" justify="center" align="middle">
                      <cl-detail-chart id="chart1"></cl-detail-chart>
                  </Row>
              </Col>
          </div>
      </Card>
    </Row>
  </div>
</template>
<script>
import './components/detail-line'
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


