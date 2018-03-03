const gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    autoprefixer = require('gulp-autoprefixer');


// Opciones de configuración

let sassOptions = {
    outputStyle: 'compressed'
};

let pugOptions = {
    pretty: true
};

let autoprefixerOptions = {
    versions: 'last 4 options'
};


// Tareas

// SCSS
gulp.task('sass', () => {
    gulp.src('./dev/scss/main-styles.scss')
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('./public/css'));
});

// PUG
gulp.task('pug', () => {
    gulp.src('./dev/pug/*.pug')
        .pipe(pug(pugOptions))
        .pipe(gulp.dest('./public'));
});

// WATCH (tarea por defecto)
gulp.task('default', () => {
    gulp.watch('./dev/scss/**/**', ['sass']); // Vigilar ficheros SCSS
    gulp.watch('./dev/pug/**/**', ['pug']); // Vigilar ficheros PUG
});
