"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  async login() {
    const { ctx, service } = this;
    const { user, password } = ctx.query;
    const result = await service.user.checkUser({
      user,
      password,
    });
    if (result) {
      ctx.body = {
        data: { user, userName: result.userName },
        msg: "success!",
        code: 200,
      };
    } else {
      ctx.body = {
        data: {},
        msg: "密码或账号错误！",
        code: 401,
      };
    }
  }
}

module.exports = HomeController;
