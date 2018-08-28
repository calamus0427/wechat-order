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
    <!-- 详情 -->
          <Modal
            v-model="showDetailFlag"
            :title="detailTitle">
            <div class="cl-push-detail">
              <ul class="left">
                <li class="cl-binding"><span >消息名称：</span>消息1</li>
                <li class="cl-binding"><span>消息Id：</span>1</li>
                <li class="cl-binding"><span>消息名称：</span>消息1</li>
                <li class="cl-binding"><span>消息名称：</span>消息1</li>
              </ul>
              <ul class="right">
                <li class="cl-binding"><span >DMP总数：</span>1</li>
                <li class="cl-binding"><span>事实接收数：</span>1</li>
                <li class="cl-binding"><span>触达接受数：</span>1</li>
                <li class="cl-binding"><span>消息下发总数：</span>1</li>
                <li class="cl-binding"><span>客户端收到总量：</span>1</li>
                <li class="cl-binding"><span>消息弹出量：</span>1</li>
                <li class="cl-binding"><span>弹窗点击量：</span>1</li>
                <li class="cl-binding"><span>快捷-消息点击：</span>1</li>
                <li class="cl-binding"><span>消息-消息点击：</span>1</li>
              </ul>
            </div>
          </Modal>
    </div>
</template>
<script>
import foodDetail from './components/foodDetail.vue';
export default {
  components: { foodDetail },
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
                        "title": "菜品Id",
                        "key": "id",
                        "fixed": "left",
                        "width": 80
                    },
                    {
                        "title": "参考图片",
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
                        "title": "菜品名称",
                        "key": "name",
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
                                }, params.row.name)
                            ]);
                        }
                    },
                    {
                        "title": "菜品分类",
                        "key": "cat",
                        "width": 150
                    },
                    {
                        "title": "菜品价格",
                        "key": "price",
                        "width": 120,
                        "sortable": true
                    },
                    {
                        "title": "菜品评价",
                        "key": "status",
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
                        "title": "状态",
                        "key": "status",
                        "width": 120,
                        render: (h, params) => {
                            return h('Tag', {
                                props: {
                                    color: params.row.status== 1 ? 'green' :'red'
                                }
                            },params.row.status == 1 ? '已上线' : '仓库中')
                        }
                    },
                      {
                        title: "统计数据",
                        type: 'expand',
                        width: 150,
                        render: (h, params) => {
                            return h(foodDetail, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
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
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                           console.log("查看详情")
                                        }
                                    }
                                }, '上架'),
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
                                }, '下架'),
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
              "title": "泡馍",
              "id": 1,
              'des':'我最爱吃的',
              'cat':'主食',
              'price':25,
              'star':'5',
              'img':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1899144149,2796372996&fm=27&gp=0.jpg',
              'createTime':'2018-07-06',
              'status':1
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
      var url = this.$request.getFood ;
      var param = "";
      var page = start * size ;
        this.$http.get(url)
          .then( (res)=> {
              var foodList = res.data.filter((item,index,array)=>{
                  return item.cat != 2 ;
              })
              this.data = foodList ;
              this.page.total = foodList.length;
          },(err)=>{
            console.error('get dataTable failed',err);
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

