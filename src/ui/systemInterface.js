import inquirer from "inquirer";
import chalk from "chalk";
//control
import menuControl from "../controllers/anserUser.js";
//Services
import buildAccount from "../services/createAccount.js";
//system interface
export const systemInterface = async () => {
  try {
    const answerUser = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
          "Create account",
          "Check balance",
          "Deposit",
          "Withdraw",
          "Log Out",
        ],
      },
    ]);
    menuControl(answerUser.action);
  } catch (err) {
    console.log(err);
  }
};
//welcome message account creation
export const createAccount = () => {
  console.log(chalk.bgGreen.black("Congratulation on choosing our bank."));
  console.log(chalk.green("Please set your account option below."));
  requestNameAccount();
};

//request for user name entry
export const requestNameAccount = async () => {
  try {
    const anserUser = await inquirer.prompt([
      {
        name: "accountName",
        message: "Enter a name for your account: ",
      },
    ]);

    const accountName = anserUser.accountName
    buildAccount(accountName)
  } catch (err) {
    console.log(err);
  }
};

//success when creating account
export const successMessage = (accountName) => {
  if(requestNameAccount() === true){
    console.log(`Congratulation Mr(s) ${accountName}, you account has bee created`)
  }
}
