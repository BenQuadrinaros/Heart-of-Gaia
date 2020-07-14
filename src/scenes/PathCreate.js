class PathCreate extends Phaser.Scene {
    constructor() {
        super("pathCreate");

    }

    preload() {
        //load constructing image
        //display constructing image
    }

    create() {
        let path = [];

        //select basic map
        let grid = fullMaps[Math.floor(Phaser.Math.Between(0, fullMaps.length - 1))];
        let type;
        if(grid[2] != null) {
            type = grid[2];
        } else {
            type = mapTypes[Math.floor(Phaser.Math.Between(0, mapTypes.length - 1))];
        }
        path.push([grid, type]);

        //select mini map
        grid = miniRooms[Math.floor(Phaser.Math.Between(0, miniRooms.length - 1))];
        if(grid[2] != null) {
            type = grid[2];
        } else {
            type = mapTypes[Math.floor(Phaser.Math.Between(0, mapTypes.length - 1))];
        }
        path.push([grid, type]);

        //select basic map
        grid = fullMaps[Math.floor(Phaser.Math.Between(0, fullMaps.length - 1))];
        if(grid[2] != null) {
            type = grid[2];
        } else {
            type = mapTypes[Math.floor(Phaser.Math.Between(0, mapTypes.length - 1))];
        }
        path.push([grid, type]);

        //select midway map
        //this.path.push(map);
        
        //select basic map
        grid = fullMaps[Math.floor(Phaser.Math.Between(0, fullMaps.length - 1))];
        if(grid[2] != null) {
            type = grid[2];
        } else {
            type = mapTypes[Math.floor(Phaser.Math.Between(0, mapTypes.length - 1))];
        }
        path.push([grid, type]);

        //select mini map
        grid = miniRooms[Math.floor(Phaser.Math.Between(0, miniRooms.length - 1))];
        if(grid[2] != null) {
            type = grid[2];
        } else {
            type = mapTypes[Math.floor(Phaser.Math.Between(0, mapTypes.length - 1))];
        }
        path.push([grid, type]);

        //select basic map
        grid = fullMaps[Math.floor(Phaser.Math.Between(0, fullMaps.length - 1))];
        if(grid[2] != null) {
            type = grid[2];
        } else {
            type = mapTypes[Math.floor(Phaser.Math.Between(0, mapTypes.length - 1))];
        }
        path.push([grid, type]);

        //generate final chamber
        //this.path.push(map);

        //display map
        let room1 = this.add.text();

        //display reroll text
    }

    update() {
        //if have reroll and reroll, then create()

        //if continue, pass path to game.path
        //then move on to first level
    }
}