"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
/*
 retrieveAllFilesFromDirectories function returns all files from all the directories(including sub directories),
 starting from a given directory (root directory).
 If the file is found, it is pushed into an array. otherwise continue search through recursion.
*/
exports.retrieveAllFilesFromDirectories = function (directory, filePathArray) {
    var filesOrDirectories = fs_1.readdirSync(directory);
    filesOrDirectories.forEach(function (fileOrDirectory) {
        var filePath = path_1.resolve(directory, fileOrDirectory);
        if (fs_1.statSync(filePath).isDirectory())
            filePathArray = exports.retrieveAllFilesFromDirectories(filePath, filePathArray);
        else {
            if (filePath)
                filePathArray.push(filePath);
        }
    });
    return filePathArray;
};
