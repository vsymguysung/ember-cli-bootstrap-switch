import Ember from "ember";


var bsSwitchComponent = Ember.Component.extend({

  tagName: 'div',
  classNames: ['bs-switch'],

  btnSize: 'small',
  name: 'bs-switch',
  disabled: false,
  onColor: 'primary',  // 'primary', 'info', 'success', 'warning', 'danger', 'default'
  offColor: 'default', // 'primary', 'info', 'success', 'warning', 'danger', 'default'
  onText: 'ON',
  offText: 'OFF',
  labelText: '',

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
      "disabled": this.get('disabled'),
      "onText": this.get('onText'),
      "offText": this.get('offText'),
      "onColor": this.get('onColor'),
      "offColor": this.get('offColor'),
      "labelText": this.get('labelText')
    });

    this.$('input').on('switchChange.bootstrapSwitch', function(event, state) {
      // console.log(this); // DOM element
      // console.log(event); // jQuery event
      // console.log(state); // true | false
      that.set('status', state);
      that.send('sendActionToConsumer', state);
    });
  },

  /**
   * Observes status for outside changes in order to update the plugin value.
   *
   * @method statusObserver
   * @private
   */
  _statusObserver: function() {
    this.$('input').bootstrapSwitch('state', this.get('status'), true);
  }.observes('status'),

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
