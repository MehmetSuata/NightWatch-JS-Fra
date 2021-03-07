module.exports={
    tags:["ui"],

    "ui_Test":""+ function(browser){
    browser.url("https://suataconsultancy.com");
    browser.end();
},
    "basicAssert":""+ function(browser){
        browser.url("https://suataconsultancy.com");
        browser.assert.visible("#menu-item-18 > a > span");
        browser.pause(1000);
        browser.click("#menu-item-18 > a > span");
        browser.end();
},

     "fillPage":""+function(browser){
        browser
        .url('https://suataconsultancy.com/contacts/')
        .waitForElementVisible('#forminator-field-name-1')
        .assert.titleContains('Contacts')
        .assert.visible('#forminator-field-email-1')
        .setValue('#forminator-field-name-1','Strider')
        .setValue('#forminator-field-email-1','str@gmail.com')
        .pause(2000)
        .end();
            
},
    "navigationBarTest": function(browser){
        let suatahomepage =browser.page.suatacons();
        suatahomepage.navigate()
        .assert.titleContains('Home - SuataConsultancy')
        .pause(2000)
        .assert.visible('@navigationBar')
        .click('@navigationBar')
        .pause(2000);  

    }

};

