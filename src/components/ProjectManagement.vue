<template>
    <div>
        <Row>
            <Col span="2"> &nbsp; </Col>
            <Col span="8">
                <Table class="layui-table">
                    <tr>
                        <td colspan="4" style="text-align:center;font-size:26px">以下需求由项目经理填写</td>
                    </tr>
                    <tr>
                        <td style="width:  150px;font-size:  16px">项目名称</td>
                        <td style="width:  150px" ><input type="text" class="input" placeholder="请输入项目名称"></td>
                        <td style="width:  150px;font-size:  16px">立项时间</td>
                        <td style="width:  150px"  ><Input type="date" class="input" placeholder="请输入提出时间"></Input></td>
                    </tr>
                    <tr>
                        <td style="width:150px ;font-size:  16px">项目经理</td>
                        <td><input type="text" class="input" placeholder="请输入项目经理"></td>
                        <td style="width:150px;font-size:  16px">联系人电话</td>
                        <td><input type="text" class="input" placeholder="请输入联系人电话"></td>
                    </tr>
                    <!-- <tr>
                        <td style="font-size:  16px">项目参与人员及负责人</td>
                        <td colspan="3" ><input style="width:650px" type="text" class="input" placeholder="请输入参与人员信息"></td>
                    </tr> -->
                    <tr>
                        <td style="width:150px ;font-size:  16px">周期</td>
                        <td><input type="text" class="input" placeholder="请输入预计周期"></td>
                        <td style="width:150px;font-size:  16px">预算</td>
                        <td><input type="text" class="input" placeholder="请输入此次周期预算"></td>
                    </tr>
                </Table>
                
            </Col>
        </Row>
        <Row>
            <Col span="9"> &nbsp;</Col>
            <Col span="1"><Button class="layui-btn layui-btn-normal" size="lg" @click="save()">保存</Button></Col>
        </Row>
        <Row>
            <Col span="2"> &nbsp;</Col>
            <Col span="8">

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
    save(){
        
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