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

// return true if the input is a suit, false otherwise.
var isSuit = function (s) {
    return suits.indexOf(s.toLowerCase()) > -1;
};

// return true if the input is a rank, false otherwise.
var isRank = function (r) {
    return ranks.indexOf(r.toLowerCase()) > -1;
};

// return true if the input is a card object, false otherwise.
var isCard = function (c) {
    return typeof c === "object" &&
        typeof c.rank !== "undefined" &&
        typeof c.suit !== "undefined" &&
        isRank(c.rank) && isSuit(c.suit);
};

// return true if the input is a deck of cards (an array of 52 cards
// with no duplicates)
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

// construct a deck of 52 cards that will pass the isDeck method
var createDeck = function () {
    var deck = [];
    suits.forEach(function (suit) {
        ranks.forEach(function (rank) {
            deck.push({ "suit":suit, "rank":rank });
        });
    });
    return deck;
};

// fisher-yates shuffle
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

// return true if the input is an array of 5 valid cards
var isHand = function (h) {
    return Array.isArray(h) &&
        h.length === 5 &&
        h.every(function (card) {
            return isCard(card);
        });
};

// This function should return the first five cards from a shuffled
// deck.
var dealHand = function () {
    return shuffle(createDeck()).slice(0, 5);
};

// This function should accept two card objects, and return true if
// the first card is higher than the second one. The ordering is based
// on the rank first. If the rank of the first card is bigger than the
// rank of the second, the first is always bigger. If the rank is the
// same, then the suit is the tie breaker in this order: clubs,
// diamonds, hearts, spades. In this case, clubs is the lowest suit,
// and spades is the highest. If they are the same rank and suit then
// this function should return false since they are equal.
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

// This function is similar (though not the opposite) of the isHigher
// function.
var isLowerThan = function (first, second) {
    return !isHigherThan(first, second) &&
        (first.rank !== second.rank || first.suit !== second.suit);
};

// Use the isHigher function to find the highest card in an array
// of cards
var highCard = function (hand) {
    return hand.reduce(function (highest, card) {
        return isHigherThan(card, highest) ? card : highest;
    });
};

// Use the isLower function to find the lowest card in an array
// of cards
var lowCard = function (hand) {
    return hand.reduce(function (lowest, card) {
        return isLowerThan(card, lowest) ? card : lowest;
    });
};

// Returns true if the hand contains a pair. Remember -- it returns
// true if the hand *contains* a pair, so if you send in two-pair or
// three-of-a-kind it should still return true. We'll account for that
// later.
var containsPair = function (hand) {
    var counts = countRanks(hand);

    return Object.keys(counts).map(function (rank) {
        return counts[rank];
    }).some(function (count) {
        return count >= 2;
    });
};

// Returns true if the hand contains two-pair
var containsTwoPair = function (hand) {
    var counts = countRanks(hand);

    return Object.keys(counts).filter(function (rank) {
        return counts[rank] >= 2;
    }).length >= 2;
};

// Returns true if the hand contains three-of-a-kind
var containsThreeOfAKind = function (hand) {
    var counts = countRanks(hand);

    return Object.keys(counts).filter(function (rank) {
        return counts[rank] >= 3;
    }).length >= 1;
};

// Returns true if the hand contains any kind of straight, including
// one where the ace is low
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

// Returns true if the hand contains a flush
var containsFlush = function (hand) {
    return hand.map(function (card) {
        return card.suit;
    }).every(function (suit) {
        return suit === hand[0].suit;
    });
};

// Returns true if the hand contains a full house
var containsFullHouse = function (hand) {
    var counts = countRanks(hand);

    var values = Object.keys(counts).map(function (key) {
        return counts[key];
    });

    return values.indexOf(3) > -1 && values.indexOf(2) > -1;
};

// Returns true if the hand contains four-of-a-kind
var containsFourOfAKind = function (hand) {
    var counts = countRanks(hand);

    return Object.keys(counts).filter(function (rank) {
        return counts[rank] >= 4;
    }).length >= 1;
};

// Returns true if the hand contains a straight-flush
var containsStraightFlush = function (hand) {
    return containsFlush(hand) && containsStraight(hand);
};

// Returns true if the hand contains a royal-flush
var containsRoyalFlush = function (hand) {
    return containsStraightFlush(hand) && lowCard(hand).rank === "ten";
};

// Returns a string representing the highest rank a hand has. For
// example, if you send in a full-house, it will contain a pair and a
// three-of-a-kind as well, but a full-house is the highest rank
var highestRank = function (hand) {
    var result = "bust"; // default is bust

    if (containsRoyalFlush(hand)) {
        result = "royal flush";
    } else if (containsStraightFlush(hand)) {
        result = "straight flush";
    } else if (containsFullHouse(hand)) {
        result = "full house";
    } else if (containsFlush(hand)) {
        result = "flush";
    } else if (containsStraight(hand)) {
        result = "straight";
    } else if (containsThreeOfAKind(hand)) {
        result = "three of a kind";
    } else if (containsTwoPair(hand)) {
        result = "two pair";
    } else if (containsPair(hand)) {
        result = "pair";
    }

    return result;
}
