class Ship extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture,frame,pointValue){
        super(scene,x,y,texture,frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;  //pixels/frame
    }

    update(){
        this.x -= this.moveSpeed;
        if(this.x <= 0 -this.width){
            this.reset();
        }
    }

    reset(){
        this.x = game.config.width;
    }

    overwriteSpeed(speed){
        this.moveSpeed = speed;
    }
}