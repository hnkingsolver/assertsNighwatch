module.exports = {
    "Enable test": function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/enabled.html");
        //check to see if attribute is enabled
        // browser.assert.attributeEquals("#am-i-disabled", "disabled", "true");
        browser.expect.element("#am-i-disabled").not.to.be.enabled;

        browser.setValue("#type-to-enable", "enabled!!!");

        browser.pause(2000) //we will see this button is enabled

        // browser.assert.attributeEquals("#am-i-disabled", "disabled", "false")
        browser.expect.element("#am-i-disabled").to.be.enabled;

        browser.end()
    }
}