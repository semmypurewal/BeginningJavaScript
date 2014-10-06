// Write a function called `isVowel` that returns `true` if the input is a
// single character and either an upper or lower-case a, e, i, o, or
// u. It should return false otherwise.
//
//    isVowel("a");
//    //=> true
//
//    isVowel("E");
//    //=> true
//
//    isVowel(1);
//    //=> false
//
//    isVowel("Ea");
//    //=> false
//
//    isVowel("Y");
//    //=> false
//
var isVowel = function (str) {
    var result = false;
    var lcStr;

    if (typeof str === "string" && str.length === 1) {
        lcStr = str.toLowerCase();
        result = lcStr === "a" || lcStr === "e" || lcStr === "i" ||
                 lcStr === "o" || lcStr === "u";
    }
    return result;
};


// Write a function called `isLowerCaseLetter` that returns `true` if
// the input is a single letter and lower-case. It should return false otherwise.
//
//    isLowerCaseLetter("a");
//    //=> true
//
//    isLowerCaseLetter("A");
//    //=> false
//
//    isLowerCaseLetter(1);
//    //=> false
//
//    isLowerCaseLetter("ae");
//    //=> false
//
//    isLowerCaseLetter(true);
//    //=> false
//
var isLowerCaseLetter = function (str) {
    return typeof str === "string" && str.length === 1 && "a" <= str && str <= "z";
};


// Write a function called `sumUpTo` so that it accepts a positive number `n`
// and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
// it should sum the numbers 1 through 5 inclusive. It should throw an error if the
// input number is negative.
//     sumUpTo(100);
//     //=> 5050
//
//     sumUpTo(10);
//     //=> 55
//
//     sumUpTo(0);
//     //=> 0
//
//     sumUpTo(-10);
//     //=> input must be zero or a positive number!
//
var sumUpTo = function (n) {
    if (typeof n !== "number" || n < 0) {
        throw "input must be zero or a positive number!";
    }

    var sum = 0;
    var currentNumber = 0;

    for (currentNumber = 0; currentNumber <= n; currentNumber = currentNumber + 1) {
        sum = sum + currentNumber;
    }

    return sum;
};


// Write a function called `sumAToB` so that it accepts two parameters
// `a` and `b` and sums the numbers between `a` and `b` inclusive. Note
// that `a` may be larger than `b`, in which case you'll need to work
// backawards.
//
//     sumAToB(10, 20);
//     //=> 165
//
//     sumAToB(0, -15);
//     //=> 120
//
//     sumAToB(-10, 500);
//     //=> 125195
//
//     sumAToB(10, 10);
//     //=> 10
//
//     sumAToB("hello", "world");
//     //=> inputs should be numbers!
//
var sumAToB = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw "inputs should be numbers!";
    }

    var sum = 0;
    var start;
    var end;
    var number;

    if (a < b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }

    for (number = start; number <= end; number = number + 1) {
        sum = sum + number;
    }

    return sum;
};


// Write a function called `countVowels` that accepts a string and
// returns the number of vowels contained in that string. You'll want
// to use the `isVowel` helper function from above. It should throw an
// error if the input is not a string
//
//     countVowels("hello world!");
//     //=> 3
//
//     countVowels("omg this is a hilarious tweet about nothing");
//     //=> 16
//
//     countVowels("");
//     //=> 0
//
//     countVowels(true);
//     //=> input to countVowels must be a string!
//
var countVowels = function (str) {
    if (typeof str !== "string") {
        throw "input to countVowels must be a string!";
    }

    var numVowels = 0;
    var index;

    for (index = 0; index < str.length; index = index + 1) {
        if (isVowel(str.charAt(index))) {
            numVowels = numVowels + 1;
        }
    }

    return numVowels;
};


// Write a function that accepts a string and returns the same string, only in
// reverse!
//
//     reverse("hello world!");
//     //=> !dlrow olleh
//
//     reverse("omg this is a hilarious tweet about nothing");
//     //=> gnihton tuoba teewt suoiralih a si siht gmo
//
//     reverse("");
//     //=>
//
//     reverse(true);
//     //=> input to reverseString must be an string!
//

var reverseString = function (str) {
    if (typeof str !== "string") {
        throw "input to reverseString must be an string!";
    }

    var reversed = "";
    var index;

    for (index = str.length - 1; index >= 0; index = index - 1) {
        reversed = reversed + str.charAt(index);
    }

    return reversed;
};


