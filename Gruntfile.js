'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');

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
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};