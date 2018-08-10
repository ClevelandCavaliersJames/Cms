<template>
    <div>
        <Row>
            <Col span="2">
                &nbsp;
            </Col>
            <Col span="8">
                <Table class="layui-table">
                    <tr>
                        <td colspan="4" style="text-align:center;font-size:26px">需求录入</td>
                    </tr>
                    <tr>
                        <td style="width:  150px;font-size:  16px" class="td">需求提出人</td>
                        <td style="width:  150px" class="td"  ><input type="text" class="input" v-model="Maker"></td>
                        <td style="width:  150px;font-size:  16px">确认人</td>
                        <td style="width:  150px" class="td" ><input type="text" class="input" v-model="DeterminingP"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">提出时间</td>
                        <td ><Input type="date" class="input" v-model="PutTime"></Input></td>
                        <td style="font-size:  16px">确认时间</td>
                        <td ><Input type="date" class="input" v-model="ConfirmationTime"></Input></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求使用人员</td>
                        <td ><input type="text" class="input" v-model="DemanUser"></td>
                        <td style="font-size:  16px">需求重要性</td>
                        <td >
                            <Form style="width:200px">
                                <Select  :options="importance" v-model="Importance">
                                </Select>
                            </Form>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">项目周期</td>
                        <td ><input type="text" class="input" v-model="ProjectCycle"></td>
                        <td style="font-size:  16px">计划完成时间</td>
                        <td ><input type="text" class="input" v-model="PlannedTime"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">项目负责人</td>
                        <td ><input type="text" class="input" v-model="ProjectLeader"></td>
                        <td style="font-size:  16px">需求负责人</td>
                        <td ><input type="text" class="input" v-model="DemandLeader"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求编号</td>
                        <td ><input type="text" class="input" v-model="DemandID"></td>
                        <td style="font-size:  16px"></td>
                        <td style="font-size:  16px"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求描述</td>
                        <td colspan="3" style="height:  150px" ><input type="text" class="input" v-model="Descriptive"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求流程</td>
                        <td colspan="3" style="height:  150px" ><input type="text" class="input" v-model="Technological"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">验收标准</td>
                        <td colspan="3" style="height:  150px" ><input type="text" class="input" v-model="Acceptance"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求附件</td>
                        <td colspan="3" ><input type="text" class="input" v-model="Enclosure"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">技术方案</td>
                        <td colspan="3" ><input type="text" class="input" v-model="Scheme"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">技术难点</td>
                        <td colspan="3" ><input type="text" class="input" v-model="Difficulties"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求前置条件</td>
                        <td colspan="3" ><input type="text" class="input" v-model="Precondition"></td>
                    </tr>
                </Table>
            </Col>
        </Row>
        <Row>
            <Col span="9">
                &nbsp;
            </Col>
            <Col span="1">
                 <Button class="layui-btn layui-btn-normal" size="lg" @click="save()">保存</Button>
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
    Maker:any="";
    DeterminingP:any="";
    PutTime:any="";
    ConfirmationTime:any="";
    DemanUser:any="";
    Importance:any="";
    importance:any=[
        {text:'紧急',value:'1'},
        {text:'标准',value:'2'},
    ]
    ProjectCycle:any="";
    PlannedTime:any="";
    ProjectLeader:any="";
    DemandLeader:any="";
    DemandID:any="";
    Descriptive:any="";
    Technological:any="";
    Acceptance:any="";
    Enclosure:any="";
    Scheme:any="";
    Difficulties:any="";
    Precondition:any="";
    save(v:any){
        console.log(this.Importance.value)
    }
}
</script>

<style scope>
.input{
        border-left-width: 0px;
    border-bottom-width: 0px;
    border-top-width: 0px;
    border-right-width: 0px;
}
</style>