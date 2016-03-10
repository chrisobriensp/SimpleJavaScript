var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var sass = require('gulp-sass');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

// starting to integrate jsx/babel as well as typescript..
gulp.task("scripts", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

/*
-- just deals with typescript files..
gulp.task('scripts', function() {
  var tsResult = gulp.src('*.ts')
    .pipe(ts({
        declarationFiles: true,
        noExternalResolve: true,
        noImplicitAny: true,
        out: 'main.js'
      }));
 
  return merge([
    tsResult.dts.pipe(gulp.dest('release/definitions')),
    tsResult.js.pipe(gulp.dest('release/js'))
    ]);
});
*/

gulp.task('sass', function () {
  gulp.src('*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('*.scss', ['sass']);
  gulp.watch('*.ts', ['scripts']);
});