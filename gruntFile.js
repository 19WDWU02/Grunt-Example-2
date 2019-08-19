module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
      jshint: {
          files: ['js/*.js', 'js/!*.min.js'],
          options: {
              esversion: 6
          }
      }
  });



  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('checkJS', ['jshint'])
};
