// simulation goes here

console.log("poker simulation");

var range = function (numA, numB) {
    if (typeof numA !== "number" || typeof numB !== "number") {
        throw "arguments to range must be numbers";
    }

    var increment;
    var i;
    var result = [];

    if (numA <= numB) {
        // we're going up!
        increment = 1;
    } else {
        // we're going down!
        increment = -1;
    }

    // here we keep going, either up or down, until we hit
    // numB
    for (i = numA; i !== numB; i = i + increment) {
        result.push(i);
    }

    // we'll skip numB in the above loop, so we'll push it here.
    result.push(numB);

    return result;
};

var frequencies = function (words) {
    return words.reduce(function (frequencies, word) {
        if (typeof frequencies[word] === "undefined") {
            frequencies[word] = 0;
        }
        frequencies[word] = frequencies[word] + 1;
        return frequencies;
    }, {});
};

var count = 200000;

var freqs = frequencies(range(0, 100000).map(function (elt) {
    return dealHand();
}).map(function (hand) {
    return highestRank(hand);
}));

var probs = Object.keys(freqs).reduce(function (probabilities, key) {
    probabilities[key] = freqs[key]/count;
    return probabilities;
}, {});

console.log(probs);
