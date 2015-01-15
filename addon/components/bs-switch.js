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

    this.removeObserver('status', this.valueChanged);
  },

  didInsertElement: function() {
    var that = this;

    // Ensure bootstrap-switch is loaded...
    Ember.assert("bootstrap-switch has to exist on Ember.$.fn.bootstrapSwitch", Ember.$.fn.bootstrapSwitch);
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
    });

    this.addObserver('status', this.valueChanged);
  },

  click: function(){
    // console.log('click...');
  },

  /**
   * Respond to external value changes. 
   */
  valueChanged: function() {
    var value = this.get("status");
    // console.log('valueChanged... state:', value);

    this.sendAction('callback', {
        "name": this.get('name'),
        "statusValue": this.get('status')
    });
  }

});

export default bsSwitchComponent;
