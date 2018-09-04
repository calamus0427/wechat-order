<template>
<div>
  <div v-if="type == 'tv'">
    <!-- <cl-tv></cl-tv> -->
     <Form ref="form" :model="form" :rules="ruleValidate" :label-width="140">
       <div class="ra-setting">
          <div class="ra-setting-title">基本信息</div>
        <FormItem label="消息名称" prop="name">
            <Input v-model="form.name" placeholder="请输入消息名称,最大长度为50"></Input>
        </FormItem>
        <FormItem label="消息有效期至" prop="msgExpiryTime">
          <DatePicker type="datetime" v-model="form.msgExpiryTime" placeholder="选择日期时间" style="width: 200px"></DatePicker>
        </FormItem>
        {{form.msgPushTime}}
        <FormItem label="是否进入消息盒子" prop="isMsgBox">
            <RadioGroup v-model="form.isMsgBox" @on-change="changeMsgBox">
                <Radio label="1">是</Radio>
                <Radio label="2">否</Radio>
            </RadioGroup>
        </FormItem>
        <Row :gutter="16" v-show="form.isMsgBox == '1'">
            <Col span="12">
                <div >
                          <div>
                            <FormItem label="选择弹窗UI样式" prop="uiType">
                                      <RadioGroup v-model="form.uiType">
                                          <Radio  v-for="item in config.uiType" :key="item.val" :label="item.val">{{item.name}}</Radio>
                                      </RadioGroup>
                                  </FormItem>
                                  <FormItem  label="消息展示位置" prop="uiPosition">
                                      <RadioGroup v-model="form.uiPosition">
                                          <Radio v-for="pos in uiPositionList" :key="pos.val" :label="pos.val">{{pos.name}}</Radio>
                                      </RadioGroup>
                                  </FormItem>
                          </div>
                          <FormItem label="消息标题" prop="title">
                            <Input v-model="form.title" placeholder="请输入消息标题,最大长度为15"></Input>
                          </FormItem>
                          <FormItem v-if="form.uiType != 'image_text'" label="消息内容" prop="content">
                            <Input type="textarea" v-model="form.content" placeholder="请输入消息内容,最大长度为40"></Input>
                          </FormItem>
                          <FormItem v-if="form.uiType != 'title_text'" label="消息图片" prop="iconPath">

                             {{form.iconPath}} <div class="demo-upload-list" v-if="form.iconPath">
                                  <template>
                                      <img :src="form.iconPath">
                                      <div class="demo-upload-list-cover">
                                          <Icon type="ios-eye-outline" @click.native="handleView()"></Icon>
                                          <Icon type="ios-trash-outline" @click.native="handleRemove()"></Icon>
                                      </div>
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
                                  type="drag"
                                  :action="uploadUrl"
                                  :data="imgRules"
                                  style="display: inline-block;width:58px;">
                                  <div style="width: 58px;height:58px;line-height: 58px;">
                                      <Icon type="plus-round" size="20"></Icon>
                                  </div>
                              </Upload>
                              <p style="color:red">
                                格式：{{imgRules.format}}
                                尺寸：{{imgRules.whr}}
                                大小：不超过{{imgRules.sr / 1024}}kb
                              </p>
                              <Modal title="查看图标" v-model="visible">
                                  <img :src="form.iconPath" v-if="visible" style="width: 100%">
                              </Modal>
                          </FormItem>
                          <FormItem label="强制抢焦时间" prop="focusTime">
                            <InputNumber :max="30" :min="0" v-model="form.focusTime"></InputNumber>
                          </FormItem>
                          <FormItem label="消息提示时长" prop="tipTime">
                            <InputNumber :max="30" :min="3" v-model="form.tipTime"></InputNumber>
                          </FormItem>
                          <FormItem label="提示时是否抢焦点" prop="isMsgBox">
                            <RadioGroup v-model="form.isFocus">
                                <Radio label="1">是</Radio>
                                <Radio label="2">否</Radio>
                            </RadioGroup>
                          </FormItem>
                          <FormItem label="提示时是否阅后即焚" prop="isReadDel">
                            <RadioGroup v-model="form.isReadDel">
                                <Radio label="1">是</Radio>
                                <Radio label="2">否</Radio>
                            </RadioGroup>
                          </FormItem>
                        </div>
            </Col>
            <Col span="12">
            <!-- <Modal width="808" title="查看图标" v-model="tvshow"> -->
                 <cl-tv-alert :data="form"></cl-tv-alert>
            <!-- </Modal> -->

            </Col>
        </Row>

       </div>
      <div class="ra-setting">
        <div class="ra-setting-title">点击事件</div>
        <FormItem label="点击事件类型" prop="actionTypeId">
            <Select v-model="form.actionTypeId" placeholder="请选择点击事件类型">
                <Option v-for="(item,index) in config.clickList.childs" :key="item.id" :value="item.id" >{{item.name}}</Option>
            </Select>
        </FormItem>
        <Row v-if="form.actionTypeId">
            <FormItem  v-for="(obj,index) in keyList"
            :key="index"
            :label="obj.name"
            :prop="obj.key"
            :rules="[{required: obj.required == '1' ? true : false, message: '请填写点击事件参数', trigger: 'change'}
                                                                        ]">
            <Row>
              <Col span="22">
              <Input v-model="form[obj.key]"   :placeholder="obj.tips"></Input>
            </Col>
            <Col offset="1" span="1">
              <Tooltip :content="obj.tips" placement="right">
                  <Icon type="help" />
              </Tooltip>
            </Col>
            </Row>
          </FormItem>
        </Row>
         <Row v-if="form.actionTypeId">
          <FormItem label="拓展参数">
            <Row>
                <Col :span="5">
                    <Input size="small" v-model="expandParams.key" placeholder="key"></Input>
                </Col>
                <Col :span="5" :offset="1">
                    <Input size="small" v-model="expandParams.value" placeholder="value"></Input>
                </Col>
                <Col :span="4" :offset="1">
                    <Tooltip class="item" effect="light" content="分别输入拓展参数的key值和value值" placement="right">
                        <Button  type="primary" size="small" plain @click="addExtend(expandParams.key,expandParams.value)">添加</Button>
                    </Tooltip>
                </Col>
            </Row>
            <Row v-for="(item,index) in expandParamsList" :key="index">
                <Col :span="12">
                    {{index+1}}.{{item.key}}:{{item.value}}
                </Col>
                <Col :span="4">
                    <Button type="error" size="small" plain @click="delExtend(item.key,item.value,index)">删除</Button>
                </Col>
            </Row>
          </FormItem>
        </Row>
      </div>
      <div class="ra-setting">
        <div class="ra-setting-title">消息推送策略</div>
        <FormItem label="策略类型" prop="poicyType">
            <RadioGroup v-model="form.poicyType">
                <Radio label="1">DMP推送</Radio>
                <Radio label="3">本地筛选</Radio>
                <Radio label="2">ID推送</Radio>
                <Radio label="4">全量推送</Radio>
            </RadioGroup>
        </FormItem>
        <div v-if="form.poicyType == '1'">
          <FormItem label="人群" prop="userTypeId">
            <Button size="small" type="ghost" shape="circle" @click="chooseModel('user',1)">选择人群</Button>
            <Checkbox v-model="form.pushTest">测试人群</Checkbox>
            <div v-if="form.userTypeId" class="cl-choosed-mode">
              <p>已选择人群：{{form.userTypeId}}</p>
            </div>
          </FormItem>
          <FormItem label="机型机芯" prop="chipAndModes">
            <Button size="small" type="ghost" shape="circle" @click="chooseModel('mode',1)">选择机型</Button>
            <div v-if="form.chipAndModes" class="cl-choosed-mode">
              <p>视频源：{{form.sourceId}}</p>
              <p>已选择机型：{{form.chipAndModes}}</p>
            </div>
          </FormItem>
        </div>
        <div v-if="form.poicyType == '2'">
          <FormItem label="MAC参数" prop="macTypeId">
              <RadioGroup v-model="form.macTypeId">
                  <Radio label="2">指定单个mac</Radio>
                  <Radio label="5">pushId</Radio>
                  <Radio label="6">激活Id</Radio>
              </RadioGroup>
          </FormItem>
          <FormItem v-if="form.macTypeId == '2'" label="mac" prop="mac">
            <Input v-model="form.mac" placeholder="请输入单个mac"></Input>
          </FormItem>
          <FormItem v-if="form.macTypeId == '5'" label="pushId" prop="pushId">
            <Input v-model="form.pushId" placeholder="仅支持单个pushId，长度不得超过40"></Input>
          </FormItem>
          <FormItem v-if="form.macTypeId == '6'" label="激活id" prop="targetId">
            <Input v-model="form.targetId" placeholder="请输入激活id，格式为字母和数字的组合，长度不得超过40"></Input>
          </FormItem>
        </div>
        <div v-if="form.poicyType == '3'">
          <FormItem label="机型机芯" prop="chipAndModes" :rules="{required: true, message: '请选择机芯机型', trigger: 'change'}">
            <Button size="small" type="ghost" shape="circle" @click="chooseModel('model',3)">选择机型</Button>
            <div v-if="form.chipAndModes" class="cl-choosed-mode">
              <p>视频源：{{form.sourceId}}</p>
              <p>已选择机型：{{form.chipAndModes}}</p>
            </div>
          </FormItem>
        </div>
        <!-- <FormItem label="消息有效期至" prop="ttl">
          <DatePicker type="datetime" v-model="form.ttl" placeholder="选择日期时间" style="width: 200px"></DatePicker>
        </FormItem> -->
        <FormItem label="推送方式" prop="pushType">
            <RadioGroup v-model="form.pushType">
                <Radio label="1">手动推送</Radio>
                <Radio label="2">定时推送</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem v-if="form.pushType == '2'" label="推送时间" prop="msgPushTime">
          <DatePicker type="datetime" v-model="form.msgPushTime" placeholder="选择日期时间" style="width: 200px"></DatePicker>
        </FormItem>
      </div>


        <FormItem>
            <Button type="primary" @click="handleSubmit('form')">推送</Button>
            <Button type="ghost" @click="handleReset('form')" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
    <!-- 机型选择 -->
    <Modal
      v-model="chooseModelVisible"
      :title="chooseModelTitle"
      width="750"
      :mask-closable="false"
    >
       <cl-model-chip></cl-model-chip>
    </modal>
  </div>
  <div v-if="type == 'msg'">
  <div class="ra-setting">敬请期待</div>
  </div>
  <div v-if="type == 'wechat'">
  <div class="ra-setting">敬请期待</div>
  </div>
