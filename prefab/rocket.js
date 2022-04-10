class rocket extends Phaser.GameObjects.Sprite(){
    constructor(scene, x,y, texture){
        super(scene,x,x,texture);
        scene.add.existing(this);

    }

    update(){
        if(this.firing){
            this.y -= 10;
        }
    }

    reset(){
        this.y=431;
    }
}