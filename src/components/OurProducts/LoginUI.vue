<template>
    <div class="dl">
        <Row>       
            <Col span="12">
                &nbsp;
            </Col>
        </Row>
        <div>
            <form action="" method="post" class="login-form">
                <Col span="">
                    <div class="username">
                        <Row>
                            <Col span="1" style="text-align:center;margin-top: 6px; margin-left: 35px;">
                                <i class="layui-icon layui-icon-user" style="font-size: 20px; color: ##2B2B2B;"></i> 
                            </Col>
                            <Col span="">
                                <Input :required="true" placeholder="请输入用户名" style="width:200px" class="aa"></Input>
                            </Col>
                        </Row>
                    </div> 
                    &nbsp;
                    <div class="password">
                        <Row>
                            <Col span="1" style="text-align:center;margin-top: 6px;  margin-left: 35px;">
                                <i class="layui-icon layui-icon-vercode" style="font-size: 20px; color: ##2B2B2B;"></i> 
                            </Col>
                            <Col span="">
                                <InputPassword :required="true" placeholder="请输入密码" style="width:200px" class="aa"></InputPassword>
                            </Col>
                        </Row>
                    </div>
                    &nbsp;
                    <div class="layui-input-block">
                        <Row>
                            <Col span="1" style="margin-top: 2px;">
                                <input style="width: 16px;height: 16px;" type="checkbox" name="" lay-skin="primary">
                            </Col>
                            <Col span="5">
                                <h4>记住我</h4>
                            </Col>
                            <Col span="">
                                <Button type="normal" size="sm" style="color: #fff; font-weight: bold;background: -webkit-linear-gradient(top,rgb(74,162,241),rgb(52,119,182)) 1px 0 no-repeat, -webkit-linear-gradient(top,rgb(52,118,181),rgb(36,90,141)) left top no-repeat;">&nbsp;登录&nbsp;</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </form>
            
        </div>
        <div class="box" >

        </div>
        <!-- <img src="../../assets/image/LoginUI/login1.png" style="width:500px"> -->
        <Button type="primary" @click="yes">确定</Button>
        <!-- <text1 v-model="ShowEditModal" ></text1> -->
    </div>
</template>

<script lang = "ts">
import Vue from "../../vue";
import Component from "vue-class-component";
declare let require: any;
@Component({
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  components: {
    // text1: r => require(["../Modal/LoginUI.vue"], r)
  }
})
export default class LoginUI extends Vue {
  value: any;
  ShowEditModal: Boolean = false;
  yes(){
      this.ShowEditModal = true;
  }
}
</script>

<style scope>
.box {
  width: 500px;
  height: 250px;
  /*url图片途径*/
  background: url(../../assets/image/LoginUI/login1.png) no-repeat center;
  -webkit-transition: 0.5s;
  background-size: 500px;
}
.box:hover {
  background-size: 800px;
}
.dl{
    width: 100%;
    height: 516px;
    background-repeat:no-repeat;
    background-size: cover;
    margin:0 auto;
    background-image: url(../../assets/image/LoginUI/star.jpg);
}
.login-form {
    width: 400px;
    height: 177px;
    margin: 70px auto 0;
    padding-top: 73px;
    position: relative;
    background-image: -webkit-linear-gradient(top,rgba(145, 184, 201, 0.8),rgb(242,242,242));
    box-shadow: 0 3px 3px rgba(145, 184, 201, 0.8);
}
.username{
    height: 100%;
    width: calc(100% - 40px);
    padding-left: 40px;
    border-radius: 2px;
}
.password{
    height: 100%;
    width: calc(100% - 40px);
    padding-left: 40px;
    border-radius: 2px;
}
.aa:HOVER{ 
    -webkit-transition:border linear .2s,-webkit-box-shadow linear .5s; 
    border-color:rgba(21, 18, 209, 0.75); 
    -webkit-box-shadow:0 0 18px rgba(21, 18, 209, 0.75); 
} 
</style>