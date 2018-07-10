<template>
  <div>
    <Form :model="formLeft" label-position="left" :label-width="100">
      <div class="ra-setting">
                <div class="ra-setting-title">基本信息</div>
          <FormItem label="名称">
              <Input v-model="formLeft.name"></Input>
          </FormItem>
          <FormItem label="包名">
              <Input v-model="formLeft.pkg"></Input>
          </FormItem>
          <FormItem label="图标">
              <div class="demo-upload-list" v-for="(item,index) in uploadList" :key="index">
                  <template v-if="item.status === 'finished'">
                      <img :src="item.url">
                      <div class="demo-upload-list-cover">
                          <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                          <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                      </div>
                  </template>
                  <template v-else>
                      <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                  </template>
              </div>
              <Upload
                  ref="upload"
                  :show-upload-list="false"
                  :default-file-list="defaultList"
                  :on-success="handleSuccess"
                  :format="['jpg','jpeg','png']"
                  :max-size="2048"
                  :on-format-error="handleFormatError"
                  :on-exceeded-size="handleMaxSize"
                  :before-upload="handleBeforeUpload"
                  :multiple="false"
                  type="drag"
                  action="//jsonplaceholder.typicode.com/posts/"
                  style="display: inline-block;width:58px;">
                  <div style="width: 58px;height:58px;line-height: 58px;">
                      <Icon type="plus-round" size="20"></Icon>
                  </div>
              </Upload>
              <Modal title="查看图标" v-model="visible">
                  <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
              </Modal>
          </FormItem>
          <FormItem label="创建时间">
              {{formLeft.createTime}}
          </FormItem>
          <FormItem label="更新时间">
              {{formLeft.updateTime}}
          </FormItem>
          <FormItem label="备注">
              <Input  v-model="formLeft.remark"></Input>
          </FormItem>
          <FormItem label="IP">
              <Input @on-enter="addIp(ip)" v-model="ip"></Input>
              <Tag color="green" type="border" v-for="(item,index) in formLeft.ipList" :key="item" :name="item" closable @on-close="handleDelIp(index)">{{item}}</Tag>
          </FormItem>
      </div>
      <div class="ra-setting">
        <div class="ra-setting-title">应用配置</div>
        <FormItem label="AppID">
              {{formLeft.appID}}
        </FormItem>
        <FormItem label="AppSecret">
            {{formLeft.appSecret}}
        </FormItem>
        <FormItem label="AppKey">
            {{formLeft.appKey}}
        </FormItem>
        <FormItem label="Master Secret">
            {{formLeft.masterSecret}}
        </FormItem>
      </div>
      <div class="ra-setting">
          <div class="ra-setting-title">应用平台</div>
          <FormItem label="">
              <CheckboxGroup v-model="formLeft.checkbox">
                  <Checkbox label="tv"></Checkbox>
              </CheckboxGroup>
          </FormItem>
          <FormItem label="secret">
              <Input v-model="formLeft.input1"></Input>
          </FormItem>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultList: [
          {
              'name': 'defaultImg',
              'url': 'http://p3i10hjs7.bkt.clouddn.com/user.jpg'
          }
      ],
      imgName: '',
      visible: false,
      uploadList: [],
      ip:'',
      formLeft: {
          name: '1111',
          pkg: '',
          checkbox: ['tv'],
          ipList:['1.1.1.1','2.2.2.2'],
          updateTime:'2018-05-14',
          createTime:'2018-05-14',
          appID:'11111111',
          appSecret:'adaddfasfda',
          appKey:'sdfagdghg',
          masterSecret:'adfsfdgdgfh',
          remark:'应用分类，应用描述'
      },
          }
  },
  mounted(){
    this.uploadList = this.$refs.upload.fileList;
  },
  methods:{
    addIp(ip){
      if(ip){
        this.formLeft.ipList.push(ip);
        this.ip = '' ;
      }
    },
    handleDelIp(index){
      this.formLeft.ipList.splice(index, 1);
    },
    //上传图标
    handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
            }
  }
}
</script>
<style lang="scss" scoped>
.ivu-input{
  border:none;
}

.ra-setting{
  width:80%;
  background-color: #F5F7F9;
  margin:10px;
  padding:20px;
  border-radius:10px;
}
.ra-setting-title{
      color: #999999;
    text-align: left;
    height: 45px;
    line-height: 45px;
    margin-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px solid #cccccc;
}
//图标
.demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>