// A number is a prime number if it is only evenly divisible by 1 and itself
// (although we don't consider 1 a prime number, so 2 is the first prime
// number). Write a function called `isPrime` that accepts a number `p` as an
// argument and returns `true` if it is prime, `false` otherwise.
//
//     isPrime(101);
//     //=> true
//
//     isPrime(13);
//     //=> true
//
//     isPrime(1);
//     //=> false
//
//     isPrime(2);
//     //=> true
//
//     isPrime("hello");
//     //=> false
//
//     isPrime(-101);
//     //=> false
//
var isPrime = function (n) {
    // assume true until we find evidence to the contrary
    var result = true;
    var div;

    if (typeof n !== "number") {
        result = false;
    }

    if (n < 2) {
        result = false;
    }

    // we'll break out as soon as we find a factor
    for (div = 2; div < n && result === true; div = div + 1) {
        if (n % div === 0) {
            result = false;
        }
    }
    return result;
};


// Using the `isPrime` function, write a function that accepts a number as
// input sums all the primes smaller than that number.
//
//     sumPrimesUpTo(100);
//     //=> 1060
//
//     sumPrimesUpTo(0);
//     //=> 0
//
//     sumPrimesUpTo(1000);
//     //=> 76127
//
//     sumPrimesUpTo(2);
//     //=> 2
//
//     sumPrimesUpTo("whatever");
//     //=> input should be a number
//
var sumPrimesUpTo = function (n) {
    if (typeof n !== "number") {
        throw "input should be a number";
    }

    var sum = 0;
    var number;

    for (number = 0; number <= n; number = number + 1) {
        if (isPrime(number)) {
            sum = sum + number;
        }
    };

    return sum;
};


// Using the `isPrime` function, write a function that takes in a
// positive integer, n, and returns the first n numbers.
//
//     sumOfFirstNPrimes(10);
//     //=> 160
//
//     sumOfFirstNPrimes(100);
//     //=> 24680
//
//     sumOfFirstNPrimes(1000);
//     //=> 3690840
//
//     sumOfFirstNPrimes(0);
//     //=> 0
//
//     sumOfFirstNPrimes(-10);
//     //=> input number should be zero or a positive number!
//
var sumOfFirstNPrimes = function (n) {
    if (typeof n !== "number" || n < 0) {
        throw "input number should be zero or a positive number!";
    }

    var primeCount = 0;
    var sum = 0;
    var number;

    for (number = 0; primeCount < n; number = number + 1) {
        if (isPrime(number)) {
            sum = sum + number;
            primeCount = primeCount + 1;
        }
    }

    return sum;
};


// A _palindrome_ is a string that reads the same forwards and backwards. Write
// a function that accepts a string of arbitrary letters, numbers, and symbols, and
// returns true if it's a palindrome. For example:
//
//      isPalindrome("kayak");
//      //=> true
//
//      isPalindrome("A man, a plan, a canal, Panama");
//      //=> true
//
//      isPalindrome("hello world");
//      //=> false
//
//      isPalindrome(5);
//      //=> false, a number is not a palindrome
//
// Let's start by writing a function to remove all non-letter characters
// from the input.
//
//     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
//     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation
//
//     removeNonLetters(true);
//     //=> input to removeNonLetters should be a string!
//
var isLetter = function (str) {
    return str.length === 1 && ("a" <= str && str <= "z") || ("A" <= str && str <= "Z");
};

var removeNonLetters = function (str) {
    if (typeof str !== "string") {
        throw "input to removeNonLetters should be a string!";
    }

    var result = "";
    var index;

    for (index = 0; index < str.length; index = index + 1) {
        if (isLetter(str.charAt(index))) {
            result = result + str.charAt(index);
        }
    }

    return result;
};


// Now use `removeNonLetters`, along with the `reverse` function from above to
// determine if the string is a palindrome.
var isPalindrome = function (str) {
    var result;
    var onlyLettersLC;

    if (typeof str !== "string") {
        result = false;
    } else {
        onlyLettersLC = removeNonLetters(str).toLowerCase();
        result = onlyLettersLC === reverseString(onlyLettersLC);
    }

    return result;
};
