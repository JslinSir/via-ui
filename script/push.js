const process = require('child_process')
const ora = require('ora')
const inquirer = require('inquirer')
const fs = require('fs')





const spinner = ora('--- 🚀components 构建中... --- ').start()


process.execSync(`npm run build`)

spinner.succeed('--- ✅ components 包构建成功 ✅ ---')

// 主版本号(major).次版本号(minor).修订号(patch)
const questions = [
    {
        type: 'list',
        name: 'versionType',
        message: '请选择版本发布方式',
        choices: [{
            name: 'patch(升级修订版本号)',
            value: 'patch'
        },{
            name: 'minor(升级次版本号)',
            value: 'minor'
        },{
            name: 'major(升级主版本号)',
            value: 'major'
        }],
        default: 'patch'
    },

]

const pushNpmQuestions = [
    {
        type: 'confirm',
        name: 'pushConfirm',
        message: '是否发布到 npm ?',
      
    },

]

// 获取 组件库 版本号
const viaMpUiJson = JSON.parse(fs.readFileSync('./components/package.json'))
 
spinner.info(`${viaMpUiJson.name} 当前版本号：${viaMpUiJson.version} `)

inquirer.prompt(questions).then( answers =>{
    // 查看 线上 npm via-mp-ui 组件 最新 版本
    spinner.start(`正在通过 ${questions[0].choices.find(({ value })=> value === answers.versionType ).name} 的方式 生成版本号`)
    process.execSync(`cd components && npm run version:${answers.versionType}`)
    spinner.succeed(`通过 npm ${answers.versionType} 的方式 生成 ${viaMpUiJson.name} 版本号成功`)
    const newViaMpUiJson = JSON.parse(fs.readFileSync('./components/package.json'))
    spinner.succeed(`版本号为：${newViaMpUiJson.version}`)
    inquirer.prompt(pushNpmQuestions).then((res)=>{
        if(res.pushConfirm){
            spinner.start(`正在发布${viaMpUiJson.name} npm 正式包`)
            process.execSync(`cd components && npm run publish`)
            spinner.succeed(`${viaMpUiJson.name} 版本发布成功`)
            process.exec(`cd components && npm run version`)
        }

     

    })

})

 



// console.log(process.execSync(`pwd`).toString())
