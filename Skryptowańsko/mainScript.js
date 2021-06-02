var gameManger = new GameManger();

gameManger.display = document.getElementById("console");

var input = document.getElementById("console-input");
var consoleDiv = document.getElementById("console")

input.addEventListener("keyup", function(event) {
    if(event.key == 'Enter') {
        gameManger.InitiateCommand(input.value);
        input.value = "";
    }
});

gameManger.Start();


var input = document.getElementById("console-input");
