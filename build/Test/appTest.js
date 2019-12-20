"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var retrieveAllFilesForDir_1 = require("../retrieveAllFilesForDir");
var checkForKeyWord_1 = require("../checkForKeyWord");
var chai_1 = require("chai");
describe("Test to see if there are 3 files within Test Folder", function () {
    it("retrieve all files from Test folder", function () {
        var allfiles = retrieveAllFilesForDir_1.retrieveAllFilesFromDirectories("./src/Test", []);
        var numberOfFiles = allfiles.length;
        chai_1.assert.equal(allfiles.length, 3);
    });
});
describe("Test to see if the file indexTest.js and sampleTestIndex2.js is within the Test Folder", function () {
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
    it("check if file contains TODO", function () { return __awaiter(void 0, void 0, void 0, function () {
        var filePath, exist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, checkForKeyWord_1.checkForKeyWord('./src/Test/sampleTestDir2/sampleTestIndex2.ts')];
                case 1:
                    filePath = _a.sent();
                    exist = false;
                    if (filePath)
                        exist = true;
                    chai_1.assert.equal(exist, true);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Test to show that TODO does not exist within indexTest.ts", function () {
    it("check if file contains TODO", function () { return __awaiter(void 0, void 0, void 0, function () {
        var filePath, exist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, checkForKeyWord_1.checkForKeyWord('./src/Test/sampleTestDir/indexTest.ts')];
                case 1:
                    filePath = _a.sent();
                    exist = false;
                    if (filePath)
                        exist = true;
                    chai_1.assert.equal(exist, false);
                    return [2 /*return*/];
            }
        });
    }); });
});
