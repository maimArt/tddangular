const mockServer = require('./mock-server.js');

const startMockServer = function() {
  let server = new mockServer.MockServer(true);
  server.start();
};
startMockServer();
