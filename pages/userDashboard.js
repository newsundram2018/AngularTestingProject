let userDB=function(){
let depositeLink=element(by.css('[ng-click="deposit()"]'));

let depositeTextBox=element(by.model('amount'));

let amountSubmitButton=element(by.css('[type="submit"]'));

let withdrawlLink=element(by.buttonText('Withdrawl')).click();
let withdrawlTextBox=element(by.model('amount'));
let withdrawButton=element(by.buttonText('Withdraw'));


this.clickDepositelink=function(){
    depositeLink.click();
    browser.sleep(2000);
};

this.enterdepositeAmount=function(rupee){
    expect(depositeTextBox);
    depositeTextBox.sendKeys(rupee);
    browser.sleep(2000);
};

this.clickDepositeButton=function()
{
    amountSubmitButton.click();
    browser.sleep(2000);
};

this.clickWithdrawlink=function(){
    withdrawlLink.click();
    browser.sleep(2000);
};

this.enterwithdrawlAmount=function()
{   
    expect(withdrawTextBox);
    withdrawlTextBox.click();
    browser.sleep(2000);
};
this.clickWithdrawButton=function(rupee)
{
    withdrawAmount.sendKeys(rupee);
    browser.sleep(2000);
};
this.withdrawlSubmit=function()
{
    withdrawButton.click();
    browser.sleep(2000);
};


};

module.exports = new userDB();