'use strict'

const chalk = require('chalk')
const args = process.argv


const commands = ['init','feedback','author','help']

const usage  = async () => {
    const usage = await chalk.green(`
coverletter-cli is a resume generator using cli. 
You can make professional resume's and export 
that in your suitable format  

${chalk.yellow(`usage:`)}

     coverletter-cli init
    
${chalk.yellow(`commands can be:`)}

     init:     used to initalize your new cv
     feedback: used to send feedback to author
     author:   used to redirect to author linkedIn profile
     help:     used to print the usage guide
    `)
     console.log(usage)
}

(async () => {
    
})()

const errorLog = async (error) => {
    const eLog = await chalk.red(error)
     console.log(eLog)
}

switch(args[2]){
    case 'help':
        usage
        break
    case 'author':
        break
    case 'feedback':
        break
    case 'init':
        console.log(chalk.yellow(`initialize new repo`))
        break
    default:
         errorLog('invalid command passed')
         usage()
}

// if(commands.indexOf(args[2]) == -1){
//     errorLog('invalid command passed')
//     usage()
// }



if(args.length > 3){
    errorLog(`only one argument can be accepted.`)
    usage()
}