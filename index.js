/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {

  name: 'ember-cli-bootstrap-switch',


  included: function(app) {
    this._super.included(app);

    var bootstrapPath   = path.join(app.bowerDirectory,'/bootstrap/dist/');
    var bootstrapSwitchPath   = path.join(app.bowerDirectory,'/bootstrap-switch/dist/');
    var options         = app.options['ember-cli-bootstrap-switch'] || {};


    // Import Bootstrap
    if (options.importBootstrapCSS) {
      app.import(path.join(bootstrapPath, '/css/bootstrap.min.css'));
    }

    if (options.importBootstrapJS) {
      app.import(path.join(bootstrapPath, '/js/bootstrap.min.js'));
    }

    // Import Bootstrap Switch
    if (options.importBootstrapSwitchCSS) {
      app.import(path.join(bootstrapSwitchPath, '/css/bootstrap3/bootstrap-switch.min.css'));
    }

    if (options.importBootstrapSwitchJS) {
      app.import(path.join(bootstrapSwitchPath, '/js/bootstrap-switch.min.js'));
    }

  }
};
