"use strict";

const Controller = require("egg").Controller;
class RecordController extends Controller {
  async getRecords() {
    const { ctx, service } = this;
    const result = await service.record.getRecords(ctx.query);
    ctx.body = {
      msg: "success!",
      code: 200,
      data: result,
    };
  }

  async inRecord() {
    const { ctx, service } = this;
    const { user, userName, place } = ctx.request.body;
    const result = await service.record.inRecord({
      user,
      userName,
      place,
    });
    ctx.body = {
      msg: "success!",
      code: 200,
      data: result,
    };
  }

  async outRecord() {
    const { ctx, service } = this;
    const { user, userName, place } = ctx.request.body;
    const result = await service.record.outRecord({
      user,
      userName,
      place,
    });
    ctx.body = {
      msg: "success!",
      code: 200,
      data: result,
    };
  }
}

module.exports = RecordController;
