import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //数量 
/**

*/
    Number:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //需求提出人 
/**

*/
    Maker:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //确认人 
/**

*/
    DeterminingP:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //提出时间 
/**

*/
    PutTime:{
        type:DbDataType.datetime,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //确认时间 
/**

*/
    ConfirmationTime:{
        type:DbDataType.datetime,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //需求使用人员 
/**

*/
    DemanUser:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //需求重要性 
/**

*/
    Importance:{
        type:DbDataType.char(2),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //项目周期 
/**

*/
    ProjectCycle:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //计划完成时间 
/**

*/
    PlannedTime:{
        type:DbDataType.datetime,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //项目负责人 
/**

*/
    ProjectLeader:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //需求负责人 
/**

*/
    DemandLeader:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //需求编号 
/**

*/
    DemandID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //需求描述 
/**

*/
    Descriptive:{
        type:DbDataType.text,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //需求流程 
/**

*/
    Technological:{
        type:DbDataType.text,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //验收标准 
/**

*/
    Acceptance:{
        type:DbDataType.text,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //需求附件 
/**

*/
    Enclosure:{
        type:DbDataType.char(250),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //技术方案 
/**

*/
    Scheme:{
        type:DbDataType.text,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //技术难点 
/**

*/
    Difficulties:{
        type:DbDataType.text,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //需求前置条件 
/**

*/
    Precondition:{
        type:DbDataType.text,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    }
}