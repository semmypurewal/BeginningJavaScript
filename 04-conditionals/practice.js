var passwordStrength = function (password) {
    var result;

    if (password.length < 7) {
        result = "weak";
    } else if (password.length >= 7 && password.length < 10) {
        result = "medium";
    } else {
        result = "strong";
    }

    return result;
};

// with nested if statements
var isLeapYear = function (year) {
    var result = false;

    if (typeof year !== "number") {
        throw "argument to isLeapYear must bea  number";
    }

    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            result = false;
        } else {
            result = true;
        }
    } else {
        result = false;
    }

    return result;
};

// a flatter version
isLeapYear = function (year) {
    var result = false;

    if (typeof year !== "number") {
        throw "argument to isLeapYear must bea  number";
    }

    if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
        result = false;
    } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        result = true;
    } else if (year % 4 === 0) {
        result = true;
    }

    return result;
};

// the simplest version
isLeapYear = function (year) {
    if (typeof year !== "number") {
        throw "argument to isLeapYear must bea  number";
    }

    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};


// helper function
var isString = function (val) {
    return typeof val === "string";
};

var firstInDictionary = function (a, b, c) {
    if (!isString(a) || !isString(b) || !isString(c)) {
        throw "ALL THREE ARGS MUST BE STRINGS!";
    }

    if (a <= b && a <= c) {
        return a;
    } else if (b <= a && b <= c) {
        return b;
    } else {
        return c;
    }
};

// helper function
var isHTMLElement = function (str) {
    var openTag = str.substring(str.indexOf("<") + 1, str.indexOf(">"));
    var closeTag = str.substring(str.lastIndexOf("</") + 2, str.lastIndexOf(">"));
    return str.charAt(0) === "<" && str.charAt(str.length - 1) === ">" && openTag === closeTag;
};

var getTagName = function (elt) {
    if (!isHTMLElement(elt)) {
        throw "Error: Not an HTML Element!";
    }

    return elt.slice(1, elt.indexOf(">"));
};

var improveTweet = function (tweet) {
    // generate either a 1 or a 0
    var random = Math.floor(Math.random() * 4);
    var result = tweet;
    var expression;

    if (random === 0) {
        expression = "lol";
    } else if (random === 1) {
        expression = "omg";
    } else if (random === 2) {
        expression = "lmao";
    } else {
        expression = "rofl";
    }

    if (result.indexOf(expression) === -1 && result.indexOf(expression.toUpperCase()) === -1) {
        result = result + " " + expression;
    }

    return result;
};

var isQuestion = function (sentence) {
    // this uses the helper string function from the firstInDictionary problem
    return isString(sentence) && sentence.charAt(sentence.length - 1) === "?";
};

var magic8Ball = function (question) {
    if (!isQuestion(question)) {
        throw "THAT DOESN'T SOUND LIKE A QUESTION!";
    }

    var number = Math.floor(Math.random() * 4);
    var result;

    if (number === 0) {
        result = "Yes!";
    } else if (number === 1) {
        result = "Definitely!";
    } else if (number === 2) {
        result = "Maybe...";
    } else if (number === 3) {
        result = "No :(";
    } else {
        // if our rand num generator is right, this
        // should never happen
        throw "Something went horribly wrong!";
    }

    return result;
};

var interjectAt = function (interjection, index, tweet) {
    if (!isString(interjection) || typeof index !== "number" || !isString(tweet)) {
        throw "expected first arg to be a string, second arg to be a number and third arg to be a string";
    }

    if (index > tweet.length - 1) {
        throw "the string doesn't have that many letters!";
    }

    return tweet.slice(0,index) + "-" + interjection + "-" + tweet.slice(index);
};

var randomInterject = function (tweet) {
    if (!isString(tweet)) {
        throw "the input should be a string!";
    }

    // generate 0 or 1
    var randomMsgNum = Math.floor(Math.random() * 2);
    var randomIndex = Math.floor(Math.random() * tweet.length);
    var result;

    if (randomMsgNum === 0) {
        result = interjectAt("-lol-", randomIndex, tweet);
    } else {
        result = interjectAt("-omg-", randomIndex, tweet);
    }

    return result;
};
