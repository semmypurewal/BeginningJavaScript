// helper functions
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

var isVowel = function (letter) {
    var letterLC = letter.toLowerCase();
    return letterLC === "a" || letterLC === "e" || letterLC === "i" || letterLC === "o" || letterLC === "u";
};

var isHTMLElement = function (str) {
    var openTag = str.substring(str.indexOf("<") + 1, str.indexOf(">"));
    var closeTag = str.substring(str.lastIndexOf("</") + 2, str.lastIndexOf(">"));
    return str.charAt(0) === "<" && str.charAt(str.length - 1) === ">" && openTag === closeTag;
};

var getContent = function (htmlElement) {
    if (!isHTMLElement(htmlElement)) {
        throw "not an HTML element!";
    };

    return htmlElement.slice(htmlElement.indexOf(">") + 1, htmlElement.lastIndexOf("</"));
};

var randUpTo = function (n) {
    return Math.floor(Math.random() * n);
};

// In one of the previous sections, we had an practice problem where you had to
// reverse a string. Do the same thing with an array, but use the `reduce` and
// `concat` methods to avoid local variables.
//
//      reverse([ 1, 2, 3, 4, 5 ]);
//      //=> [ 5, 4, 3, 2, 1 ]
//
//      reverse([ "hello", "world" ]);
//      //=> [ "world", "hello" ]
//
var reverse = function (list) {
    return list.reduce(function (reversedList, current) {
        return [ current ].concat(reversedList);
    }, []);
};

// Did you know that you could have arrays within arrays? This is perfectly
// legal JavaScript:
//
//     var nestedArray = [ 1, 2, [ 10, 20 ], 3, 4, 5 ];
//
//     nestedArray[0];
//     //=> 1
//
//     nestedArray[1];
//     //=> 2
//
//     nestedArray[2];
//     //=> [ 10, 20 ]
//
//     nestedArray[2][0];
//     //=> 10
//
// For this problem, write a function using `reduce` that "flattens" a possibly
// nested array into a single array.
//
//     flatten(nestedArray);
//     //=> [ 1, 2, 10, 20,  3, 4, 5 ]
//
//     flatten([ 1, [2, 3], 4, [5, 6, 7], 8 ]);
//     //=> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// You'll also want to use the `concat` method to make this work.
//
var flatten = function (list) {
    return list.reduce(function (flatList, current) {
        return Array.isArray(current) ? flatList.concat(current) : flatList.concat([ current ]);
    }, []);
};

// Using `range` and a chain of array methods, write a function that accepts a
// number `n` and returns the sum of all of the positive multiples of 3 and 5 that
// are smaller than or equal to `n`.
//
//     sumOfMultiplesOf3And5(100);
//     //=> 2418
//
//     sumOfMultiplesOf3And5(50);
//     //=> 593
//
//     sumOfMultiplesOf3And5(0);
//     //=> 0
//
var sumOfMultiplesOf3And5 = function (n) {
    return range(0, n).filter(function (number) {
        return number % 3 === 0 || number % 5 === 0;
    }).reduce(function (sumSoFar, current) {
        return sumSoFar + current;
    });
};

// Write a function called atLeastOneVowel that accepts a string and
// returns true if that word contains at least one vowel. Do not use a
// `for` loop or a `forEach` loop.
//
//     atLeastOneVowel("hello");
//     //=> true
//
//     atLeastOneVowel("dry");
//     //=> false
//
//     atLeastOneVowel("sdfjkl");
//     //=> false
//
var atLeastOneVowel = function (word) {
    return word.toLowerCase().split("").some(isVowel);
};

// Write a function that accepts a list of tweets, and returns the
// longest tweet that contains the word `awesome` or the empty string
// if no tweet contains the word awesome.
//
//     logestAwesomeTweet([ "awesome", "longer tweet with awesome", "not awesome", "empty" ]);
//     //=> "longer tweet with awesome"
//
//     longestAwesomeTweet([ "hello", "world" ]);
//     //=> ""
//
var longestAwesomeTweet = function (tweets) {
    return tweets.filter(function (tweet) {
        return tweet.toLowerCase().indexOf("awesome") > -1;
    }).reduce(function (longestSoFar, current) {
        return current.length > longestSoFar.length ? current : longestSoFar;
    }, "");
};

// Write a function that accepts an array of HTMLElements and returns an
// array of their content.
//
//     elementsToContent(["<p>this is a paragraph</p>", "<li>list item</li>", "<a>link!</a>" ]);
//     //=> [ "this is a paragraph", "list item", "link!" ]
//
//     elementsToContent([ "<h1>This is an important heading!</h1>", "<h5>this is not as important</h5>" ]);
//     //=> [ "This is an important heading!", "this is not as important" ]
//
var elementsToContent = function (list) {
    return list.map(getContent);
};

// In a previous section, we created a function called `randUpTo` that
// returned a random integer up to an upper bound. Using that function
// along with the `range` function, write a method called
// `randomArray` that accepts two numbers, `length`, and `max`. It
// should return an array of length `length` that contains random
// numbers up to the value `max`.
//
//     randomArray(10, 100);
//     //=> [ 56, 32, 4, 92, 73, 75, 11, 10, 26, 4 ]
//
//     randomArray(5, 10);
//     //=> [ 2, 0, 3, 9, 10 ]
//
var randomArray = function (length, max) {
    return range(1, length).map(function (value) {
        return randUpTo(max);
    });
};

// Using the `randomNums` function from above, write a function called
// `randomElements` that accepts an array, and a number, `n` and
// returns a new array that consists of `n` random elements selected
// from the input array. Duplicates are allowed.
//
// randomElements([ "red", "orange", "yellow", "green", "blue", "purple", "gray", "black", "white" ], 5);
// //=> [ "green", "green", "blue", "orange", "black" ]
//
// randomElements([ "clubs", "diamonds", "hearts", "spades" ], 3);
// //=> [ "hearts", "diamonds", "hearts" ]
//
var randomElements = function (items, length) {
    return randomArray(length, items.length).map(function (index) {
        return items[index];
    });
};
