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
                        <td style="width:  150px" class="td"  ><input type="text" class="input" v-model="Maker" placeholder="请输入需求提出人"></td>
                        <td style="width:  150px;font-size:  16px">确认人</td>
                        <td style="width:  150px" class="td" ><input type="text" class="input" placeholder="请输入确认人" v-model="DeterminingP"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">提出时间</td>
                        <td ><Input type="date" class="input" placeholder="请输入提出时间" v-model="PutTime"></Input></td>
                        <td style="font-size:  16px">确认时间</td>
                        <td ><Input type="date" class="input" placeholder="请输入确认时间" v-model="ConfirmationTime"></Input></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求使用人员</td>
                        <td ><input type="text" class="input" placeholder="请输入需求使用人员" v-model="DemanUser"></td>
                        <td style="font-size:  16px">需求重要性</td>
                        <td >
                            <Form style="width:200px">
                                <Select  :options="importance" @change="selected">
                                </Select>
                            </Form>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">项目周期</td>
                        <td ><input type="text" class="input" placeholder="请输入项目周期" v-model="ProjectCycle"></td>
                        <td style="font-size:  16px">计划完成时间</td>
                        <td ><Input type="date" class="input" placeholder="请输入计划完成时间" v-model="PlannedTime"></Input></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">项目负责人</td>
                        <td ><input type="text" class="input" placeholder="请输入项目负责人" v-model="ProjectLeader"></td>
                        <td style="font-size:  16px">需求负责人</td>
                        <td ><input type="text" class="input" placeholder="请输入需求负责人" v-model="DemandLeader"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求编号</td>
                        <td ><input type="text" class="input" placeholder="请输入需求编号" v-model="DemandID"></td>
                        <td style="font-size:  16px"></td>
                        <td style="font-size:  16px"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求描述</td>
                        <td colspan="3" style="height:  150px" ><input type="text" class="input" placeholder="请输入需求描述" v-model="Descriptive"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求流程</td>
                        <td colspan="3" style="height:  150px" ><input type="text" class="input" placeholder="请输入需求流程" v-model="Technological"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">验收标准</td>
                        <td colspan="3" style="height:  150px" ><input type="text" class="input" placeholder="请输入验收标准" v-model="Acceptance"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求附件</td>
                        <td colspan="3" ><input type="text" class="input" v-model="Enclosure"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">技术方案</td>
                        <td colspan="3" ><input type="text" class="input" placeholder="请输入技术方案" v-model="Scheme"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">技术难点</td>
                        <td colspan="3" ><input type="text" class="input" placeholder="请输入技术难点" v-model="Difficulties"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求前置条件</td>
                        <td colspan="3" ><input type="text" class="input" placeholder="请输入需求前置条件" v-model="Precondition"></td>
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
import DemandApi from "../api/Demand";

@Component({
  props: {},
  components: {}
})
export default class DemandManagement extends Vue {
  data: any = {};
  result:any="";
  Maker: any = "";
  DeterminingP: any = "";
  PutTime: any = "";
  ConfirmationTime: any = "";
  DemanUser: any = "";
  Importance: any = "";
  importance: any = [
    { text: "紧急", value: "紧急" },
    { text: "标准", value: "标准" }
  ];
  ProjectCycle: any = "";
  PlannedTime: any = "";
  ProjectLeader: any = "";
  DemandLeader: any = "";
  DemandID: any = "";
  Descriptive: any = "";
  Technological: any = "";
  Acceptance: any = "";
  Enclosure: any = "";
  Scheme: any = "";
  Difficulties: any = "";
  Precondition: any = "";
  selected(v: any) {
    this.Importance = v;
  }
  async getDemand() {
    let res = await DemandApi.getDemand();
    this.result = res;
  }
  async save(v: any) {
    this.data = {
      Maker: this.Maker,
      DeterminingP: this.DeterminingP,
      PutTime: this.PutTime,
      ConfirmationTime: this.ConfirmationTime,
      DemanUser: this.DemanUser,
      Importance: this.Importance,
      ProjectCycle: this.ProjectCycle,
      PlannedTime: this.PlannedTime,
      ProjectLeader: this.ProjectLeader,
      DemandLeader: this.DemandLeader,
      DemandID: this.DemandID,
      Descriptive: this.Descriptive,
      Technological: this.Technological,
      Acceptance: this.Acceptance,
      Enclosure: this.Enclosure,
      Scheme: this.Scheme,
      Difficulties: this.Difficulties,
      Precondition: this.Precondition
    };
    console.log(this.data);
    let res = await DemandApi.addDemand(this.data);
    if (res) {
      this.$msg("保存成功");
    } else {
      this.$msg("保存失败");
    }
  }
}
</script>

<style scope>
.input {
  border-left-width: 0px;
  border-bottom-width: 0px;
  border-top-width: 0px;
  border-right-width: 0px;
}
</style>