module.exports = {
  "Assert contains text": function (browser) {
      browser.url(
        "http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html"
      );

      //.containsText is case sensitive... checking to see if text exists
      browser.assert.containsText("#more-text", "some more text");

      browser.click("#change-text");
      browser.assert.not.containsText("#more-text", "some more text");
      browser.assert.containsText("#more-text", "You changed me!");

      browser.end();
    },

  "Expect contains text": function (browser) {
    browser.url(
      "http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html"
    );

    browser.expect.element("#more-text").text.to.contain("some more text!");

    browser.click("#change-text");

    browser.expect.element("#more-text").text.to.not.contain("some more text")

    browser.expect.element("#more-text").text.to.equal("You changed me!")

    browser.end();
  },
};
