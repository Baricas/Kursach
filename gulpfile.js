var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

//less to css compiling
// TODO: autoprefixer, concatination, minification
gulp.task('less', function(end) {
    return gulp.src('public/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'));
    end();
});

//clean directory before building
gulp.task('clean', function() {
    return del('public/css');
});

//watching
gulp.task('watch', function() {
   gulp.watch('./public/less/**/*.less', gulp.series('less'));
});

//main task used to final build system
gulp.task('build', gulp.series('clean', 'less'));

//global task used to development process
gulp.task('dev', gulp.series('build', 'watch'));
