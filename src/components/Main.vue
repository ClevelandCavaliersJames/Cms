<template>
    <div>
        <Row>
            <Col span="12">
                <div>
                    <img src="../assets/image/mainbackground.jpg" style="width: 100%">
                </div>
            </Col>
        </Row>
        <br><br><br>
        <Row>
            <Col span="2">
                &nbsp;
            </Col>
            <Col span="2">
                <Card  class="card" title="返璞归真">
                    <h4 class="cardfont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;身处在前端社区的繁荣之下，我们都在有意或无意地追逐。而碳素云偏偏回望当初，奔赴在返璞归真的漫漫征途，自信并勇敢着，追寻于原生态的书写指令，试图以最简单的方式诠释高效。</h4>
                </Card>
            </Col>
            <Col span="1">
                &nbsp;
            </Col>
            <Col span="2">
                <Card class="card" title="双面体验">
                    <h4 class="cardfont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;拥有双面的不仅是人生，还有碳素云。一面极简，一面丰盈。极简是视觉所见的外在，是开发所念的简易。丰盈是倾情雕琢的内在，是信手拈来的承诺。一切本应如此，简而全，双重体验。</h4>
                </Card>
            </Col>
            <Col span="1">
                &nbsp;
            </Col>
            <Col span="2">
                <Card class="card" title="星辰大海">
                    <h4 class="cardfont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果眼下还是一团零星之火，那运筹帷幄之后，迎面东风，就是一场烈焰燎原吧，那必定会是一番尽情的燃烧。待，秋风萧瑟时，散作满天星辰，你看那四季轮回，正是碳素云不灭的执念。</h4>
                </Card>
            </Col>
            <Col span="2">
                &nbsp;
            </Col>
        </Row>
        <Row>
            <Col span="12">
                
            </Col>
        </Row>
    </div>
</template>

<script lang = "ts">
import Vue from "../vue";
import Component from "vue-class-component";
@Component({
  props: {},
  components: {}
})
export default class page extends Vue {}
</script>

<style scope>
.card{
    text-align: center
}
.cardfont{
    text-align: left
}
</style>