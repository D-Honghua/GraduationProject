const Service = require("egg").Service;

class User extends Service {
  async checkUser({ user, password }) {
    const { app } = this;
    const docs = await app.mysql.select(`userinfo`, {
      where: {
        user,
        password,
      },
    });
    return docs.length ? docs[0] : false;
  }
}

module.exports = User;
