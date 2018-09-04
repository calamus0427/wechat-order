<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
       <Modal
            v-model="isShow"
            :title="title"
            @on-ok="submit"
            @on-cancel="cancel"
            draggable>
            <Form ref="form" :model="form" :rules="ruleValidate" :label-width="100">
                <FormItem label="菜品名称:" prop="name">
                    <Input v-model="form.name" placeholder="请输入菜品名称"></Input>
                </FormItem>
                <FormItem label="评价:" prop="star">
                    <Rate show-text v-model="form.star" />
                </FormItem>
                <FormItem label="价格:" prop="price">
                    <Input v-model="form.price" placeholder="请输入菜品价格"></Input>
                </FormItem>
                <FormItem label="图片" prop="img">
                    <Input v-model="form.img" placeholder="请输入图片链接"></Input>
                </FormItem>
                <FormItem label="分类" prop="cat">
                    <Select v-model="form.cat" placeholder="请选择菜品分类">
                        <Option v-for="item in foodCatList" :key="item.id" :value="item.id">{{item.name}}</Option>
                    </Select>
                </FormItem>
                <FormItem label="是否立即上架" prop="status">
                    <i-switch true-value="1" false-value="0" v-model="form.status"   size="large">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>
                </FormItem>
                <FormItem label="描述：" prop="desc">
                    <Input v-model="form.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入菜品描述"></Input>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>
<script>
import { getFoodCatList,AddFoodCat,EditFoodCat,UpdateFoodCat,DelFoodCat } from '@/api/food'

    export default {
        name:"FoodAdd",
        props: {
            row: Object,
            visible:{
                type:Boolean,
                default:false
            },
            type:{
                type:String,
                default:''
            },
            foodCatList:{
                type:Array,
                default:[]
            }
        },
        computed:{
            title(){
                return this.type == 'package' ? "添加套餐" : "添加菜品"
            }
        },
        watch:{
            visible(isShow){
                this.isShow = isShow 
            },
            type(newType,oldType){
                console.log("typr",newType)
                    if(newType){
                        this.title =  newType== 'package' ? "添加套餐" : "添加菜品";
                        this.form.cat = newType== 'package' ? 1 : 2;
                    }
            }
        },
        data(){
            return {
                isShow:false,
                form: {
                    name:'',
                    star:3,
                    price:'',
                    shoped:0,
                    cat:1,
                    cat_name:'',
                    status:'1',
                    des:''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '请输入菜品名称', trigger: 'change' }
                    ],
                    price: [
                        { required: true, message: '请选择菜品价格', trigger: 'change' }
                    ],
                    cat: [
                        { required: true, message: '请选择菜品分类', trigger: 'change' }
                    ],
                    des: [
                        { required: true, message: '请输入菜品描述', trigger: 'change' }
                    ]
                }

            }
        },
        methods:{
            submit(){
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        const params = Object.assign({}, this.form)
                        AddFood(params).then(res => {
                            if (!res.error) {
                                this.$Message.success('添加菜品成功!');
                                this.handleReset('form') ;
                            }
                        })
                    } else {
                        this.$Message.error('添加菜品失败!');
                    }
                })
                this.closeModal() ;
            },
            cancel(){
                this.handleReset('form') ;
                this.closeModal() ;
            },
            closeModal(){
                this.isShow = false ;
                this.$emit('close')
            },
            changeStatus(status){
                console.log(status)
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    };
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  .cl-binding{
    margin-top: 5px;
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
</style>

