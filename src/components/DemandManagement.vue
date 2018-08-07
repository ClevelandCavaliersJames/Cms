<template>
    <div>
        <Row>
            <Col span="2">
                <h2>需求管理</h2>
            </Col>
            <Col span="8">
                <Table class="layui-table">
                    <tr>
                        <td colspan="4" style="text-align:center;font-size:26px">以下需求由提出人填写</td>
                    </tr>
                    <tr>
                        <td style="width:  150px;font-size:  16px" class="td" >需求提出人</td>
                        <td style="width:  150px" class="td" contenteditable="true"></td>
                        <td style="width:  150px;font-size:  16px">联系人电话</td>
                        <td style="width:  150px" class="td" contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求原因/目的</td>
                        <td colspan="3" contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求描述</td>
                        <td colspan="3" contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">期望上线日期</td>
                        <td colspan="3" contenteditable="true"></td>
                    </tr>
                </Table>
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
export default class DemandManagement extends Vue {
    asd:any="";
}
</script>

<style scope>
</style>