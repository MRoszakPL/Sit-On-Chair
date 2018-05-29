var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
        .pipe(sass({
            outputStyle: 'expanded',
            sourceComments: 'map',
            errLogToConsole: true}))
        .pipe(gulp.dest('css'))
});


gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
});