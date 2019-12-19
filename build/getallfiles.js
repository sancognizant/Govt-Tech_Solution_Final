"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
/*
 retrieveAllFilesFromDirectories function returns all files from all the directories(including sub directories),
 starting from a given directory (root directory).
 If the file is found, it is checked for the keyword TODO.
 Otherwise, through recursion, the file search is performed again, for subdirectory.
 If file is found, a check is done to see if the keyword "TODO" exists.
 When first instance of "TODO" is found, stop the search process and output the filepath.
*/
exports.retrieveAllFilesFromDirectories = function (directory, filePathArray) {
    var filesOrDirectories = fs_1.readdirSync(directory);
    filePathArray === null ? [] : filePathArray;
    filesOrDirectories.forEach(function (fileOrDirectory) {
        var filepath = path_1.resolve(directory, fileOrDirectory);
        if (fs_1.statSync(filepath).isDirectory())
            filePathArray = exports.retrieveAllFilesFromDirectories(filepath, filePathArray);
        else
            filePathArray.push(filepath);
    });
    return filePathArray;
};
