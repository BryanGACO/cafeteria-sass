const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done) {
    // Compilar sass
    // 1. Identificar archivo, 2 Compilarlo, 3 guardar el .css

    // Funcion de gulp que permite identificar un archivo
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('build/css'))

    done();
}

exports.css = css;