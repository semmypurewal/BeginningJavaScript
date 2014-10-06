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
    it ("should return the number of vowels in a string", function () {
        expect(countVowels("hello world!")).toBe(3);
        expect(countVowels("omg this is a hilarious tweet about nothing")).toBe(16);
        expect(countVowels("")).toBe(0);
    });

    it ("should throw an error if the input is not a string", function () {
        expect(function () {
            countVowels(true);
        }).toThrow();
    });
});

describe("#reverseString", function () {
    it ("should return a new string that is equal to the input string in reverse", function () {
        expect(reverseString("hello world!")).toEqual("!dlrow olleh");
        expect(reverseString("omg this is a hilarious tweet about nothing")).toEqual("gnihton tuoba teewt suoiralih a si siht gmo");
        expect(reverseString("")).toEqual("");
    });


    it ("should throw an error if the input is not a string", function () {
        expect(function () {
            reverseString(true);
        }).toThrow();
    });
});

describe("#isPrime", function () {
    it ("should return true if the input is a prime number, false otherwise", function () {
        expect(isPrime(101)).toBe(true);
        expect(isPrime(13)).toBe(true);
        expect(isPrime(1)).toBe(false);
        expect(isPrime(0)).toBe(false);
        expect(isPrime(2)).toBe(true);
        expect(isPrime("hello")).toBe(false);
        expect(isPrime(-101)).toBe(false);
    });
});

describe("#sumPrimesUpTo", function () {
    it ("should return the sum of all the primes up to and including the input number", function () {
        expect(sumPrimesUpTo(100)).toBe(1060);
        expect(sumPrimesUpTo(0)).toBe(0);
        expect(sumPrimesUpTo(1000)).toBe(76127);
        expect(sumPrimesUpTo(2)).toBe(2);
    });

    it ("should throw an error if the input is not a number", function () {
        expect(function () {
            sumPrimesUpTo("whatever");
        }).toThrow();
    });
});

describe("#sumOfFirstNPrimes", function () {
    it ("should return the sum of the first n primes", function () {
        expect(sumOfFirstNPrimes(10)).toBe(129);
        expect(sumOfFirstNPrimes(100)).toBe(24133);
        expect(sumOfFirstNPrimes(1000)).toBe(3682913);
        expect(sumOfFirstNPrimes(0)).toBe(0);
        expect(sumOfFirstNPrimes(1)).toBe(2);
    });

    it ("should throw an error if the input is not a positive number or zero", function () {
        expect(function () {
            sumOfFirstNPrimes(-10);
        }).toThrow();
    });
});

describe("#removeNonLetters", function () {
    it ("should remove non-letters from the input string", function () {
        expect(removeNonLetters("A man, a plan, a canal, Panama")).toEqual("AmanaplanacanalPanama");
        expect(removeNonLetters("this is a string; it has some punctuation!")).toEqual("thisisastringithassomepunctuation");
    });

    it ("should throw an error if the input is not a string", function () {
        expect(function () {
            removeNonLetters(true);
        }).toThrow();
    });
});

describe("#isPalindrome", function () {
    it ("should return true if the non-punctuated input string is a palindrome, false otherwise", function () {
        expect(isPalindrome("kayak")).toBe(true);
        expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
        expect(isPalindrome("hello world")).toBe(false);
        expect(isPalindrome(5)).toBe(false);
    });
});
