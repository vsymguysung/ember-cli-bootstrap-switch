import Ember from 'ember';

export default Ember.ObjectController.extend({
  init: function() {
    console.log('application controller...');
  },

  bsSwitchStatusValue: true,

  actions: {
    bsSwitchChanged: function(_args) {
      console.log('bsSwitchChanged action... _args:', _args);
    }
  }
});
