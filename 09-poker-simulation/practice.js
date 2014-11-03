// helper function used throughout
var countRanks = function (hand) {
    return hand.map(function (card) {
        return card.rank;
    }).reduce(function (counts, rank) {
        counts[rank] = typeof counts[rank] === "undefined" ? 1 : counts[rank] + 1;
        return counts;
    }, {});
};

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
    var suit2 = suits.indexOf(second.suit);

    return rank1 > rank2 ||
        (rank1 === rank2 && suit1 > suit2);
};

var isLowerThan = function (first, second) {
    return !isHigherThan(first, second) &&
        (first.rank !== second.rank || first.suit !== second.suit);
};

var highCard = function (hand) {
    return hand.reduce(function (highest, card) {
        return isHigherThan(card, highest) ? card : highest;
    });
};

var lowCard = function (hand) {
    return hand.reduce(function (lowest, card) {
        return isLowerThan(card, lowest) ? card : lowest;
    });
};

var containsPair = function (hand) {
    var counts = countRanks(hand);

    return Object.keys(counts).map(function (rank) {
        return counts[rank];
    }).some(function (count) {
        return count >= 2;
    });
};

var containsTwoPair = function (hand) {
    var counts = countRanks(hand);

    return Object.keys(counts).filter(function (rank) {
        return counts[rank] >= 2;
    }).length >= 2;
};

var containsThreeOfAKind = function (hand) {
    var counts = countRanks(hand);

    return Object.keys(counts).filter(function (rank) {
        return counts[rank] >= 3;
    }).length >= 1;
};

var containsFullHouse = function (hand) {
    var counts = countRanks(hand);

    var values = Object.keys(counts).map(function (key) {
        return counts[key];
    });

    return values.indexOf(3) > -1 && values.indexOf(2) > -1;
};

var containsStraight = function (hand) {
    var nonAces = hand.filter(function (card) {
        return card.rank !== "ace";
    });

    var result = false;

    // first case
    if (!containsPair(hand) && ranks.indexOf(highCard(hand).rank) - ranks.indexOf(lowCard(hand).rank) === 4) {
        result = true;
    } else if (nonAces.length === 4 && !containsPair(nonAces) && highCard(nonAces).rank === "five" && lowCard(nonAces).rank === "two") {
        result = true;
    }

    return result;
};

var containsFlush = function (hand) {
    return hand.map(function (card) {
        return card.suit;
    }).every(function (suit) {
        return suit === hand[0].suit;
    });
};

var containsStraightFlush = function (hand) {
    return containsFlush(hand) && containsStraight(hand);
};

var containsRoyalFlush = function (hand) {
    return containsStraightFlush(hand) && lowCard(hand).rank === "ten";
};

var highestRank = function () {

};
