let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]  //loads scenes in order of listing
}


let game = new Phaser.Game(config);

//keyboard vars
let keyF,keyR,keyLEFT,keyRIGHT;

let borderUISize = game.config.height/15;
let borderPadding = borderUISize/3;