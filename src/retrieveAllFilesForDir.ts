import { readdirSync, statSync } from "fs";
import { resolve } from "path";

/*
 retrieveAllFilesFromDirectories function returns all files from all the directories(including sub directories), 
 starting from a given directory (root directory).
 If the file is found, it is pushed into an array. otherwise continue search through recursion.
*/

export const retrieveAllFilesFromDirectories = (
  directory: string,
  filePathArray: string[]
): string[] => {
  const filesOrDirectories: string[] = readdirSync(directory);

  filesOrDirectories.forEach((fileOrDirectory: string) => {
    const filePath: string = resolve(directory, fileOrDirectory);

    if (statSync(filePath).isDirectory())
      filePathArray = retrieveAllFilesFromDirectories(filePath, filePathArray);
    else {
      if (filePath) filePathArray.push(filePath);
    }
  });
  
  return filePathArray;
};