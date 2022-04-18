class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x,y, texture, frame){
        super(scene,x,y,texture,frame);
        
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
        this.sfxRocket = scene.sound.add('sfx_rocket');
        this.isP1;
        this.isP2;
    }

    isPlayer2(isP2){
        this.isP1 = !isP2;
        this.isP2 = isP2;
    }

    update(){
        if(!this.isFiring){
            //check if p1 or p2
            if(this.isP1){
                if(keyLEFT.isDown && this.x >= borderUISize + this.width){
                    this.x -= this.moveSpeed;
                }
                else if(keyRIGHT.isDown && this.x <= game.config.width -borderUISize-this.width){
                    this.x += this.moveSpeed;
                }
            }

            else if (this.isP2){
                if(keyA.isDown && this.x >= borderUISize + this.width){
                    this.x -= this.moveSpeed;
                }
                else if(keyD.isDown && this.x <= game.config.width -borderUISize-this.width){
                    this.x += this.moveSpeed;
                }
            }
            
        }

        //if shot
        if(this.isP1){
            if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring){
                this.isFiring = true;
                this.sfxRocket.play();
            }
        }
        
        if(this.isP2){
            if (Phaser.Input.Keyboard.JustDown(keyW) && !this.isFiring){
                this.isFiring = true;
                this.sfxRocket.play();
            }
        }
        //if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.moveSpeed;
        }

        //reset on miss
        if(this.y <= borderUISize * 3 + borderPadding){
            this.reset();
        }
    }

    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}