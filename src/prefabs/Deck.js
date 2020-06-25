class Deck  {

    constructor(amount) {
        this.affinity = amount;
        this.cards = [];
        this.discard = [];
        for(let i = 1; i <= amount; ++i) {
            this.cards.push(i);
            this.cards.push(i);
        }
        this.shuffle();
    }

    shuffle() {
        let tempDeck = [];
        while(this.cards.length != 0) {
            let i = Math.floor(Phaser.Math.Between(0, this.cards.length));
            tempDeck.push(this.cards[i]);
            this.cards.splice(i, 1);
        }
        this.cards = tempDeck;
    }

    draw(count) {
        let high = -2;
        for(let i = 0; i < count; ++i) {
            let temp = -2;
            if(this.cards.length == 0) {
                temp = -1;
            } else {
                temp = this.cards.pop();
                this.discards.push(temp);
            }
            if(temp > high) {
                high = temp;
            }
        }
        return high;
    }

    refill() {
        while(this.discards.length != 0) {
            this.cards.push(this.discards.pop());
        }
        this.shuffle();
    }

    bump() {
        ++this.affinity;
        this.cards.push(this.affinity);
        this.cards.push(this.affinity);
        this.shuffle();
    }
}