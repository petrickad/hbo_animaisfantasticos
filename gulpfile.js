const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const  uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function comprimeJavaScript() {
    return gulp.src('./src/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./dist/scripts'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images, comprimeJavaScript);
 exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
 }