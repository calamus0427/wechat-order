<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
       <Modal
            v-model="isShow"
            title="添加菜品分类"
            @on-ok="submit"
            @on-cancel="cancel"
            draggable>
            <Form ref="form" :model="form" :rules="ruleValidate" :label-width="80">
                <FormItem label="分类名称:" prop="name">
                    <Input v-model="form.name" placeholder="请输入分类名称" />
                </FormItem>
                <FormItem label="图片" prop="img">
                    <Input v-model="form.img" placeholder="请输入图片链接地址" />
                    <img class="previewImg" :src="form.img" />
                </FormItem>
                <FormItem label="启用状态" prop="status">
                    <i-switch true-value="1" false-value="0" v-model="form.status" @on-change="changeStatus"  size="large">
                        <span slot="open">开启</span>
                        <span slot="close">关闭</span>
                    </i-switch>
                </FormItem>
                <FormItem label="描述" prop="desc">
                    <Input v-model="form.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                </FormItem>
                <!-- <FormItem>
                    <Button type="primary" @click="handleSubmit('form')">提交</Button>
                    <Button @click="handleReset('form')" style="margin-left: 8px">取消</Button>
                </FormItem> -->
            </Form>
        </Modal>
    </div>
</template>
<script>
import { getFoodList,AddFoodCat,EditFoodCat,UpdateFoodCat,DelFoodCat } from '@/api/food'

    export default {
        name:"FoodCatAdd",
        props: {
            row: Object,
            visible:{
                type:Boolean,
                default:false
            },
            data:{
                type:Object,
                default:null
            }
        },
        watch:{
            visible(isShow){
                console.log("watch",isShow)
                this.isShow = isShow 
            },
            data(item){
                console.log("editCat",item)
                this.form = Object.assign({}, item)
            }
        },
        data(){
            return {
                isShow:false,
                form: {
                    name: '',
                    desc: '',
                    status:'1',
                    img:''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'change' }
                    ]
                }

            }
        },
        methods:{
            submit(){
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        const params = Object.assign({}, this.form)
                        EditFoodCat(params).then(res => {
                            if (!res.error) {
                                this.$Message.success('添加/修改菜品分类成功!');
                                this.handleReset('form') ;
                            }
                        })
                    } else {
                        this.$Message.error('添加/修改菜品失败!');
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
.previewImg{
    width:150px;
    padding-top:10px;
}
</style>

