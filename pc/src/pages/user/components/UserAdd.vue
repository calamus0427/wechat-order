<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
       <Modal
            v-model="isShow"
            title="添加人员"
            @on-ok="submit"
            @on-cancel="cancel"
            draggable>
            <Form ref="form" :model="form" :rules="ruleValidate" :label-width="100">
                <FormItem label="名称:" prop="name">
                    <Input v-model="form.name" placeholder="请输入身份名称" />
                </FormItem>
                <FormItem label="图片" prop="img">
                    <Input v-model="form.img" placeholder="请输入图片链接"></Input>
                </FormItem>
                <FormItem label="分类" prop="cat">
                    <Select v-model="form.cat" placeholder="请选择菜品分类">
                        <Option v-for="item in catList" :key="item.id" :value="item.id">{{item.name}}</Option>
                    </Select>
                </FormItem>
                <FormItem label="电话:" prop="tel">
                    <Input v-model="form.tel" placeholder="请输入联系电话" />
                </FormItem>
                <FormItem label="邮箱:" prop="email">
                    <Input v-model="form.email" placeholder="请输入联系邮箱" />
                </FormItem>
                <FormItem label="是否启用" prop="status">
                    <i-switch true-value="1" false-value="0" v-model="form.status"   size="large">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>
                </FormItem>
                <FormItem label="描述：" prop="remarks">
                    <Input v-model="form.remarks" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入菜品描述"></Input>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>
<script>
import { getUserCatList,AddUserCat,EditUserCat,UpdateUserCat,DelUserCat } from '@/api/user'
import isvalidPhone from '@/utils/Validate/Validate'

    export default {
        name:"UserCatAdd",
        props: {
            row: Object,
            visible:{
                type:Boolean,
                default:false
            },
            catList:{
                type:Array,
                required:true
            }
        },
        watch:{
            visible(isShow){
                console.log("watch",isShow)
                this.isShow = isShow 
            }
        },
        data(){
            return {
                isShow:false,
                form: {
                    name: '',
                    status: '1',
                    remarks:'',
                    email:'',
                    tel:'',
                    cat:'1'
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '请输入身份分类名称', trigger: 'change' }
                    ],
                    cat: [
                        { required: true, message: '请选择人员身份', trigger: 'change' }
                    ],
                    email: [
                        { type: 'email', message: '请输入正确的邮箱', trigger: 'change' }
                    ],
                    tel: [{ validator: isvalidPhone.cellPhone, message: '请输入正确的手机号', trigger: 'change' }]

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
                                this.$Message.success('添加身份成功!');
                                this.handleReset('form') ;
                            }
                        })
                    } else {
                        this.$Message.error('添加身份失败!');
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

