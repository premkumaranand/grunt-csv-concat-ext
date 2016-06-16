/*
 * grunt-csv-concat
 * https://github.com/premkumar/csv-concat-grunt
 *
 * Copyright (c) 2016 premkumaranand
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/tmp/*']
    },

    // Configuration to be run (and then tested).
    csv_concat: {
      without_key_prefix: {
        options: {
          delimiter: '|',
          src: __dirname + '/test/fixtures',
          ignore: 'ignore.csv',
          dest: __dirname + '/test/tmp/final.csv'
        }
      },
      with_key_prefix: {
        options: {
          delimiter: '|',
          src: __dirname + '/test/fixtures',
          ignore: 'ignore.csv',
          dest: __dirname + '/test/tmp/final_with_prefix.csv',
          addPrefixToKey: true
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'csv_concat', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
