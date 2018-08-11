"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iface_1 = require("castle-koa/dist/utils/iface");
exports.default = {
    Number: {
        type: iface_1.DbDataType.bigint,
        primaryKey: true,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Maker: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    DeterminingP: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    PutTime: {
        type: iface_1.DbDataType.datetime,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    ConfirmationTime: {
        type: iface_1.DbDataType.datetime,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    DemanUser: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    Importance: {
        type: iface_1.DbDataType.char(2),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    ProjectCycle: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    PlannedTime: {
        type: iface_1.DbDataType.datetime,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    ProjectLeader: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    DemandLeader: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    DemandID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    Descriptive: {
        type: iface_1.DbDataType.text,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    Technological: {
        type: iface_1.DbDataType.text,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    Acceptance: {
        type: iface_1.DbDataType.text,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    Enclosure: {
        type: iface_1.DbDataType.char(250),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    Scheme: {
        type: iface_1.DbDataType.text,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    Difficulties: {
        type: iface_1.DbDataType.text,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    Precondition: {
        type: iface_1.DbDataType.text,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    }
};
//# sourceMappingURL=Demand.js.map