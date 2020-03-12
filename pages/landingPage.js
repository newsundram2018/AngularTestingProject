let landing_page=function(){
    
    this.get=function(url){
        browser.get(url);
        browser.sleep(3000);
    }

    

};

module.exports = new landing_page();