module.exports = {
  "Assert Visable":
    // "" + // makes first test not run "" + ... pro tip
    function (browser) {
      browser.url(
        "http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html"
      );
      //check to see if the header is visable
      browser.assert.visible("#assert-verify-header");
      //click to make header not visible
      browser.click("#make-header-invisible");
      //make test fail by checking to see if the header assertion is still visible
      //adding .not makes test pass bc it makes the test not equal
      browser.assert.not.visible("#assert-verify-header");

      browser.end();
    },

  "Expect Visable... the expect way to do the same thing": function (browser) {
    browser.url(
      "http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html"
    );
    browser.expect.element("#assert-verify-header").to.be.visible;

    browser.click("#make-header-invisible");
    //.to and .be are decorators... they make the code easier to read. 
    //they are not needed to negate things
    browser.expect.element("#assert-verify-header").to.not.be.visible;


    browser.end();
  },
};
