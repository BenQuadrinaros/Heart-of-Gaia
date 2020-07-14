class Merchant extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, properties) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.name = properties[0] + names[Math.floor(Phaser.Math.Between(0, names.length - 1))];

        this.scene = scene;
        this.stat = properties[1];
        this.price = properties[2];
        this.amount = properties[3];
        this.quantity = properties[4];
    }

    interact(character, background) {
        //new Shop(this.scene, x, y, background, 0, this, character);
    }

}