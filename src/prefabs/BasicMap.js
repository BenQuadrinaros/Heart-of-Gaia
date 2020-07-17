class BasicMap extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, grid, properties) {
        super(scene, x, y, null, 0);
        scene.add.existing(this);

        this.name = grid[0] + " - " + properties[0];
        this.grid = grid[1];
        console.log("Grid: " + this.grid);
        console.log("Properties: " + properties);

        this.mapTiles = [];
        this.npcs = [];
        this.locks = [];
    }

    preload() {
        //get image keys
        this.load.image("open", "./assets/" + specs[1][1] + ".png");
        this.load.image("closed", "./assets/" + specs[1][2] + ".png");
        this.load.image("exit", "./assets/" + specs[1][3] + ".png");
        this.load.image("return", "./assets/" + specs[1][4] + ".png");
        this.load.image("trap", "./assets/" + specs[1][5][0] + ".png");
        this.load.image("buff", "./assets/chest.png");
        this.load.image("preKey", "./assets/" + specs[1][6][0] + ".png");
        this.load.image("postKey", "./assets/" + specs[1][6][1] + ".png");
        this.load.image("preLock", "./assets/" + specs[1][7][0] + ".png");
        this.load.image("postLock", "./assets/" + specs[1][7][1] + ".png");
        this.load.image("enemy", "./assets/" + specs[1][8][0] + ".png");
        this.load.image("background", "./assets/" + specs[1][9] + ".png");
        this.load.image("interact", "./assets/" + specs[1][10] + ".png");
    }

    create() {
        //establish background
        this.add.tileSprite(0, 0, 36 * this.grid[0].length + 8, 36 * this.grid.length + 8, "background").setOrigin(0, 0);
        
        for (let row = 0; row < this.grid.length; ++row) {
            let temp = [];
            for (let col = 0; col < this.grid[0].length; ++col) {
                //check and build
                switch (this.grid[row][col]) {
                    case 0:
                        new Tile(scene, row * 36 + 4, col * 36 + 4, "open", 0, "open", null);
                        break;
                    case 1:
                        new Tile(scene, row * 36 + 4, col * 36 + 4, "closed", 0, "closed", null);
                        break;
                    case 2:
                        new Tile(scene, row * 36 + 4, col * 36 + 4, "exit", 0, "exit", null);
                        break;
                    case 3:
                        new Tile(scene, row * 36 + 4, col * 36 + 4, "return", 0, "return", null);
                        break;
                    case 4:
                        new Tile(scene, row * 36 + 4, col * 36 + 4, "trap", 0, "trap", null, properties[5]);
                        break;
                    case 5:
                        let random = Phaser.Math.Between(0, 1);
                        let thing;
                        if (random > .6) {
                            let allyProperties = allies[Math.floor(Phaser.Math.Between(0, allies.length - 1))];
                            thing = new Ally(scene, row * 36 + 4, col * 36 + 4, "buff", 0, allyProperties);
                            random = -1;
                        } else if (random > .35) {
                            thing = new Chest(scene, row * 36 + 4, col * 36 + 4, "buff", 0);
                        } else {
                            let merchantProperties = merchants[Math.floor(Phaser.Math.Between(0, merchants.length - 1))];
                            thing = new Merchant(scene, row * 36 + 4, col * 36 + 4, "buff", 0, merchantProperties);
                        }
                        new Tile(scene, row * 36 + 4, col * 36 + 4, "open", 0, "open", thing);
                        break;
                    case 6:
                        new Tile(scene, row * 36 + 4, col * 36 + 4, "preKey", 0, "key", null);
                        break;
                    case 7:
                        new Tile(scene, row * 36 + 4, col * 36 + 4, "preLock", 0, "lock", null, properties[7]);
                        break;
                    case 8:
                        new Tile(scene, row * 36 + 4, col * 36 + 4, "open", 0, "open", game.player)
                    case 9:
                        let grunt = new Grunt(scene, row * 36 + 4, col * 36 + 4, "enemy", 0, properties[8]);
                        new Tile(scene, row * 36 + 4, col * 36 + 4, "open", 0, "open", grunt);
                        this.npcs.push(grunt);
                        break;
                    default:
                }
            }
            this.mapTiles.push(temp);
        }

    }

}