let baseClasses = [
    //Classes from Dungeons and Dragons 5th Edition
    //Name, Fame, Fortune, 
    //      Weapons, Martial, Resist, Evade,
    //      Acuity, Prowess, Determin, Haggle,
    //      Earth, Fire, Water, Light, Air, Dark
    ["Barbarian", 2, 1,
        4, 3, 3, 2,
        2, 1, 3, 1,
        2, 2, 1, 1, 1, 1],
    ["Cleric", 2, 1,
        3, 2, 3, 1,
        2, 3, 4, 1,
        1, 2, 2, 4, 2, 1],
    ["Druid", 2, 1,
        2, 2, 3, 3,
        4, 3, 3, 1,
        3, 3, 3, 3, 2, 2],
    ["Fighter", 2, 2,
        4, 3, 3, 3,
        1, 2, 2, 2,
        1, 1, 1, 2, 1, 2],
    ["Monk", 1, 1,
        2, 4, 3, 3,
        2, 2, 4, 1,
        2, 2, 2, 2, 2, 2],
    ["Paladin", 2, 2,
        3, 2, 4, 1,
        1, 1, 3, 1,
        2, 2, 2, 3, 2, 3],
    ["Ranger", 2, 1,
        3, 3, 2, 3,
        4, 3, 2, 1,
        3, 2, 3, 2, 3, 2],
    ["Rogue", 2, 4,
        2, 3, 1, 4,
        3, 3, 2, 4,
        1, 1, 1, 1, 2, 2],
    ["Warlock", 2, 2,
        1, 2, 2, 2,
        2, 3, 2, 2,
        1, 2, 1, 2, 1, 4],
    ["Wizard", 2, 3,
        1, 1, 1, 2,
        2, 4, 2, 2,
        3, 3, 3, 3, 3, 3]
];

let advancedClasses = [];

let names = [
    //Names courtesy of Huggies baby names.
    "Adeline", "Ariel", "Abigail", "Averie", "Ava", "Aurora", "Alex", "Austin", "Ace", "Appolo", "Asher",
    "Brielle", "Brooklyn", "Blake", "Belle", "Benson", "Brock", "Baird", "Bennett", "Ben",
    "Crystal", "Cat", "Christopher", "Caleb", "Callum", "Cadence", "Candice",
    "Delilah", "Demi", "Dani", "Danielle", "Desiree", "Dominic", "Dylan", "Daisie",
    "Emma", "Elsa", "Eva", "Ember", "Eli", "Elias", "Eddison", "Emmet", "Em", "Elliot",
    "Fiona", "Felicia", "Faith", "Felicity", "Frankie", "Finn", "Faith",
    "Gabby", "Gabriella", "Gianna", "Gem", "Genevieve", "Garrison", "Garth", "Guy", "Grayson",
    "Hanley", "Harmony", "Harper", "Henry", "Holt",
    "Izzie", "Iris", "Isabel", "Isabella", "Isaiah", "Indy", "Indianna",
    "Juliana", "Jordyn", "Jillian", "Jullian", "Jasmine", "Jaklyn", "Josie", "Jordan", "Jace", "Jamison", "Jack", "Jose", "Jessabelle",
    "Kimberley", "Kya", "Kayla", "Keegan", "Kade", "Kyle",
    "Lily", "Lianna", "Leah", "Lacie", "Lola", "Landon", "Luca", "Lambert", "Lincoln",
    "Merida", "Madeline", "Marcilee", "Mei", "Maddy", "Micah", "Monroe", "Malone", "Mickey", "Mike", "Michael", "Morgan", "Morgana",
    "Nora", "Nadia", "Natalia", "Nat", "Nico", "Nolan", "Niles", "Noah",
    "Orion", "Ophelia", "Olivia", "Oriana", "Oliver",
    "Phoenix", "Priscilla", "Paige", "Polly", "Primrose", "Priss", "Parker", "Paxton",
    "Quinn", "Quentin",
    "Roxy", "Roxanne", "Renee", "Raven", "Remi", "Ramsey", "Rowan",
    "Stacey", "Sam", "Samantha", "Sky", "Snow", "Sawyer", "Samson", "Sebastion", "Siloh", "Seb", "Senna",
    "Tiana", "Tiffany", "Teagan", "Trinity", "Theresa", "Thomas", "Tanner", "Tom",
    "Ursula", "Uriah", "Upton",
    "Vivi", "Victoria", "Venicia", "Valentina", "Venus", "Valentino", "Vicky", "Vance", "Voss", "Vinny",
    "Winona", "Wendy", "Winnie", "Waverly", "Willow", "Wyatt", "Wade",
    "Xia", "Xavier", "Xander",
    "Yasmine", "Ysabelle", "Yesenia", "Yates", "York",
    "Zora", "Zoe", "Zeke", "Zane"
];

