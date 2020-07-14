class Grunt extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, properties) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.name = properties[0] + names[Math.floor(Phaser.Math.Between(0, names.length - 1))];

        this.scene = scene;
        this.attackType = properties[1];
        this.deck = new Deck(properties[2]);
        this.maxHealth = properties[3];
        this.currentHP = this.maxHealth;
        this.vision = properties[4];
        this.aiType = properties[5];
    }

    interact(character, background) {
        //new Fight(this.scene, x, y, background, 0, this, character);
    }

    act(character) {
        //search for player
        //if in range, act
    }

}