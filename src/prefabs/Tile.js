class Tile extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, type, character) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        

    }

}