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
        // TODO sort function

        if (!self.engine || self.engine === "handlebars") {
          const template = Handlebars.compile(Polymer.dom(self).innerHTML);

          Polymer.dom(self.root).innerHTML = template(json);
        } else if (self.engine === "mustache") {
          Polymer.dom(self.root).innerHTML = Mustache.render(Polymer.dom(self).innerHTML, json);
        } else {
          return Promise.reject(new Error("Unsupported template engine: " + self.engine));
        }

        self.fire("rendered");
      }).catch(function(err) {
        console.error(err);
      });
    }
  });
}());
