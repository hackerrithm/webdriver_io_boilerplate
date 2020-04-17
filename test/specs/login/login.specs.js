const loginPage = require('../../../pages/login/login');
const loginData = require('../../../data/login.js');
var faker = require('faker');
// Load and instantiate Chance
var chance = require('chance').Chance();

describe('Assessment Login', () =>{
    it('should display the correct home page title', () => {
        browser.url('/');
        const title = browser.getTitle();
        assert.equal(title, 'The Internet');
    });

    it('should go to auth form for login', () => {
        loginPage.clickFormAuthLink()
        // console.log('got to here');
        // browser.url('/');
        const title = browser.getTitle();
        assert.equal(title, 'The Internet');
    });

    it('verify that the user cannot login with an invalid username and password', () => {
        console.log(chance.string())
        loginPage.enterUsername(chance.string())
        loginPage.enterPassword(chance.string())
        loginPage.clickSubmit()
        assert.equal(loginPage.getFlash(),'Your username is invalid!')

    })

    it('verify that the user cannot login by just entering a valid username', () => {
        console.log(faker.internet.email())
        loginPage.enterUsername(faker.internet.userName())
        loginPage.enterPassword(faker.internet.password())
        loginPage.clickSubmit()
        assert.equal(loginPage.getFlash(),'Your username is invalid!')

    })

    for(let count in loginData){
        it('verify that the user can login with valid credentials', () => {
            loginPage.enterUsername(loginData[count].validUsername)
            loginPage.enterPassword(loginData[count].validPassword)
            loginPage.clickSubmit()
            assert.equal(loginPage.getFlash(),'You logged into a secure area!')
        })
    }
});