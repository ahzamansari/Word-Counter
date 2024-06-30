import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n\tWelcome To Ahzam - Word Counter\n"));
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blue("Enter your sentence to count the word => "),
    }
]);
const words = answer.sentence.split(" ");
console.log(chalk.red(`\nyour sentence count is : "${words.length}"`));
