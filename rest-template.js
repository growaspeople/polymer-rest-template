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
      },
      data: {
        type:  Object
      }
    },
    getReceivedData: function() {
      return this.data;
    },
    ready: function() {
      const self = this;

      fetch(self.src).then(function(res) {
        return res.json();
      }).then(function(data) {
        // TODO sort function

        self.data = data;

        if (!self.engine || self.engine === "handlebars") {
          const template = Handlebars.compile(Polymer.dom(self).innerHTML);

          Polymer.dom(self.root).innerHTML = template(data);
        } else if (self.engine === "mustache") {
          Polymer.dom(self.root).innerHTML = Mustache.render(Polymer.dom(self).innerHTML, data);
        } else {
          return Promise.reject(new Error("Unsupported template engine: " + self.engine));
        }

        self.fire("dataReceived");
      }).catch(function(err) {
        console.error(err);
      });
    }
  });
}());
