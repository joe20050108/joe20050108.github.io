displayWarning("Loading AppKit developement kit.")

var devKitVersion = 0.2;
var inputButton = document.getElementById("submitButton");
var inputWindow = document.getElementById("inputCommand");
var param1Window = document.getElementById("param1");
var param2Window = document.getElementById("param2");
var outputWindow = document.getElementById("outputWindow");

//loads the "interpreters" of sorts
//yeah so uh github hates this
/*loadApplets();
function loadApplets() {
    document.write('<script type="text/javascript" src="js/commandApplets/version.js"></script>');
    document.write('<script type="text/javascript" src="js/commandApplets/nope.js"></script>');
    //command interpreter for feild tiller translator loader
}*/

//execute commands and executecommand event key listeners
inputButton.onclick = executeCommands;
//event handler for keypress
document.addEventListener('keydown', function(event) {
    if (event.key == "Enter") {
        executeCommands();
    }
    if (event.key == "Escape") {
        clear(1,1);
    }
})
//IMPORTANT #######################################
function executeCommands() {
    displayWarning("Executing commands, please wait.");
    input = inputWindow.value;
    param1 = param1Window.value;
    param2 = param2Window.value;
    displayVersion();
    hto();
    openTiller();
    displayOK("Commands executed");
}
/* ######################################### */
//displays the error messages to the devkit console
//this might just need to be added to appKit under the "console" folder
//or just duplicated
function listError(text) {
    sendText("[Error] " + text);
}
function listWarning(text) {
    sendText("[Warning] " + text);
}
function listOK(text) {
    sendText("[OK] " + text);
}

//interpreters 101
function clear() {
    displayWarning("Clearing inputs and outputs.");
    outputWindow.innerHTML = "";
    inputWindow.value = "";
    param1Window.value = "";
    displayOK("Screen cleared");
}

function sendText(text) {
    outputWindow.innerHTML = text;
}

//startup nonsense
displayOK("AppKit Developement Kit loaded.");