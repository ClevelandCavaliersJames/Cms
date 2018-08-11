import Request from 'castle-request';

class Demand extends Request{
    /**
     * 增加需求
     * @param data
     */
    async addDemand (data:any){
        return await this._post('addDemand',{data:data})
    }
}
const r = new Demand();
export default r