<template>
<div>
  <Input v-model="search" @on-enter="searchfoodList" @on-click="searchfoodList" icon="ios-search" placeholder="搜索应用" style="width: 200px"></Input>
        <div class="cl-foodList-container">
            <a @click="handleAddCat('add')">
              <cl-overview type="add"></cl-overview>
            </a>
            <a href="javascript:;" v-for="item in foodList" :key="item.id"  :to="'/editCat/'+item.id">
              <cl-overview  @edit="handleAddCat" v-if="item.status == 1" type="enable" :data="item"></cl-overview>
              <cl-overview  @edit="handleAddCat" v-if="item.status == 2" type="disable" :data="item"></cl-overview>
            </a>
        </div>
  <Page
    :total="page.dataTotal"
    :page-size="page.pageSize"
    :page-size-opts="page.pageOptions"
    :current="page.currentPage"
    size="small"
    @on-change="changePage"
    @on-page-size-change="changePageSize"
    show-total
    show-elevator
    show-sizer>
  </Page>

            <!-- add food -->
            <add-food-cat
                :visible="addFoodCatVisible"
                @close="claseAdd"
                :data="catData">
            </add-food-cat>
</div>

</template>
<script>
import '../../components/card/overview.js'
import { getFoodCatList } from '@/api/food'
import addFoodCat from './components/foodCatAdd.vue';


export default {
  components: { addFoodCat },
  data () {
    return {
      foodList:[],
      page:{
        dataTotal:3,
        currentPage:1,
        pageSize:10,
        pageOptions:[10, 20, 50, 100]
      },
      catData:null,
      currentStatus:'all',
      search:'',
      countAll:'0',
      countAble:'0',
      countDisable:'0',
      addFoodCatVisible:false,
      allLabel: (h) => {
                   return h('div', [
                        h('Badge',{
                            props: {
                                count: this.countAll
                            }
                        },[h('div', {
                          style: {
                                width:'40px'
                            },
                            domProps: {
                              innerHTML: '全部'
                            },
                        })])
                    ])
                },
      ableLabel: (h) => {
                   return h('div', [
                        h('Badge',{
                            props: {
                                count: this.countAble,
                                'class-name':'demo-badge-green'
                            }
                        },[h('div', {
                          style: {
                                width:'40px'
                            },
                            domProps: {
                              innerHTML: '启用'
                            },
                        })])
                    ])
                },
      disableLabel: (h) => {
                   return h('div', [
                        h('Badge',{
                            props: {
                                count: this.countDisable,
                                 'class-name':'demo-badge-gray'
                            }
                        },[h('div', {
                          style: {
                                width:'40px'
                            },
                            domProps: {
                              innerHTML: '禁用'
                            },
                        })])
                    ])
                }
    }
  },
  mounted(){
    this.getfoodList(this.page.currentPage,this.page.pageSize,this.currentStatus);
    this.getCount();
  },
  methods:{
    searchfoodList(){
      console.log("%c查询数据","color:#E1244E;font-size:14px;",this.search)
    },
    getfoodList(page,size,status){
      getFoodCatList().then(res => {
            console.info("FoodList======>",res);
            var foodList = res
            this.foodList = foodList ;
            this.page.dataTotal = parseInt(foodList.length)
        })
      },
      getCount(){
        this.getfoodList(1,10000000,'all');
      },
      changePage(res){
         this.page.currentPage = res ;
        this.getfoodList(res,this.page.pageSize,this.currentStatus)
      },
      changePageSize(res){
        this.page.pageSize = res ;
        this.getfoodList(this.page.currentPage,res,this.currentStatus)
      },
      statusChange(res){
        this.currentStatus = res ;
        this.page.currentPage = 1 ;
        this.getfoodList(this.page.currentPage,this.page.pageSize,this.currentStatus);
      },
      handleAddCat(res){
        console.log("catData",res)
        if(res != 'add'){
          this.catData = res ;
        }
        this.addFoodCatVisible = true ;
      },
      claseAdd(){
        this.addFoodCatVisible = false ;
      }
  }
}
</script>
<style lang="scss">
.demo-badge-green{
        background: #5cb85c !important;
}
.demo-badge-gray{
        background: #dedede !important;
}
</style>

<style lang="scss" scoped>

.cl-foodList-container{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: space-between
}
.cl-foodList-container  div{
    margin:10px;
  }
</style>


