<template>
  <div>
    <Row>
      <Col span="5">
        已选择机型：
        <p v-for="(item,index) in selections" :key="index">
          <Tag type="dot" closable color="green"  @on-close="handleDel(index)">{{item.name}}</Tag>
        </p>
      </Col>
      <Col span="19">
        <Table
          border
          ref="selection"
          :columns="columns"
          :data="data1"
          @on-select="handleSelect"
          @on-select-cancel="handleSelectCancel"
          @on-select-all="handleSelectAll"
          @on-selection-change="handleSelectChange">
        </Table>
      </Col>

    </Row>
  </div>
</template>
<script>
  export default {
    name:'CLModeChip',
    props:{
    },
    computed: {
    },
    data(){
      return {
        selections:[],
        columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
        data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
      }
    },
    mounted(){
    },
    methods:{
      handleSelectAll (selection) {
        console.log("全选",selection)
        //  this.$refs.selection.selectAll(selection);
      },
      handleSelect(selection,row){
        console.log("select",selection,row)
      },
      handleSelectCancel(selection,row){
        console.log("取消选择",section,row)
      },
      handleSelectChange(selection){
        //判断change的数据即可
        console.log("change",selection);
        this.selections = selection;
      },
      handleDel(index) {
        this.selections.splice(index, 1);
      }
    }
  }
</script>
<style scoped lang="scss">

</style>

