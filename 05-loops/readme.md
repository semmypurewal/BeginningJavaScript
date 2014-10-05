### Overview

Believe it or not, Computers are mostly interesting because they can repeat
things over and over again very fast. This allows them to do a lot of things
that it would take humans a *really* long time to do. This fundamental idea is
essentially the building block of all interesting computer programs.

### while loops as generalizations of if-statements

Previously, we saw `if` statements. An `if` specifies a condition and a section
of code to execute if the condition is true.

    var num = 42;

    if (num % 2 === 0) {
        console.log("num is even!");
    }
    //=> num is even!

A `while` loop is a slight generalization of this idea in that it continuously
repeats the section of code as long as the condition _stays_ true.

    while (num % 2 === 0) {
        console.log("num is even!");
    }
    //=> if num is even, this will run forever!!

This can easily lead to infinite loops as in the previous example. When that
happens in the Chrome developer tools, our only hope is to close the tab and
start over.

Although infinite loops are super-fun (not really), we generally want to modify
the value that the condition is testing for.

    var num = 150;

    while (num % 13 !== 0) {
        console.log(num + " is not divisible by 13.");

        // keep adding one to num
        num = num + 1;
    }
    console.log("the first number bigger than 150 that is divisible by 13 is " + num);

### for-loops

The `while` loops are often interesting in interactive console programming, but
we're not doing that here. For the most part, we're going to use the pattern
that we described above, but we'll use a `for` loop to handle the
bookkeeping. We can rewrite the example above with a `for` loop like this.

    var num;

    for (num = 150; num % 13 !== 0; num = num + 1) {
        console.log(num + " is not divisible by 13.");
    }
    console.log("the first number bigger than 150 that is divisible by 13 is " + num);

Essentially, a `for`-loop consists of four (ha!) things:

1. An initialization condition that is executed prior to the start of the loop
(e.g. `num = 150`)

2. An update condition that is executed every time the loop body ends (e.g. `num
= num + 1`)

3. A continuation condition that is checked prior to executing the loop body
(e.g. `num % 13 !== 0`)

4. The loop body -- the part of the code that is executed every time the
continuation condition is found to be true

### A Simple Example

Let's start with a basic problem. Let's write a function that prints out the
first one hundred integers.

    var firstOneHundred = function () {
        var num;

        for (num = 1; num <= 100; num = num + 1) {
            console.log(num);
        }
    }

In this case, we initialize the `num` variable with the value `1` and then we
check to see if `num` is smaller than or equal to `100`. It is, so we execute
the body, and update the value stored in the `num` variable by executing the
update condition. Then we start the process all over.

The result is that this function prints out the first 100 integers.

One of the more common job interview questions for entry-level programmers is
the FIZZBUZZ problem. This problem asks you to write a function that prints out
the first 100 values while substituting multiples of 3 with the word FIZZ,
subsitituting multiples of 5 with the word BUZZ, and subsitituting multiples of
both with the word FIZZBUZZ.

In the practice problems at the end of this section, we'll augment the above
function with a nested `if-else` statement to make that happen.

### A More Useful Example

Loops are frequently used in functions to calculate a value that's based on many
values. For example, suppose we wanted to know the sum of the first one hundred
numbers.

    var sumUpToOneHundred = function () {
        var sumSoFar = 0;
        var count = 0;

        for (count = 0; count <= 100; count = count + 1) {
            sumSoFar = sumSoFar + 1;
        }

        return sum;
    }
    sumUpToOneHundred();
    //=> 5050

This function isn't quite as general as it could be. For example, we might want
to accept a positive number `n`, and then sum the first `n` numbers. Or, even
better, we may want to accept two values, `begin` and `end` and then sum all of
the values in-between.

### Calculating Properties Using a Loop

We've seen several examples where we computed whether a number has a certain
property or not (e.g. `isEven`, `isOdd`). Using loops we can compute more
complex properties of numbers.

