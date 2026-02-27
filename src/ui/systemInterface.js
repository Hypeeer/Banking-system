import inquirer from 'inquirer';
import chalk from 'chalk';
//control
import menuControl from '../controllers/answer.js';
//helper
import { checkAccount, checkInput } from '../services/helpers.js';

//system interface
export const systemInterface = async () => {
  let logOut = false;

  try {
    while (!logOut) {
      const answerUser = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What do you want to do?',
          choices: ['Create account', 'Check balance', 'Deposit', 'Withdraw', 'Log Out'],
        },
      ]);

      if (answerUser.action === 'Log Out') {
        logOut = true;
        break;
      }

      await menuControl(answerUser.action);
    }
  } catch (err) {
    console.log(err.message);
  }
};
//user interface for global functions
export const whatsAccountUI = async () => {
  let existsUser = false;
  while (!existsUser) {
    try {
      const answerUser = await inquirer.prompt([
        {
          name: 'accountName',
          message: 'Whats is your account: ',
          validate: checkInput(3),
        },
      ]);

      const accountName = answerUser.accountName.trim();

      const errExists = await checkAccount(accountName);

      if (errExists === false) {
        existsUser = true;
      }

      return accountName;
    } catch (err) {
      console.log(err.message);
    }
  }
};
