class Map extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, name, grid) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);



    }

}