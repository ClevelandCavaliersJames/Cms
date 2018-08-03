<template>
    <div>
      <Row style="margin-top:100px">
        <Col span="12">
          <Col span="4">
            &nbsp;
          </Col>
          <Col span="3">
            <Card title="登入" style="width:600px">
              <Form>
                <FormItem label="账号" class="length">
                    <Input placeholder="请输入您的用户名"></Input>
                </FormItem>
                <FormItem label="密码" class="length">
                    <InputPassword placeholder="请输入密码"></InputPassword>
                </FormItem>
              </Form>
            </Card>    
          </Col>
        </Col>
      </Row>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter, Action } from "vuex-class";
//TODO 导入搜索接口
//props的属性一般不需要再在类中进行初始化
@Component({
  props: {
    // demo:{
    //     type:String,
    //     default:()=>{return {}}
    // }
  },
  components: {}
})
//TODO 更改类名
export default class Login extends Vue {
  mounted() {
    //组件被加载的时候触发
  }
  created() {
    // 组件被创建的时候触发
  }
}
</script>
<style scoped>
.length{
  width:300px;
}
</style>
