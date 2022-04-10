//console.log("hello from menu");

class Menu extends Phaser.Scene{
    constructor(){
        super('memo');
    }


    create(){
        let menuText = this.add.text(200,240,"menu goes here");
        menuText.setOrigin(0,0);

        this.scene.start('play');
    }
}