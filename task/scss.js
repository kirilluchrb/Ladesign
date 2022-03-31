const {src, dest} = require("gulp");

//Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const cssGroupMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const webpCss = require("gulp-webp-css");


//Обработка SCSS
const scss = () => {
   return src(path.scss.src,{ sourcemaps: true })
      .pipe(plumber({
         errorHandler: notify.onError()
      }))
      .pipe(sass())
      .pipe(webpCss())
      .pipe(autoprefixer())
      .pipe(shorthand())
      .pipe(cssGroupMediaQueries())
      .pipe(dest(path.scss.dest,{ sourcemaps: true }))
      .pipe(rename({suffix: ".min"}))
      .pipe(csso())
      .pipe(dest(path.scss.dest,{ sourcemaps: true }));
}; 


module.exports = scss;