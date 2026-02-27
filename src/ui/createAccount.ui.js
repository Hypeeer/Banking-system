import chalk from 'chalk';
import inquirer from 'inquirer';
//service
import buildAccount from '../services/createAccount.js';
//helps
import { checkInput } from '../services/helpers.js';

export const createAccount = async () => {
  console.log(chalk.bgGreen.black('Congratulations on choosing our bank.'));
  console.log(chalk.green('Please set your account options below.'));
  await requestNameAccount();
};

const requestNameAccount = async () => {
  let existsUser = false;
  while (!existsUser) {
    try {
      const answerUser = await inquirer.prompt([
        {
          name: 'accountName',
          message: 'Enter a name for your account:',
          validate: checkInput(3),
        },
      ]);

      const accountName = answerUser.accountName.trim();

      const errExists = await buildAccount(accountName);
      // if the user error exists, it returns to the prompt to type again
      if (errExists === false) {
        existsUser = true;
      } else {
        successMessage(accountName);
        break;
      }
    } catch (err) {
      console.log(err.message);
    }
  }
};

const successMessage = (accountName) => {
  console.log(chalk.green(`Congratulations Mr(s) ${accountName} your account has been created.`));
};
