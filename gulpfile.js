var gulp              = require("gulp"),
    sass              = require("gulp-sass"),
    gulp-autoprefixer = require("gulp-autoprefixer");

gulp.task('uglify', function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
});


gulp.task('concat', function() {
    gulp.src('css/*.css')
        .pipe(concat('one.css'))
        .pipe(gulp.dest('build/css'))
});