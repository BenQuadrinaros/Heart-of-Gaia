class Tile extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, type, character, misc = null) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.type = type;
        this.character = character;
        this.misc = misc;
    }

    update() {
        if (this.character != null && this.character.currentHP <= 0) {
            this.character = null;
        }
    }

    getType() {
        return this.type;
    }
    getEmpty() {
        if (this.character == null) { return true; } else { return false; }
    }

    pokeSpot(char) {
        if (this.character != null) {
            if (newChar == game.player) {
                this.character.interact(newChar)
            } else {
                this.newChar.interact(character)
            }
        }
        if (this.type = "trap") {
            //survival check
        }
        if (this.type = "key") {
            //set key and disable
        }
        if (this.type = "lock") {
            //if not key, override
        }
    }

    moveTo(newChar) {
        this.character = newChar;
    }

    moveFrom() {
        this.character = null;
    }

    getCharacter() {
        return this.character;
    }

    changeType(newType) {
        this.type = newType;
    }

    unlock() {
        if (this.type == "lock") {
            this.setTexture("postLock");
            this.type = "unlock";
        }
    }

    getKey() {
        if(this.type == "key") {
            this.setTexture("postKey");
            this.type = "unkey";
        }
    }
}