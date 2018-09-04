<template>

    <div>
          <Input v-model="search" @on-enter="searchAppList" @on-click="searchAppList" icon="ios-search" placeholder="搜索" style="width: 200px"></Input>
          <br/>
          <br/>
          <Button type="primary" size="small" @click="addUser()" ><Icon type="ios-add" />添加人员</Button>
          <Button type="primary" size="small" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
          <Button type="warning" size="small" @click="refresh"><Icon type="ios-aperture" />刷新</Button>
          <br>
          <br>
          <Table
            :columns="columns8"
            border
            :data="data"
            size="small"
            ref="table">
          </Table>
          <br>
            <Page
              :total="page.total"
              :page-size="page.length"
              :page-size-opts="pageOptions"
              :current="page.start"
              size="small"
              @on-change="changePage"
              @on-page-size-change="changePageSize"
              show-total
              show-elevator
              show-sizer>
            </Page>
              <!-- add user cat -->
            <add-user-cat
                :visible="addUserVisible"
                @close="claseAdd">
            </add-user-cat>
    </div>
</template>
<script>
import { getUserCatList } from '@/api/user'
import addUserCat from './components/userCatAdd.vue';


export default {
  components: { addUserCat },
  data () {
    return {
      search:'',
      showDetailFlag:false,
      detailTitle:'',
      pageOptions:[10, 20, 50, 100],
      currentStatus:'all',
      addUserVisible:false,
      page:{
          'total':0,
          'start':1,
          'length':10,
      },
      columns8: [
                    {
                        "title": "Id",
                        "key": "id",
                        "fixed": "left",
                        "width": 80
                    },
                    {
                        "title": "分类",
                        "key": "name",
                        "width": 150
                    },
                    {
                        "title": "状态",
                        "key": "status",
                        "width": 120,
                        "sortable": true,
                        render: (h, params) => {
                            return h('Tag', {
                                props: {
                                    color: params.row.status== 1 ? 'green' :'red'
                                }
                            },params.row.status == 1 ? '正常' : '已禁用')
                        }
                    },
                    {
                        "title": "描述",
                        "key": "des",
                        "sortable": true
                    },             
                    {
                        "title": "操作",
                        "key": "action",
                        'fixed': 'right',
                        "width": 180,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small',
                                        disabled: params.row.status == 1 ? true : false 
                                    },
                                    on: {
                                        click: () => {
                                           console.log("查看详情")
                                        }
                                    }
                                }, '启用'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small',
                                        disabled: params.row.status == 1 ? false : true 
                                    },
                                    on: {
                                        click: () => {
                                           console.log("查看详情")
                                        }
                                    }
                                }, '禁用'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                           console.log("查看详情")
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
      data: []
    }
  },
  mounted(){
    this.getList(this.page.start,this.page.length,this.currentStatus);
  },
  methods:{
    refresh(){
        this.search = '' ;
        this.page.start = 1 ;
        this.getList(this.page.start,this.page.length,this.currentStatus);
    },
    statusChange(res){
        this.currentStatus = res ;
        this.getList(this.page.start,this.page.length,this.currentStatus);
    },
    getList(start,size,status){
      getUserCatList().then(res => {
            console.info("userCatList======>",res)
            this.data = res ;
            this.page.total = res.length;
        })
      },
      //页码切换
      changePage(res){
        this.page.start = res ;
        this.getList(res,this.page.length,this.currentStatus)
      },
      changePageSize(res){
        this.page.length = res ;
        this.getList(this.page.start,res,this.currentStatus)
      },
    exportData (type) {
        if (type === 1) {
            this.$refs.table.exportCsv({
                filename: 'The original data'
            });
        } else if (type === 2) {
            this.$refs.table.exportCsv({
                filename: 'Sorting and filtering data',
                original: false
            });
        } else if (type === 3) {
            this.$refs.table.exportCsv({
                filename: 'Custom data',
                columns: this.columns8.filter((col, index) => index < 4),
                data: this.data.filter((data, index) => index < 4)
            });
        }
    },
    searchAppList(){
      console.log("搜索")
    },
    showDetail(name){
      this.detailTitle = name ;
      this.showDetailFlag = true ;
    },
    addUser(){
        console.log("add food",this.addFoodVisible);
        this.addUserVisible = true ;
    },
    claseAdd(){
        console.log("close")
        this.addUserVisible = false ;
    }
  }
}
</script>
<style lang="scss" scoped>
.cl-tabs{
  margin-top:20px;
}
ul {
  list-style: none;
  .cl-binding{
    margin-top: 20px;
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
.cl-push-detail{
  display:flex;
  justify-content: space-around;
}
</style>

