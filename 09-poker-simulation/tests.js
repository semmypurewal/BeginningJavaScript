var deck = [ {"suit":"clubs","rank":"two"},      {"suit":"clubs","rank":"three"},
             {"suit":"clubs","rank":"four"},     {"suit":"clubs","rank":"five"},
             {"suit":"clubs","rank":"six"},      {"suit":"clubs","rank":"seven"},
             {"suit":"clubs","rank":"eight"},    {"suit":"clubs","rank":"nine"},
             {"suit":"clubs","rank":"ten"},      {"suit":"clubs","rank":"jack"},
             {"suit":"clubs","rank":"queen"},    {"suit":"clubs","rank":"king"},
             {"suit":"clubs","rank":"ace"},      {"suit":"diamonds","rank":"two"},
             {"suit":"diamonds","rank":"three"}, {"suit":"diamonds","rank":"four"},
             {"suit":"diamonds","rank":"five"},  {"suit":"diamonds","rank":"six"},
             {"suit":"diamonds","rank":"seven"}, {"suit":"diamonds","rank":"eight"},
             {"suit":"diamonds","rank":"nine"},  {"suit":"diamonds","rank":"ten"},
             {"suit":"diamonds","rank":"jack"},  {"suit":"diamonds","rank":"queen"},
             {"suit":"diamonds","rank":"king"},  {"suit":"diamonds","rank":"ace"},
             {"suit":"hearts","rank":"two"},     {"suit":"hearts","rank":"three"},
             {"suit":"hearts","rank":"four"},    {"suit":"hearts","rank":"five"},
             {"suit":"hearts","rank":"six"},     {"suit":"hearts","rank":"seven"},
             {"suit":"hearts","rank":"eight"},   {"suit":"hearts","rank":"nine"},
             {"suit":"hearts","rank":"ten"},     {"suit":"hearts","rank":"jack"},
             {"suit":"hearts","rank":"queen"},   {"suit":"hearts","rank":"king"},
             {"suit":"hearts","rank":"ace"},     {"suit":"spades","rank":"two"},
             {"suit":"spades","rank":"three"},   {"suit":"spades","rank":"four"},
             {"suit":"spades","rank":"five"},    {"suit":"spades","rank":"six"},
             {"suit":"spades","rank":"seven"},   {"suit":"spades","rank":"eight"},
             {"suit":"spades","rank":"nine"},    {"suit":"spades","rank":"ten"},
             {"suit":"spades","rank":"jack"},    {"suit":"spades","rank":"queen"},
             {"suit":"spades","rank":"king"},    {"suit":"spades","rank":"ace"}];

describe("#isSuit", function () {
    it ("should return true if the input is a valid suit, false otherwise", function () {
        expect(isSuit("hearts")).toBe(true);
        expect(isSuit("coins")).toBe(false);
    });
});

describe("#isRank", function () {
    it ("should return true if the input is a valid rank, false otherwise", function () {
        expect(isRank("one")).toBe(false);
        expect(isRank("ace")).toBe(true);
        expect(isRank("fifty")).toBe(false);
    });
});

describe("#isCard", function () {
    it ("should return true if the input is a card, false otherwise", function () {
        var card1 = { "suit":"clubs", "rank":"ten" };
        var card2 = { "suit":"hearts", "rank":"ace" };

        var notACard1 = "hello world";
        var notACard2 = 3;
        var notACard3 = { "rank":"ace", "suit":"coins" };
        var notACard4 = { "text":"this is a tweet" };

        expect(isCard(5)).toBe(false);
        expect(isCard(card1)).toBe(true);
        expect(isCard(card2)).toBe(true);
        expect(isCard(notACard1)).toBe(false);
        expect(isCard(notACard2)).toBe(false);
        expect(isCard(notACard3)).toBe(false);
        expect(isCard(notACard4)).toBe(false);
    });
});

describe("#isDeck", function () {
    it ("should return true if the deck consists of 52 unique cards", function () {
        expect(isDeck(deck)).toBe(true);
        expect(isDeck([])).toBe(false);
        expect(isDeck({})).toBe(false);
        expect(isDeck(5)).toBe(false);
    });
});

describe("#createDeck", function () {
    it ("should create and return a deck", function () {
        var d = createDeck();
        expect(Array.isArray(d)).toBe(true);
        expect(d.length === 52);
        expect(d.every(function (card, index, deck) {
            return deck.lastIndexOf(card) === index;
        })).toBe(true);
    });
});

describe("#shuffle", function () {
    //console.log(JSON.stringify(isDeck(shuffle(createDeck()))));
});

describe("#isHand", function () {
    //var hand = [];
    //var notAHand = [];
});

describe("#dealHand", function () {
    it ("should return a hand of 5 cards", function () {
        expect(Array.isArray(dealHand())).toBe(true);
        expect(dealHand().length === 5);
        expect(dealHand().every(function (c) {
            return isCard(c);
        })).toBe(true);
    });
});

describe("#isHigherThan", function () {
    it ("should return true if first argument is a higher card than the second", function () {
        expect(isHigherThan({"rank":"five", "suit":"spades"}, {"suit":"hearts", "rank":"six"})).toBe(false);
        expect(isHigherThan({"rank":"five", "suit":"spades"}, {"suit":"hearts", "rank":"five"})).toBe(true);
    });
});

describe("#isLowerThan", function () {
    it ("should return true if first argument is a lower card than the second", function () {
        expect(isLowerThan({"rank":"five", "suit":"spades"}, {"suit":"hearts", "rank":"six"})).toBe(true);
        expect(isLowerThan({"rank":"five", "suit":"spades"}, {"suit":"hearts", "rank":"five"})).toBe(false);
    });
});

describe("#highCard", function () {
    it ("should return the card with the highest rank", function () {
        var hand = [ {"suit":"clubs","rank":"ten"},{"suit":"spades","rank":"three"},
                     {"suit":"clubs","rank":"six"},{"suit":"hearts","rank":"three"},
                     {"suit":"spades","rank":"five"} ] ;
        expect(highCard(hand)).toEqual({"suit":"clubs","rank":"ten"});
    });
});

describe("#lowCard", function () {
        var hand = [ {"suit":"clubs","rank":"ten"},{"suit":"spades","rank":"three"},
                     {"suit":"clubs","rank":"six"},{"suit":"hearts","rank":"three"},
                     {"suit":"spades","rank":"five"} ] ;
    expect(lowCard(hand)).toEqual({"suit":"hearts","rank":"three"});
});

describe("#containsPair", function () {
});

describe("#containsTwoPair", function () {
});

describe("#containsThreeOfAKind", function () {
});

describe("#containsFullHouse", function () {
});

describe("#containsStraight", function () {
});

describe("#containsFlush", function () {
});

describe("#containsStraightFlush", function () {
});

describe("#containsRoyalFlush", function () {
});
