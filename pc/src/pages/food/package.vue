<template>

    <div>
          <Input v-model="search" @on-enter="searchAppList" @on-click="searchAppList" icon="ios-search" placeholder="搜索" style="width: 200px"></Input>
          <br/>
          <br/>
          <Button type="primary" size="small" @click="handleAddFood('add')" ><Icon type="ios-add" />添加套餐</Button>
          <Button type="primary" size="small" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
          <Button type="warning" size="small" @click="refresh"><Icon type="ios-aperture" />刷新</Button>
          <br>
          <br>
          <Table
            :columns="columns"
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

                    <!-- add food -->
            <add-food 
                :visible="addFoodVisible"
                :foodType="addFoodType"
                :foodCatList="foodCatList"
                @close="claseAdd"
                :data="foodData"
            >
            </add-food>
    </div>
</template>
<script>
import foodDetail from './components/foodDetail.vue';
import { getFoodList,getFoodCatList,DelFood,UpdateFood } from '@/api/food'
import addFood from './components/foodAdd.vue';


export default {
  components: { foodDetail,addFood },
  data () {
    return {
      search:'',
      showDetailFlag:false,
      addFoodVisible:false,
      addFoodType:"package",
      detailTitle:'',
      pageOptions:[10, 20, 50, 100],
      currentStatus:'all',
      page:{
          'total':0,
          'start':1,
          'length':10,
      },
      columns: [
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
                        "key": "cat_name",
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
                        "width": 200,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                           this.handleAddFood(params.row)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small',
                                        disabled: params.row.status == 1 ? true : false 
                                    },
                                    on: {
                                        click: () => {
                                           this.$Modal.confirm({
                                                title: '状态更改',
                                                content: '确认要上架该菜品么？',
                                                okText: '确认',
                                                cancelText: '取消',
                                                onOk:() => {
                                                    let text = "上架成功!";
                                                    this.handleUpdate(params.row,text);

                                                }
                                            });
                                        }
                                    }
                                }, '上架'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small',
                                        disabled: params.row.status == 1 ? false : true 
                                    },
                                    on: {
                                        click: () => {
                                           this.$Modal.confirm({
                                                title: '状态更改',
                                                content: '确认要下架该菜品么？',
                                                okText: '确认',
                                                cancelText: '取消',
                                                onOk:() => {
                                                    let text = "下架成功!";
                                                    this.handleUpdate(params.row,text);

                                                }
                                            });
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
                                           this.$Modal.confirm({
                                                title: '删除',
                                                content: '确认要删除该菜品么？',
                                                okText: '删除',
                                                cancelText: '取消',
                                                onOk:() => {
                                                    this.handleDel(params.row.id)                                                 
                                                }
                                            });
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
      data: [],
      foodCatList:[],
      foodData:null
    }
  },
  mounted(){
    this.getList(this.page.start,this.page.length,this.currentStatus);
    this.getCatList();
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
    getCatList(){
      getFoodCatList().then(res => {
            var foodCatList = res
            this.foodCatList = foodCatList ;
        })
      },
    getList(start,size,status){
        getFoodList().then(res => {
            console.info("FoodList======>",res);
            var foodList = res.filter((item,index,array)=>{
                  return item.cat == 2 ;
              })
            this.data = foodList ;
            this.page.total = foodList.length;
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
                columns: this.columns.filter((col, index) => index < 4),
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
    handleDel(params){
        DelFood(params).then(res => {
            this.$Message.success('删除成功!');
        })
    },
    handleUpdate(params,text){
        UpdateFood(params).then(res => {
            this.$Message.success(text);
        })
    },
    handleAddFood(res){
        if(res != 'add'){
            console.log(res)
            this.foodData = res ;
        }
        console.log("add food",this.addFoodVisible);

        this.addFoodVisible = true ;
    },
    claseAdd(){
        console.log("close")
        this.addFoodVisible = false ;
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

