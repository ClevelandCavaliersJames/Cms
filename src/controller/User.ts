import Controller from 'castle-koa/dist/lib/controller'
//用户
/**,
   //用户ID UID BIGINT ,
   //用户账号 ID BIGINT ,
   //用户密码 Password CHAR(8) ,
   */
export default class User extends Controller{

/**
 *  用户权限查询
 *  
    select count,permission_list.Tile
    from user
    join uglink on uglink.UID = user.UID 
    join user_group on uglink.UGID = user_group.UGID 
    join ugpl on ugpl.UGID = user_group.UGID 
    join permission_list on ugpl.PID = permission_list.PLID
 */
/**
 * 用户登录
 * @param post 
 * return 用户ID
 */
    async login(post){
        //select UID,Password from User where Count = ?;
        // let out = await this.M('user').where({ID:post.ID}).fields('UID,Password').find();
        // if(out == null){
        //     return{
        //         "status":false,
        //         "message":"账号不存在",
        //     }
        // }
        // if(out.Password!=post.password){
        //     return {
        //         "status":false,
        //         "message":"登录失败,密码错误",
        //     }; 
        // }
        // return {
        //     "status":true,
        //     "UID":out.UID,
        //     "message":"登录成功"
        // };   
    }
}