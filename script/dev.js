const gulp = require('gulp')
const sass = require('gulp-dart-sass')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

const del = require('del')

const clean = cb => {
    del.sync(['./devops/dist'])
    cb()

}

const buildJsTask = cb => {
    gulp.src('devops/src/**/*.js')
        .pipe(gulp.dest('devops/dist'))

    cb()
}

const buildJsonTask = cb => {
    gulp.src('devops/src/**/*.json')
        .pipe(gulp.dest('devops/dist'))

    cb()
}

const buildWxmlTask = cb => {
    gulp.src('devops/src/**/*.wxml')
        .pipe(gulp.dest('devops/dist'))

    cb()
}


const buildSassToWxssTask = cb => {
    gulp.src('devops/src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({ extname: '.wxss' }))
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(gulp.dest('devops/dist'))

    cb()
}

const buildOthersTask = cb => {
    gulp.src('devops/src/**/*.!(js|scss|json|wxml)')
        .pipe(gulp.dest('devops/dist'))
    cb()
}



const buildDev = gulp.parallel(buildJsTask,buildJsonTask,buildWxmlTask,buildSassToWxssTask,buildOthersTask)


const watchTask = cb =>{

    gulp.watch('devops/src/**/*.js',{ events: 'all' },  buildJsTask);
    gulp.watch('devops/src/**/*.json',{ events: 'all' },  buildJsonTask);
    gulp.watch('devops/src/**/*.wxml',{ events: 'all' },  buildWxmlTask);
    gulp.watch('devops/src/**/*.scss',{ events: 'all' },  buildSassToWxssTask);
    gulp.watch('devops/src/**/*.!(js|scss|json|wxml)',{ events: 'all' },  buildOthersTask);
   
    cb()
   
}
 
// 开发模式
module.exports =  gulp.series(gulp.parallel(buildDev,watchTask));
 