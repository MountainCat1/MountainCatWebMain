class Character {
    position = new Vector3(0, 0, 0);

    MoveByDirection(direction){
        direction = direction.toLowerCase();
        switch(direction){
            case "n":
                this.Move(new Vector3(0, 1));
                break;
            case "s":
                this.Move(new Vector3(0, -1));
                break;
            case "e":
                this.Move(new Vector3(1, 0));
                break;
            case "w":
                this.Move(new Vector3(-1, 0));
                break;
        }
    }

    Move(direction){
        this.position.x += direction.x;
        this.position.y += direction.y;
        this.position.z += direction.z;
    }

    GetPrefix(){
        return this.position.x + " " + this.position.y + ">";
    }
}



class Vector3 {
    x = 0;
    y = 0;
    z = 0;

    constructor(x, y, z = 0){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

