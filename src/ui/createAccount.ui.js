import chalk from "chalk";
import inquirer from "inquirer";
//service
import buildAccount from "../services/createAccount.js";

export const createAccount = async () => {
    console.log(chalk.bgGreen.black('Congratulations on choosing our bank.'));
    console.log(chalk.green('Please set your account options below.'));
    await requestNameAccount()
}

const requestNameAccount = async () => {
  try {

    const answerUser = await inquirer.prompt([
      {
        name: "accountName",
        message: "Enter a name for your account:",
        
        validate: input => {
          if (!input.trim()) {
            return "Account name cannot be empty";
          }

          if (/[\\/:*?"<>|]/.test(input)) {
            return "Name contains invalid characters";
          }

          return true;
        }
      }
    ]);

    const accountName = answerUser.accountName.trim();

    await buildAccount(accountName);

    successMessage(accountName);

  } catch (err) {
    console.log(err.message);
  }
};