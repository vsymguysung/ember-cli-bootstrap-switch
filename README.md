# Ember-cli-bootstrap-switch

[![Build Status](https://travis-ci.org/vsymguysung/ember-cli-bootstrap-switch.svg)](http://travis-ci.org/vsymguysung/ember-cli-bootstrap-switch)
[![NPM Downlaads](https://img.shields.io/npm/dm/ember-cli-bootstrap-switch.svg)](https://www.npmjs.org/package/ember-cli-bootstrap-switch)

## Description
Ember-cli-bootstrap-switch is an Ember CLI add-on. This addon actually converts bootstra-switch to an Ember component which is
a re-usable unit. This is still a work in progress. Pull requests are welcome.


## Important

This is very WIP at the moment...


## Installation
```
# install via npm
$ npm install ember-cli-bootstra-switch --save-dev
# make ember-cli fetch internal dependencies
$ ember g ember-cli-bootstrap-switch
```

## Basic Usage

### Handlebar Template
```
{{bs-switch height=200 btnSize=bs-sm content=postContent focus=false header="Example"}}
```

### Brocfile.js ###
The bootstrap and fontAwesome resources will not be imported to your resources by default. 

If you want the add-on to add it selectively you have to specify it in the `Brocfile.js`
(No option means false by default)

```
var app = new EmberAddon({
  'ember-cli-summernote': {
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
## ToDOs / Known Issues





#### Inspired by

* 

#### License
MIT license.
