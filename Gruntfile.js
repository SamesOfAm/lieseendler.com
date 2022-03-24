'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    compass: false
                },
                files: {
                    'files/assets/css/style.min.css': [
                        'files/assets/css/src/general.scss'
                    ],
                    'files/assets/css/home.min.css': [
                        'files/assets/css/src/home.scss'
                    ],
                    'files/assets/css/detail.min.css': [
                        'files/assets/css/src/detail.scss'
                    ],
                    'files/assets/css/sub.min.css': [
                        'files/assets/css/src/sub.scss'
                    ]
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Register tasks
    grunt.registerTask('default', [
        'sass'
    ]);

};