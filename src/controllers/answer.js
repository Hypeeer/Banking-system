import { createAccount } from '../ui/createAccount.ui.js';
//ui
import { AccountBalanceUI } from '../ui/checkBalance.ui.js';
import { depositAccountUI } from '../ui/deposit.ui.js';
import { whatsAccountUI } from '../ui/systemInterface.js';
import { withdrawUI } from '../ui/withdraw.ui.js';

//Define the program flow
const menuControl = async (answerUser) => {
  let accountName = null;
  switch (answerUser) {
    case 'Create account':
      await createAccount();
      break;
    case 'Check balance':
      accountName = await whatsAccountUI();
      await AccountBalanceUI(accountName);
      break;
    case 'Deposit':
      accountName = await whatsAccountUI();
      await depositAccountUI(accountName);
      break;
    case 'Withdraw':
      accountName = await whatsAccountUI();
      await withdrawUI(accountName);
      break;
    default:
      process.exit();
  }
};

export default menuControl;
