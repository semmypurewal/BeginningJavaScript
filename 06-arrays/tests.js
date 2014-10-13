describe("#containsTwice", function () {
    it ("should return true if the first argument (a value) is contained in the second argument (an array)", function () {
        expect(containsTwice(5, [1, 2, 3, 4, 5])).toBe(false);
        expect(containsTwice("hello", [ "hello", "world", "hello" ])).toBe(true);
        expect(containsTwice(true, [ true, false, false, true ])).toBe(true);
        expect(containsTwice(10, [10, 10, 10, 10, 10])).toBe(false);
    });
});

describe("#containsNTimes", function () {
    it ("should return true if the second argument (a value) is contained in the thrid argument (an array) N times, where N is the first argument", function () {
        expect(containsNTimes(3, "hello", [ "hello", "hello", "hello" ])).toBe(true);
        expect(containsNTimes(5, true, [ true, true, true, true, false ])).toBe(false);
        expect(containsNTimes(0, 5, [ 1, 2, 3, 4, 5 ])).toBe(false);
        expect(containsNTimes(3, 5, [ 5, 2, 5, 4, 5 ])).toBe(true);
    });
});

describe("#atLeastOneEven", function () {
    it ("should return true if there is at least one even number in the array", function () {
        expect(atLeastOneEven([ 3, 5, 6, 7, 9 ])).toBe(true);
        expect(atLeastOneEven([])).toBe(false);;
        expect(atLeastOneEven([ 101, 203, 401 ])).toBe(false);
    });

    it ("should throw an error if the input to the function is not an array", function () {
        expect(function () {
            atLeastOneEven("hello");
        }).toThrow();
    });
});

describe("#allStrings", function () {
    it ("should return true if all of the elements in the array are strings", function () {
        expect(allStrings([ "these", "are", "all", "strings" ])).toBe(true);
        expect(allStrings([ "these", "are", "not", 5 ])).toBe(false);
        expect(allStrings([ ])).toBe(true);
    });

    it ("should throw an error if the input to the function is not an array", function () {
        expect(function () {
            allStrings("hello");
        }).toThrow();
    });
});

describe("#containsAnyTwice", function () {
    it ("should return true if any of the values in the first array are contained twice in the second array", function () {
        expect(containsAnyTwice([1, 2], ["hello", 1, "world", 1])).toBe(true);
        expect(containsAnyTwice([], ["always", "will", "return", "false"])).toBe(false);
        expect(containsAnyTwice(["hello", "world"], ["hello", "hello", "world", "world"])).toBe(true);
    });

    it ("should throw an error if either of the arguments are not arrays", function () {
        expect(function () {
            containsAnyTwice("hello", ["hello", "world"]);
        }).toThrow();
    });
});

describe("#getValuesAppearingTwice", function () {
    it ("should return an array that contains the values appearing twice", function () {
        expect(getValuesAppearingTwice(["hello", 1, "world", 1])).toEqual([1]);
        expect(getValuesAppearingTwice(["always", "will", "return", "false"])).toEqual([]);
        expect(getValuesAppearingTwice(["hello", "hello", "world", "world", "goodbye"])).toEqual(["hello", "world"]);
        expect(getValuesAppearingTwice(["hello", "world", "goodbye"])).toEqual([]);
    });
});

describe("#range", function () {
    it ("should return a list of the integers in the given range", function () {
        expect(range(5,10)).toEqual([ 5, 6, 7, 8, 9, 10 ]);
        expect(range(0,3)).toEqual( [ 0, 1, 2, 3 ]);
        expect(range(10,3)).toEqual([ 10, 9, 8, 7, 6, 5, 4, 3 ]);
    });

    it ("should throw an error if either of the arguments are not numbers", function () {
        expect(function () {
            range("hello", "world");
        }).toThrow();
    });
});

describe("#mapToTags", function () {
    it ("should do stuff", function () {
        expect(mapToTags(["<p>this is a paragraph</p>", "<span>this is a span</span>", "<li>this is a list item</li>"])).toEqual(["p", "span", "li"]);
        expect(mapToTags([])).toEqual([]);
    });

    it ("should throw stuff", function () {
        expect(function () {
            mapToTags(["<p>this is a paragraph</p>", "this is a tweet"]);
        }).toThrow();

        expect(function () {
            mapToTags(5);
        }).toThrow();
    });
});

describe("#filterToLol", function () {
    it ("should return those tweets that contain lol", function () {
        expect(filterToLol(["hello world!", "this is a tweet lol", "this is a tweet omg"])).toEqual(["this is a tweet lol"]);
        expect(filterToLol(["lol", "LOL", "LoL", "omg", "lollerskates"])).toEqual(["lol", "LOL", "LoL", "lollerskates"]);
        expect(filterToLol(["omg", "this is a tweet"])).toEqual([]);
    });

    it ("should throw an error if the input is not an array, or if any of the elements are not strings", function () {
        expect(function () {
            filterToLol(5);
        }).toThrow();

        expect(function () {
            filterToLol(["this is a string", false, 5]);
        }).toThrow();
    });
});
