import Controller from 'castle-koa/dist/lib/controller'

export default class Demand extends Controller{
    /**
     * 添加Demand
     * @param post 
     */
    async addDemand(post){
        const add = await this.M("demand").add({Maker:post.Maker,DeterminingP:post.DeterminingP,PutTime:post.PutTime,ConfirmationTime:post.ConfirmationTime,DemanUser:post.DemanUser,Importance:post.Importance,ProjectCycle:post.ProjectCycle,PlannedTime:post.PlannedTime,ProjectLeader:post.ProjectLeader,DemandLeader:post.DemandLeader,DemandID:post.DemandID,Descriptive:post.Descriptive,Technological:post.Technological,Acceptance:post.Acceptance,Enclosure:post.Enclosure,Scheme:post.Scheme,Difficulties:post.Difficulties,Precondition:post.Precondition})
        return add
    }
    /**
     * 显示对应的需求
     * @param post 
     */
    async getDemand(post){
        
        return await this.M("demand").where({Maker:post.Maker}).find();
    }
}
