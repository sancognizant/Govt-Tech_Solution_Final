import { retrieveAllFilesFromDirectories } from "./retrieveAllFilesForDir";
import { checkForKeyWord } from "./checkForKeyWord";
/*
main app to execute the code and check the results of the array if there 
is any file containing the keyword
*/

const runApp = async () => {
  const filesArray = retrieveAllFilesFromDirectories(__dirname, []);

  for (let filePath of filesArray) {
    const filePathCheck = await checkForKeyWord(filePath);
    if (filePathCheck) console.log(filePathCheck);
  }
};

runApp();