For example, suppose we want to know the largest even divisor of a number. We
know that 1 evenly divides every number, so we can start with the assumption
that 1 is the largest divisor. Next, we can start at 2 and work our way up to
the number itself. If we ever see a new divisor, we know it will be larger than
the one we've already seen, so we can replace the current largest.

    var largestEvenDivisor = function (n) {
        if (typeof n !== "number" || n <= 0) {
            throw "largestDivisor requires n to be a positive number!";
        }

        var num;
        var largestSoFar = 1;
        for (num = 2; num <= n - 1; num = num + 1) {
            if (num % n === 0) {
                largestSoFar = num;
            }
        }

        return largestSoFar;
    }

### Transforming Strings with Loops

Since we've seen that we can easily find the length of a string with the
`length` property and we can access individul characters with the `charAt`
method, we can easily use a `for` loop to iterate over all the characters in a
string.

    var message = "hello world!";
    var index;

    for (index = 0; index < message.length; index = index + 1) {
        console.log(message.charAt(index));
    }

    //=> h
    //=> e
    //=> l
    //=> l
    //=> o
    //=>
    //=> w
    //=> o
    //=> r
    //=> l
    //=> d
    //=> !

We can use this approach to perform interesting operations on
strings. For example, suppose we wanted to remove all vowels from a
string. We might start by creating a helper function called isVowel
that returns true if a single character is an upper-case or lower-case
vowel (I've left that as a problem in the practice section).

Once we have that, we can write our function like this.

    var removeVowels = function (message) {
        if (typeof message !== "string") {
            throw "the input must be a string!";
        }

        // start off with the empty string
        var result = "";
        var index;

        for (index = 0; index < message.length; index = index + 1) {
            // if it's not a vowel, concatentate it to the result
            if (!isVowel(message.charAt(index))) {
                result = result + message.charAt(index);
            }
        }

        return result;
    }

    removeVowels("hello world!");
    //=> hll wrld!

    removeVowels("aeiou");
    //=>

### Breaking out of a Loop

Suppose we wanted to find the first lower-case letter in a string and then
return it. We might start by writing a helper function to let us know if a
character is a lower-case letter (I've left that as a problem in the
practice section).

    var isLowerCaseLetter = function (letter) {
        return letter.length === 1 && "a" <= letter && letter <= "z";
    }

Then we might try something like this.

    var firstLowerCaseLetter = function (message) {
        var index;
        var result;

        for (index = 0; index < message; index = index + 1) {
            if (isLowerCaseLetter(message.charAt(index))) {
                result = message.charAt(index);
            }
        }

        return result;
    }

But this won't work!

    firstLowerCaseLetter("Hello World!");
    //=> d

    firstLowerCaseLetter("This is a tweet.");
    //=> t

It's actually returning the _last_ lowerCaseLetter! What we need to do is we
need to break out of the loop as soon as we find a lower case letter and return
it. There are many ways to solve this problem, but before we do we have to ask
ourselves -- "what should happen when there are _no_ lower-case letters in the
string?"

We could throw an error, but it's probably not an error condition. If we decide
to throw an error, we should probably offer another function called
`containsLowerCaseLetter` that the user can use to determine if there is a
lower-case letter before trying to get the first one.

Another solution is to use a special value to denote the absence of a lower-case
letter. That's the approach the `indexOf` function takes -- it returns -1 in the
case the substring is not found. I think this will work well for us -- let's use
the empty string, "", to represent the case that there are no lower-case
letters:

    var firstLowerCaseLetter = function (message) {
        var index;
        // initialize result to the default value in
        // case we don't find anything
        var result = "";

        for (index = 0; index < message; index = index + 1) {
            if (isLowerCaseLetter(message.charAt(index))) {
                result = message.charAt(index);
            }
        }

        return result;
    }

Great, now how do we stop when we find the first lower-case letter? My favorite
approach is to use the continuation condition to check to see if the `result`
variable has changed. If it has, we should return false.

    var firstLowerCaseLetter = function (message) {
        var index;
        // initialize result to the default value in
        // case we don't find anything
        var result = "";

        // add a check to see if result is still "" before continuing
        for (index = 0; index < message && result === ""; index = index + 1) {
            if (isLowerCaseLetter(message.charAt(index))) {
                result = message.charAt(index);
            }
        }

        return result;
    }

This will cause the continuation condition to return false once we set the
result variable to a lower-case letter.

Another common approach is to use a second `return` statement.

    var firstLowerCaseLetter = function (message) {
        var index;
        // initialize result to the default value in
        // case we don't find anything
        var result = "";

        // add a check to see if result is still "" before continuing
        for (index = 0; index < message; index = index + 1) {
            if (isLowerCaseLetter(message.charAt(index))) {
                return message.charAt(index);
            }
        }

        return result;
    }

Personally, I prefer the previous solution. That's because it's a little easier
to understand a function that has one entry-point and one successful exit-point
(throwing errors are another matter), and because the solution is a little more
flexible.

### Iterating backwards

There's actually no reason that our `for` loops have to move forwards. It turns
out that it's sometimes convenient to move backwards through a set of numbers or
a string. For example, suppose we wanted to list all the numbers
between 1 and 10 in reverse. We'd start at the end, and then subtract
1 from the counter value.

    function countDownFrom = function (num) {
        if (typeof num !== "number" || num < 1) {
            throw "the input should be a positive number!!!");
        }

        var currValue;
        for(currValue = num; currValue >= 0; currValue = currValue - 1) {
            console.log(currValue);
        }
    }

    countDownFrom(5);
    //=> 5
    //=> 4
    //=> 3
    //=> 2
    //=> 1
    //=> 0

