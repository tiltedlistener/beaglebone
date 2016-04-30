var b = require('bonescript');
var sys = require('sys');
var exec = require('child_process').exec;

setInterval(alternate, 500);

function alternate() {
	exec("cat /sys/class/gpio/gpio67/value", result);
}

function result(error, stdout, stderr) {
	if (stdout == 1) { 
		exec("echo low > /sys/class/gpio/gpio67/direction", function(){});
	} else {
		exec("echo high > /sys/class/gpio/gpio67/direction", function() {});
	}
}