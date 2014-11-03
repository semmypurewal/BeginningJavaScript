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

var bust = [
    {"suit":"clubs","rank":"four"},
    {"suit":"spades","rank":"nine"},
    {"suit":"diamonds","rank":"three"},
    {"suit":"spades","rank":"ace"},
    {"suit":"clubs","rank":"queen"}
];

var pair = [
    {"suit":"clubs","rank":"four"},
    {"suit":"spades","rank":"nine"},
    {"suit":"diamonds","rank":"four"},
    {"suit":"spades","rank":"ace"},
    {"suit":"clubs","rank":"queen"}
];

var twoPair = [
    {"suit":"clubs","rank":"four"},
    {"suit":"spades","rank":"nine"},
    {"suit":"diamonds","rank":"four"},
    {"suit":"spades","rank":"ace"},
    {"suit":"clubs","rank":"nine"}
];

var threeOfAKind = [
    {"suit":"hearts","rank":"four"},
    {"suit":"spades","rank":"nine"},
    {"suit":"diamonds","rank":"four"},
    {"suit":"spades","rank":"ace"},
    {"suit":"clubs","rank":"four"}
];

var straightA = [
    {"suit":"clubs","rank":"four"},
    {"suit":"spades","rank":"two"},
    {"suit":"diamonds","rank":"five"},
    {"suit":"spades","rank":"three"},
    {"suit":"clubs","rank":"six"}
];

var straightB = [
    {"suit":"clubs","rank":"four"},
    {"suit":"spades","rank":"two"},
    {"suit":"diamonds","rank":"five"},
    {"suit":"spades","rank":"three"},
    {"suit":"clubs","rank":"ace"}
];

var flush = [
    {"suit":"diamonds","rank":"four"},
    {"suit":"diamonds","rank":"ace"},
    {"suit":"diamonds","rank":"two"},
    {"suit":"diamonds","rank":"queen"},
    {"suit":"diamonds","rank":"six"}
];

var fullHouse = [
    {"suit":"hearts","rank":"four"},
    {"suit":"spades","rank":"nine"},
    {"suit":"diamonds","rank":"four"},
    {"suit":"diamonds","rank":"nine"},
    {"suit":"clubs","rank":"four"}
];

var fourOfAKind = [
    {"suit":"hearts","rank":"four"},
    {"suit":"spades","rank":"four"},
    {"suit":"diamonds","rank":"four"},
    {"suit":"diamonds","rank":"nine"},
    {"suit":"clubs","rank":"four"}
];

var straightFlush = [
    {"suit":"hearts","rank":"four"},
    {"suit":"hearts","rank":"three"},
    {"suit":"hearts","rank":"two"},
    {"suit":"hearts","rank":"five"},
    {"suit":"hearts","rank":"six"}
];

var royalFlush = [
    {"suit":"hearts","rank":"ten"},
    {"suit":"hearts","rank":"jack"},
    {"suit":"hearts","rank":"queen"},
    {"suit":"hearts","rank":"king"},
    {"suit":"hearts","rank":"ace"}
];

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
        expect(d.length === 52).toBe(true);
        expect(d.every(function (card, index, deck) {
            return deck.lastIndexOf(card) === index;
        })).toBe(true);
    });
});

describe("#shuffle", function () {
    //JSON.stringify(isDeck(shuffle(createDeck())));
});

describe("#isHand", function () {
    var hand = [ deck[0], deck[10], deck[15], deck[4], deck[30] ];
    var notAHand1 = [];
    var notAHand2 = 5;

    it ("should return true if the input is an array of 5 cards", function () {
        expect(isHand(hand)).toBe(true);
        expect(isHand(notAHand1)).toBe(false);
        expect(isHand(notAHand2)).toBe(false);
    });
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
        expect(isHigherThan({"suit":"hearts","rank":"three"}, {"suit":"spades","rank":"three"})).toBe(false);
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
    it ("should return the card with the lowest rank", function () {
        var hand = [ {"suit":"clubs","rank":"ten"},{"suit":"spades","rank":"three"},
                     {"suit":"clubs","rank":"six"},{"suit":"hearts","rank":"three"},
                     {"suit":"spades","rank":"five"} ] ;
        expect(lowCard(hand)).toEqual({"suit":"hearts","rank":"three"});
    });
});

describe("#containsPair", function () {
    it ("should return true if the hand contains a pair, false otherwise", function () {
        expect(containsPair(pair)).toBe(true);
        expect(containsPair(bust)).toBe(false);
    });
});

