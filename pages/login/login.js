/*
 * Page object for login page
 */

class loginPage {
        /*
         * Page Elements 
         */
        get usernameField() {
            return $('input[name="username"]')
        }

        get passwordField() {
                return $('input[name="password"]')
        }
    
        get submitButton() {
            return $('#login > button')
        }

        get formAuthLink() {
            return $('#content > ul > li:nth-child(21) > a')
        }

        get successfulSecureAreaText() {
            return $('#content > div > h2')
        }

        get flashMessage() {
            return $('#flash')
        }
    
        // get companySizeError() {
        //     return $('#sign-up .input-group .error')
        // }
        
        // get nextPageForm() {
    
        //     return $('#end-user-form')
    
        // }

        get formAuthTitle() {
            return $('#content > div > h2')
        }


        // dropDownButton(index) {
        //     return $(`.input-group:nth-child(${index}) .icon`)
        // }
    
        // dropDownItem(index) {
        //     return $(`.input-group .menu.visible .item:nth-child(${index})`)
        // }
    
        // signUpField(index) {
        //     return $(`.input-group:nth-child(${index}) .text`)
        // }
        
        // nextPageCompletedFormButton(value) {
        //     return $(`.grouped.fields.ui.blue.segment:nth-child(1) label:nth-child(1)`)
        // }

        nextPageAuthLinkButton(value) {
                return $(`.grouped.fields.ui.blue.segment:nth-child(1) label:nth-child(1)`)
        }

        nextPageLoginSuccess(value) {
                return $(`.grouped.fields.ui.blue.segment:nth-child(1) label:nth-child(1)`)
        }
        
    
        /**
         * Retrieves the values in the errors displayed on the screen
         */
        // getErrorValues() {
        //     this.companySizeError.waitForDisplayed();
        //     return this.companySizeError.getText();
        // }
    

        /**
         * Enters into the username field
         * @param {String} username User to be entered
         */
        enterUsername(username) {
                this.usernameField.waitForDisplayed()
                this.usernameField.click()
                this.usernameField.clearValue()
                this.usernameField.setValue(username)
        }
        /**
         * Enters into the password field
         * @param {String} password Password to be entered
         */
        enterPassword(password) {
                this.passwordField.waitForDisplayed()
                this.passwordField.click()
                this.passwordField.clearValue()
                this.passwordField.setValue(password)
        }
    
        /**
         * Click the submit button
         */
        clickSubmit(){
            this.submitButton.click()
        }

        clickFormAuthLink(){
            this.formAuthLink.click()
        }
        
        getToNextPageOnSubmit(){
            this.nextPageCompletedFormButton().waitForDisplayed(7000, true)
            return this.nextPageCompletedFormButton().getText()
        }
    
        /**
         * @param {Number} index index of locator
         * clicks a dropdown button
         */
        // clickADropDownButton(index) {
        //     this.dropDownItem(index).waitForDisplayed(1000, true) // reverses the waitForDisplayed so it is now a waitForNotDisplayed
        //     this.dropDownButton(index).waitForDisplayed()
        //     this.dropDownButton(index).click();
        // }
    
        // /**
        //  * @param {Number} index index of locator
        //  * clicks a dropdown item
        //  */
        // clickADropDownItem(index) {
        //     this.dropDownItem(index).waitForDisplayed()
        //     this.dropDownItem(index).click();
        // }
    
        /**
         * @param {Number} index index of locator
         * get the value of the signUp field
         */
        // getASignUpFieldValue(index) {
        //     this.signUpField(index).waitForDisplayed()
        //    return this.signUpField(index).getText();
        // }
        
        isNextPageDisplayed(){
    
            this.submitButton.waitForDisplayed(3000, true)
    
            return this.nextPageForm.waitForDisplayed()
    
        }

        isNextPageFormAuthDisplayed(){
    
            this.formAuthLink.waitForDisplayed(3000, true)
    
            return this.successfulSecureAreaText.waitForDisplayed()
    
        }

        getFlash(){
            return this.flashMessage.getText().split('\n').join('').slice(0, -1);
        }
    }
    
    module.exports = new loginPage();