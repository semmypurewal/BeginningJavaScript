### Overview

The major reason computers have been so useful and have become so ubiquitous
lies in their ability to repeat things over and over again very quickly. This
allows them to do things that it would have taken humans a *really* long time
to do. We're going to learn a few ways of repeating things in JavaScript.

### While loops as generalizations of if statements

In the last chapter, we learned how to write `if` statements. An `if` statement
accepts a condition and a block of code to execute if the condition is true.

    var num = 42;

    if (num % 2 === 0) {
        console.log("num is even!");
    }
    //=> num is even!

A `while` loop extends this idea in that it continuously executes the block of
code as long as the condition _stays_ true.

    while (num % 2 === 0) {
        console.log("num is even!");
    }
    //=> if num is even, this will run forever!!

This can easily lead to _infinite loops_ as in the previous example. When that
happens in the Chrome developer tools, our only hope is to close the tab and
start over. We'll need to be careful!

Although infinite loops are great for crashing your web browser, we generally
want to modify the value that the condition is testing.

    var num = 150;

    while (num % 13 !== 0) {
        console.log(num + " is not divisible by 13.");

        // keep adding one to num
        num = num + 1;
    }
    console.log("the first number bigger than 150 that is divisible by 13 is " + num);

The most common use we're going to have for loops is to repeat an operation a
number of times. Let's make the computer check which of the integers between 1
and 10 are even.

    var num = 1;

    while (num <= 10) {
        if (num % 2 === 0) {
            console.log(num + " is even!");
        } else {
            console.log(num + " is odd!");
        }
        num = num + 1;
    }
    //=> 1 is odd!
    //=> 2 is even!
    //=> 3 is odd!
    //=> 4 is even!
    //=> 5 is odd!
    //=> 6 is even!
    //=> 7 is odd!
    //=> 8 is even!
    //=> 9 is odd!
    //=> 10 is even!

### for-loops

Most of the looping we'll end up doing looks like the pattern we saw in the
last two examples:

1. An initialization condition that is executed prior to the start of the loop
(e.g. `num = 1`)

2. An update condition that is executed every time the loop body ends (e.g. `num
= num + 1`)

3. A continuation condition that is checked prior to executing the loop body
(e.g. `num <= 10`)

4. The loop body -- the part of the code that is executed every time the
continuation condition is found to be true

It's common enough that JavaScript provides a different kind of loop called a
`for` loop which makes this structure more obvious. Let's rewrite our last
example using a `for` loop:

    var num;

    for (num = 1; num <= 10; num = num + 1) {
        if (num % 2 === 0) {
            console.log(num + " is even!");
        } else {
            console.log(num + " is odd!");
        }
    }

In this case, we initialize the `num` variable with the value `1` and then we
check to see if `num` is smaller than or equal to `10`. It is, so we execute
the body, then update the value stored in the `num` variable by executing the
update statement. Then we start the process all over.

The result is that this function prints out the first 10 integers, and whether
they're even or odd.

One of the more common job interview questions for entry-level programmers is
the FIZZBUZZ problem. This problem asks you to write a function that prints out
the first 100 values while substituting multiples of 3 with the word FIZZ,
subsitituting multiples of 5 with the word BUZZ, and subsitituting multiples of
both with the word FIZZBUZZ.

In the practice problems at the end of this section, we'll use a `for` loop
with a nested `if-else` statement to make that happen.

### A More Useful Example

Loops are frequently used in functions to calculate a value that's based on
many values. For example, suppose we wanted to know the sum of the first one
hundred numbers.

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
the values in between.

### Calculating Properties Using a Loop

We've seen several examples where we computed whether a number has a certain
property or not (e.g. `isEven`, `isOdd`). Using loops we can compute more
complex properties of numbers.

