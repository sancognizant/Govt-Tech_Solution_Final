import { retrieveAllFilesFromDirectories } from "../retrieveAllFilesForDir";
import {checkForKeyWord} from "../checkForKeyWord";
import { assert } from "chai";

describe("Test to see if there are 3 files within Test Folder", () => {
  it("retrieve all files from Test folder", () => {
    const allfiles: string[] = retrieveAllFilesFromDirectories(
      "./src/Test",
      []
    );
    const numberOfFiles: number = allfiles.length;
    assert.equal(allfiles.length, 3);
  });
});

describe("Test to see if the file indexTest.js and sampleTestIndex2.js is within the Test Folder", () => {
  it("retrieve all files from directory", () => {
    const allfiles: string[] = retrieveAllFilesFromDirectories(
      "./src/Test",
      []
    );
    let count: number = 0;
    allfiles.forEach((filePath: string) => {
      if (
        filePath.includes("indexTest.ts") ||
        filePath.includes("sampleTestIndex2.ts")
      )
        count++;
    });

    assert.equal(count, 2);
  });
});

describe("Test to show that there are less than 5 files in total", () => {
  it("retrieve all files from directory", () => {
    const allfiles: string[] = retrieveAllFilesFromDirectories(
      "./src/Test",
      []
    );
    const numberOfFiles: number = allfiles.length;

    assert.isBelow(numberOfFiles, 5);
  });
});

describe("Test to show that TODO exist within sampleTestIndex2.ts", () => {
  it("check if file contains TODO", async() => {
    const filePath:string|null = await checkForKeyWord('./src/Test/sampleTestDir2/sampleTestIndex2.ts'); 
    let exist:boolean = false;

    if(filePath) exist = true;

    assert.equal(exist,true);
  });
});

describe("Test to show that TODO does not exist within indexTest.ts", () => {
    it("check if file contains TODO", async() => {
      const filePath:string|null = await checkForKeyWord('./src/Test/sampleTestDir/indexTest.ts'); 
      let exist:boolean = false;
  
      if(filePath) exist = true;
  
      assert.equal(exist,false);
    });
  });