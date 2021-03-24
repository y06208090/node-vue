<template>
  <div class="manage-panel">
      <div class="header">
 <el-select v-model="payType" placeholder="请选择收支类型" style="margin-right:10px">
      <el-option label="收入" value="1"> </el-option>
      <el-option label="支出" value="2"> </el-option>
    </el-select>
    <el-date-picker
    style="margin-right:10px"
      v-model="date"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
    <el-button type="primary">搜索</el-button>
      </div>
     <el-table
      :data="tableData"
      style="width: 100%;margin-top:20px">
      <el-table-column
        prop="ID"
        label="日期"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="账单标题"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="记账时间">
      </el-table-column>
      <el-table-column
        prop="name"
        label="账单金额"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="账单备注"
        >
      </el-table-column>
    </el-table>
    <el-pagination
    layout="prev, pager, next"
    :total="total">
  </el-pagination>
  </div>
</template>

<script>
export default {
    data(){
        return{
            payType:"",
            date:"",
            total:0,
            tableData:[]
        }
    }
};
</script>

<style lang="scss" scoped>
.manage-panel {
  background-color: #f5f5f5;
  height: 100vh;
  padding: 20px;
  .header{
      text-align: right;
  }
}
</style>