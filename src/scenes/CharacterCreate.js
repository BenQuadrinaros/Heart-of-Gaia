class CharacterCreate extends Phaser.Scene {
    constructor() {
        super("characterCreate");
    }

    preload() {
        //load images for all the characters
        this.load.image("image", "./assets/spaceship.png");
        this.load.image("lock", "./assets/reticleF.png");

    }

    create() {
        this.cameras.main.setBackgroundColor("#DDA");

        //menu functionality and key bindings
        this.playerSelect = 0;
        this.hasChosen = false;
        keyONE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        keyTWO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        keyTHREE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESCAPE);

        //spacers
        this.x1 = game.config.width / 5;
        this.x2 = game.config.width / 2;
        this.x3 = 4 * game.config.width / 5;
        this.y1 = game.config.height / 4;
        this.y2 = game.config.height / 2;
        this.y3 = 3 * game.config.height / 4;

        //text configuration
        let menuConfig = {
            fontFamily: "Courier",
            fontSize: "20px",
            color: "#000",
            align: "center",
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
        };

        //confirmation text for selection
        this.confirmText = this.add.text(0, -25, "Select this adventurer?\nPress [" + this.playerSelect + "] to confirm.",
            menuConfig).setOrigin(.5);

        //create characters to select from, slots can be added later to generate more characters
        //character slot 1
        this.char1 = new Character(this, this.x1, this.y2, "image", 0);
        this.add.text(this.x1, this.y1, this.char1.name, menuConfig).setOrigin(.5);
        this.add.text(this.x1, this.y3, this.char1.class[0], menuConfig).setOrigin(.5);
        this.add.text(this.x1, this.y3 + 24, "Press [1] to select.", menuConfig).setOrigin(.5);

        //character slot 2
        if (game.settings.characterSlots >= 2) {
            this.char2 = new Character(this, this.x2, this.y2, "image", 0);
            this.add.text(this.x2, this.y1, this.char2.name, menuConfig).setOrigin(.5);
            this.add.text(this.x2, this.y3, this.char2.class[0], menuConfig).setOrigin(.5);
            this.add.text(this.x2, this.y3 + 24, "Press [2] to select.", menuConfig).setOrigin(.5);
        } else {
            this.add.image(this, this.x2, this.y2, "lock", 0);
            this.add.text(this.x2, this.y1, "Character slot locked.", menuConfig).setOrigin(.5);
            this.add.text(this.x2, this.y3, "Visit the shop to buy.", menuConfig).setOrigin(.5);
            this.add.text(this.x2, this.y3 + 24, "Feature coming soon.", menuConfig).setOrigin(.5);
        }

        //character slot 3
        if (game.settings.characterSlots == 3) {
            this.char3 = new Character(this, this.x3, this.y2, "image", 0);
            this.add.text(this.x3, this.y1, this.char3.name, menuConfig).setOrigin(.5);
            this.add.text(this.x3, this.y3, this.char3.class[0], menuConfig).setOrigin(.5);
            this.add.text(this.x3, this.y3 + 24, "Press [3] to select.", menuConfig).setOrigin(.5);
        } else {
            this.add.image(this, this.x3, this.y2, "lock", 0);
            this.add.text(this.x3, this.y1, "Character slot locked.", menuConfig).setOrigin(.5);
            this.add.text(this.x3, this.y3, "Visit the shop to buy.", menuConfig).setOrigin(.5);
            this.add.text(this.x3, this.y3 + 24, "Feature coming soon.", menuConfig).setOrigin(.5);
        }
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyESC) && !this.hasChosen) {
            this.hasChosen = true;
            //this.sound.play("menuSelect");
            this.time.addEvent({
                delay: 1300,
                callback: () => {
                    this.scene.start("menuScene");
                },
                loop: false,
                callbackScope: this
            });
        }
        if (Phaser.Input.Keyboard.JustDown(keyONE) && !this.hasChosen) {
            //highlight the first character
            if (this.playerSelect == 1) {
                game.player = this.char1;
                this.hasChosen = true;
                this.time.addEvent({
                    delay: 1300,
                    callback: () => {
                        this.scene.start("pathCreate");
                    },
                    loop: false,
                    callbackScope: this
                });
            } else {
                this.playerSelect = 1;
                this.confirmText.x = this.x1;
                this.confirmText.y = this.y3 + 84;
                this.confirmText.text = "Select this adventurer?\nPress [" + this.playerSelect + "] to confirm.";
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyTWO) && game.settings.characterSlots >= 2 && !this.hasChosen) {
            //highlight the first character
            if (this.playerSelect == 2) {
                game.player = this.char2;
                this.hasChosen = true;
                this.time.addEvent({
                    delay: 1300,
                    callback: () => {
                        this.scene.start("pathCreate");
                    },
                    loop: false,
                    callbackScope: this
                });
            } else {
                this.playerSelect = 2;
                this.confirmText.x = this.x2;
                this.confirmText.y = this.y3 + 84;
                this.confirmText.text = "Select this adventurer?\nPress [" + this.playerSelect + "] to confirm.";
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyTHREE) && game.settings.characterSlots == 3 && !this.hasChosen) {
            //highlight the first character
            if (this.playerSelect == 3) {
                game.player = this.char3;
                this.hasChosen = true;
                this.time.addEvent({
                    delay: 1300,
                    callback: () => {
                        this.scene.start("pathCreate");
                    },
                    loop: false,
                    callbackScope: this
                });
            } else {
                this.playerSelect = 3;
                this.confirmText.x = this.x3;
                this.confirmText.y = this.y3 + 84;
                this.confirmText.text = "Select this adventurer?\nPress [" + this.playerSelect + "] to confirm.";
            }
        }
    }

}