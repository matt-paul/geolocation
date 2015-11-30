module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        files: {
        'geolocation.min.js': ['geolocation.js']
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    },

    jasmine: {
      src: 'public/javascripts/src/*.js',
      options: {
        specs: 'spec/*Spec.js',
        helpers: 'spec/*Helper.js'
      }
    },

    sass: {
      dist: {
        files: {
          'main.css': 'main.scss'
        }
      }
   }
  });

  //Make sure have npm install --save-dev load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['jshint', 'uglify', 'jasmine', 'sass']);

};
