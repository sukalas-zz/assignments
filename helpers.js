var Helpers = function () {
	this.i = function (id) { return document.getElementById(id); };
	this.cl = function (className) { return document.getElementsByClassName(className); };
	this.c = function (type) { return document.createElement(type); };
	this.q = function (type) { return document.querySelector(type); };
}