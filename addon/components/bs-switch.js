import Ember from 'ember';


const {
  get,
  set,
  run, //jshint ignore: line
  assert,
  Component,
  computed, //jshint ignore: line
  observer, //jshint ignore: line
  inject:{ service }, //jshint ignore: line
  isBlank, //jshint ignore: line
  isEmpty, //jshint ignore: line
  isEqual, //jshint ignore: line
  $ //jshint ignore: line
} = Ember;



let bsSwitchComponent = Component.extend({

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

  willDestroyElement() {
    this.$('input').bootstrapSwitch('destroy');
  },

  didInsertElement() {
    // Ensure bootstrap-switch is loaded...
    assert("bootstrap-switch has to exist on Ember.$.fn.bootstrapSwitch", typeof Ember.$.fn.bootstrapSwitch === "function" );

    this.$('input').bootstrapSwitch({
      "size": get(this, 'btnSize'),
      "state": get(this, 'status'),
      "disabled": get(this, 'disabled'),
      "onText": get(this, 'onText'),
      "offText": get(this, 'offText'),
      "onColor": get(this, 'onColor'),
      "offColor": get(this, 'offColor'),
      "labelText": get(this, 'labelText')
    });

    this.$('input').on('switchChange.bootstrapSwitch', (event, state)=>{
      // console.log(this); // DOM element
      // console.log(event); // jQuery event
      // console.log(state); // true | false
      set(this, 'status', state);
      this.send('sendActionToConsumer', state);
    });
  },

  /**
   * Observes status for outside changes in order to update the plugin value.
   *
   * @method statusObserver
   * @private
   */
  _statusObserver: observer('status', function() {
    this.$('input').bootstrapSwitch('state', get(this, 'status'), true);
  }),

  actions: {
    sendActionToConsumer: function(_state){
      this.sendAction('callback', {
          "name": get(this, 'name'),
          "statusValue": _state
      });
    }
  },

});

export default bsSwitchComponent;