</div>

</template>
<script>
import '../modelCss/tvalert.js'
import '../modechip/table.js'

export default {
  name:'CLAdd',
  props:{
    type:{
      type:String,
      default:'tv'
    }
  },
  data () {
    return {
    //点击事件拓展参数
      expandParamsList:[],
      expandParams:{key:'',value:''},

      tvshow:true,
      defaultList: [],
      //配置信息
      config:{
        uiType:{},
        clickList:[],
        channel:{}
      },
      //选择机型
      chooseModelVisible:false,
      chooseModelTitle:'选择机型',
      imgName: '',
      visible: false,
      uploadUrl:this.$request.upload+'format_img',
      keyList:[],
      form: {
        bid:this.$route.params.id,
        sourceId:'',
        name:'',
        status:'5',
        msgExpiryTime:'',
        isMsgBox:'1',
        uiType:'',
        title:'',
        content:'',
        uiPosition:'2',
        focusTime:5,
        iconPath:'',
        tipTime:5,
        isFocus:'1',
        isReadDel:'2',
        actionTypeId:'',
        poicyType:'2',
        userTypeId:'',
        pushTest:'1',
        chipAndModes:'',
        macTypeId:'2',
        macCount:'1',
        mac:'',
        macStart:'',
        macEnd:'',
        pushId:'',
        targetId:'',
        file:'',
        pushType:'1',
        msgPushTime:'',
        ttl:'',
        acParams:[],
        filterType:0,
        Type:1
      },
      ruleValidate: {
          name: [
              { required: true, message: '请输入消息名称', trigger: 'change' },
              { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'change' }
          ],
          msgExpiryTime: [
              { type:'date',required: true, message: '请输入消息有效期', trigger: 'change' }
              // { validator: checkExpiryTime, trigger: 'change' }
          ],
          isMsgBox: [
              { required: true, message: '请选择是否进入消息盒子', trigger: 'change' },
          ],
          title: [
              { required: true, message: '请输入消息标题', trigger: 'change' },
              { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'change' }
          ],
          content:[
              { required: true, message: '请输入消息内容', trigger: 'change' },
              { min: 1, max: 40, message: '长度在 1 到 40 个字符', trigger: 'change' }
          ],
          focusTime:[
              { type:'number',required: true, message: '请输入强制抢焦时间', trigger: 'change' },
          ],
          uiPosition:[
              { required: true, message: '请选择消息展示位置', trigger: 'change' },
          ],
          uiType:[
              { required: true, message: '请选择弹窗UI样式', trigger: 'change' },
          ],
          iconPath: [
              { required: true, message: '请上传图片', trigger: 'change' },
          ],
          tipTime: [
              { type:'number',required: true, message: '请输入消息提示时长', trigger: 'change' },
          ],
          isFocus: [
              { required: true, message: '请选择提示时是否抢焦点', trigger: 'change' },
          ],
          isReadDel: [
              { required: true, message: '请选择提示时是否阅后即焚', trigger: 'change' },
          ],
          actionTypeId: [
              { type:'number',required: true, message: '请选择点击事件类型', trigger: 'change' },
          ],
          poicyType: [
              { required: true, message: '请选择策略类型', trigger: 'change' },
          ],
          userTypeId: [
              { required: true, message: '请选择人群', trigger: 'change' },
          ],
          macTypeId: [
              { required: true, message: '请选择MAC参数', trigger: 'change' },
          ],
          macCount: [
              { type:'number',required: true, message: '请输入单个mac数量', trigger: 'change' },
          ],
          mac: [
              { required: true, message: '请输入指定单个MAC', trigger: 'change' },
              { pattern: /^[A-Fa-f0-9]{12}$/, message: 'MAC地址格式不正确' }
          ],
          macStart: [
              { required: true, message: '请输入MAC起始段', trigger: 'change' },
              { pattern: /^[A-Fa-f0-9]{12}$/, message: 'MAC地址格式不正确' }
          ],
          macEnd: [
              { required: true, message: '请输入MAC结束段', trigger: 'change' },
              { pattern: /^[A-Fa-f0-9]{12}$/, message: 'MAC地址格式不正确' }
          ],
          pushId: [
              { required: true, message: '请输入pushId', trigger: 'change' },
              { min: 1, max: 40, message: '长度在 1 到 40 个字符', trigger: 'change' }
          ],
          targetId: [
              { required: true, message: '请输入激活id', trigger: 'change' },
              { min: 1, max: 40, message: '长度在 1 到 40 个字符', trigger: 'change' },
              { pattern: /^[\da-zA-Z]+$/, message: '请不要输入数字和字母以外的字符', trigger: 'change' }
          ],
          file: [
              { required: true, message: '请选择要导入文件', trigger: 'change' },
          ],
          pushType: [
              { required: true, message: '请选择推送类型', trigger: 'change' },
          ],
          msgPushTime: [
              { type:'date',required: true, message: '请输入推送时间', trigger: 'change' },
              // { validator: checkMsgPushTime, trigger: 'change' }
          ],
          ttl: [
              { type:'date',required: true, message: '请输入消息缓存有效期', trigger: 'change' },
              // { validator: checkTtl, trigger: 'change' }
          ]}
    }
  },
  watch:{
    'form.actionTypeId':function(val,oldval){
      if(oldval !== '' && oldval !== undefined){
                    this.expandParamsList = [] ;
      }
      if(val){
        var acparamsList1 = this.config.clickList.childs.filter((e)=>{
            return e.id == this.form.actionTypeId;
         })
        var acparamsList = acparamsList1[0].childs;
        this.keyList = acparamsList1[0].childs;
        for(let i = 0 ; i < acparamsList.length ; i ++){
          this.$set(this.form,acparamsList[i].key,acparamsList[i].val);
        }
      }
    },
    'form.msgExpiryTime':function(val,oldval){
               this.form.ttl = val ;
    },
    'form.uiType':function(val,oldVal){
      if(val !='' && val != oldVal){
        var defaultList = this.config.uiType.filter((e)=>{
          return e.val == val ;
        });
        this.form.uiPosition = (defaultList[0].defalutVal || '2').toString()
        this.form.iconPath = '' ;
      }
    }
  },
  computed:{
    imgRules(){
        var image_text = {
          format:'png', //图片格式
          sr:'307200',  //图片大小
          whr:'750*470',    //图片宽
        }
        var title_image_text = {
          format:'jpg,png', //图片格式
          sr: '30720',  //图片大小
          whr:'120*120',    //图片宽
        }
        if(this.form.uiType == 'image_text'){
          return image_text
        }else{
          return  title_image_text
        }
      },
      uiPositionList(){
        if(this.form.uiType){
          var position = this.config.uiType.filter((e)=>{
            return e.val == this.form.uiType ;
          })
          return position[0].position;
        }else{
          return [
                    {
                        "val": "1",
                        "name": "右上",
                        "tips": "",
                        "key": "position"
                    },
                    {
                        "val": "2",
                        "name": "右下",
                        "key": "position"
                    },
                    {
                        "val": "3",
                        "name": "中间",
                        "key": "position"
                    }
                ]
        }
      },
  },
  mounted(){
    this.getConfig(this.form.isMsgBox);
  },
  methods:{
    getConfigInit(isMsgBox){
      var url = this.$request.appConfig + "get_init_conf";
      // var url = this.$request.appConfig+"%7Bbid%7D?bid="+this.$route.params.id
      this.$http.get(url)
        .then( (res)=> {
          if(res.data.code == 1000){
              this.config.uiType = res.data.data.radar_web_tv_ui_type.uiType.childs;
              this.config.clickList = isMsgBox == '1' ? res.data.data.radar_web_tv_onclick.inBox : res.data.data.radar_web_tv_onclick.backDoor;
              this.config.channel = res.data.data.radar_web_channel_bind
              this.form.uiType = 'title_image_text';
          }
        },(err)=>{
          console.error('get dataTable failed',err);
        })
    },
    getConfig(isMsgBox){
      // var url = "http://172.20.135.99:8284/bi_list_config/v1/get_init_conf";
      var url = this.$request.appConfig+"%7Bbid%7D?bid="+this.$route.params.id
      this.$http.get(url)
        .then( (res)=> {
          if(res.data.code == 1000){
            if(Boolean(res.data.data.radar_web_tv_ui_type)){
              this.config.uiType = res.data.data.radar_web_tv_ui_type.uiType.child;
              this.form.uiType = res.data.data.radar_web_tv_ui_type.uiType.defalutVal;
              this.config.clickList = isMsgBox == '1' ? res.data.data.radar_web_tv_onclick.inBox : res.data.data.radar_web_tv_onclick.backDoor;
              this.config.channel = res.data.data.radar_web_channel_bind
            }else{
              this.getConfigInit(this.form.isMsgBox)
            }
          }
        },(err)=>{
          console.error('get dataTable failed',err);
        })
    },
    changeMsgBox(res){
      this.getConfig(res);
      this.form.actionTypeId = '' ;
    },
    handleSubmit (name) {
      this.form.msgExpiryTime = this.StrToGMT(this.form.msgExpiryTime);
      this.form.ttl = this.StrToGMT(this.form.ttl)
      this.form.msgPushTime = this.StrToGMT(this.form.msgPushTime)
      this.$refs[name].validate((valid) => {
          if (valid) {
            var params = this.dataFormate();
            console.log("%c 新建推送时提交的数据==》","color:#E1244E;font-size:16px;==>",params)
            this.$http.post(this.$request.tv,this.$Qs.stringify(params),{'headers':{'Content-Type':'application/x-www-form-urlencoded'}})
              .then( (res)=> {
                if(res.data.code == 1000){
                    this.$Message.success('推送成功');
                    setTimeout(()=> {
                      this.$router.push({ name: '应用', params: { id: this.$route.params.id }})
                    }, 1000);
                }else{
                  this.$Message.error(res.data.msg);
                }
              },(err)=>{
                this.$Message.error("推送失败");
              })
          } else {
              this.$Message.error("请填写完整参数");
          }
      })
    },
    handleReset (name) {
        this.$refs[name].resetFields();
        this.$router.back(-1)
    },
  //上传图标
    handleView () {
                this.visible = true;
    },
    handleRemove () {
      this.form.iconPath = '' ;
    },
    handleSuccess (res, file) {
        if(res.code == 1000){
          this.$Message.success(res.msg);
          this.form.iconPath = res.data
        }else{
          this.$Message.error(res.msg);
        }
    },
    handleFormatError (file) {
        this.$Notice.warning({
            title: '图片格式不符合标准',
            desc: file.name + '图片格式不符合标准'
        });
    },
    handleMaxSize (file) {
        this.$Notice.warning({
            title: '图片大小超过限制大小',
            desc: 'File  ' + file.name + ' is too large, no more than 2M.'
        });
    },
    handleBeforeUpload () {

    },
    //选择机型
    chooseModel(type,policy){
      this.chooseModelVisible = true ;
      switch(type){
        case 'user':
          this.chooseModelTitle = "选择人群";
          break;
        case 'mode':
          this.chooseModelTitle = "选择机型";
          break;
      }
    },
    dataFormate(form){
      var q = {};
      var formData = this.form;
      if(formData.pushTest == true ){
          formData.pushTest = 1 ;
      }
      else{
          formData.pushTest = 0 ;
      }
      //点击事件格式处理
      if(this.form.actionTypeId){
        var keyList = this.keyList;

        if(typeof(formData.acParams) == 'string'){
            formData.acParams = JSON.parse(formData.acParams) ;
        }else{
            console.info("getFormParams",formData.acParams);
        }
        for (var item in formData) {
            if (item == "acParams") {
                var param = {} ;
                for (var i = 0; i < keyList.length; i++) {
                    formData.acParams.push({'key':keyList[i].key,'value':this.form[keyList[i].key],'dicId':keyList[i].id});
                }
                formData.acParams = formData.acParams.concat(this.expandParamsList) ;
                formData.acParams = JSON.stringify(formData.acParams) ;
            }
            q[item] = formData[item];
        }
      }
      if(formData.macTypeId == 2){
          formData.macStart = formData.mac ;
          formData.macEnd = formData.mac ;
      }

      //时间格式处理
        if(formData.msgExpiryTime && formData.msgExpiryTime != "Invalid Date"){
          formData.msgExpiryTime = this.GMTToStr(this.form.msgExpiryTime);
        }else{
          formData.msgExpiryTime = ''
        }
        if(formData.ttl && formData.ttl != "Invalid Date"){
          formData.ttl = this.GMTToStr(new Date(formData.ttl));
        }else{
          formData.ttl = ''
        }
        if( formData.msgPushTime && formData.msgPushTime != "Invalid Date"){
          formData.msgPushTime = this.GMTToStr(new Date(formData.msgPushTime));
        }else{
          formData.msgPushTime = '' ;
        }
        for (var item in formData) {
            q[item] = formData[item];
        }
        return q;
    },
    GMTToStr(time){
      if(time.length !== 0){
          let date = new Date(time);
          let Str=date.getFullYear() + '-' +
              (date.getMonth() + 1) + '-' +
              date.getDate() + ' ' +
              date.getHours() + ':' +
              date.getMinutes() + ':' +
              date.getSeconds()
          return Str;
      }
      else{
          return time ;
      }
    },
    GMTToStrDate(time){
      if(time.length !== 0){
          let date = new Date(time);
          let Str= date.getHours()  +
              date.getMinutes()  +
              date.getSeconds()
          return Str;
      }
      else{
          return time ;
      }
    },
    StrToGMT(time){
      let GMT = new Date(time);
      return GMT
    },
    // 点击事件
    addExtend(key,value){
        if(key == ''){
            this.$Message.error('拓展参数key值不能为空');
        }else if(this.expandParamsList.length >= 10){
            this.$Message.error('最多只能添加10条拓展参数');
        }else{
            var param = {} ;
            param.key = key ;
            param.value = value ;
            this.expandParamsList.push(param);
            this.expandParams.key = '' ;
            this.expandParams.value = '' ;
        }

    },
    delExtend(key,value,index){
        this.expandParamsList.splice(index,1);
    },
  }
}
</script>
<style lang="scss" scoped>
img{
  width:150px;
}
.ra-setting{
  width:100%;
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

