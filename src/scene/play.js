//console.log("Hello from play");

class Play extends Phaser.Scene{
    constructor(){
        super("play");
    }

    preload(){
        //this.preload.image("starfield", "../../assets/starField.png")
    }

    create(){
        let borderUISize = config.height / 15;
        this.add.text(150, 240,"this is where the game is played");

        this.add.rectangle(0,0, game.config.width, borderUISize, 0xfacade).setOrigin(0,0);
    }

    update(){
        
    }
}