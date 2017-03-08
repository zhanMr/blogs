var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var requirejsOptimize = require('gulp-requirejs-optimize');
var amdOptimize = require("amd-optimize");

gulp.task('default2', function(){
    return gulp.src('public/src/c.js')
    .pipe(requirejsOptimize({
        optimize: 'none',
        findNestedDependencies: true,
        include: false,
        exclude: ['react']
    }))
    .pipe(babel())
    //.pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/javascripts'))
});


gulp.task('default', function () {
    //监听js变化
    gulp.watch('public/src/*.js', function () {       //当js文件变化后，自动检验 压缩
                                                       //gulp.run('lint', 'scripts');
        gulp.run('default2');
    });


});