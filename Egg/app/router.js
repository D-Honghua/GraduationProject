"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  // router.get("/", controller.home.index);
  // user
  router.get("/api/login", controller.home.login);
  // record
  router.post("/api/outrecord", controller.record.outRecord);
  router.post("/api/inrecord", controller.record.inRecord);
  router.get("/api/getrecords", controller.record.getRecords);
  // clock
  router.post("/api/clock", controller.clock.clock);
  router.get("/api/getclocklist", controller.clock.getClockList);
};
