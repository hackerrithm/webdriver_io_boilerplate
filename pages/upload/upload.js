/*
 * Page object for signUp page
 */

class uploadPage {
  get chooseFileElement() {
    return $("#file-upload");
  }

  get uploadedSuccessTextValue() {
    return $("#content > div > h3")
  }

  get upload() {
    return $("#file-submit").click();
  }

  get uploadedFiles() {
    return $("#uploaded-files").getText();
  }

  uploadedSuccess() {
    this.uploadedSuccessTextValue.waitForDisplayed(5000);
    return this.uploadedSuccessTextValue.getText();
  }

  chooseFile(filePath) {
    this.chooseFileElement.setValue(filePath);
  }
}

module.exports = new uploadPage();
