<template>
  <div>
    <div class="align_center">
      <Avatar class="avatar" src="http://p3i10hjs7.bkt.clouddn.com/user.jpg" size="large" />
      <span>{{form.loginName}}</span>
    </div>

<Tabs>
        <TabPane label="食堂信息">
          <Form :model="form" ref="form" label-position="left" :label-width="100">
            <div class="ra-setting">
                <div class="ra-setting-title">食堂信息</div>
                <FormItem label="食堂名：">
                  {{form.resname}}
                </FormItem>
              </div>
              <div class="ra-setting">
                <div class="ra-setting-title">院区信息</div>
                <FormItem label="所属医院：">
                  {{form.hospital}}
                    <!-- <Input v-model="form.type"></Input> -->
                </FormItem>
                <FormItem label="院区：">
                  {{form.district}}
                    <!-- <Input v-model="form.loginName"></Input> -->
                </FormItem>
              </div>
              <div class="ra-setting">
                <div class="ra-setting-title">位置信息</div>
                <FormItem label="详细地址：">
                  {{form.address}}
                  <!-- Todo:添加地图 -->
                    <!-- <Input v-model="form.phone"></Input> -->
                </FormItem>
              </div>
              <!-- <FormItem>
                    <Button type="primary" @click="updateUserInfo('form')">确定</Button>
                    <Button type="ghost" style="margin-left: 8px">取消</Button>
              </FormItem> -->
            </Form>
        </TabPane>
</Tabs>

  </div>
</template>
<script>
import { getHospitalInfo } from '@/api/common'

export default {
  data () {
    return {
      value:'',
      form: {
        "id": 38,
        "resname":'',
        "hospital":"",
        "district":"",
        "address":""
      }
    }
  },
  mounted(){
    this.getInfo()
  },
  methods:{
    getInfo(){
          getHospitalInfo()
            .then( (res)=> {
              this.form = res[0];
            },(err)=>{
              console.error('获取信息失败',err);
            })
    }
  }
}
</script>
<style lang="scss" scoped>
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
.avatar{
      transition: all 0.5s ease-in-out;
      &:hover{
          transform:rotate(360deg);
      }

}
</style>

