class Chest extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.scene = scene;
    }

    interact(character) {
        //new Shop(this.scene, x, y, background, 0, this, character);
    }

}