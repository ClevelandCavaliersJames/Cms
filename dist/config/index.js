"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("castle-koa/dist/config");
const iface_1 = require("castle-koa/dist/utils/iface");
class Config extends config_1.default {
    get AppDebug() {
        return true;
    }
    get dbConfig() {
        return {
            database: 'cms',
            username: 'root',
            password: 'root',
            options: {
                host: 'localhost',
                port: '3306',
                dialect: 'mysql',
                operatorsAliases: iface_1.DbOp,
                pool: {
                    max: 20,
                    min: 5,
                    acquire: 3000,
                    idle: 1000
                }
            }
        };
    }
}
exports.default = Config;
//# sourceMappingURL=index.js.map