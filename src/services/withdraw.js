import fs from 'fs/promises';
import path from 'path';

const accountPath = path.resolve('src', 'repositories');
//Withdrawing funds frm an already verified account.
export const getWithDraw = async (amount, accountName) => {
  const filePath = path.join(accountPath, `${accountName}.json`);

  try {
    const accountJSON = await fs.readFile(filePath, 'utf-8');

    const accountData = JSON.parse(accountJSON);

    if (accountData.balance <= amount) {
      throw new Error('Insufficient funds to complete the withdrawal.');
    }

    const accountNewBalance = accountData.balance - amount;

    const data = {
      name: accountName,
      balance: accountNewBalance,
      updateAt: new Date().toISOString(),
    };

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    throw err;
  }
};
