import chalk from 'chalk'
import readlineSync from 'readline-sync'


var quem = readlineSync.question('Quem e voce?')
var desejo = readlineSync.question('O que voce deseja?')
var motivo = readlineSync.question('Para que?')
console.log('Como ' + (chalk.blue(quem)) + ' eu desejo ' + (chalk.red(desejo)) + ' ' +
(chalk.green(motivo)))

    


