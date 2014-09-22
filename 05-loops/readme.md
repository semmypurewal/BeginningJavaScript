### Overview

Believe it or not, Computers are mostly interesting because they can repeat
things over and over again very fast. This allows them to do a lot of things
that it would take humans a *really* long time to do. This fundamental idea is
essentially the building block of all interesting computer programs.

### while loops as generalizations of if-statements

Previously, we saw `if` statements. An `if` specifies a condition and a section
of code to execute if the condition is true.

    if (num % 2 === 0) {
        console.log("num is even!");
    }

A `while` loop is a slight generalization of this idea in that it continuously
repeats the section of code as long as the condition is true.

    while (num % 2 === 0) {
        console.log("num is even!");
    }
    //=> if num is even, this will run forever!!

This can easily lead to infinite loops as in the previous example. More
generally, though, we want to modify the value that the condition is testing
for.

    var num = 150;

    while (num % 13 !== 0) {
        console.log(num + " is not divisible by 13.");

        // keep adding one to num
        num = num + 1;
    }
    console.log("the first number bigger than 150 that is divisible by 13 is " + num);

### for-loops

While loops are often interesting in interactive programming, but we're not
doing that here. For the most part, we're going to use the pattern that we
described above, but we'll use a `for` loop to handle the bookkeeping. We can
rewrite the example above with a `for` loop like this.

    var num;

    for (num = 150; num % 13 !== 0; num = num + 1) {
        console.log(num + " is not divisible by 13.");
    }
    console.log("the first number bigger than 150 that is divisible by 13 is " + num);

Essentially, a `for`-loop consists of four things:

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

### A More Useful Example

Loops are frequently used in functions to calculate a value that's based on many
values. For example, suppose we wanted to know the sum of the first one hundred
numbers.

    var sumFirstOneHundred = function () {
        var sum = 0;
        var count = 0;

        for (count = 0; count <= 100; count = count + 1) {
            sum = sum + 1;
        }

        return sum;
    }
    sumFirstOneHundred();
    //=> 5050

This function isn't quite as general as it could be. For example, we might want
to accept a positive number `n`, and then sum the first `n` numbers. Or, even
better, we may want to accept two values, `begin` and `end` and then sum all of
the values in-between.

### Calculating Properties Using a Loop

We've seen several examples where we computed whether a number has a certain
property or not (e.g. isEven, isOdd). Using loops we can compute more complex
properties of numbers.

For example, suppose we want to know the largest even divisor of a number. We
know that 1 evenly divides every number, so we can start with the assumption
that 1 is the largest divisor. Next, we can start at 2 and work our way up to
the number itself. If we ever see a new divisor, we know it will be larger than
the one we've already seen, so we can replace the current largest.

    var largestDivisor = function (n) {
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

### Practice

1. Write a function called `sumFirstNNumbers` so that it accepts a parameter `n`
and sums the first `n` positive integers. For example, if you call
`sumFirstNNumbers(5)` it should sum the numbers 1 through 5 inclusive.

2. Write a function called `sumAToB` so that it accepts two parameters `begin` and
`end` and sums the numbers between `begin` and `end` inclusive. What would you change if
you didn't want the sum to include `b`? What would you change if you didn't want
the sum to include `a`?

3. A number is a prime number if it is only evenly divisible by 1 and itself
(although we don't consider 1 a prime number, so 2 is the first prime
number). Write a function called `isPrime` that accepts a number `p` as an
argument and returns `true` if it is prime, `false` otherwise.

4. Using the `isPrime` function, write a function that sums all the primes
smaller than 100.

5. Using the `isPrime` function, write a function that sums the first 100 prime
numbers.
