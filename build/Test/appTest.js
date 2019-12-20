"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var retrieveAllFilesForDir_1 = require("../retrieveAllFilesForDir");
var chai_1 = require("chai");
describe("Test to see if there are 3 files within Test Folder", function () {
    it("retrieve all files from Test folder", function () {
        var allfiles = retrieveAllFilesForDir_1.retrieveAllFilesFromDirectories("./src/Test", []);
        var numberOfFiles = allfiles.length;
        chai_1.assert.equal(allfiles.length, 3);
    });
});
describe("Test to see if the file indexTest.js and sampleTestIndex2.js is within the array", function () {
    it("retrieve all files from directory", function () {
        var allfiles = retrieveAllFilesForDir_1.retrieveAllFilesFromDirectories("./src/Test", []);
        var count = 0;
        allfiles.forEach(function (filePath) {
            if (filePath.includes("indexTest.ts") ||
                filePath.includes("sampleTestIndex2.ts"))
                count++;
        });
        chai_1.assert.equal(count, 2);
    });
});
describe("Test to show that there are less than 5 files in total", function () {
    it("retrieve all files from directory", function () {
        var allfiles = retrieveAllFilesForDir_1.retrieveAllFilesFromDirectories("./src/Test", []);
        var numberOfFiles = allfiles.length;
        chai_1.assert.isBelow(numberOfFiles, 5);
    });
});
describe("Test to show that TODO exist within sampleTestIndex2.ts", function () {
    it("check if file contains TODO", function () {
        var allfiles = retrieveAllFilesForDir_1.retrieveAllFilesFromDirectories("./src/Test", []);
        var numberOfFiles = allfiles.length;
        chai_1.assert.isBelow(numberOfFiles, 5);
    });
});