let traits = [
    //[Name, stat, amount]
    ["Famous", "fame", 1], ["Fortunate", "fortune", 1], ["Healthy", "health", 2],
    ["Trained", "weapon", 1], ["Martial Artist", "martial", 1], ["Resilient", "resist", 1],
    ["Evasive", "evasive", 1], ["Acute", "acuity", 1], ["Knowledgeable", "prowess", 1],
    ["Determined", "determin", 1], ["Shrewd", "haggle", 1], ["Stone", "earth", 1],
    ["Flame", "fire", 1], ["Wave", "water", 1], ["Sun", "light", 1],
    ["Gale", "wind", 1], ["Moon", "dark", 1]
];

let fullMaps = [
    //0 = open, 1 = closed, 2 = end, 3 = return, 4 = trap, 5 = buff, 6 = key, 7 = lock, 8 = spawn, 9 = enemy
    [
        "The Gorge",
        [
            [0, 5, 5, 0, 0, 0, 9, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [5, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0],
            [5, 0, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 0, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 7, 7, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 4, 4, 1],
            [1, 1, 1, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [1, 1, 1, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 6, 6, 0, 0, 1, 1, 0, 0, 0, 9, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0],
            [3, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 5, 0],
            [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        null
        //["Open Air", "dirt", "pit", "trail", "trail",
        //  ["ledge", "martial", 3],
        //  ["coil", "knot"],
        //  [""pit"", "bridge", "martial", 5],
        //  ["Grunt", "weapon", 3, 4, 4, "aggro"]
        //]
    ]
]

let miniLootRooms = [
    //0 = open, 1 = closed, 2 = end, 3 = return, 4 = trap, 5 = buff, 6 = key, 7 = lock, 8 = spawn, 9 = enemy
    [
        "Trapped Room",
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
            [1, 8, 0, 4, 0, 4, 5, 4, 9, 1],
            [1, 0, 4, 4, 0, 0, 4, 4, 0, 1],
            [1, 4, 0, 5, 4, 0, 0, 0, 4, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        null
    ],
    [
        "Lock and Key",
        [
            [3, 0, 0, 0, 0, 0, 4, 0, 0, 1],
            [0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
            [0, 1, 4, 1, 0, 0, 9, 0, 0, 2],
            [0, 1, 9, 1, 7, 1, 1, 1, 1, 1],
            [0, 1, 6, 1, 0, 0, 0, 7, 5, 5]
        ],
        null
    ],
    [
        "Gauntlet",
        [
            [1, 0, 1, 0, 1, 0, 1, 2, 1, 5],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [3, 8, 9, 0, 9, 5, 9, 0, 9, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 2, 1, 5]
        ],
        null
    ]
    /*[
        "Empty",
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    ]*/
];

let mapTypes = [
    //name, open, closed, exit, return, 
    //[trap, stat, diffculty]
    //[keyPreUse, keyPostUse]
    //[lockPreKey, lockPostKey, override, diffculty]
    //[enemyName, attack, attackAmount, health, vision, AItype]

    /*["Ruins", "tile", "wall", "door", "door",
        ["spikes", "evasive", 3],
        ["lever1", "lever2"],
        ["heavyDoor1", "heavyDoor2", "martial", 5],
        ["Grunt", "weapon", 3, 4, 4, "passive"]
    ],
    ["Swamp", "dirt", "tree", "dirt", "dirt",
        ["muck", "resist", 2],
        ["statue1", "statue2"],
        ["ward", "dirt", "dark", 5],
        ["Witch", "dark", 4, 4, 6, "aggro"]
    ],
    ["Forest", "dirt", "tree", "dirt", "dirt",
        ["bramble", "weapon", 3],
        ["knot1", "knot2"],
        ["trap", "dirt", "evasive", 3]
        ["Wild Boar", "martial", 3, 6, 3, "aggro"]
    ],*/
    ["Test", "white", "black", "green", "red",
        ["orange", "evasive", 3],
        ["yellow", "blue"],
        ["black", "grey", "martial", 5],
        ["purple", "weapon", 3, 4, 0, "passive"]
    ]
];