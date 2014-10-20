describe("#reverse", function () {
    it ("should return a new array that is the reverse of the input array", function () {
        expect(reverse([ 1, 2, 3, 4, 5 ])).toEqual([ 5, 4, 3, 2, 1]);
        expect(reverse([ "hello", "world" ])).toEqual([ "world", "hello" ]);
        expect(reverse([])).toEqual([]);
    });
});

describe("#flatten", function () {
    it ("should flatten a potentially two-dimensional array", function () {
        expect(flatten([ 1, 2, [ 10, 20 ], 3, 4, 5 ])).toEqual([ 1, 2, 10, 20,  3, 4, 5 ]);
        expect(flatten([ "this", "is", "already", "flat" ])).toEqual([ "this", "is", "already", "flat" ]);
        expect(flatten([])).toEqual([]);
        expect(flatten([ 1, [2, 3], 4, [5, 6, 7], 8 ])).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8 ]);
    });
});

describe("#sumOfMultiplesOf3And5", function () {
    it ("should sum the multiples of 3 and 5 less than or equal to n", function () {
        expect(sumOfMultiplesOf3And5(100)).toBe(2418);
        expect(sumOfMultiplesOf3And5(50)).toBe(593);
        expect(sumOfMultiplesOf3And5(0)).toBe(0);
    });
});

describe("#atLeastOneVowel", function () {
    it ("should return true if the word contains at least one vowel", function () {
        expect(atLeastOneVowel("hello")).toBe(true);
        expect(atLeastOneVowel("dry")).toBe(false);
        expect(atLeastOneVowel("sdfjkl")).toBe(false);
    });
});

describe("#longestAwesomeTweet", function () {
    it ("should return the longest tweet containing 'awesome' or the empty string if no tweets contain 'awesome'", function () {
        expect(longestAwesomeTweet([ "awesome", "longer tweet with awesome", "not awesome", "empty" ])).toEqual("longer tweet with awesome");
        expect(longestAwesomeTweet([ "hello", "world" ])).toEqual("");
    });
});

describe("#elementsToContent", function () {
    it ("should return the text content inside an html tag", function () {
        expect(elementsToContent(["<p>this is a paragraph</p>", "<li>list item</li>", "<a>link!</a>" ]))
            .toEqual([ "this is a paragraph", "list item", "link!" ]);
        expect(elementsToContent([ "<h1>This is an important heading!</h1>", "<h5>this is not as important</h5>" ]))
            .toEqual([ "This is an important heading!", "this is not as important" ]);
    });
});

describe("#randomArray", function () {
    it ("should return an array of random nums with length `length` with rand nums up to `max`", function () {
        var listA = randomArray(10, 100);
        expect(listA.length).toBe(10);
        expect(listA.every(function (number) {
            return number < 100;
        })).toBe(true);

        var listB = randomArray(5, 10);
        expect(listB.length).toBe(5);
        expect(listB.every(function (number) {
            return number < 10;
        })).toBe(true);
    });
});

describe("#randomElements", function () {
    it ("should return n random elements from the given array", function () {
        var colors = [ "red", "orange", "yellow", "green", "blue", "purple", "gray", "black", "white" ];
        var listA = randomElements(colors, 5);
        expect(listA.length).toBe(5);
        expect(listA.every(function (element) {
            return colors.indexOf(element) > -1;
        })).toBe(true);

        var suits = [ "clubs", "diamonds", "hearts", "spades" ];
        var listB = randomElements(suits, 3);

        expect(listB.length).toBe(3);
        expect(listB.every(function (element) {
            return suits.indexOf(element) > -1;
        })).toBe(true);
    });
});
