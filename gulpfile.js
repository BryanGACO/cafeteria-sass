const { src, dest, watch, series, parallel } = require('gulp');

// CSS Y SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// Imagenes
const imagemin = require('gulp-imagemin');

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

function imagenes(){
    return src('src/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest('build/img'));
}

function dev() {    
    //watch('src/scss/header/_header.scss', css);    
    //watch('src/scss/app.scss', css);
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);
}

exports.css = css;
exports.dev = dev;
exports.default = series(imagenes, css, dev);
