describe("#isLeapYear", function () {
    it("should return true if the year is a leap year, false otherwise", function () {
        expect(isLeapYear(1988)).toBe(true);
        expect(isLeapYear(2001)).toBe(false);
        expect(isLeapYear(1800)).toBe(false);
        expect(isLeapYear(2000)).toBe(true);
    });

    it("should throw an input is not a number", function () {
        expect(function () {
            isLeapYear("string!");
        }).toThrow();

        expect(function () {
            isLeapYear(true);
        }).toThrow();
    });
});

describe("#passwordStrength", function () {
});

describe("#firstInDictionary", function () {
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
