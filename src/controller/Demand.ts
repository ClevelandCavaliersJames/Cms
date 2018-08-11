import Controller from 'castle-koa/dist/lib/controller'
//需求管理
/**,
   //数量 Number BIGINT ,
   //需求提出人 Maker CHAR(50) ,
   //确认人 DeterminingP CHAR(50) ,
   //提出时间 PutTime DATETIME ,
   //确认时间 ConfirmationTime DATETIME ,
   //需求使用人员 DemanUser CHAR(50) ,
   //需求重要性 Importance CHAR(2) ,
   //项目周期 ProjectCycle CHAR(50) ,
   //计划完成时间 PlannedTime DATETIME ,
   //项目负责人 ProjectLeader CHAR(50) ,
   //需求负责人 DemandLeader CHAR(50) ,
   //需求编号 DemandID BIGINT ,
   //需求描述 Descriptive TEXT ,
   //需求流程 Technological TEXT ,
   //验收标准 Acceptance TEXT ,
   //需求附件 Enclosure CHAR(250) ,
   //技术方案 Scheme TEXT ,
   //技术难点 Difficulties TEXT ,
   //需求前置条件 Precondition TEXT ,
   */
export default class Demand extends Controller{
    async addDemand(post){
        const add = await this.M("demand").add({Maker:post.Maker,DeterminingP:post.DeterminingP,PutTime:post.PutTime,ConfirmationTime:post.ConfirmationTime,DemanUser:post.DemanUser,Importance:post.Importance,ProjectCycle:post.ProjectCycle,PlannedTime:post.PlannedTime,ProjectLeader:post.ProjectLeader,DemandLeader:post.DemandLeader,DemandID:post.DemandID,Descriptive:post.Descriptive,Technological:post.Technological,Acceptance:post.Acceptance,Enclosure:post.Enclosure,Scheme:post.Scheme,Difficulties:post.Difficulties,Precondition:post.Precondition})
        console.log(add)
    }
}
