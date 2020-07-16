class Level extends Phaser.Scene {
    constructor() {
        super("levelScene");

    }

    create() {
        let specs = getSpecs();
        this.map = new BasicMap(this, 0, 0, specs[0], specs[1]);
    }

    update() {

    }

}