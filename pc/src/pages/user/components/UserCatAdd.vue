<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
       <Modal
            v-model="isShow"
            title="添加人员分类"
            @on-ok="submit"
            @on-cancel="cancel"
            draggable>
            <Form ref="form" :model="form" :rules="ruleValidate" :label-width="100">
                <FormItem label="分类名称:" prop="name">
                    <Input v-model="form.name" placeholder="请输入身份名称" />
                </FormItem>
                <FormItem label="是否启用" prop="status">
                    <i-switch true-value="1" false-value="0" v-model="form.status"   size="large">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>
                </FormItem>
                <FormItem label="描述：" prop="des">
                    <Input v-model="form.des" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入菜品描述"></Input>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>
<script>
import { getUserCatList,AddUserCat,EditUserCat,UpdateUserCat,DelUserCat } from '@/api/user'

    export default {
        name:"UserCatAdd",
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
                if(item){
                    console.log("item",item)
                    this.form = item;
                }
            }
        },
        data(){
            return {
                isShow:false,
                form: {
                    name: '',
                    status: '1',
                    des:''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '请输入身份分类名称', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入描述', trigger: 'change' },
                    ]
                }

            }
        },
        methods:{
            submit(){
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        const params = Object.assign({}, this.form)
                        EditUserCat(params).then(res => {
                            if (!res.error) {
                                this.$Message.success('添加/修改身份成功!');
                                this.handleReset('form') ;
                            }
                        })
                    } else {
                        this.$Message.error('添加/修改身份失败!');
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