### Practice

1. Write a function called `isVowel` that returns `true` if the input is a
single character and either an upper or lower-case a, e, i, o, or
u. It should return false otherwise.

2. Write a function called `isLowerCaseLetter` that returns `true` if
the input is a single letter and lower-case. It should return false otherwise.

3. Write a function called `sumUpTo` so that it accepts a positive number `n`
and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
it should sum the numbers 1 through 5 inclusive. It should throw an error if the
input number is negative.

4. Write a function called `sumAUpToB` so that it accepts two parameters
`a` and `b` and sums the numbers between `a` and `b` inclusive. Note
that `a` may be larger than `b`, in which case you'll need to work
backawards.

5. A number is a prime number if it is only evenly divisible by 1 and itself
(although we don't consider 1 a prime number, so 2 is the first prime
number). Write a function called `isPrime` that accepts a number `p` as an
argument and returns `true` if it is prime, `false` otherwise.

6. Using the `isPrime` function, write a function that sums all the primes
smaller than 100.

7. Using the `isPrime` function, write a function that sums the first 100 prime
numbers.

8. Write a function called `containsNVowels` that accepts a number, `n`, and a
string and returns true if a string contains at least `n` vowels. You'll want to
use the `isVowel` helper function from above.

9. Write a function that accepts a string and returns the same string, only in
reverse! (HINT: create a new empty string, and concatenate each letter of the
original string to it in reverse)

10. A _palindrome_ is a string that reads the same forwards and backwards. Write
a function that accepts a string of arbitrary letters, numbers, and symbols, and
returns true if it's a palindrome. For example:

     isPalindrome("kayak");
     //=> true

     isPalindrome("A man, a plan, a canal, Panama");
     //=> true

     isPalindrome("hello world");
     //=> false

Let's start by writing a function to remove all non-letter characters
from the input.

    removeNonLetters("A man, a plan, a canal, Panama");
    //=> AmanaplanacanalPanama

    removeNonLetters("this is a string; it has some punctuation!");
    //=> thisisastringithassomepunctuation

Now use `removeNonLetters`, along with the `reverse` function from above to
determine if the string is a palindrome.