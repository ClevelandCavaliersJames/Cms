<template>
    <div>
        <Row>
            <Col span="2">
                <h2>项目管理</h2>
            </Col>
            <Col span="8">
                <Table class="layui-table">
                    <tr>
                        <td colspan="4" style="text-align:center;font-size:26px">以下需求由项目经理填写</td>
                    </tr>
                    <tr>
                        <td style="width:150px ;font-size:  16px">项目经理</td>
                        <td style="width:150px" contenteditable="true"></td>
                        <td style="width:150px;font-size:  16px">联系人电话</td>
                        <td style="width:150px" contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">项目参与人员及负责人</td>
                        <td>   
                            <Form style="width:200px">
                                <Select v-model="index" :options="name"  @change="selected(index)" >
                                </Select>
                            </Form>
                        </td>
                        <td style="font-size:  16px">联系人电话</td>
                        <td>{{phone[i]}}</td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求说明书</td>
                        <td colspan="3" contenteditable="true" :v-model="t"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">需求目标</td>
                        <td colspan="3" contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td style="font-size:  16px">项目里程碑</td>
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
export default class ProjectManagement extends Vue {
    name:any=[
        {text:'冯琛', value:'1'},
        {text:'孙悟空',value:'2'},
    ];
    a:any='';
    b:any='';
    c:any='';
    d:any='';
    e:any='';
    t:any;
    i:number=0;
    index:any=''
    phone:any=["","12345","09876"]
    selected(v:any){
       this.i=v
    }
}
</script>

<style scope>
</style>