const fs = require('fs');
const jsonServer = require('json-server');

class MockServer {

  constructor(logEnabled = false) {
    fs.copyFileSync(__dirname + '/db.json', __dirname + '/db_session.json');

    this.logEnabled = logEnabled;
    this.application = jsonServer.create();
    this.application.use(jsonServer.defaults({
      logger: logEnabled
    }));
    this.application.use(jsonServer.router(__dirname + '/db_session.json'));
  }

  start() {
    return new Promise(resolve => {
      this.server = this.application.listen(9000, () => {
        if(this.logEnabled) {
          console.log('MockServer is running on port 9000');
        }
        resolve();
      });
    });
  }

  stop() {
    return new Promise(resolve => {
      this.server.close(() => {
        if(this.logEnabled) {
          console.log('MockServer stopped');
        }
        resolve();
      });
    });
  }
}
module.exports.MockServer = MockServer;
