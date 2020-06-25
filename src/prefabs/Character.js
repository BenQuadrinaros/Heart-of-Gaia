class Character extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.setOrigin(.5, 1);

        //retrieve necessary data
        let tempName = names[Math.floor(Phaser.Math.Between(0, names.length - 1))];
        this.class = baseClasses[Math.floor(Phaser.Math.Between(0, baseClasses.length - 1))];
        this.trait = traits[Math.floor(Phaser.Math.Between(0, traits.length - 1))];

        //modify class with trait
        switch (this.trait[1]) {
            case "fame":
                this.class[1] += this.trait[2];
                break;
            case "fortune":
                this.class[2] += this.trait[2];
                break;
            case "weapon":
                this.class[3] += this.trait[2];
                break;
            case "martial":
                this.class[4] += this.trait[2];
                break;
            case "resist":
                this.class[5] += this.trait[2];
                break;
            case "evasive":
                this.class[6] += this.trait[2];
                break;
            case "acuity":
                this.class[7] += this.trait[2];
                break;
            case "prowess":
                this.class[8] += this.trait[2];
                break;
            case "determin":
                this.class[9] += this.trait[2];
                break;
            case "haggle":
                this.class[10] += this.trait[2];
                break;
            case "earth":
                this.class[11] += this.trait[2];
                break;
            case "fire":
                this.class[12] += this.trait[2];
                break;
            case "water":
                this.class[13] += this.trait[2];
                break;
            case "light":
                this.class[14] += this.trait[2];
                break;
            case "air":
                this.class[15] += this.trait[2];
                break;
            case "dark":
                this.class[16] += this.trait[2];
                break;
            default:
        }

        //establish metrics
        this.name = tempName + " the " + this.trait[0];
        this.maxHealth = this.class[4] + this.class[5] + this.class[9];
        if(this.trait[1] == "health") { this.maxHealth += this.trait[2]; }
        this.currentHP = this.maxHealth;

        //establish decks
        this.fameDeck = new Deck(this.class[1]);
        this.fortuneDeck = new Deck(this.class[2]);
        this.weaponDeck = new Deck(this.class[3]);
        this.martialDeck = new Deck(this.class[4]);
        this.resistDeck = new Deck(this.class[5]);
        this.evasiveDeck = new Deck(this.class[6]);
        this.acuityDeck = new Deck(this.class[7]);
        this.prowessDeck = new Deck(this.class[8]);
        this.determinDeck = new Deck(this.class[9]);
        this.haggleDeck = new Deck(this.class[10]);
        this.earthDeck = new Deck(this.class[11]);
        this.fireDeck = new Deck(this.class[12]);
        this.waterDeck = new Deck(this.class[13]);
        this.lightDeck = new Deck(this.class[14]);
        this.airDeck = new Deck(this.class[15]);
        this.darkDeck = new Deck(this.class[16]);

    }

}