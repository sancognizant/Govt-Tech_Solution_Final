import {readdirSync,statSync} from 'fs';
import {resolve} from 'path';
import {checkForKeyWord} from './checkForKeyWord';  

/*
 retrieveAllFilesFromDirectories function returns all files from all the directories(including sub directories), 
 starting from a given directory (root directory).
 If the file is found, it is checked for the keyword. 
 Otherwise, through recursion, the file search is performed again, for subdirectory. 
 If file is found, a check is done to see if the keyword exists. 
*/

export const retrieveAllFilesFromDirectories = async(directory: string, filePathArray: string[])  => {
    const filesOrDirectories: string[] = readdirSync(directory);

    for (let fileOrDirectory of filesOrDirectories) {
        const filePath: string = resolve(directory, fileOrDirectory);

        if (statSync(filePath).isDirectory())
            filePathArray = await retrieveAllFilesFromDirectories(filePath, filePathArray);
        else {
            const filePathCheck = await checkForKeyWord(filePath);
            if(filePathCheck)
            filePathArray.push(filePathCheck);
        }
            
    }
    return filePathArray;
}

