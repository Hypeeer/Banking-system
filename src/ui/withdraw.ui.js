import inquirer from 'inquirer';
import chalk from 'chalk';
import { getWithDraw } from '../services/withdraw.js';
//helps
import { checkInputBalance } from '../services/helpers.js';

export const withdrawUI = async (accountName) => {
  const answerUser = await inquirer.prompt([
    {
      name: 'amount',
      message: 'How munch would you like to withdraw:',
      validate: checkInputBalance,
    },
  ]);

  const amount = answerUser.amount;
  try {
    await getWithDraw(amount, accountName);

    successMessage(amount, accountName);
  } catch (err) {
    console.log(chalk.bgRed.black(err.message));
  }
};

const successMessage = (amount, accountName) => {
  console.log(chalk.green(`Congratulation Mrs (a) ${accountName}`));
  console.log(chalk.green(`You withdrew R$${amount} from your account!`));
  console.log(chalk.bgBlue.black('Thank you for using our bank.'));
};
