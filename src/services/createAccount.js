import fs from 'fs/promises';
import path from 'path';
//absolute path
const accountPath = path.resolve('src', 'repositories');
//throws invalid name error
export default async function buildAccount(accountName) {
  await fs.mkdir(accountPath, { recursive: true }); //creates and validates if it exists

  const filePath = path.join(accountPath, `${accountName}.json`);

  try {
    await fs.access(filePath); // If it exists, it doesn't throw an error, if it exists, it throws an error.
    throw new Error('Account already exists');
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }

    const data = {
      name: accountName,
      balance: 0,
      createAt: new Date().toISOString(),
    };
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  }
}
