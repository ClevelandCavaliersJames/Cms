import Request from 'castle-request';
import Demand from '../relation/Demand';

class Demand extends Request{
    async addDemand(v:any){
        return await this._post('addDemand',{v:v})
    }
}