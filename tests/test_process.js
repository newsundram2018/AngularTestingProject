let abs = require('../pages/landingPage');
let cType = require('../pages/customerType');
let userDB = require("../pages/userDashboard");

describe('Protractor Banking App', function () {

    it("1.url Checks", function () {
        browser.sleep(2000);
        abs.get("http://www.way2automation.com/angularjs-protractor/banking");

    });



    it("2.customerLoginClick", function () {

        cType.chooseCustomer();
        browser.sleep(2);

    });

    it("3.Click customer", function () {

        cType.chooseName();
    });



    it("4.Enter-in-account", function () {

        cType.login();
    });

        
    it("5.DepositLink", function () {
        browser.waitForAngular();
        userDB.clickDepositelink();
    });

    it("6.DepositeAmount", function () {
        userDB.enterdepositeAmount(1000);
        browser.sleep(5000);

    });

    it("7.DepositeSubmit", function () {
        userDB.clickDepositeButton();
    });

    it("8.WithdrawLink", function () {
        userDB.clickWithdrawlink();
        browser.sleep(2000);
    });

    it("9.WithdrawAmount", function () {

        userDB.enterwithdrawlAmount()
        browser.sleep(5000);

    });

    it("10.WithdrawSubmitButton", function () {
        userDB.clickWithdrawButton();
        browser.sleep(5000)

    });



});