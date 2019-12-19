import {readdirSync,statSync} from 'fs';
import {resolve} from 'path';
import path from 'path';    

/*
 retrieveAllFilesFromDirectories function returns all files from all the directories(including sub directories), 
 starting from a given directory (root directory).
 If the file is found, it is checked for the keyword TODO. 
 Otherwise, through recursion, the file search is performed again, for subdirectory. 
 If file is found, a check is done to see if the keyword "TODO" exists. 
 When first instance of "TODO" is found, stop the search process and output the filepath.
*/

export const retrieveAllFilesFromDirectories = (directory: string, filePathArray: string[]) : string[] => {

    const filesOrDirectories: string[] = readdirSync(directory);

    filePathArray === null ? [] : filePathArray;

    filesOrDirectories.forEach((fileOrDirectory: string) => {
        const filepath: string = resolve(directory, fileOrDirectory); 

        if(statSync(filepath).isDirectory()) 
        filePathArray = retrieveAllFilesFromDirectories(filepath, filePathArray);
        else
        filePathArray.push(filepath);
    });

    return filePathArray;
}