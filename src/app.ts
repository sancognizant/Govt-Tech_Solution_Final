import { checkForKeyWord } from "./checkForKeyWord";
import { retrieveAllFilesFromDirectories } from "./retrieveAllFilesFromDir";
/*
main app to execute the code and check the results of the array if there 
is any file containing the keyword
*/
const runApp =  async() => {
  const filesArray =  await retrieveAllFilesFromDirectories(__dirname, []);
  filesArray.forEach((filePath: string) => {
  console.log(filePath);
  });
};

runApp();
