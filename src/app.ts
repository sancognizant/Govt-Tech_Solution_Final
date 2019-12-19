import { checkForKeyWord } from "./checkForKeyWord";
import { retrieveAllFilesFromDirectories } from "./getallfiles";

const runApp = () => {
  const filesArray = retrieveAllFilesFromDirectories(__dirname, []);
  filesArray.forEach((filePath: string) => {
    const filePathResult = checkForKeyWord(filePath);

    filePathResult
      .then(result => {
          if(result)
        console.log(result);
      })
      .catch(Error => {
        console.log(Error);
      });
  });
};

runApp();
