const fileDownloadPage = require("../../../pages/filedownload/filedownload");

describe("File Download", () => {
  it("check if file can be downloaded", () => {
    browser.url("/download");

    fileDownloadPage.clickDownload();

    assert.equal(fileDownloadPage.downloadsPageText(), "File Downloader");
  });
});
