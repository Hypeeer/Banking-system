import { createAccount } from '../ui/createAccount.ui.js';
//ui
import { depositAccountUI } from '../ui/deposit.ui.js';
import { whatsAccountUI } from '../ui/systemInterface.js';

//Define the program flow
const menuControl = async (answerUser) => {
  switch (answerUser) {
    case 'Create account':
      await createAccount();
      break;
    case 'Check balance':
      break;
    case 'Deposit':
      const accountName = await whatsAccountUI();
      await depositAccountUI(accountName);
      break;
    case 'Withdraw':
      break;
    default:
      process.exit();
  }
};

export default menuControl;
