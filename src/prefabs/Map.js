class Map extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, player, grid, properties) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

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

        this.mapTiles = [];

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
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "buff", "buff", null);
                        break;
                    case 6:
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "preKey", "key", null);
                        break;
                    case 7:
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "preLock", "lock", null, properties[7]);
                        break;
                    case 8:
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "open", "open", player)
                    case 9:
                        new Tile(scene, row * 32 + 4, col * 32 + 4, "open", "open", null);
                        break;
                    default:
                }
            }
            this.mapTiles.push(temp);
        }

    }

}