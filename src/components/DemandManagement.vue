<template>
    <div>
        <Row>
            <Col span="2">
                <h2>需求管理</h2>
            </Col>
            <Col span="8">
                <Table class="layui-table">
                    <tr>
                        <td colspan="4" style="text-align:center;font-size:26px">需求录入</td>
                    </tr>
                    <tr>
                        <td style="width:  150px;font-size:  16px" class="td" >需求提出人</td>
                        <td style="width:  150px" class="td" contenteditable="true"></td>
                        <td style="width:  150px;font-size:  16px">确认人</td>
                        <td style="width:  150px" class="td" contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">提出时间</td>
                        <td contenteditable="true"></td>
                        <td style="font-size:  16px">确认时间</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求使用人员</td>
                        <td contenteditable="true"></td>
                        <td style="font-size:  16px">需求重要性</td>
                        <td contenteditable="true">
                            <Form style="width:200px">
                                <Select v-model="index" :options="Importance">
                                </Select>
                            </Form>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">项目周期</td>
                        <td contenteditable="true"></td>
                        <td style="font-size:  16px">计划完成时间</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">项目负责人</td>
                        <td contenteditable="true"></td>
                        <td style="font-size:  16px">需求负责人</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求编号</td>
                        <td contenteditable="true"></td>
                        <td style="font-size:  16px"></td>
                        <td style="font-size:  16px"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求编号</td>
                        <td colspan="3" style="height:  150px" contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求流程</td>
                        <td colspan="3" style="height:  150px" contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">验收标准</td>
                        <td colspan="3" style="height:  150px" contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求附件</td>
                        <td colspan="3" contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">技术方案</td>
                        <td colspan="3" contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">技术难点</td>
                        <td colspan="3" contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求前置条件</td>
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
    Importance:any=[
        {text:'紧急', value:'1'},
        {text:'标准',value:'2'},
    ]
}
</script>

<style scope>
</style>