const util = require('../src/umech');
const expect = require('chai').expect;

describe(' umech debugger ', () => {
  it('Should be able to tell me this is a string', (done) => {
    expect(util.output).to.not.equal(null);
    done();
  });
});
