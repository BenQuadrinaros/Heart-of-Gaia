class Tile extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, type, character, misc = null) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.type = type;
        this.character = character;
        this.misc = misc;
    }

    getType() {
        return this.type;
    }
    getEmpty() {
        if(this.character == null) { return true; } else { return false; }
    }

    moveToSpot(newChar) {
        if(this.character != null) {
            //fight time
        }
        if(this.character != null && this.character.currentHP <= 0) {
            this.character = null;
        }
        if(this.type = "trap") {
            //survival check
        }
        if(this.type = "buff") {
            //increase deck
        }
        if(this.type = "key") {
            //set key and disable
        }
        if(this.type = "lock") {
            //if key, go
            //if not key, override
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