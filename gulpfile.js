var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
var wait = require('gulp-wait');
var sourcemaps = require('gulp-sourcemaps');
var fileinclude = require('gulp-file-include');
var babel = require("gulp-babel");
var babelify = require('babelify');
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");

const paths = {

    base: {
        base: './',
        node: './node_modules'
    },
    src: {
        base: './src/',
        fonts: './src/assets/fonts/**/*.*',
        images: './src/assets/images/**/*.*',
        js: './src/assets/js/*.js',
        pages: './src/assets/pages/*.html',
        partials: './src/assets/partials/*.html',
        scss: './src/assets/scss',
        node_modules: './node_modules/',
        
    },
    dist: {
        base: './dist/',
        css: './dist/assets/css',
        fonts: './dist/assets/fonts',
        images: './dist/assets/images',
        js : './dist/assets/js',
        html: './dist/assets/pages'
        
    }
};




// Compile SCSS
gulp.task('scss', function () {
    return gulp.src( paths.src.scss + "/index.scss")
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 1%']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(browserSync.stream());
});

gulp.task('minify:css', function () {
    return gulp.src( paths.dist.css + "/index.css")
        .pipe(cleanCss())
        .pipe(rename("index.min.css"))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(browserSync.stream());
});

gulp.task('html', function () {
    return gulp.src([paths.src.base + '*.html'])
    .pipe(fileinclude({
            prefix: '@@',
              basepath: './src/partials/',
            context: {
                environment: 'development'
            }
        }))
        .pipe(gulp.dest(paths.dist.base))
        .pipe(browserSync.stream());
});



gulp.task('fonts', function () {
    return gulp.src([paths.src.fonts])
        .pipe(gulp.dest(paths.dist.fonts))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src([paths.src.images])
        .pipe(gulp.dest(paths.dist.images))
        .pipe(browserSync.stream());
});

gulp.task("js", function(){
    return browserify({
        entries: ["./src/assets/js/index.js"]
    })
     .transform(babelify.configure({
        presets : ["@babel/preset-env"],
        compact: false
    }))
    .bundle()
    .pipe(source("index.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest("./dist/assets/js"));
});

gulp.task("minify:js", function(){
    return gulp.src([
        paths.dist.js + '/index.js'
    ])
    .pipe(uglify())
    .pipe(rename('index.min.js'))
    .pipe(gulp.dest(paths.dist.js))
});

gulp.task("preview", function() {
    browserSync.init({
        server: paths.dist.base
    });
});

gulp.task('serve', gulp.series('scss', 'html', 'fonts', 'images', 'js', function() {
    browserSync.init({
        server: paths.dist.base
    });

  gulp.watch([paths.src.scss + '/spec/**/*.*', paths.src.scss + '/vendor/*.*' , paths.src.scss + '/*.scss'], gulp.series('scss'));
    gulp.watch([ paths.src.base + '*.html', paths.src.base + 'partials/*.html'], gulp.series('html'));
    gulp.watch([paths.src.fonts], gulp.series('fonts'));
    gulp.watch([paths.src.images], gulp.series('images'));
    gulp.watch([paths.src.base + 'assets/js/**/*.*'], gulp.series('build'));
    
}));





gulp.task('build', gulp.series('scss','minify:css', 'html', 'fonts', 'images', 'js', 'minify:js'));


gulp.task("default", gulp.series("serve"));
gulp.task("build", gulp.series("build"));
gulp.task("preview", gulp.series("preview"));