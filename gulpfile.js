var gulp = require('gulp');

// 引入组件
var browserSync = require('browser-sync');
var reload = browserSync.reload;

/*自动刷新*/
gulp.task('watch', function() {
    browserSync.init({
        open: false,
        proxy: "localhost:3000"
    });
    gulp.watch("./*").on('change', reload);
});

// 默认任务
gulp.task('default', ['watch']);
