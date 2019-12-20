"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var retrieveAllFilesForDir_1 = require("../retrieveAllFilesForDir");
var chai_1 = require("chai");
describe("check if there are 6 files in the directory", function () {
    it("get all files in the directory and check", function () {
        //assert.equal(retrieveAllFilesFromDirectories("./test",[]).length, 6);
        var allfiles = retrieveAllFilesForDir_1.retrieveAllFilesFromDirectories("./src/Test", []);
        chai_1.assert.equal(allfiles.length, 3);
    });
});