describe("#containsTwoPair", function () {
    it ("should return true if the hand contains two pair, false otherwise", function () {
        expect(containsTwoPair(twoPair)).toBe(true);
        expect(containsTwoPair(pair)).toBe(false);
        expect(containsTwoPair(bust)).toBe(false);
    });
});

describe("#containsThreeOfAKind", function () {
    it ("should return true if the hand contains three of a kind, false otherwise", function () {
        expect(containsThreeOfAKind(threeOfAKind)).toBe(true);
        expect(containsThreeOfAKind(twoPair)).toBe(false);
        expect(containsThreeOfAKind(bust)).toBe(false);
    });
});

describe("#containsStraight", function () {
    it ("should return true if the hand contains a straight, false otherwise", function () {
        expect(containsStraight(straightA)).toBe(true);
        expect(containsStraight(straightB)).toBe(true);
        expect(containsStraight(fullHouse)).toBe(false);
        expect(containsStraight(threeOfAKind)).toBe(false);
        expect(containsStraight(twoPair)).toBe(false);
        expect(containsStraight(bust)).toBe(false);
    });
});

describe("#containsFlush", function () {
    it ("should return true if the hand contains a flush, false otherwise", function () {
        expect(containsFlush(flush)).toBe(true);
        expect(containsFlush(straightA)).toBe(false);
        expect(containsFlush(fullHouse)).toBe(false);
        expect(containsFlush(threeOfAKind)).toBe(false);
        expect(containsFlush(twoPair)).toBe(false);
        expect(containsFlush(bust)).toBe(false);
    });
});

describe("#containsFullHouse", function () {
    it ("should return true if the hand contains a full house, false otherwise", function () {
        expect(containsFullHouse(fullHouse)).toBe(true);
        expect(containsFullHouse(threeOfAKind)).toBe(false);
        expect(containsFullHouse(twoPair)).toBe(false);
        expect(containsFullHouse(bust)).toBe(false);
    });
});

describe("#containsFourOfAKind", function () {
    it ("should return true if the hand contains a flush, false otherwise", function () {
        expect(containsFourOfAKind(fourOfAKind)).toBe(true);
        expect(containsFourOfAKind(flush)).toBe(false);
        expect(containsFourOfAKind(straightA)).toBe(false);
        expect(containsFourOfAKind(fullHouse)).toBe(false);
        expect(containsFourOfAKind(threeOfAKind)).toBe(false);
        expect(containsFourOfAKind(twoPair)).toBe(false);
        expect(containsFourOfAKind(bust)).toBe(false);
    });
});

describe("#containsStraightFlush", function () {
    it ("should return true if the hand contains a straight flush, false otherwise", function () {
        expect(containsStraightFlush(straightFlush)).toBe(true);
        expect(containsStraightFlush(flush)).toBe(false);
        expect(containsStraightFlush(straightA)).toBe(false);
        expect(containsStraightFlush(fullHouse)).toBe(false);
        expect(containsStraightFlush(threeOfAKind)).toBe(false);
        expect(containsStraightFlush(twoPair)).toBe(false);
        expect(containsStraightFlush(bust)).toBe(false);
    });
});

describe("#containsRoyalFlush", function () {
    it ("should return true if the hand contains a royal flush, false otherwise", function () {
        expect(containsRoyalFlush(royalFlush)).toBe(true);
        expect(containsRoyalFlush(straightFlush)).toBe(false);
        expect(containsRoyalFlush(flush)).toBe(false);
        expect(containsRoyalFlush(straightA)).toBe(false);
        expect(containsRoyalFlush(fullHouse)).toBe(false);
        expect(containsRoyalFlush(threeOfAKind)).toBe(false);
        expect(containsRoyalFlush(twoPair)).toBe(false);
        expect(containsRoyalFlush(bust)).toBe(false);
    });
});

describe("#highestRank", function () {
    it ("should return a string representation of the highest rank the hand has", function () {
        expect(highestRank(royalFlush)).toEqual("royal flush");
        expect(highestRank(straightFlush)).toEqual("straight flush");
        expect(highestRank(flush)).toEqual("flush");
        expect(highestRank(straightA)).toEqual("straight");
        expect(highestRank(straightB)).toEqual("straight");
        expect(highestRank(fullHouse)).toEqual("full house");
        expect(highestRank(threeOfAKind)).toEqual("three of a kind");
        expect(highestRank(twoPair)).toEqual("two pair");
        expect(highestRank(bust)).toEqual("bust");
    });
});
