const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(done) {
    // Compilar sass
    // 1. Identificar archivo, 2 Compilarlo, 3 guardar el .css

    // Funcion de gulp que permite identificar un archivo
    src('src/scss/app.scss')
        .pipe(sass()) //.pipe(sass({outputStyle: 'compressed'}}))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(dest('build/css'))

    done();
}

function dev() {    
    //watch('src/scss/header/_header.scss', css);    
    //watch('src/scss/app.scss', css);
    watch('src/scss/**/*.scss', css);
}

exports.css = css;
exports.dev = dev;
exports.default = series( css, dev);
