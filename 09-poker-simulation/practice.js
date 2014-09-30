var suits = ["clubs", "diamonds", "hearts", "spades"];
var ranks = ["two", "three", "four", "five", "six", "seven", "eight",
             "nine", "ten", "jack", "queen", "king", "ace"];

var isSuit = function (s) {
    return suits.indexOf(s.toLowerCase()) > -1;
};

var isRank = function (r) {
    return ranks.indexOf(r.toLowerCase()) > -1;
};

var isCard = function (c) {
    return typeof c === "object" &&
        typeof c.rank !== "undefined" &&
        typeof c.suit !== "undefined" &&
        isRank(c.rank) && isSuit(c.suit);
};

var isDeck = function (d) {
    return Array.isArray(d) &&
        d.length === 52 &&
        d.every(function (card) {
            return isCard(card);
        }) &&
        Array.isArray(d) && d.every(function (card, index, deck) {
            return deck.lastIndexOf(card) === index;
        });;
};

var createDeck = function () {
    var deck = [];
    suits.forEach(function (suit) {
        ranks.forEach(function (rank) {
            deck.push({ "suit":suit, "rank":rank });
        });
    });
    return deck;
};

var shuffle = function (d) {
    var i, j, temp;

    if (!isDeck(d)) {
        throw "not a deck!";
    }

    // fisher-yates shuffle
    for (i = 0; i < d.length; i++) {
        j = Math.floor(Math.random() * (d.length-i)) + i;
        temp = d[i];
        d[i] = d[j];
        d[j] = temp;
    }

    return d;
};

var isHand = function (h) {
    return Array.isArray(h) &&
        h.length === 5 &&
        h.every(function (card) {
            return isCard(card);
        });
};

var dealHand = function () {
    return shuffle(createDeck()).slice(0, 5);
};

var isHigherThan = function (first, second) {
    if (!isCard(first) || !isCard(second)) {
        throw "inputs must be cards!";
    }

    var rank1 = ranks.indexOf(first.rank);
    var rank2 = ranks.indexOf(second.rank);
    var suit1 = suits.indexOf(first.suit);
    var suit2 = suits.indexOf(second.rank);

    return rank1 > rank2 ||
        (rank1 === rank2 && suit1 > suit2);
};

var isLowerThan = function (first, second) {
    return !isHigherThan(first, second) &&
        (first.rank !== second.rank || first.suit !== second.suit);
};

var highCard = function (hand) {
    if (!isHand(hand)) {
        throw "input should be a hand!";
    }

    return hand.reduce(function (highest, card) {
        return isHigherThan(card, highest) ? card : highest;
    });
};

var lowCard = function (hand) {
    if (!isHand(hand)) {
        throw "input should be a hand!";
    }

    return hand.reduce(function (lowest, card) {
        return isLowerThan(card, lowest) ? card : lowest;
    });
};

var containsPair = function () {
};

var containsTwoPair = function () {
};

var containsThreeOfAKind = function () {
};

var containsFullHouse = function () {
};

var containsStraight = function () {
};

var containsFlush = function () {
};

var containsStraightFlush = function () {
};

var containsRoyalFlush = function () {
};

