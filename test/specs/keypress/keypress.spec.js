const keypressPage = require("../../../pages/keypress/keypress");

describe("Key Press", () => {
  it("check if the keys are being pressed", () => {
    browser.url("/key_presses");
    const keyValue = 'Enter';
    keypressPage.submitKeyPress(keyValue);
    
    assert.equal(keypressPage.result, `You entered: ${keyValue.toUpperCase()}`);
  });
});
