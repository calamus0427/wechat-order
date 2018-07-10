<template>
  <div>
          <Form :model="formItem" ref="formItem" :rules="rules" :label-width="80">
                  <FormItem label="键名" prop="name">
                      <Input v-model="formItem.name" placeholder="请输入键名"></Input>
                  </FormItem>
                  <FormItem label="键值" prop="keyVal">
                      <Input v-model="formItem.keyVal" placeholder="请输入键值"></Input>
                  </FormItem>
                  <FormItem label="默认值" prop="defaultVal">
                      <Input v-model="formItem.defaultVal" placeholder="请输入默认值"></Input>
                  </FormItem>
                  <FormItem label="是否必填" prop="required">
                      <RadioGroup v-model="formItem.required">
                          <Radio label="1">是</Radio>
                          <Radio label="2">否</Radio>
                      </RadioGroup>
                  </FormItem>
                  <FormItem label="输入框类型" prop="inputType">
                      <Select v-model="formItem.inputType">
                          <Option value="1">手写</Option>
                          <Option value="2">多选</Option>
                          <Option value="3">单选</Option>
                      </Select>
                  </FormItem>
                  <FormItem label="业务类型" prop="typeId">
                      <Select v-model="formItem.typeId">
                          <Option value="1">类型1</Option>
                          <Option value="2">类型2</Option>
                          <Option value="3">类型3</Option>
                      </Select>
                  </FormItem>
                  <FormItem label="备注" prop="remark">
                      <Input v-model="formItem.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入 备注"></Input>
                  </FormItem>
                  <FormItem label="状态" prop="status">
                      <RadioGroup v-model="formItem.status">
                          <Radio label="1">启用</Radio>
                          <Radio label="2">禁用</Radio>
                      </RadioGroup>
                  </FormItem>
                  <FormItem label="">
                      <Button type="primary" @click="addClick()">新增</Button>
                      <Button @click="cancle()">取消</Button>
                  </FormItem>
              </Form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabVal:'name2',
      formItem: {
        name:'',
        keyVal:'',
        defaultVal:'',
        required:'1',
        typeId:'1',
        inputType:'1',
        remark:'',
        status:'1'
        },
      rules:{},
      columns2: [
                    {
                        title: '名称',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: '键值',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: '默认值',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: '状态',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: '填写要求',
                        key: 'address'
                    },
                    {
                        title: '业务类型',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '备注',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '更新时间',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data4: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    }
                ]
    }
  },
  methods:{
    addClick(){
      this.handleReset('formItem')
      this.$router.push("/settingClick/1")
    },
    handleReset (name) {
                this.$refs[name].resetFields();
    },
    cancle(){
      this.$router.push("/settingClick/1")
    }
  }
}
</script>
