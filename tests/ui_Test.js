module.exports={
    "ui_Test":""+ function(browser){
    browser.url("https://suataconsultancy.com");
    browser.end();
}
,
    "basicAssert":function(browser){
        browser.url("https://suataconsultancy.com");
        browser.click("#menu-item-18 > a > span");
        browser.end();
    },
};

