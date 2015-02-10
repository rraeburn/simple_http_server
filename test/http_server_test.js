'node strict';

require('../http_server.js');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;

describe('simple http server', function() {
  var server = 'localhost:3000';
  var currentTime = new Date().toString();
  it('should respond to time request', function(done) {
    chai.request(server)
      .get('/time')
      .end(function (err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql(currentTime);
        done();
      });
  });

  it('should respond to greet request', function(done) {
    chai.request(server)
      .get('/greet/Mac')
      .end(function (err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('Whats up, Mac');
        done();
      });
  });
});