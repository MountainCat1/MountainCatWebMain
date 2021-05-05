class GameManger {
    static instance;

    display;

    character;

    commands = {
        "say": this.Say,
        "move": this.Move
    }

    constructor() {
        GameManger.instance = this;
    }

    Start(){
        this.WriteLine("Welcome adventurer!");

        this.character = new Character();
    }

    InitiateCommand(commandText) {
        var commandArray = commandText.split(' ')

        var command = commandArray[0];

        if(command.toLowerCase() in this.commands) {
            var displayPrefix = this.commands[commandArray[0]](commandArray);

            if(displayPrefix)
                this.WriteLine(this.character.GetPrefix())

            console.log("Command: " + command + " initiated.");
        }
        else {
            console.log("Command: " + command + " not itinialized, command doesn't exists.");
        }
    }

    Move(param){
        GameManger.instance.character.MoveByDirection(param[1]);
        return true;
    }

    Say(param) {
        GameManger.instance.WriteLine("You said: " + param);
        return false;
    }

    WriteLine(text) {
        this.display.innerText +=  text + "\n";

        this.display.scrollTop = this.display.scrollHeight
    }

    Write(text){
        this.display.innerText += text;

        this.display.scrollTop = this.display.scrollHeight
    }
}