describe("#isVowel", function () {
    it ("should return true if the argument is a vowel, false otherwise", function () {
        expect(isVowel("a")).toBe(true);
        expect(isVowel("E")).toBe(true);
        expect(isVowel(1)).toBe(false);
        expect(isVowel("Ea")).toBe(false);
        expect(isVowel("Y")).toBe(false);
    });
});

describe("#isLowerCaseLetter", function () {
    it ("should return true if the argument is a lower-case letter, false otherwise", function () {
        expect(isLowerCaseLetter("a")).toBe(true);
        expect(isLowerCaseLetter("A")).toBe(false);
        expect(isLowerCaseLetter(1)).toBe(false);
        expect(isLowerCaseLetter("ae")).toBe(false);
        expect(isLowerCaseLetter(true)).toBe(false);
    });
});

describe("#sumUpTo", function () {
    it ("should return the sum from zero to the input argument", function () {
        expect(sumUpTo(100)).toEqual(5050);
        expect(sumUpTo(10)).toEqual(55);
        expect(sumUpTo(0)).toEqual(0);;
    });

    it ("should throw an error if the input is not a number or is negative", function () {
        expect(function () {
            sumUpTo(-10);
        }).toThrow();
    });
});

describe("#sumAToB", function () {
    it ("should sum all of the values between the two input arguments, inclusive", function () {
        expect(sumAToB(10, 20)).toBe(165);
        expect(sumAToB(0, -15)).toBe(-120);
        expect(sumAToB(-10, 500)).toBe(125195);
        expect(sumAToB(10, 10)).toBe(10);
    });

    it ("should throw an error if the either of the inputs are not numbers", function () {
        expect(function () {
            sumAToB("hello", "world");
        }).toThrow();
    });
});

describe("#countVowels", function () {
});

describe("#isPrime", function () {
});

describe("#sumPrimesUpTo", function () {
});

describe("#sumOfFirstNPrimes", function () {
});

describe("#removeNonLetters", function () {
});

describe("#isPalindrome", function () {
});
