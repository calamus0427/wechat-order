<template>
<div>
  <!-- <Button icon="ios-plus-empty" size="small" type="primary">新增点击事件业务类型</Button> -->

    消息盒子：<i-switch v-model="msgBox" @on-change="changeMsgBox">
                <span slot="open">是</span>
                <span slot="close">否</span>
              </i-switch>
    <Button size="small" icon="ios-plus-empty" @click="addNewClick()" style="float:right;margin-right:18px;width:58px;" type="primary"></Button>
    </br>
    <Tree :data="clickList"  :render="renderContent"></Tree>

    <!-- 点击事件列表 -->
    <Modal
        width="800"
        v-model="showList"
        :mask-closable="false"
        title="点击事件列表"
        @on-cancel="closeModel">
        <Row>
          <Col span="20">
            <Breadcrumb separator=">">
                <BreadcrumbItem >
                  <span v-if="msgBox == true">消息盒子</span>
                  <span v-else>后门事件</span>
                </BreadcrumbItem>
                <BreadcrumbItem >点击事件</BreadcrumbItem>
            </Breadcrumb>
          </Col>
          <Col span="4">
          <ButtonGroup style="float:right" v-if="addClick">
            <Button  size="small" type="success" @click="addClickSubmit()">确定</Button>
            <Button  size="small" @click="addClickCancel()">取消</Button>
          </ButtonGroup>
            <Button v-if="!addClick" type="primary" @click="showAddClick()" size="small" style="float:right">新建点击事件</Button>
          </Col>
        </Row>
        </br>
        <Row v-show="addClick" class="ra-setting">
          <div class="ra-setting-title">{{clickTitle}}</div>
          <Form :model="formItem" ref="formItem" :rules="rules" :label-width="80">
                  <!-- <FormItem label="业务类型" prop="typeId">
                      <Input v-model="formItem.typeId" placeholder="请输入键名"></Input>
                  </FormItem> -->
                  <FormItem label="键名" prop="name">
                      <Input v-model="formItem.name" placeholder="请输入键名"></Input>
                  </FormItem>
                  <FormItem label="键值" prop="key">
                      <Input v-model="formItem.key" placeholder="请输入键值"></Input>
                  </FormItem>
                  <FormItem label="默认值" prop="val">
                      <Input v-model="formItem.val" placeholder="请输入默认值"></Input>
                  </FormItem>
                  <FormItem label="是否必填" prop="required">
                      <RadioGroup v-model="formItem.required">
                          <Radio label="1">是</Radio>
                          <Radio label="2">否</Radio>
                      </RadioGroup>
                  </FormItem>
                  <FormItem label="输入框类型" prop="inputType">
                      <Select v-model="formItem.inputType">
                          <Option value="input">手写</Option>
                          <Option value="checkbox">多选</Option>
                          <Option value="radio">单选</Option>
                      </Select>
                  </FormItem>
                  <FormItem label="备注" prop="tips">
                      <Input v-model="formItem.tips" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入 备注"></Input>
                  </FormItem>
                  <FormItem label="状态" prop="status">
                      <RadioGroup v-model="formItem.status">
                          <Radio label="1">启用</Radio>
                          <Radio label="2">禁用</Radio>
                      </RadioGroup>
                  </FormItem>
              </Form>
        </Row>
        <Row>
          <Table :columns="detailColumn" :data="detailData"></Table>
        </Row>
        <div slot="footer" style="text-align:center;color:gray">
          @coocaa
        </div>
    </Modal>
    <!-- 编辑和新建点击事件类型 -->
    <Modal width="800"
        v-model="showAdd"
        :title="addClickTitle"
        @on-ok="addClickTypeSubmit"
        @on-cancel="addClickTypeCancel">
      <Form ref="formValidate" :model="formAddClick" :rules="formAddClickRule" :label-width="140">
        <FormItem label="消息盒子类型" prop="ftype">
          <i-switch v-model="formAddClick.ftype" @on-change="changeMsgBox">
                <span slot="open">是</span>
                <span slot="close">否</span>
          </i-switch>
        </FormItem>
        <FormItem label="业务类型" prop="type">
            <Input v-model="formAddClick.type" placeholder="请输入类型"></Input>
        </FormItem>
      </Form>
    </Modal>
</div>

