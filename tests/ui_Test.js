const dragAndDrop =require('html-dnd').codeForSelectors

module.exports={
    tags:["ui_Smoke"],

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
    "navigationBarTest":""+function(browser){
        let suatahomepage =browser.page.suatacons();
        suatahomepage.navigate()
        .assert.titleContains('Home - SuataConsultancy')
        .pause(2000)
        .assert.visible('@navigationBar')
        .click('@navigationBar')
        .pause(2000);  

    },

    "contactsPageFunctionality":""+function(browser){
        const firstNameBoxSelector="#forminator-field-name-1";

        browser
        .url("https://suataconsultancy.com/contacts/")
        .setValue(firstNameBoxSelector,"MKSuata")
        .saveScreenshot('test_output/suatacon.png');
        
    },

    "Functionality on HomePage": browser => {
        let suatahomepage=browser.page.suatacons();
        suatahomepage
        .navigate()
        .waitForElementVisible('@navigationBar')
        .assert.visible('@navigationBar')
        .assert.visible('@learnMoreButton')
        .assert.containsText(suatahomepage.elements.learnMoreButton,'Learn More')
        .pause(2000);
        
        // browser.execute(dragAndDrop,['',''])
        // browser.end();
       
    }





    


   


};

