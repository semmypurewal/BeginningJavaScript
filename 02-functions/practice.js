var add = function (a, b) {
    var sum = a + b;
    return sum;
};

var totalCost = function (quantity, price) {
    var total = quantity * price;
    return total;
};

var cardString = function (rank, suit) {
    var cardString = rank + " of " + suit;
    return cardString;
};

var openTag = function (tag) {
    var open = "<" + tag + ">";
    return open;
};

var closeTag = function (tag) {
    var close = "</" + tag + ">";
    return close;
};

var toTagString = function (tag, content) {
    var result = openTag(tag) + content + closeTag(tag);
    return result;
};


