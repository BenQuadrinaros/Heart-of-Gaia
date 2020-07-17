let currentLevel;

let tutorialSpecs = [
    /*"Training Grounds", "dirt", "tree", "dirt", "dirt",
    ["bramble", "evasive", 1, "once"],
    ["lever1", "lever2"],
    ["heavyDoor1", "heavyDoor2", "martial", 3],
    ["Sparring Dummy", "resist", 1, 10, 1, "passive"],
    "forestBack", "forestInter"*/
    "Test", "white", "black", "green", "red",
    ["blue", "evasive", 3, "once"],
    ["yellow", "orange"],
    ["greyD", "greyL", "martial", 5],
    ["purple", "weapon", 3, 4, 0, "passive"],
    "magenta", "teal"

];

function getSpecs() {
    return game.path[currentLevel];
}