import Request from 'castle-request'
class User extends Request {
    _pk = "UID"
    async relogin() {
        return false;
    }
    async getMyPermission() {
        return [];
    }
    async logout() { }
    async login(User:string,PassWord:string){
        return await  this._post('login',{User,PassWord})
    }
}
const r = new User();
export default r