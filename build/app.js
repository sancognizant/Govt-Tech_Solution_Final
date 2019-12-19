"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkForKeyWord_1 = require("./checkForKeyWord");
var getallfiles_1 = require("./getallfiles");
var runApp = function () {
    var filesArray = getallfiles_1.retrieveAllFilesFromDirectories(__dirname, []);
    filesArray.forEach(function (filePath) {
        var filePathResult = checkForKeyWord_1.checkForKeyWord(filePath);
        filePathResult
            .then(function (result) {
            if (result)
                console.log(result);
        })
            .catch(function (Error) {
            console.log(Error);
        });
    });
};
runApp();
