const {src, dest} = require("gulp");

//Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const cssGroupMediaQueries = require("gulp-group-css-media-queries");
const webpCss = require("gulp-webp-css");


//Обработка CSS
const css = () => {
   return src(path.css.src,{ sourcemaps: true })
      .pipe(plumber({
         errorHandler: notify.onError()
      }))
      .pipe(fileInclude())
      .pipe(concat("style.css"))
      .pipe(cssimport())
      .pipe(webpCss())
      .pipe(autoprefixer())
      .pipe(shorthand())
      .pipe(cssGroupMediaQueries())
      .pipe(dest(path.css.dest,{ sourcemaps: true }))
      .pipe(rename({suffix: ".min"}))
      .pipe(csso())
      .pipe(dest(path.css.dest,{ sourcemaps: true }));
}; 


module.exports = css;