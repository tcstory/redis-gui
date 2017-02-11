let path = require('path');
let gulp = require('gulp');
let sass = require('gulp-sass');

let CSSDIR = 'css';

gulp.task('sass', function () {
    return gulp.src(path.join(__dirname, CSSDIR, '/**/*.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(CSSDIR));
});

gulp.task('sass:watch', function () {
    gulp.watch(path.join(__dirname, CSSDIR, '/**/*.scss'), ['sass']);
});