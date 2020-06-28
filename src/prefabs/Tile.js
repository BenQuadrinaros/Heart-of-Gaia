class Tile extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, type, character, misc) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.type = type;
        this.character = character;
        this.misc = misc;
    }

    checkSpot(newChar) {
        if(this.character != null) {
            //fight time
        }
        if(this.character != null && this.character.currentHP <= 0) {
            this.character = null;
        }
        if(this.type = "danger") {
            //survival check
        }
        if(this.type = "special") {
            //perform action
        }
        if(newChar.currentHP > 0) {
            return true;
        } else {
            return false;
        }
    }

    moveTo(newChar) {
        this.character = newChar;
    }

    moveFrom() {
        this.character = null;
    }

    changeType(newType) {
        this.type = newType;
    }
}