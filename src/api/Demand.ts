import Request from 'castle-request';

class Demand extends Request{
    Controller='Demand'
    _pk=''
    /**
     * 增加需求
     * @param data
     */
    async addDemand (data:any){
        return await this._post('addDemand',data)
    }
    /**
     * 获取信息
     */
    async getDemand(){
        return await this._post('getDemand',{})
    }
}
const r = new Demand();
export default r