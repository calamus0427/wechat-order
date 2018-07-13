<template>

    <div>
          <Input v-model="search" @on-enter="searchAppList" @on-click="searchAppList" icon="ios-search" placeholder="搜索" style="width: 200px"></Input>
          <br/>
          <br/>
          <Button type="primary" size="small" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
          <Button type="warning" size="small" @click="refresh"><Icon type="ios-download-outline"></Icon> 刷新</Button>
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
    </Tabs>
    </div>
</template>
<script>

export default {
  data () {
    return {
      search:'',
      showDetailFlag:false,
      detailTitle:'',
      pageOptions:[10, 20, 50, 100],
      currentStatus:'all',
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
                        "title": "照片",
                        "key": "img",
                        "width": 100,
                        render: (h, params) => {
                            return h('img', {
                                attrs: {
                                    src: params.row.img,
                                    style:'max-width: 70px;height: 50px;margin:5px;border-radius: 2px;'
                                }
                            },params.row.img)
                        }
                    },
                    {
                        "title": "姓名",
                        "key": "title",
                        "width": 100,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                           this.showDetail(params.row.name)
                                        }
                                    }
                                }, params.row.title)
                            ]);
                        }
                    },
                    {
                        "title": "身份",
                        "key": "cat",
                        "width": 150
                    },
                    {
                        "title": "联系电话",
                        "key": "tel",
                        "width": 120,
                        "sortable": true
                    },
                    {
                        "title": "联系邮箱",
                        "key": "email",
                        "width": 120,
                        "sortable": true
                    },
                    {
                        "title": "创建时间",
                        "key": "createTime",
                        "width": 180,
                        "sortable": true
                    },
                    {
                        "title": "备注",
                        "key": "remarks"
                    },
                    {
                        "title": "操作",
                        "key": "action",
                        'fixed': 'right',
                        "width": 100,
                        render: (h, params) => {
                            return h('div', [
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
      data: [
      {
              "title": "小可爱1号",
              "id": 1,
              'remarks':'管理员',
              'cat':'管理人员',
              'tel':'11111111111',
              'email':'1@qq.com',
              'img':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2970637416,2521829339&fm=27&gp=0.jpg',
              'createTime':'2018-07-13'
          },{
              "title": "小可爱2号",
              "id": 2,
              'remarks':'窗口人员',
              'cat':'窗口人员',
              'tel':'11111111111',
              'email':'2@qq.com',
              'img':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1637349115,3472182484&fm=27&gp=0.jpg',
              'createTime':'2018-07-13'
          },{
              "title": "小可爱3号",
              "id": 3,
              'remarks':'配送人员',
              'cat':'配送人员',
              'tel':'11111111111',
              'email':'3@qq.com',
              'img':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2346318586,2948873667&fm=11&gp=0.jpg',
              'createTime':'2018-07-13'
          }
      ]
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
      var url = 'text' ;
      var param = "%7B%27status%27%3A%27"+ status +"%27%7D";
      var page = start * size ;
        // this.$http.get(url)
        //   .then( (res)=> {
        //       this.data = res.data.data ;
        //       this.page.total = res.data.recordsTotal;
        //   },(err)=>{
        //     console.error('get dataTable failed',err);
        //   })
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

