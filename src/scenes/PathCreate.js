class PathCreate extends Phaser.Scene {
    constructor() {
        super("pathCreate");

    }

    preload() {
        this.cameras.main.setBackgroundColor("#DDA");

        //load constructing image
        //display constructing image
        
        //load audio files
        this.load.audio("menuSelect", "./assets/menuSelect.wav");
        this.load.audio("wipe", "./assets/wipe.wav");

        //spacers
        this.x1 = game.config.width / 5;
        this.x2 = game.config.width / 2;
        this.x3 = 4 * game.config.width / 5;
        this.y1 = game.config.height / 5;
        this.y2 = 2 * game.config.height / 5;
        this.y3 = 3 * game.config.height / 5;
        this.y4 = 4 * game.config.height / 5

        //text configuration
        this.menuConfig = {
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

        //set up controls
        keyZERO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);
        keyONE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.hasChosen = false;

        //set up display

        //remove constructing image

        //tutorial level
        this.room1 = this.add.text(this.x1, this.y1, "", this.menuConfig).setOrigin(.5);
        this.room2 = this.add.text(this.x2, this.y1, "", this.menuConfig).setOrigin(.5);
        this.room3 = this.add.text(this.x3, this.y1, "", this.menuConfig).setOrigin(.5);
        //this.roomMid = this.add.text(this.x2, this.y2, "", this.menuConfig).setOrigin(.5);
        this.room5 = this.add.text(this.x1, this.y3, "", this.menuConfig).setOrigin(.5);
        this.room6 = this.add.text(this.x2, this.y3, "", this.menuConfig).setOrigin(.5);
        this.room7 = this.add.text(this.x3, this.y3, "", this.menuConfig).setOrigin(.5);
        //this.roomLast = this.add.text(this.x2, this.y2, "", this.menuConfig).setOrigin(.5);

        this.reroll = this.add.text(this.x2, 8.5 * game.config.height / 10, "", this.menuConfig).setOrigin(.5);
        this.confirm = this.add.text(this.x2, 9.25 * game.config.height / 10, "Press [0] to confirm the path.",
            this.menuConfig).setOrigin(.5);
    }

    create() {
        this.path = [];

        //push the training grounds
        this.path.push(null);

        //select basic map
        let grid = fullMaps[Math.floor(Phaser.Math.Between(0, fullMaps.length - 1))];
        let type;
        if (grid[2] != null) {
            type = grid[2];
        } else {
            type = mapTypes[Math.floor(Phaser.Math.Between(0, mapTypes.length - 1))];
        }
        this.path.push([grid, type]);

        //select mini map
        grid = miniRooms[Math.floor(Phaser.Math.Between(0, miniRooms.length - 1))];
        if (grid[2] != null) {
            type = grid[2];
        } else {
            type = mapTypes[Math.floor(Phaser.Math.Between(0, mapTypes.length - 1))];
        }
        this.path.push([grid, type]);

        //select basic map
        grid = fullMaps[Math.floor(Phaser.Math.Between(0, fullMaps.length - 1))];
        if (grid[2] != null) {
            type = grid[2];
        } else {
            type = mapTypes[Math.floor(Phaser.Math.Between(0, mapTypes.length - 1))];
        }
        this.path.push([grid, type]);

        //select midway map
        //this.path.push(map);
        this.path.push(null);

        //select basic map
        grid = fullMaps[Math.floor(Phaser.Math.Between(0, fullMaps.length - 1))];
        if (grid[2] != null) {
            type = grid[2];
        } else {
            type = mapTypes[Math.floor(Phaser.Math.Between(0, mapTypes.length - 1))];
        }
        this.path.push([grid, type]);

        //select mini map
        grid = miniRooms[Math.floor(Phaser.Math.Between(0, miniRooms.length - 1))];
        if (grid[2] != null) {
            type = grid[2];
        } else {
            type = mapTypes[Math.floor(Phaser.Math.Between(0, mapTypes.length - 1))];
        }
        this.path.push([grid, type]);

        //select basic map
        grid = fullMaps[Math.floor(Phaser.Math.Between(0, fullMaps.length - 1))];
        if (grid[2] != null) {
            type = grid[2];
        } else {
            type = mapTypes[Math.floor(Phaser.Math.Between(0, mapTypes.length - 1))];
        }
        this.path.push([grid, type]);

        //generate final chamber
        //this.path.push(map);
        this.path.push(null)

        //update path display with text
        //display training grounds
        this.room1.text = this.path[1][0][0] + " - " + this.path[1][1][0];
        this.room2.text = this.path[2][0][0] + " - " + this.path[2][1][0];
        this.room3.text = this.path[3][0][0] + " - " + this.path[3][1][0];
        //this.roomMid.text = this.path[4][0][0] + " - " + this.path[4][1][0];
        this.room5.text = this.path[5][0][0] + " - " + this.path[5][1][0];
        this.room6.text = this.path[6][0][0] + " - " + this.path[6][1][0];
        this.room7.text = this.path[7][0][0] + " - " + this.path[7][1][0];
        //this.roomLast.text = this.path[8][0][0] + " - " + this.path[8][1][0];

        //display reroll text
        if (game.settings.pathReroll > 0) {
            this.reroll.text = "Press [1] to reroll the path. You can buy more rerolls in the shop. Remaining rerolls: "
                + game.settings.pathReroll;
        } else {
            this.reroll.text = "You have no map rerolls. You can buy them in the shop.";
        }
    }

    update() {
        //if have reroll and reroll, then create()
        if (Phaser.Input.Keyboard.JustDown(keyONE) && !this.hasChosen && game.settings.pathReroll > 0) {
            this.hasChosen = true;
            --game.settings.pathReroll;
            this.sound.play("wipe");
            this.create();
            this.hasChosen = false;
        }

        //if continue, pass path to game.path
        if (Phaser.Input.Keyboard.JustDown(keyZERO) && !this.hasChosen) {
            this.hasChosen = true;
            game.path = this.path;
            this.sound.play("menuSelect");
            //this.sound.play("menuSelect");
            //then move on to first level
            this.time.addEvent({
                delay: 1300,
                callback: () => {
                    currentLevel = 0;
                    this.scene.start("levelScene");
                },
                loop: false,
                callbackScope: this
            });
        }
    }
}