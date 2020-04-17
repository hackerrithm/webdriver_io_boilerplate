const fileuploadPage = require("../../../pages/upload/upload");
// const imagePath = require("../../../data/");
const path = require("path");

describe("File Upload", () => {
  it("check if file can be uploaded", () => {
    const filePath = path.join(__dirname, "../../../data/wpx.png");
//     const imageName = "wpx.png";
    // const filePath = imagePath(imageName);

    browser.url("/upload");

    fileuploadPage.chooseFile(filePath);
    fileuploadPage.upload;

    browser.pause(5000)
    console.log("noooteee mee ::: ", fileuploadPage.uploadedSuccess())
    assert.equal(fileuploadPage.uploadedSuccess(), "File Uploaded!");
  });
});
