import Ember from "ember";

var get = Ember.get;


var bsSwitchComponent = Ember.Component.extend({

  tagName: 'div',
  classNames: ['bs-switch'],

  btnSize: 'small',
  name: 'bs-switch',
  disabled: false,

  // Insternal state.
  status: false,

  willDestroyElement: function() {
    // console.log('Destroy the instance of Bootstrap Switch.');
    this.$('input').bootstrapSwitch('destroy');
  },

  didInsertElement: function() {
    var that = this;

    // Ensure bootstrap-switch is loaded...
    Ember.assert("bootstrap-switch has to exist on Ember.$.fn.bootstrapSwitch", typeof Ember.$.fn.bootstrapSwitch === "function" );
    // console.log('this.$(input):', this.$('input'));

    this.$('input').bootstrapSwitch({
      "size": this.get('btnSize'),
      "state": this.get('status'),
      "disabled": this.get('disabled')
    });

    this.$('input').on('switchChange.bootstrapSwitch', function(event, state) {
      // console.log(this); // DOM element
      // console.log(event); // jQuery event
      // console.log(state); // true | false
      that.set('status', state);
      that.send('sendActionToConsumer', state);
    });
  },

  actions: {
    sendActionToConsumer: function(_state){
      this.sendAction('callback', {
          "name": this.get('name'),
          "statusValue": _state
      });
    }
  },

});

export default bsSwitchComponent;
