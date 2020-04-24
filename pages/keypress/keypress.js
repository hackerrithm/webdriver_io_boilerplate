/*
 * Page object for file key press page
 */

class KeyPressPage {
        get open() {
            return browser.url('/key_presses');
        }
    
        get result() {
            return $('#result').getText();
        }
    
        submitKeyPress(value) {
            // Supported values are here: https://w3c.github.io/webdriver/#keyboard-actions
            return browser.keys(value);
        }
}
    
module.exports = new KeyPressPage();