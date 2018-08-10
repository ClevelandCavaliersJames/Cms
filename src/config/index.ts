import KoaConfig from 'castle-koa/dist/config'
import { DbOp } from 'castle-koa/dist/utils/iface';
export default class Config extends KoaConfig {
    get AppDebug(){
        return true;
    }
     // show global variables like 'port'
     //:any 表示不检测类型
    // get dbConfig():any{
    //     return {
    //         database:'cms',
    //         username:'root',
    //         password:'root',
    //         options:{
    //             host:'localhost',
    //             port:'3306',
    //             dialect:'mysql',
    //             operatorsAliases:DbOp,
    //             pool:{
    //                 max:20,
    //                 min:5,
    //                 acquire:3000,
    //                 idle:1000
    //             }
    //         }
    //     }
    // }
    const sequelize = new this.('database', 'username', 'password',  {
        host: 'localhost',    //数据库地址,默认本机
        port:'3306',
        dialect: 'mysql',
        pool: {   //连接池设置
          max: 5, //最大连接数
          min: 0, //最小连接数
          idle: 10000
        },
       });
   
}