import gulp from "gulp";
import webp from 'gulp-webp';
import favicons from "gulp-favicons";
import debug from "gulp-debug";
const requireDir = require("require-dir");

const paths = {
    views: {
        src: [
            "./src/views/**/*.html",
            "./src/views/pages/*.html"
        ],
        dist: "./dist/",
        watch: [
            "./src/blocks/**/*.html",
            "./src/views/**/*.html"
        ]
    },
    styles: {
        src: "./src/styles/main.{scss,sass}",
        dist: "./dist/styles/",
        watch: [
            "./src/blocks/**/*.{scss,sass}",
            "./src/styles/**/*.{scss,sass}"
        ]
    },
    "bx-styles": {
        src: "./src/blocks/modules/**/*.scss",
        dist: "./dist/bx-styles/",
        includePaths: ["src/styles"],
        watch: [
            "./src/blocks/**/*.{scss,sass}",
            "./src/styles/**/*.{scss,sass}"
        ]
    },
    "bx-styles-base": {
        src: "./src/styles/bx-styles-base.scss",
        dist: "./dist/bx-styles-base/",
        includePaths: ["src/styles"],
        watch: [
            "./src/styles/base/**/*.{scss,sass}"
        ]
    },
    "scripts": {
        src: "./src/js/index.js",
        dist: "./dist/js/",
        watch: [
            "./src/blocks/**/*.js",
            "./src/js/**/*.js"
        ]
    },
    "bx-scripts": {
        src: "./src/blocks/modules/**/*.js",
        dist: "./dist/bx-js/",
        watch: [
            "./src/blocks/modules/**/*.js"
        ]
    },
    images: {
        src: [
            "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
            "!./src/img/favicons/*.{jpg,jpeg,png,gif,tiff}"
        ],
        dist: "./dist/img/",
        watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}"
    },
    webp: {
        src: [
            "./src/img/**/*.{jpg,jpeg,png,tiff}",
            "!./src/img/favicons/*.{jpg,jpeg,png,gif,tiff}"
        ],
        dist: "./dist/img/",
        watch: [
            "./src/img/**/*.{jpg,jpeg,png,tiff}",
            "!./src/img/favicons/*.{jpg,jpeg,png,gif,tiff}"
        ]
    },
    sprites: {
        src: "./src/img/svg/*.svg",
        dist: "./dist/img/sprites/",
        watch: "./src/img/svg/*.svg"
    },
    fonts: {
        src: "./src/fonts/**/*.{woff,woff2}",
        dist: "./dist/fonts/",
        watch: "./src/fonts/**/*.{woff,woff2}"
    },
    libs: {
        src: "./src/libs/**/*.*",
        dist: "./dist/libs/",
        watch: "./src/libs/**/*.*"
    },
    favicons: {
        src: "./src/img/favicons/*.{jpg,jpeg,png,gif}",
        dist: "./dist/img/favicons/",
    },
    gzip: {
        src: "./src/.htaccess",
        dist: "./dist/"
    }
};

requireDir("./gulp-tasks/");

gulp.task("favicons", () => {
    return gulp.src(paths.favicons.src)
        .pipe(favicons({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe(gulp.dest(paths.favicons.dist))
        .pipe(debug({
            "title": "Favicons"
        }));
});

gulp.task('webp', function() {
    return gulp.src(paths.webp.src)
        .pipe(webp())
        .pipe(gulp.dest(paths.webp.dist));
});

export { paths };

export const development = gulp.series("clean", "smart-grid",
    gulp.parallel(["views", "styles", "bx-styles", 'webp', "bx-styles-base", "scripts", "bx-scripts", "images", "sprites", "fonts", "libs", "favicons"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean", "smart-grid",
    gulp.parallel(["views", "styles", "bx-styles", 'webp', "bx-styles-base", "scripts", "bx-scripts", "images", "sprites", "fonts", "libs", "favicons", "gzip"]),
    gulp.parallel("serve"));

export default development;