# Ember-cli-bootstrap-switch

[![Build Status](https://travis-ci.org/vsymguysung/ember-cli-bootstrap-switch.svg)](http://travis-ci.org/vsymguysung/ember-cli-bootstrap-switch)
[![NPM Downlaads](https://img.shields.io/npm/dm/ember-cli-bootstrap-switch.svg)](https://www.npmjs.org/package/ember-cli-bootstrap-switch)

## Description
Ember-cli-bootstrap-switch is an Ember CLI add-on. This addon actually converts bootstrap-switch to an Ember component which is
a re-usable unit. Pull requests are welcome.


## Note

Pull requests are always welcome.


## Installation
```
# install via npm
$ npm install ember-cli-bootstrap-switch --save-dev
# make ember-cli fetch internal dependencies
$ ember g ember-cli-bootstrap-switch
```

## Basic Usage

### Handlebar Template
Exmaple 1:

```
{{bs-switch name="my-bs-switch" 
            btnSize="small" 
            status=bsSwitchStatusValue 
            callback="bsSwitchChanged"}}

```

Example 2:

```
{{bs-switch name="my-bs-switch" 
            btnSize="small" 
            onText="Up" 
            offText="Down" 
            onColor='success'
            offColor='warning'
            labelText="Thumbs" 
            status=bsSwitchStatusValue 
            callback="bsSwitchChanged"}}

```

### Brocfile.js ###
The bootstrap resources will not be imported to your resources by default. 

If you want the add-on to add it selectively you have to specify it in the `Brocfile.js`
(No option means false by default)

```
var app = new EmberAddon({
  'ember-cli-bootstrap-switch': {
    "importBootstrapCSS": true,
    "importBootstrapJS": true,
    "importBootstrapSwitchCSS": true,
    "importBootstrapSwitchJS": true
  }
});
```

## Demo
You can clone this repo and run the app 

```
$ sudo npm install -g ember-cli

# clone the codebase
$ git clone http://github.com/vsymguysung/ember-cli-bootstrap-switch.git
$ cd ember-cli-bootstrap-switch

# install dependencies
$ npm install; bower install

# fire up local server
$ ember serve

# visit the page with the following url.
http://localhost:4200
```





#### Inspired by

* http://www.bootstrap-switch.org

#### License
MIT license.
