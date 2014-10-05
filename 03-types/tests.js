describe("#isDivisibleBy3", function () {
    it ("should return true if the number is divisible by 3, false otherwise", function () {
        expect(isDivisibleBy3(3)).toBe(true);
        expect(isDivisibleBy3(5)).toBe(false);
        expect(isDivisibleBy3(36)).toBe(true);
        expect(isDivisibleBy3(0)).toBe(true);
    });
});

describe("#celsToFahr", function () {
    it ("should convert celsius to fahrenheit", function () {
        expect(celsToFahr(100)).toBe(212);
        expect(celsToFahr(30)).toBe(86);
        expect(celsToFahr(0)).toBe(32);
    });
});

describe("#fahrToCels", function () {
    it ("should convert fahrenheit to celsius", function () {
        expect(fahrToCels(212)).toBe(100);
        expect(fahrToCels(86)).toBe(30);
        expect(fahrToCels(32)).toBe(0);
    });
});

describe("#randUpTo", function () {
    it ("should never include the number that is input", function () {
        var i;
        for (i = 0; i < 100; i++) {
            expect(randUpTo(10)).toBeLessThan(10);
        }
    });

    it ("should always be smaller than the number input", function () {
        var i;
        for (i = 0; i < 100; i++) {
            expect(randUpTo(100)).toBeLessThan(100);
        }
    });

    it ("should always be bigger than -1", function () {
        var i;
        for (i = 0; i < 100; i++) {
            expect(randUpTo(1000)).toBeGreaterThan(-1);
        }
    });
});

describe("#randBetween", function () {
    it ("should always be larger than or equal to the low number", function () {
        var i;
        for (i = 0; i < 1000; i++) {
            expect(randBetween(10, 50)).toBeGreaterThan(9);
        }
    });

    it ("should always be less than the high number", function () {
        var i;
        for (i = 0; i < 1000; i++) {
            expect(randBetween(10, 50)).toBeLessThan(50);
        }
    });
});

describe("#isSuit", function () {
    it ("should return true if the input is a suit (case-insensitive), false otherwise", function () {
        expect(isSuit("hearts")).toBe(true);

        expect(isSuit("SPADES")).toBe(true);

        expect(isSuit("coins")).toBe(false);
    });
});

describe("#isRank", function () {
    it ("should return true if the input is a suit (case-insensitive), false otherwise", function () {
        expect(isRank("jack")).toBe(true);

        expect(isRank("Queen")).toBe(true);

        expect(isRank("one")).toBe(false);
    });
});

describe("#isCard", function () {
    it ("should return true if the first argument is a rank and the second argument is a suit", function () {
        expect(isCard("ten", "spades")).toBe(true);
        expect(isCard("ACE", "DIAMONDS")).toBe(true);
        expect(isCard("one", "hearts")).toBe(false);
        expect(isCard("ace", "coins")).toBe(false);
    });
});

describe("#isCapitalized", function () {
    it ("should return true if the input string has a capital first letter, false otherwise", function () {
        expect(isCapitalized("Hello")).toBe(true);
        expect(isCapitalized("goodbye")).toBe(false);
        expect(isCapitalized("Lincoln")).toBe(true);
        expect(isCapitalized("")).toBe(false);
    });
});

describe("#getHTMLText", function () {
    it ("should return the text in a properly formatted HTML element string with no nested tags", function () {
        expect(getHTMLText("<p>this is some text in a paragraph</p>")).toEqual("this is some text in a paragraph");
        expect(getHTMLText("<li>this is a list item</li>")).toEqual("this is a list item");;
    });
});

describe("#isHTMLElement", function () {
    it("should return true if the string represents a valid html element", function () {
        expect(isHTMLElement("<p>this is valid</p>")).toBe(true);
        expect(isHTMLElement("<div>this is valid</div>")).toBe(true);
        expect(isHTMLElement("<p>this is not valid</div>")).toBe(false);
        expect(isHTMLElement("this is not valid</div>")).toBe(false);
        expect(isHTMLElement("this <div>is not valid</div>")).toBe(false);
        expect(isHTMLElement("<div>is not valid<div>")).toBe(false);
        expect(isHTMLElement("<div>is not valid</div")).toBe(false);
    });
});
