class Map extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, grid, properties) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.name = grid[0] + " - " + properties[0];
        this.grid = grid[1];
        this.load.image("open", "./assets/"+properties[1]+".png");
        this.load.image("closed", "./assets/"+properties[2]+".png");
        this.load.image("exit", "./assets/"+properties[3]+".png");
        this.load.image("return", "./assets/"+properties[4]+".png");
        this.load.image("trap", "./assets/"+properties[5][0]+".png");
        this.load.image("buff", "./assets/"+properties[6][0]+".png");
        this.load.image("preKey", "./assets/"+properties[7][0]+".png");
        this.load.image("postKey", "./assets/"+properties[7][1]+".png");
        this.load.image("preLock", "./assets/"+properties[8][0]+".png");
        this.load.image("postLock", "./assets/"+properties[8][1]+".png");
        this.load.image("enemy", "./assets/"+properties[9][0]+".png");

        this.mapTiles = [];

        for(let row = 0; row < 10; ++row) {
            let temp = [];
            for(let col = 0; col < grid[0].length; ++col) {
                //check and build
            }
            this.mapTiles.push(temp);
        }

    }

}