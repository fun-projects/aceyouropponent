/**
 * Created by Lakshman on 1/1/2016.
 */
// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
 var nodemon = require('gulp-nodemon');


gulp.task('default', function(){
    nodemon({
        script: './server/app.js'
        , ext: 'js html'
        , env: {   'PORT': 5000,
                   'NODE_ENV': 'development' }

    })
});

/*gulp.task('default', function () {
    connect.server({
        root: 'tennis-portal-app/',

        port: 5002
    });*/


