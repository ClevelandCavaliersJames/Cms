import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //用户ID 
/**

*/
    UID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:'',
        allowNull:false
    },
   //用户账号 
/**

*/
    ID:{
        type:DbDataType.number,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:" ",
        allowNull:false
    },
   //用户密码 
/**

*/
    Password:{
        type:DbDataType.char(8),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:" ",
        allowNull:false
    },
}