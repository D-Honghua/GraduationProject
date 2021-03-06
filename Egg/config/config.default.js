/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

const path = require("path");
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    mysql: {
      client: {
        host: "localhost",
        port: "3306",
        user: "root",
        password: "gqgq123123",
        database: "yqt",
      },
      app: true,
      agent: false,
    },
    cors: {
      origin: "*",
      allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    static: {
      prefix: "/",
      dir: path.join(appInfo.baseDir, "app/public"),
    },
  });

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1616141103394_5640";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
