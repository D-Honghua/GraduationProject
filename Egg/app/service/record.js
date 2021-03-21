const Service = require("egg").Service;

class Record extends Service {
  async inRecord(data) {
    const { app } = this;
    const docs = await app.mysql.query(
      `INSERT INTO record VALUES(NULL,${data.user},'${data.userName}','${data.place}',CURRENT_TIMESTAMP,1);`
    );
    return docs;
  }
  async outRecord(data) {
    const { app } = this;
    const docs = await app.mysql.query(
      `INSERT INTO record VALUES(NULL,${data.user},'${data.userName}','${data.place}',CURRENT_TIMESTAMP,0);`
    );
    return docs;
  }

  async getRecords(data) {
    const { app } = this;
    const docs = await app.mysql.select(`record`, {
      where: {
        user: data.user,
      },
    });
    return docs;
  }
}

module.exports = Record;
