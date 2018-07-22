<template>
  <div style="text-align:center height:60px">
    <Row >
      <Col span="12" class="GridBack" color="black">
        <Col span="1">
          &nbsp;
        </Col>
        <Col span="1">
          <div  class="ta_c">
            <img src="../src/assets/image/dribbble.png" class="ball Rotation">
          </div>
        </Col>
        <Col span="2">
        <br>
          <div class="font-face-display">&nbsp;碳素云</div>
        </Col>
        <Col span="8">
        <br>
          <tr class="layui-nav layui-bg-cyen" lay-filter="">
            <td class="layui-nav-item"><a href="">首页</a></td>
            <td class="layui-nav-item"><a href="">我们的产品</a>
              <dl class="layui-nav-child">
                <dd><a href="#/MainUI">主页面UI设计模板</a></dd>
                <dd><a href="#/LoginUI">登陆页面设计模板</a></dd>
                <dd><a href="#/RegisterUI">注册页面设计模板</a></dd>
                <dd><a href="#/ModalUI">Modal页面设计模板</a></dd>
                <dd><a href="#/PersonalUI">个人中心页面设计模板</a></dd>
              </dl>
            </td>
            <td class="layui-nav-item"><a href="#/AboutUs">关于我们</a></td>
            <td class="layui-nav-item"><a href="#/Community">社区</a></td>
            <td class="layui-nav-item" style="margin-left:10px"><a href="">个人中心</a>
            <dl class="layui-nav-child">
                <dd><a href="#/Information"><i class="layui-icon layui-icon-friends"></i>&nbsp;&nbsp;个人信息</a></dd>
                <dd><a href="#/SetUp"><i class="layui-icon layui-icon-edit"></i>&nbsp;&nbsp;用户设置</a></dd>
                <dd><a href="#/Shopping"><i class="layui-icon layui-icon-cart"></i>&nbsp;&nbsp;我的商品</a></dd>
              </dl>
            </td>
            <td class="layui-nav-item"><a href="#/Login">登录</a></td>
            <td class="layui-nav-item"><a href="#/Register">注册</a></td>
          </tr>      
        </Col>
      </Col>
    </Row>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import Vue from "./vue";
import Component from "vue-class-component";
import { Getter, Action } from "vuex-class";
import { RouterPath } from "./router/index";
@Component({
  components: {
    // Menu
  }
})
export default class App extends Vue {

}
</script>
<style scoped>

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(360deg);
  }
  to {
    -webkit-transform: rotate(0deg);
  }
}

.Rotation {
  width: 130px;
  -webkit-transform: rotate(360deg);
  animation: rotation 40s linear infinite;
  -moz-animation: rotation 40s linear infinite;
  -webkit-animation: rotation 40s linear infinite;
  -o-animation: rotation 40s linear infinite;
}

.font-face-display {
    font-family:  'Courier New', Courier, monospace;
    font-size: 36px;
    margin-top: 10px;
    display: table-cell;  
    vertical-align:middle
}
</style>
