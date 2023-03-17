'use strict';

const apickli = require('apickli/apickli.js');
const {Before, setDefaultTimeout} = require('@cucumber/cucumber');

Before(function() {
	this.apickli = new apickli.Apickli('http', "endpoint:80");
	this.apickli.addRequestHeader('Cache-Control', 'no-cache');
	this.apickli.setGlobalVariable('authheadername', "authheadername");
	this.apickli.setGlobalVariable('authheadervalue', "authheadervalue");
});

setDefaultTimeout(20 * 1000);
