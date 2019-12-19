"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkForKeyWord_1 = require("./checkForKeyWord");
exports.addFileToArray = function (filePath, filePathArray) {
    var filePathCheck = checkForKeyWord_1.checkForKeyWord(filePath);
    filePathCheck.then(function (filePathResult) {
        if (filePathResult) {
            filePathArray.push(filePathResult);
            console.log(filePathResult);
        }
    }).catch(function (Error) {
        console.log(Error);
    });
    return filePathArray;
};
