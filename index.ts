import inquirer from 'inquirer';
import chalk from 'chalk';


console.log(chalk.black.bold.bgWhiteBright("\n \t Currebcy rate Convertor \t \n"));
const currency:any={
    USD:1,
    EUR:0.85,
    INR:75,
    GBP:0.75,
    PKR:285
}

let usrInput = await inquirer.prompt([
    {
    name:"from",
    message:(chalk.bold.magentaBright ("Enter the currency you want to convert from")),
    "type":"list",
    "choices":["USD","EUR","INR","GBP","PKR"]
},
{
    name:"To",
    message:(chalk.bold.magentaBright ("Enter the currency you want to convert to")),
    "type":"list",
    "choices":["USD","EUR","INR","GBP","PKR"]
},
{
    name:"amount",
    message:(chalk.bold.magentaBright ("Enter the amount")),
    "type":"number"
}])

let from=currency[usrInput.from];
let to=currency[usrInput.To];
let amount=usrInput.amount;

let baseAmount=amount/from;
let convertedAmount=baseAmount*to;
let fixedAmount=convertedAmount.toFixed(2);
console.log(fixedAmount);
