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
    
});

describe("#isQuestion", function () {
});

describe("#magic8Ball", function () {
});

describe("#improveTweet", function () {
});

describe("#interjectAt", function () {
});

describe("#randomInterject", function () {
});
