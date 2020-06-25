class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {

    }

    create() {
        this.cameras.main.setBackgroundColor("#DDA");
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.hasChosen = false;

        let menuConfig = {
            fontFamily: "Courier",
            fontSize: "32px",
            color: "#000",
            align: "center",
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
        };

        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;
        let textSpacer = 64;

        // [↑] & [↓]
        this.upper = this.add.text(centerX, centerY - 2.75 * textSpacer, "Press [↑] to hire a new adventurer.",
            menuConfig).setOrigin(.5);
        this.lower = this.add.text(centerX, centerY + 2.75 * textSpacer, "Press [↓] to view the bounty again.",
            menuConfig).setOrigin(.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP) && !this.hasChosen) {
            this.hasChosen = true;
            //this.sound.play("menuSelect");
            this.time.addEvent({
                delay: 1300,
                callback: () => { 
                    this.scene.start("characterCreate");
                },
                loop: false,
                callbackScope: this
            });
        }
    }
}
