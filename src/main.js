/*
Ben Rowland
Heart of Gaia
DATE

This game is a rouge-like RPG with procedurally generated
characters and changing maps. It serves as a digital 
adaptation to a tabletop roleplaying game, Affinity 
and Aptitude, created by Ben Rowland.

List of names courtesy of Huggies.
*/

let config = {
    type: Phaser.CANVAS,
    width: 1200,
    height: 675,

    scene: [Menu, CharacterCreate, PathCreate, Tutorial, Level]

};

let game = new Phaser.Game(config);

game.settings = {
    characterSlots: 3,
    money: 10,
    pathReroll: 1
};

game.player;
game.path;

//reserve some keyboard variables
let keyUP, keyDOWN, keyLEFT, keyRIGHT, keyR, keyP, keyQ, keyESC;
let keyZERO, keyONE, keyTWO, keyTHREE, keyFOUR, keyFIVE, keySIX, keySEVEN, keyEIGHT, keyNINE;