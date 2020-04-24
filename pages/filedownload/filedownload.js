/*
 * Page object for file download page
 */

class FileDownloadPage {
        /*
         * Page Elements 
         */
        get linkText() {
            return $('#content > div > h3')
        }

        get downloadsButton() {
                return $('[href="download/wpx.png"]')
        }

        downloadsPageText(){
                this.linkText.waitForDisplayed(5000);
                const link = $('=wpx.png')
                return this.linkText.getText()
        }

        clickDownload(){
                this.downloadsButton.click()
        }


    }
    
module.exports = new FileDownloadPage();