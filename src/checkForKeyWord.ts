import { createReadStream } from "fs";
import { createInterface } from "readline";
import {TODO} from "./const";

/*
This function checks the file for the keyword. 
if exist, return the file path to be output. 
Otherwise, return null
*/

export const checkForKeyWord = async (filePath: string):Promise<string|null> => {
  let path = null;
  const fileReadStream = createReadStream(filePath);
  const readLine = createInterface({
    input: fileReadStream
  });

  for await (const line of readLine) {
    const lineTOUpperCase: string = line.toUpperCase();
    if (lineTOUpperCase.includes(TODO)) {
      path = filePath;
      break;
    }
  }
  return path;
};
