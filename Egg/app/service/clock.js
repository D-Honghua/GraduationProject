const Service = require("egg").Service;
const moment = require("moment");

class Clock extends Service {
  async clock(data) {
    const { app } = this;
    const time = moment().format("YYYY-MM-DD");

    const oldDocs = await app.mysql.select("clock", {
      where: {
        user: data.user,
        time: time,
      },
    });
    if (oldDocs.length) {
      const docs = await app.mysql.update("clock", data, {
        where: {
          cid: oldDocs[0].cid,
        },
      });
      return docs;
    }

    data.time = time;
    let docs = await app.mysql.insert("clock", data);
    return docs;
  }
  async getClockList(data) {
    const { app } = this;
    const docs = await app.mysql.select("clock", {
      where: {
        user: data.user,
      },
    });
    return docs;
  }
}

module.exports = Clock;
