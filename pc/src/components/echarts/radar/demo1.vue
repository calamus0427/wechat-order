<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts 主题

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
    getVirtulData(year) {
        year = year || '2017';
        var date = +echarts.number.parseDate(year + '-01-01');
        var end = +echarts.number.parseDate((+year + 1) + '-01-01');
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time < end; time += dayTime) {
            data.push([
                echarts.format.formatTime('yyyy-MM-dd', time),
                Math.floor(Math.random() * 1000)
            ]);
        }
        return data;
    },
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id),'macarons')

      this.chart.setOption({
         title: {
        text: '蒲酱前端技能'
    },
    tooltip: {},
    legend: {
        data: ['实际', '理想']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: 'js', max: 6500},
           { name: 'vue', max: 16000},
           { name: ' html5', max: 30000},
           { name: ' css3', max: 38000},
           { name: 'angular', max: 52000},
           { name: 'jquery', max: 25000}
        ]
    },
    series: [{
        name: '实际 vs 理想',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 30000, 19000],
                name : '实际'
            },
             {
                value : [6500, 16000, 30000, 38000, 52000, 25000],
                name : '理想'
            }
        ]
    }]
      })
    }
  }
}
</script>
