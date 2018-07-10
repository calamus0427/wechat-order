<template>
  <div>
    <div class="ra-setting">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="140">
               <FormItem label="统计数据更新时间" prop="name">
                  <Select v-model="formValidate.name">
                      <Option value="day">每天24点</Option>
                      <Option value="week">每周一</Option>
                      <Option value="month">每月1号</Option>
                  </Select>
              </FormItem>
              <FormItem label="统计数据更新方式" prop="type">
                  <Select v-model="formValidate.type">
                      <Option value="1">自动</Option>
                      <Option value="2">手动刷新</Option>
                  </Select>
              </FormItem>
            </Form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formValidate:{
          name:'day',
          type:'1'
      },
      ruleValidate:{
        'name':[{ required: true, message: '请输入消息名称', trigger: 'change' }]
        }
    }
  }
}
</script>
