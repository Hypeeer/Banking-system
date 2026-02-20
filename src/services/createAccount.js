import fs from "fs";
import errorMessages from "../ui/errorMessages.js";

const accountPath = `./src/repositories`;

const buildAccount = (accountName) => {

  //validate path
  if (!fs.existsSync(accountPath)) {
    fs.mkdirSync(accountPath);
  }
  //validate account 
  if(fs.existsSync(`${accountPath}/${accountName}.json`)){
    return errorMessages()
  }

  let data = {
    name: accountName,
    balance: 0
  }
  
  fs.writeFileSync(`${accountPath}/${accountName}.json`, JSON.stringify(data, null, 2) )

  return true
};

export default buildAccount;
