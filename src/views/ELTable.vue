<template>
  <div class="container">
    <el-table
      :data="tableData"
      border
      :highlight-current-row="false"
      style="width: 100%"
    >
      <el-table-column v-for="(item,i) in columns" :key="i" :label="item.label" :prop="item.prop" >
        <template v-slot="{ row, column }">
          <div
            class="cell"
            :class="{ selected:isSelected(row, column)}"
            @mousedown="handleCellMouseDown(row, column)"
            @mouseup="handleCellMouseUp(row, column)"
            @mouseleave="handleCellMouseLeave(row, column)"
          >
          {{ row[item.prop] }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      columns: [
        {
          label: '时间',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      mouseDown: {},
      mouseUp: {},
      labelList: ['时间', '姓名', '地址'],
      rowList: [0, 0],
      columnList: [-1, -1],
      isMouseDown: false
    }
  },
  computed: {
    selectList() {
      const arr = []
      const { rowIndex: upRow, columnIndex: upCol } = this.mouseUp
      const { rowIndex: downRow, columnIndex: downCol } = this.mouseDown
      for (let i = downRow; i <= upRow; i++) {
        for (let j = downCol; j <= upCol; j++) {
          arr.push({ row: i, column: j })
        }
      }
      return arr
    }
  },
  methods: {
    isSelected(row, column) {
      const rowIndex = this.tableData.indexOf(row)
      const columnIndex = this.labelList.indexOf(column.label)
      const flag = ~this.selectList.findIndex(item => item.row === rowIndex && item.column === columnIndex)
      return flag
    },
    handleCellMouseDown(row, column) {
      this.isMouseDown = true
      const rowIndex = this.tableData.indexOf(row)
      const columnIndex = this.labelList.indexOf(column.label)
      this.mouseDown = { rowIndex, columnIndex }
      console.log('handleCellMouseDown', rowIndex, columnIndex)
    },
    handleCellMouseUp(row, column) {
      this.isMouseDown = false
    },
    handleCellMouseLeave(row, column) {
      if (!this.isMouseDown) return
      const rowIndex = this.tableData.indexOf(row) || 0
      const columnIndex = this.labelList.indexOf(column.label) || 0
      this.mouseUp = { rowIndex, columnIndex }
      console.log('handleCellMouseUp', rowIndex, columnIndex)
      this.rowList = [this.mouseDown.rowIndex, this.mouseUp.rowIndex].sort((a, b) => a - b)
      this.columnList = [this.mouseDown.columnIndex, this.mouseUp.columnIndex].sort((a, b) => a - b)
    }
  },
  created() {
    window.addEventListener('mousedown', () => {
      console.log(22222222222)
    })
  }
}
</script>

<style lang="less" scoped>
div{
  user-select: none;
}
/deep/ .el-table .el-table__cell{
  padding: 0 !important;
}
/deep/ .el-table .cell{
  height: 47px !important;
  line-height: 47px;
  padding: 0;
  .cell{
    padding: 0 10px;
  }
}
.selected{
  background-color: rgba(64,158,255,.2);
}
</style>