</template>
<script>
    export default {
        data () {
            return {
              msgBox:true,
              showAdd:false,
              delClickVisible:false,
              delTitle:'',
              formAddClick:{
                ftype:'true',
                type:''
              },
              formAddClickRule:{

              },
              currentData:{
                msgBox:true,
                delId:''
              },
              showList:false,
              addClickTitle:'新建点击事件业务类型',
              clickTitle:'新建点击事件',
              addClick:false,
              formItem: {
                  name:'',
                  key:'',
                  val:'',
                  required:'1',
                  id:'1',
                  inputType:'',
                  tips:'',
                  status:'1'
              },
              rules:{},
              clickList:[],
              buttonProps: {
                  type: 'ghost',
                  size: 'small',
              },
              detailColumn:[
                {
                        title: 'Id',
                        key: 'id',
                        width: 80,
                        fixed: 'left'
                    },
                    {
                        title: '包名',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: '键值',
                        key: 'key',
                        width: 120
                    },
                    {
                        title: '默认值',
                        key: 'val',
                        width: 100
                    },
                    {
                        title: '是否必填',
                        key: 'required',
                        width: 100,
                        render: (h, params) => {
                            return h('div', params.row.required == true ? '是' : '否');
                        }
                    },
                    {
                        title: '输入框类型',
                        key: 'inputType',
                        width: 100
                    },
                    {
                        title: '状态',
                        key: 'status',
                        width: 100,
                        render: (h, params) => {
                            return h('div', [
                                h('Tag', {
                                    props: {
                                        color: params.row.status == 1 ? 'green' : 'red'
                                    },
                                },params.row.status == 1 ? '已启动' : '已禁用')
                            ]);
                        }
                    },
                    {
                        title: '备注',
                        key: 'tips',
                        width:200
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                      click:()=>{
                                        this.addClick = true ;
                                        this.formItem = params.row
                                        this.clickTitle = "编辑点击事件"+' =>> ' + params.row.name;
                                      }
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
              detailData:[
                {
                        pkgname: '启动参数',
                        status: 1,
                        key: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                },
                {
                        pkgname: '启动参数',
                        status: 2,
                        key: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                }
              ]
            }
        },
        mounted(){
          this.getClickData(this.msgBox);
        },
        methods: {
            changeMsgBox(res){
                this.getClickData(res)
            },
            getClickData(status){
              this.$http.get(this.$request.appConfig+"%7Bbid%7D?bid="+this.$route.params.id)
                .then( (res)=> {
                  if(res.data.code == 1000){
                      console.log("%c点击事件返回参数","color:#E1244E;font-size:14px;",res.data.data.radar_web_tv_onclick,this.data6)
                      this.clickList = status  ?(res.data.data.radar_web_tv_onclick.inBox?res.data.data.radar_web_tv_onclick.inBox.childs:[]) : (res.data.data.radar_web_tv_onclick.backDoor?res.data.data.radar_web_tv_onclick.backDoor.childs:[])
                      // this.clickList = res.data.data.radar_web_tv_onclick.inBox.child
                  }
                },(err)=>{
                  console.error('get dataTable failed',err);
                })
            },
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('a', {
                          style:{
                            color:'#363E4F'
                          },
                          on:{
                            click:()=>{
                                this.detailData = data.childs
                                this.showList = true ;
                                this.clickTitle = data.name;
                            }
                          }
                        },data.name)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'edit'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => {
                                  this.showAdd = true ;
                                  this.addClickTitle = "编辑点击事件业务类型";
                                  this.formAddClick.ftype = this.msgBox;
                                  this.formAddClick.type = data.name;
                                }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'close'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const child = data.child || [];
                child.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'child', child);
            },
            addNewClick(){
                this.showAdd = true ;
                this.addClickTitle = "新建点击事件业务类型" ;
                this.formAddClick.ftype = this.msgBox ;
                this.formAddClick.type = '' ;
            },
            remove (root, node, data) {
              this.$Modal.confirm({
                    title: '删除点击事件:'+ data.name,
                    content: '<p style="color:red;font-size:14px;">删除该点击事件将会删除该项及该项下的所有配置字段!!!!!!</p><p>确认删除吗？</p>',
                    okText: '再考虑下',
                    cancelText: '确认删除',
                    onOk:function(){
                      console.log("%再考虑下","color:#E1244E")
                    },
                    onCancel:function(){
                      console.log("%c确认删除","color:red")
                    }
                });
                // this.delClickVisible = true ;
                // const parentKey = root.find(el => el === node).parent;
                // const parent = root.find(el => el.nodeKey === parentKey).node;
                // const index = parent.child.indexOf(data);
                // parent.child.splice(index, 1);
            },
            showAddClick(){
              this.addClick = true;
              this.clickTitle = "新建点击事件";
              this.handleReset('formItem');
            },
            closeModel(){
              this.addClick = false ;
            },
            expand(arr){
              for(let i = 0 ; i < arr.length ; i++){
                if(arr[i].child && arr[i].child.length != 0){
                  arr[i].expand = "true"
                }else{
                  arr[i].expand = "false"
                }
              }
              return arr
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            addClickSubmit(){
              this.addClick = false;
              this.handleReset('formItem');
            },
            addClickCancel(){
              this.addClick = false;
              this.handleReset('formItem');
            },
            //业务类型编辑
            addClickTypeSubmit(){

            },
            addClickTypeCancel(){

            }
        }
    }
</script>
<style lang="scss" scoped>
.vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>

