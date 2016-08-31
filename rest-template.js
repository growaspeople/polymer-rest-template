/* global Handlebars, Mustache, Polymer */

(function() {
  "use strict";

  Polymer({
    is:         "rest-template",
    properties: {
      src: {
        type: String
      },
      engine: {
        type:  String,
        value: "handlebars"
      }
    },
    ready: function() {
      const self = this;

      fetch(self.src).then(function(res) {
        return res.json();
      }).then(function(json) {
        if (!self.engine || self.engine === "handlebars") {
          const template = Handlebars.compile(Polymer.dom(self).innerHTML);

          self.$$("#rest-output").innerHTML = template(json);
        } else if (self.engine === "mustache") {
          self.$$("#rest-output").innerHTML = Mustache.render(Polymer.dom(self).innerHTML, json);
        } else {
          return Promise.reject(new Error("Unsupported template engine: " + self.engine));
        }
      }).catch(function(err) {
        console.error(err);
      });
    }
  });
}());
