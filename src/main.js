let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]  //loads scenes in order of listing
}


let game = new Phaser.Game(config);