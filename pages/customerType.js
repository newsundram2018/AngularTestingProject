let customer_Type=function(){
    let clickCostomerLogin=element(by.css('[ng-click="customer()"]'));
    let customerName=element(by.cssContainingText('option','Ron Weasly'));
    let loginButton = element(by.buttonText("Login"));


    this.chooseCustomer=function(){
            clickCostomerLogin.click();
            browser.sleep(2000);
    };

    this.chooseName=function(){
            customerName.click();
            browser.sleep(2000);
    };

    this.login=function(){
        loginButton.click();
        browser.waitForAngular();
    };


};

module.exports = new customer_Type();