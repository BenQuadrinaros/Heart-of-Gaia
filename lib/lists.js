let baseClasses = [
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

let mapGrids = [
    
];