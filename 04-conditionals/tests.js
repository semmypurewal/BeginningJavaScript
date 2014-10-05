describe("#passwordStrength", function () {
    it ("should return the appropriate strength on the appropriate input", function () {
        expect(passwordStrength("hello")).toBe("weak");
        expect(passwordStrength("longerpassword")).toBe("strong");
        expect(passwordStrength("helloone")).toBe("medium");
        expect(passwordStrength("0123456789")).toBe("strong");
    });
});

describe("#isLeapYear", function () {
    it ("should return true if the year is a leap year, false otherwise", function () {
        expect(isLeapYear(1988)).toBe(true);
        expect(isLeapYear(2001)).toBe(false);
        expect(isLeapYear(1800)).toBe(false);
        expect(isLeapYear(2000)).toBe(true);
    });

    it ("should throw an input is not a number", function () {
        expect(function () {
            isLeapYear("string!");
        }).toThrow();

        expect(function () {
            isLeapYear(true);
        }).toThrow();
    });
});

describe("#firstInDictionary", function () {
    it ("should return the input that will come first in the dictionary", function () {
        expect(firstInDictionary("rhino", "aardvark", "zebra")).toEqual("aardvark");
        expect(firstInDictionary("whale", "zebra", "yak")).toEqual("whale");
        expect(firstInDictionary("whale", "zebra", "aardvark")).toEqual("aardvark");
    });

    it ("should throw an error if any of the inputs are not strings", function () {
        expect(function () {
            firstInDictionary("whale", 5, 10);
        }).toThrow();
    });
});

describe("#getTagName", function () {
    it ("should return the tag associated with an HTML element", function () {
        expect(getTagName("<p>this is a paragraph</p>")).toEqual("p");
        expect(getTagName("<div>this is a div</div>")).toEqual("div");
    });

    it ("should throw an error if the input is not an HTML element", function () {
        expect(function () {
            getTagName("<p>this is wrong</div>");
        }).toThrow();
    });
});

describe("#isQuestion", function () {
    it ("should return true if the element ends in a question mark", function () {
        expect(isQuestion("is this a question?")).toBe(true);
        expect(isQuestion("not a question")).toBe(false);
    });
});

describe("#magic8Ball", function () {
    it ("should throw an error if the input is not a question", function () {
        expect(function () {
            magic8Ball("you suck");
        }).toThrow();
    });

    it ("should return a string", function () {
        expect(typeof magic8Ball("will I do well in this class?")).toBe("string");
    });

    it ("should return a different message at least some of the time", function () {
        var responses = [];
        var i;

        for (i = 0; i < 10; i++) {
            responses.push(magic8Ball("Is this fun?"));
        }

        expect(responses.every(function (elt) {
            // at least one should not be equal to the first
            return elt === responses[0];
        })).toBe(false);
    });
});

describe("#improveTweet", function () {
});

describe("#interjectAt", function () {
});

describe("#randomInterject", function () {
});
