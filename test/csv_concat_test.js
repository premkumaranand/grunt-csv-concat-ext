'use strict';

var grunt = require('grunt');
var exec = require('child_process').exec;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.csv_concat = {
  setUp: function(done) {
    // setup here if necessary
    exec('pwd', function(error, stdout) {
      console.log(stdout);
    });

    done();
  },
  without_key_prefix: function(test) {
    test.expect(1);

    var actual = grunt.file.read('test/tmp/final.csv');
    var expected = grunt.file.read('test/expected/final.csv');
    test.equal(actual, expected, 'should concat file contents from different files');

    test.done();
  },
  with_key_prefix: function(test) {
    test.expect(1);

    var actual = grunt.file.read('test/tmp/final_with_prefix.csv');
    var expected = grunt.file.read('test/expected/final_with_prefix.csv');
    test.equal(actual, expected, 'should concat file contents from different files with prefix');

    test.done();
  },
};
