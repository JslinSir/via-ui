const gulp = require('gulp')
const sass = require('gulp-dart-sass')
const rename = require('gulp-rename')
const uglifyJs = require('gulp-uglify-es').default
const wxmlmin = require('gulp-htmlmin')
const jsonmin = require('gulp-jsonminify')
const del = require('del')

const clean = cb => {
    // 清楚目录
    del.sync(['./components/dist'],{force:true}) // force 允许删除当前工作目录和外部目录。
    cb()

}

// 构建js wxs 
const buildJsTask = cb => {
    gulp.src(['devops/src/components/**/*.js','devops/src/components/**/*.wxs'])
        .pipe(uglifyJs())
        .pipe(gulp.dest('./components/dist'))
    cb()
}

// 构建json
const buildJsonTask = cb => {
    gulp.src('devops/src/components/**/*.json')
        .pipe(jsonmin())
        .pipe(gulp.dest('./components/dist'))

    cb()
}

// 构建wxml
const buildWxmlTask = cb => {
    gulp.src('devops/src/components/**/*.wxml')
        .pipe(wxmlmin({
            removeComments: true, //清楚注释
            // collapseWhitespace: true, //压缩HTML
            keepClosingSlash: true,
            caseSensitive: true //区分大小写
          }))
        .pipe(gulp.dest('./components/dist'))

    cb()
}

// 构建wxss 
const buildWxssTask = cb => {
    gulp.src('devops/src/components/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed' //压缩
        }).on('error', sass.logError))
        .pipe(rename({ extname: '.wxss' }))
        .pipe(gulp.dest('./components/dist'))

    cb()
}

// 构建其他文件
const buildOthersTask = cb => {
    gulp.src('devops/src/components/**/*.!(js|scss|json|wxml)')
        .pipe(gulp.dest('./components/dist'))

    cb()
}


const build = gulp.parallel(buildJsTask,buildJsonTask,buildWxmlTask,buildWxssTask,buildOthersTask)

// 打包组件
module.exports =  gulp.series(clean, build);