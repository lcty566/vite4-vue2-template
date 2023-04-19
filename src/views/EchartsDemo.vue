<template>
  <div id="main" ref="chart">
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {

  data() {
    return {
      myChart: null
    }
  },
  methods: {
    handleHideTip() {
      console.log(2222)
    },
    handleMousemove() {
      console.log(111)
    }
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.chart)
    this.myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'axis'

      },
      series: [
        {
          data: [820, 932, null, 934, null, 1000, 1200],
          type: 'line',
          smooth: true,
          connectNulls: true,
          show: true
        }
      ]
    })
    this.myChart.on('mousemove', this.handleMousemove)
    this.myChart.on('hideTip', this.handleHideTip)
    // myChart.on('mousemove', function(params) {
    // // 获取鼠标位置
    //   const mouseX = params.event.offsetX
    //   const mouseY = params.event.offsetY
    //   console.log(mouseX, mouseY)

    //   // 获取 x 轴和 y 轴的位置
    //   const xAxisPos = myChart.convertFromPixel({ seriesIndex: 0 }, [mouseX, mouseY])[0]
    //   const yAxisPos = myChart.convertFromPixel({ seriesIndex: 0 }, [mouseX, mouseY])[1]

    //   // 找到距离鼠标最近的有数据的点
    //   let minDist = Infinity
    //   let nearestIndex = -1
    //   for (let i = 0; i < data.length; i++) {
    //     if (data[i] !== null && data[i] !== undefined) {
    //       const dist = Math.abs(xAxisPos - i)
    //       if (dist < minDist) {
    //         minDist = dist
    //         nearestIndex = i
    //       }
    //     }
    //   }

    //   // 更新 tooltip
    //   myChart.dispatchAction({
    //     type: 'showTip',
    //     seriesIndex: 0,
    //     dataIndex: nearestIndex
    //   })

    //   // 更新指示线
    //   myChart.dispatchAction({
    //     type: 'dataZoom',
    //     startValue: nearestIndex,
    //     endValue: nearestIndex
    //   })
    // })

    // // 监听 tooltip 隐藏事件，隐藏指示线
    // myChart.on('hideTip', function(params) {
    //   myChart.dispatchAction({
    //     type: 'dataZoom',
    //     startValue: 0,
    //     endValue: data.length - 1
    //   })
    // })
  }
}
</script>

<style lang="less" scoped>
#main{
  width: 100%;
  height: 100vh;
}
</style>
