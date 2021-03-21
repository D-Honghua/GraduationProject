"use strict";

const Controller = require("egg").Controller;

class ClockController extends Controller {
  async clock() {
    const { ctx, service } = this;
    const result = await service.clock.clock(ctx.request.body);
    ctx.body = {
      msg: "success!",
      code: 200,
      data: result,
    };
  }
  async getClockList() {
    const { ctx, service } = this;
    const result = await service.clock.getClockList(ctx.query);
    ctx.body = {
      msg: "success!",
      code: 200,
      data: result,
    };
  }
}

module.exports = ClockController;
