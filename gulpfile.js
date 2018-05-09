const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const browserSync = require('browser-sync').create();

gulp.task('assets', (done) => {
    return gulp.src(['./public/**/*.*'], { base: './public/' })
               .pipe(gulp.dest('dist'));
});

gulp.task('build', ['assets'], (done) => {
    return gulp.src('src/index.tsx')
        .pipe(webpackStream( webpackConfig, webpack))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['build'], (done) => {

    // BrowserSync setup
    browserSync.init({
        notify: false,
        injectChanges: true,
        open: true,
        port: 8080,
        server: {
            baseDir: "dist"
        }
    }, (err, bs) => {
        if (err) {
            console.warn(err);
        }

    });

    // Watch and trigger tasks on file changes
    gulp.watch('public/**/*', ['reload']);
    //gulp.watch(env.DIR_SASS + '/**/*', ['reload']);
    gulp.watch('src/**/*', ['reload']);
});

gulp.task('reload', ['build'], function(done) {

    browserSync.reload();
    done();

});


gulp.task('default', ['build']);