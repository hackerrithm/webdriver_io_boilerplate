const keypressPage = require("../../../pages/keypress/keypress");

describe("Key Press", () => {
  it("check if the keys are being pressed", () => {
    browser.url("/key_presses");
    const keyValue = 'Enter';
    keypressPage.submitKeyPress(keyValue);

//     expect(keypressPage.result).to.eq(`You entered: ${keyValue.toUpperCase()}`);

    assert.equal(keypressPage.result, `You entered: ${keyValue.toUpperCase()}`);
  });
});
