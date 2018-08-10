import KoaConfig from 'castle-koa/dist/config'
import { DbOp } from 'castle-koa/dist/utils/iface';
export default class Config extends KoaConfig {
    get AppDebug(){
        return true;
    }
     // show global variables like 'port'
     //:any 表示不检测类型
    get dbConfig():any{
        return {
            database:'cms',
            username:'root',
            password:'123456',
            options:{
                host:'localhost',
                port:'3306',
                dialect:'mysql',
                operatorsAliases:DbOp,
                pool:{
                    max:20,
                    min:5,
                    acquire:3000,
                    idle:1000
                }
            }
        }
    }
   
}