/*
 * grunt-csv-concat
 * https://github.com/premkumar/csv-concat-grunt
 *
 * Copyright (c) 2016 premkumaranand
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    'use strict';

    var CsvConcat = require('csv-concat-ext');

    grunt.registerMultiTask('csv_concat', 'Grunt plugin to concat CSV files in a given folder', function() {

    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        delimiter: '|',
        src: './test/fixtures',
        ignore: 'ignore.csv',
        dest: './test/tmp/final.csv',
        addPrefixToKey: false
    });

    var csvConcat = new CsvConcat(options);

    csvConcat.concatFiles()
        .then(
            function() {
              grunt.log.writeln('Files successfully merged');
              done();
            }
        )
        .catch(
            function(err) {
              grunt.log.writeln('Fatal error merging files: ' + err);
              done();
            }
        );
    });

};
