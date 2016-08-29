/* global Polymer, Mustache */

(function() {
  "use strict";

  Polymer({
    is:         "rest-template",
    properties: {
      src: {
        type: String
      }
    },
    ready: function() {
      const self = this;

      fetch(self.src).then(function(res) {
        return res.json();
      }).then(function(json) {
        self.$$("#rest-output").innerHTML = Mustache.render(Polymer.dom(self).innerHTML, json);
      }).catch(function(err) {
        console.error(err);
      });
    }
  });
}());
