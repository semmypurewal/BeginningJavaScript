var isDivisibleBy3 = function (val) {
    return val % 3 === 0;
};

var celsToFahr = function (f) {
    return (9/5) * f + 32;
};

var fahrToCels = function (c) {
    return (c - 32) * (5/9);
};

var randUpTo = function (n) {
    return Math.floor(Math.random() * n);
};

var randBetween = function (a, b) {
    return Math.floor(Math.random() * (b - a) + a);
};

var isSuit = function (s) {
    var lowerCaseSuit = s.toLowerCase();
    return lowerCaseSuit === "hearts" ||
        lowerCaseSuit === "spades" ||
        lowerCaseSuit === "clubs" ||
        lowerCaseSuit === "diamonds";
};

var isRank = function (r) {
    var lowerCaseRank = r.toLowerCase();
    return lowerCaseRank === "two" ||
        lowerCaseRank === "three" ||
        lowerCaseRank === "four" ||
        lowerCaseRank === "five" ||
        lowerCaseRank === "six" ||
        lowerCaseRank === "seven" ||
        lowerCaseRank === "eight" ||
        lowerCaseRank === "nine" ||
        lowerCaseRank === "ten" ||
        lowerCaseRank === "jack" ||
        lowerCaseRank === "queen" ||
        lowerCaseRank === "king" ||
        lowerCaseRank === "ace";
};

var isCard = function () {
};

var getHTMLText = function () {
};

var isHTMLElement = function () {
};
