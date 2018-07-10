<template>
  <div  :id="id" style="width:calc(100% - 10px);height:375px;"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name:'demo1',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id),'roma')

      this.chart.setOption({
        // backgroundColor: '#394056',
                        title: {
                        text: ''
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data:['用户总数','新增用户']
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        toolbox: {
                            feature: {
                                saveAsImage: {
                                    title: '下载',
                                    name:'应用统计'
                                },
                                // dataZoom: {
                                //     yAxisIndex: 'none',
                                //     show: false,
                                // },
                                // magicType: {
                                //     show: true,
                                //     type: ['line', 'bar', 'stack', 'tiled'],
                                // },
                                // restore: {
                                //     show: true,
                                // }
                            }
                        },
                        dataZoom: [
                            {
                                id: 'dataZoomX',
                                type: 'slider',
                                xAxisIndex: [0],
                                filterMode: 'filter'
                            },
                            {
                                id: 'dataZoomY',
                                type: 'slider',
                                yAxisIndex: [0],
                                filterMode: 'empty'
                            }
                        ],
                        xAxis: {
                            type: 'category',
                            axisLabel : {
                                show:true,
                                interval: 0,
                            },
                            boundaryGap: false,
                            // data:option.date
                            data: ['3月','4月','5月','6月','7月','8月','9月','3月','4月','5月','6月','7月','8月','9月','3月','4月','5月','6月','7月','8月','9月','3月','4月','5月','6月','7月','12月','122月']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                name:'用户总数',
                                type:'line',
                                tiled: '总量',
                                // data:option.totalCount
                                data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]

                            },
                            {
                                name:'新增用户',
                                type:'line',
                                tiled: '总量',
                                // data:option.totalIncremental
                                data:[220, 182, 191, 234, 290, 330, 310,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]
                            }
                        ]
      })

      window.addEventListener('resize', ()=> {
            this.chart.resize();
        });
    }
  }
}
</script>
