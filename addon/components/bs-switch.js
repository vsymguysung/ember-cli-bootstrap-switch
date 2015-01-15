import Ember from "ember";

var get = Ember.get;


var bsSwitchComponent = Ember.Component.extend({

  tagName: 'div',
  classNames: ['bs-switch'],

  didInsertElement: function() {
    // Ensure bootstrap-switch is loaded...
    Ember.assert("bootstrap-switch has to exist on Ember.$.fn.bootstrapSwitch", Ember.$.fn.bootstrapSwitch);

    this.$('input').bootstrapSwitch();
  },

});

export default bsSwitchComponent;
