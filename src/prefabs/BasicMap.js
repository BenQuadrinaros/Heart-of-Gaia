class BasicMap extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, grid, properties) {

        if (grid[2] != null) { properties = grid[2]; }

        this.name = grid[0] + " - " + properties[0];
        this.grid = grid[1];
        this.load.image("open", "./assets/" + properties[1] + ".png");
        this.load.image("closed", "./assets/" + properties[2] + ".png");
        this.load.image("exit", "./assets/" + properties[3] + ".png");
        this.load.image("return", "./assets/" + properties[4] + ".png");
        this.load.image("trap", "./assets/" + properties[5][0] + ".png");
        this.load.image("buff", "./assets/chest.png");
        this.load.image("preKey", "./assets/" + properties[6][0] + ".png");
        this.load.image("postKey", "./assets/" + properties[6][1] + ".png");
        this.load.image("preLock", "./assets/" + properties[7][0] + ".png");
        this.load.image("postLock", "./assets/" + properties[7][1] + ".png");
        this.load.image("enemy", "./assets/" + properties[8][0] + ".png");
        this.load.image("background", "./assets/" + properties[9] + ".png");
        this.load.image("interact", "./assets/" + properties[10] + ".png");

        super(scene, x, y, "background", frame);
        scene.add.existing(this);

        this.add.tileSprite(0, 0, 36 * this.grid[0].length, 36 * this.grid.length, "background").setOrigin(0, 0);

        this.mapTiles = [];
        this.npcs = [];

        for (let row = 0; row < this.grid.length; ++row) {
            let temp = [];
            for (let col = 0; col < this.grid[0].length; ++col) {
                //check and build
                switch (this.grid[row][col]) {
                    case 0:
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "open", "open", null);
                        break;
                    case 1:
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "closed", "closed", null);
                        break;
                    case 2:
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "exit", "exit", null);
                        break;
                    case 3:
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "return", "return", null);
                        break;
                    case 4:
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "trap", "trap", null, properties[5]);
                        break;
                    case 5:
                        let random = Phaser.Math.Between(0, 1);
                        let thing;
                        if (random > .6) {
                            let allyProperties = allies[Math.floor(Phaser.Math.Between(0, allies.length - 1))];
                            thing = new Ally(scene, row * 32 + 4, col * 32 + 4, texture, 0, allyProperties);
                            random = -1;
                        } else if (random > .35) {
                            thing = new Chest(scene, row * 32 + 4, col * 32 + 4, texture, 0);
                        } else {
                            let merchantProperties = merchants[Math.floor(Phaser.Math.Between(0, merchants.length - 1))];
                            thing = new Merchant(scene, row * 32 + 4, col * 32 + 4, texture, 0, merchantProperties);
                        }
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "open", "open", thing);
                        break;
                    case 6:
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "preKey", "key", null);
                        break;
                    case 7:
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "preLock", "lock", null, properties[7]);
                        break;
                    case 8:
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "open", "open", game.player)
                    case 9:
                        let grunt = new Grunt(scene, row * 32 + 4, col * 32 + 4, "enemy", 0, properties[8]);
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "open", "open", grunt);
                        this.npcs.push(grunt);
                        break;
                    default:
                }
            }
            this.mapTiles.push(temp);
        }

    }

}