For example, suppose we want to know the largest divisor of a number. We know
that 1 evenly divides every number, so we can start with the assumption that 1
is the largest divisor. Next, we can start at 2 and work our way up to the
number itself. If we ever see a new divisor, we know it will be larger than the
one we've already seen, so we can replace the current largest.

    var largestDivisor = function (num) {
        if (typeof num !== "number" || num <= 0) {
            throw "largestDivisor requires num to be a positive number!";
        }

        var largestDivisorSoFar = 1;
        var divisor;

        for (divisor = 2; divisor < num; divisor = divisor + 1) {
            if (divisor % num === 0) {
                largestDivisorSoFar = divisor;
            }
        }

        return largestDivisorSoFar;
    }

### Transforming Strings with Loops

Since we've seen that we can easily find the length of a string with the
`length` property and we can access individul characters with the `charAt`
method, we can pretty easily use a `for` loop to iterate over all the
characters in a string.

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

We can use this approach to perform interesting operations on strings. For
example, suppose we wanted to remove all vowels from a string. We might start
by creating a helper function called isVowel that returns true if a single
character is an upper-case or lower-case vowel (I've left that as a problem in
the practice section).

Once we have isVowel, we can write our function like this.

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
character is a lower-case letter (I've left that as a problem in the practice
section).

Then we might try something like this:

    var firstLowerCaseLetter = function (message) {
        var result;
        var index;

        for (index = 0; index < message; index = index + 1) {
            if (isLowerCaseLetter(message.charAt(index))) {
                result = message.charAt(index);
            }
        }

        return result;
    }

    firstLowerCaseLetter("Hello World!");
    //=> d

    firstLowerCaseLetter("This is a tweet.");
    //=> t

Disaster! It's actually returning the _last_ lowerCaseLetter! We need some way
to stop the loop as soon as we find a lower case letter, then return it. There
are a bunch of ways to solve this problem!

However, before we fix our function, we have another problem. What should
happen when there are _no_ lower-case letters in the string?

We could throw an error, but it's probably not an error condition. (If it was
an error condition, we would want to provide a `containsLowerCaseLetter`
function so we could check without ending our program.)

We could use a special value to denote the absence of a lower-case letter.
That's the approach the `indexOf` function takes -- it returns -1 in the case
the substring is not found. This approach will work pretty well for us in this
case. Let's return the empty string, "", when there are no lower-case letters:

    var firstLowerCaseLetter = function (message) {
        var index;
        // initialize result to the default value
        // in case we don't find anything
        var result = "";

        for (index = 0; index < message; index = index + 1) {
            if (isLowerCaseLetter(message.charAt(index))) {
                result = message.charAt(index);
            }
        }

        return result;
    }

Great, now how do we stop when we find the first lower-case letter? One
approach is to use the continuation condition to check to see if the `result`
variable has changed:

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
result variable to a lower-case letter. It works pretty well, but it makes our
condition more difficult to read.

Another common approach is to use a second `return` statement, this time inside
the loop body:

    var firstLowerCaseLetter = function (message) {
        var index;
        // initialize result to the default value in
        // case we don't find anything
        var result = "";

        for (index = 0; index < message; index = index + 1) {
            if (isLowerCaseLetter(message.charAt(index))) {
                // we found it, exit the function!
                return message.charAt(index);
            }
        }

        return result;
    }

This will work fine, but if we were to add any code after the `for` loop the
early return would cause it to be skipped!

Personally, I prefer the previous solution. That's because it's a little easier
to understand a function that has one entry-point and one successful exit-point
(throwing errors is another matter), and because using the loop condition is a
little more flexible than an early return.

### Iterating backwards

When we loop over numbers, there's no reason we have to count forwards! It
turns out that it's sometimes more convenient to move backwards through a set
of numbers or the characters in a string. For example, suppose we wanted to
list all the numbers between 1 and 5 in reverse. We'd start at the end, and
then subtract 1 from the counter value.

    function countDownFrom = function (num) {
        if (typeof num !== "number" || num < 1) {
            throw "the input should be a positive number!!!");
        }

        var count;

        for(count = num; count > 0; count = count - 1) {
            console.log(count);
        }
    }

    countDownFrom(5);
    //=> 5
    //=> 4
    //=> 3
    //=> 2
    //=> 1

### Practice

The practice problems for this section can all be found in the file `practice.js`.
