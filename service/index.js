'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var cgUtils = require('../utils.js');
var chalk = require('chalk');
var _ = require('underscore');
var fs = require('fs');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var ServiceGenerator = module.exports = function ServiceGenerator(args, options, config) {

	yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(ServiceGenerator, yeoman.generators.NamedBase);

ServiceGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    cgUtils.askForModuleAndDir('service',this,false,cb);
};

ServiceGenerator.prototype.files = function files() {

    var serviceName = _.camelize(this.name);
    cgUtils.processTemplates(this.name,this.dir,'service',this,null,null,this.module);
    cgUtils.injectComponent(this.module, 'service', serviceName, this);
};
