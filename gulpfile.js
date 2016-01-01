/**
 * Created by Lakshman on 1/1/2016.
 */
// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');


gulp.task('connect', function () {
    connect.server({
        root: 'tennis-portal-app/',

        port: 5002
    });
});