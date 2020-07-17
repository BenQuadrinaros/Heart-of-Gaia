class Tutorial extends Phaser.Scene {
    constructor() {
        super("tutorialLevel");

    }

    create() {
        let specs = getSpecs();

        //build out map
        this.map = new BasicMap(this, 0, 0, specs[0], specs[1]);
    }

    update() {

    }

}