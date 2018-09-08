const gulp = require('gulp');
const ts = require('gulp-typescript');
const print = require('gulp-print').default;

var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function () {
    var tsResult = gulp.src(['src/lib/**/*.tsx','src/lib/**/*.ts'])
        .pipe(print(fileName => console.log(fileName)))
        .pipe(tsProject());
    
    return tsResult.dts.pipe(gulp.dest('build'));
});
