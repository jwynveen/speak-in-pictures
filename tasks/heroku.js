'use strict';

/**
 * Default grunt task (typically for development)
 * @param {Object} grunt - Grunt instance
 */
module.exports = (grunt) => {
  grunt.registerTask('heroku', [
    'sass:default',
    'sync:default',
    'compress',
  ]);
};
