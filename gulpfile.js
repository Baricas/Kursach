var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var runSequence = require('run-sequence');

//less to css compiling
// TODO: autoprefixer, concatination, minification
gulp.task('less', function() {
    return gulp.src('public/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'));
});

//clean directory before building
gulp.task('clean', function() {
    return del('public/css');
});

//watching
gulp.task('less:watch', function() {
   gulp.watch('./public/less/**/*.less', ['less']);     
});

//main task used to final build system
gulp.task('build', runSequence('clean', 'less'));

//global task used to development process
gulp.task('dev', runSequence('build', 'watch'));

gulp.task('default', function(cb) {
    runSequence('less', 'less:watch', cb);
});