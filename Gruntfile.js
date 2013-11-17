'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        typescript: {
            src: {
                src: ['src/**/*.ts'],
                dest: 'lib/',
                options: {
                    module: 'commonjs', //or commonjs
                    target: 'es5', //or es3
                    base_path: 'src/',
                    sourcemap: true,
                    fullSourceMapPath: true,
                    declaration: true
                }
            }
        },
        watch: {
            typescript: {
                files: ['src/**/*.ts'],
                tasks: ['typescript'],
                options: {
                    atBegin: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-typescript');
};