/* global browser */
"use strict";

const url = require("url"),
      expect = require("expect.js"),
      fetch = require("node-fetch");

describe("rest-template", function() {
  const htmlUrl = "/test/testwdio.html",
        json = require("./jsons/test.json");

  it("should show background images, except for disabled ones", function() {
    browser.url(htmlUrl);

    browser.elements("body > div").value.forEach((el, i) => {
      const divId = el.ELEMENT,
            aId = browser.elementIdElement(divId, "a").value.ELEMENT,
            name = browser.elementIdText(aId).value,
            url = browser.elementIdAttribute(aId, "href");

      expect(name).to.be(json[i].name + "foobar");
      expect(url).to.be(json[i].url);
    });
  });
});
