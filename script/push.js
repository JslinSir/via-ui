const process = require('child_process')
const ora = require('ora')
const inquirer = require('inquirer')
const fs = require('fs')





const spinner = ora('--- ðcomponents æå»ºä¸­... --- ').start()


process.execSync(`npm run build`)

spinner.succeed('--- â components åæå»ºæå â ---')

// ä¸»çæ¬å·(major).æ¬¡çæ¬å·(minor).ä¿®è®¢å·(patch)
const questions = [
    {
        type: 'list',
        name: 'versionType',
        message: 'è¯·éæ©çæ¬åå¸æ¹å¼',
        choices: [{
            name: 'patch(åçº§ä¿®è®¢çæ¬å·)',
            value: 'patch'
        },{
            name: 'minor(åçº§æ¬¡çæ¬å·)',
            value: 'minor'
        },{
            name: 'major(åçº§ä¸»çæ¬å·)',
            value: 'major'
        }],
        default: 'patch'
    },

]

const pushNpmQuestions = [
    {
        type: 'confirm',
        name: 'pushConfirm',
        message: 'æ¯å¦åå¸å° npm ?',
      
    },

]

// è·å ç»ä»¶åº çæ¬å·
const viaMpUiJson = JSON.parse(fs.readFileSync('./components/package.json'))
 
spinner.info(`${viaMpUiJson.name} å½åçæ¬å·ï¼${viaMpUiJson.version} `)

inquirer.prompt(questions).then( answers =>{
    // æ¥ç çº¿ä¸ npm via-mp-ui ç»ä»¶ ææ° çæ¬
    spinner.start(`æ­£å¨éè¿ ${questions[0].choices.find(({ value })=> value === answers.versionType ).name} çæ¹å¼ çæçæ¬å·`)
    process.execSync(`cd components && npm run version:${answers.versionType}`)
    spinner.succeed(`éè¿ npm ${answers.versionType} çæ¹å¼ çæ ${viaMpUiJson.name} çæ¬å·æå`)
    const newViaMpUiJson = JSON.parse(fs.readFileSync('./components/package.json'))
    spinner.succeed(`çæ¬å·ä¸ºï¼${newViaMpUiJson.version}`)
    inquirer.prompt(pushNpmQuestions).then((res)=>{
        if(res.pushConfirm){
            spinner.start(`æ­£å¨åå¸${viaMpUiJson.name} npm æ­£å¼å`)
            process.execSync(`cd components && npm run publish`)
            spinner.succeed(`${viaMpUiJson.name} çæ¬åå¸æå`)
            process.exec(`cd components && npm run version`)
        }

     

    })

})

 



// console.log(process.execSync(`pwd`).toString())
