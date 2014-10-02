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
});

describe("#getHTMLText", function () {
});

describe("#isHTMLElement", function () {
});
