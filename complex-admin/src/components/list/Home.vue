<template>
  <div class="homeWrap">
      <div class="search">
         <el-row>
           <el-col  :xl="5" :lg="5" :md="5" :sm="24"  :xs="24">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>

           </el-col>
           <el-col :xl="6" :lg="6" :md="5" :sm="24"  :xs="24">
                  <el-input v-model="formInline.user" placeholder="审批人"></el-input>
           </el-col>
           <el-col :xl="6" :lg="6" :md="6" :sm="24"  :xs="24">
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button type="danger" @click="onSubmit">批量删除</el-button>
           </el-col>

         </el-row>

      </div>
      <div class="tableWrap">
          <el-table :data="tableData" v-loading="loading"  height="500">
            <el-table-column  type="selection"  width="55" > </el-table-column>
            <el-table-column  prop="userName" label="姓名" align="center"></el-table-column>
            <el-table-column  prop="address" label="地址" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  >编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'


export default {
  data () {
    return {
        tableData: [],
        formInline: {
          user: '',
          region: ''
        },
        loading:true,
    }
  },
  created(){
    this.listRequest().then(res=>{
      this.tableData = JSON.parse(JSON.stringify(res.data.list))
      this.loading = false;
    })
  },
  methods:{
    ...mapActions('list/home',['listRequest']),
    onSubmit() {
      console.log('submit!');
    },
    handleDelete(index,row){
       console.log(index,row)
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../theme/base-theme.less");

.homeWrap{
   width:100%;
   padding:20px;
   .search{
      padding:25px 20px 10px 20px;
      background: @minor-color-4;
      .el-row{
        width:100%;
        .el-col{
          padding:5px 10px;
        }
        .el-select{
          width:100%;
        }
      }
   }
  .tableWrap{
    max-width:100%;
    padding:10px 20px 60px;
    background: @minor-color-4;
    .el-table{
      //  max-height:400px;
    }
  }

}
</style>
