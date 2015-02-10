'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');

  grunt.initConfig({
    jshint: {
      dev: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['Gruntfile.js', 'test/**/*.js', 'http_server.js']
      }
    },

    simplemocha: {
      all: {
        src: ['test/**/*.js']
      }
    },

    jscs: {
      all: {
        options: {
          'preset': 'google'
        },
        files: {
          src: ['Gruntfile.js', 'test/http_server_test.js', 'http_server.js']
        }
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha', 'jscs']);
  grunt.registerTask('default', ['test']);
};