const assert = require('assert');
const exec = require('child_process').exec;

describe('Test input:', function () {
    it('should error with no recipient', function (done) {
        exec('/home/travis/build/tomhardman0/imailer', (err, stdout, stderr) => {
            assert.equal(err, null);
            assert.equal(stdout, '');
            assert.equal(stderr, 'You didn\'t enter a recipient!\n');
            done();
        });
    });

    it('should error with recipient but no message', function (done) {
        exec('/home/travis/build/tomhardman0/imailer 07533289098', (err, stdout, stderr) => {
            assert.equal(err, null);
            assert.equal(stdout, '');
            assert.equal(stderr, 'You didn\'t enter a message!\n');
            done();
        });
    });

});
