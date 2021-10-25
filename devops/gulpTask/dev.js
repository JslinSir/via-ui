const gulp = require('gulp')
const sass = require('gulp-dart-sass')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

const del = require('del')

const clean = cb => {
    del.sync(['./dist'])
    cb()

}

const buildJsTask = cb => {
    gulp.src('src/**/*.js')
        .pipe(gulp.dest('./dist'))

    cb()
}

const buildJsonTask = cb => {
    gulp.src('src/**/*.json')
        .pipe(gulp.dest('./dist'))

    cb()
}

const buildWxmlTask = cb => {
    gulp.src('src/**/*.wxml')
        .pipe(gulp.dest('./dist'))

    cb()
}


const buildSassToWxssTask = cb => {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({ extname: '.wxss' }))
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(gulp.dest('./dist'))

    cb()
}

const buildOthersTask = cb => {
    gulp.src('src/**/*.!(js|scss|json|wxml)')
        .pipe(gulp.dest('./dist'))
    cb()
}



const buildDev = gulp.parallel(buildJsTask,buildJsonTask,buildWxmlTask,buildSassToWxssTask,buildOthersTask)


const watchTask = cb =>{

    gulp.watch('src/**/*.js',{ events: 'all' },  buildJsTask);
    gulp.watch('src/**/*.json',{ events: 'all' },  buildJsonTask);
    gulp.watch('src/**/*.wxml',{ events: 'all' },  buildWxmlTask);
    gulp.watch('src/**/*.scss',{ events: 'all' },  buildSassToWxssTask);
    gulp.watch('src/**/*.!(js|scss|json|wxml)',{ events: 'all' },  buildOthersTask);
   
    cb()
   
}
 
// 开发模式
module.exports =  gulp.series(gulp.parallel(buildDev,watchTask));
 