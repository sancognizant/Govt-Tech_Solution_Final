import { retrieveAllFilesFromDirectories } from "../retrieveAllFilesForDir";
import { assert } from "chai";

describe("check if there are 6 files in the directory", () => {
  it("get all files in the directory and check", () => {
    //assert.equal(retrieveAllFilesFromDirectories("./test",[]).length, 6);
    const allfiles = retrieveAllFilesFromDirectories("./src/Test", []);
    assert.equal(allfiles.length, 3);
  });
});
