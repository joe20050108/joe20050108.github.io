//a prototype for a far more formalized version of the windowed application system.
//we need to make either js or json files to store stupid shit as well as 
//make this refer to those files


//for version 1.0 of the javascript appKit, we are going to have the order as follows:

/* 
1. Append the HTML in. 
2. append styling
3. scripts
*/


//app name must be same as variables storing info
var devApp = [];
devApp[0] = "devApp";
devApp[1] = "Developer Sample Application";
devApp[2] = "A JS draggable HTML window";
devApp[3] = "0.0.1";
devApp[4] = "joe2005";
devApp[5] = 1;

//register our application with the appKit system
//kinda important
registerApp(devApp[0]);

document.write('<script type="text/javascript" src="applications/developer/window.js"></script>');
document.write('<script type="text/javascript" src="applications/developer/style.js"></script>');
document.write('<script type="text/javascript" src="applications/developer/script.js"></script>');