### Overview

Arrays are the most basic compound data type in JavaScript. They allow you to
associate multiple values with a single variable name.

### Defining an Array

We can declare an array variable in the same way that we declare any other
variable, but when we define it, we use square brackets, and denote its
individual elements by commas. For example, this array consists of the first 10
prime numbers.

    var primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ];

Here's another example, where we define an array that contains strings
representing the word "hello" in several different languages.

    var greetings = [ "hola", "aloha", "hello", "bonjour", "hallo" ];

### Accessing Elements of an Array

Once we've created an array, We can access its individual elements using the
square-bracket operator and an _index_, which is simply the distance the element
is from the first one.

    primes[3];
    //=> 7

It might surprise you that this returns 7, since it's actually the _fourth_
element in the array. That's because arrays in JavaScript (and most other modern
programming languages) start their index numbering at 0. This isn't surprising
if you think of the index as _the distance of the entry from the first element
in the array_. The distance of the first element from the first element is 0:

    primes[0];
    //=> 2

The distance of the second element from the first element is 1:

    primes[1]
    //=> 3


And so on...

We can also store the individual elements in separate variables if we want to.

    var french = greetings[3];
    console.log(french + "!");
    //=> bonjour!

What happens if you ask for a index that doesn't exist? JavaScript returns the
special value `undefined`.

    primes[-1]
    //=> undefined

    greetings[15]
    //=> undefined

### Mutating an Array

Often we'll want to build an array before we process it. We can create an empty
array by simply using the square brackets.

    var suits = [];
    console.log(suits);
    //[]

We can add elements to the end of the array by calling the array's `push`
method.

    suits.push("clubs");
    console.log(suits);
    //=> ["clubs"]

    suits.push("diamonds");
    console.log(suits);
    //=> ["clubs", "diamonds"]

    suits.push("hearts");
    suits.push("spades");
    //=> ["clubs", "diamonds", "hearts", "spades"]

For the most part, we'll only really need to add elements to an array, but for
the sake of completeness: it's possible to actually change the values contained
in an existing array by simply using the assignment operator.

    // replace "hearts" with "coins"
    suits[2] = "coins";
    //=> ["clubs", "diamonds", "coins", "spades"]

In general, we should avoid _mutating_ arrays unless absolutely necessary.

### Iterating Over Arrays with for-loops

Arrays can be passed as arguments to functions just like anything else:

    var secondElementOf = function (arr) {
       return arr[1];
    }

And you'll often want to iterate over the values to determine some property of
the array. But how can you do that if you don't know how many elements there
are? Well, you can keep trying elements until you hit `undefined`, or you can
use the `length` property of an array.

    primes.length
    //=> 10

We can use this to write a function that prints all of the elements of the array
by using a for loop to iterate over all of the indices.

    var printEachElement = function (list) {
        var index;

        for (index = 0; index < list.length; index++) {
            console.log(list[index]);
        }
    }

### Strings as special Arrays

Strings are just special cases of Arrays where all the elements are
characters. They are denoted using quotes, but can be manipulated just like
Arrays.

    var greeting = "hello!";

    greeting[0];
    //=> h

    greeting[greeting.length - 1];
    //=> !

    greeting[greeting.length - 2];
    //=> o


### Examples

One of the simplest things you can do with a list of numbers is return their
sum. Here's an example that does just that. It's a lot like the summing examples
we've seen previously, but here we are using the `for` loop to control the
indices of the array instead of the actual values we are summing.

    var sumAnArray = function (listOfNumbers) {
        var index;
        var sum = 0;

        for (index = 0; index < listOfNumbers.length; index = index + 1) {
            sum = sum + listOfNumbers[index];
        }

        return sum;
    }

Another thing we can do is find the smallest number in a list of numbers.

    var smallestNumber = function (listOfNumbers) {
        var index;
        var smallestSoFar = listOfNumbers[0];

        for (index = 1; index < listOfNumbers.length; index = index + 1) {
            if (listOfNumbers[index] < smallestSoFar) {
                smallestSoFar = listOfNumbers[index];
            }
        }

        return smallestSoFar;
    }

### Practice

1. Write a function called `firstNumDivisibleByN` that accepts two arguments:
`n` and an array, and returns `true` if the first number in the array is evenly
divisible by `n`, false otherwise. For example, the function would work as
follows.

    firstNumDivisibleBy(2, [5, 3, 2, 1]);
    //=> false

    firstNumDivisibleBy(5, [5, 3, 2, 1]);
    //=> true

2. Write a function called `secondLetterIs` that accepts two arguments: `letter`
and an array, and returns `true` if the second letter in the string is `letter`.

3. Write a function called `containsValueTwice` that accepts a number and an
array, and returns `true` if that number appears in the array twice, and `false`
otherwise.

4. Generalize the previous solution into a function called `containsValueNTimes`
so that it can check for a value an arbitrary number of times.

5. Write a function called `isCapitalized` that accepts a string and returns
`true` if the first letter is a capital letter. How can you determine that?
Remember that you can use strings in comparisons in the same way that you can
use numbers, and the ordering is alphabetical (with capital letters having lower
values than their lower-case counterparts).

6. Write a function called `containsNVowels` that accepts a number, `n`, and a
string and returns true if a string contains at least `n` vowels.

7. Write a function called `atLeastOneEven` that returns `true` if at least one
of the numbers in the array is even, false otherwise.

8. Write a function called `allEven` that returns `true` if all of the values in
the array are even, and false otherwise.

9. Write a function that accepts two arrays, and returns true if any of the
numbers in the first array appear twice in the second array. You might want to
reuse the function `containsValueNTimes` from above.

10. Generalize the above problem above so that it accepts two arrays and a
number, and returns true if any of the numbers in the first array appear `n`
times in the second array.

11. Write a function that accepts a string and returns the same string, only in
reverse! (HINT: create a new empty string, and concatenate each letter of the
original string to it in reverse)
