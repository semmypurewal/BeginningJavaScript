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
    //=> []

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

### Using Variables for Indices

One thing that's really nice about arrays is that we can use variables to index
into them. For example:

    var secondIndex = 1;

    suits[secondIndex];
    //=> "diamonds"

We can even use the results of expressions to index into arrays.

    suits[secondIndex + 1];
    //=> "coins"

This feature comes in handy when you want to loop over arrays, which we'll learn
about very soon.

### Strings as special Arrays

If this discussion about arrays seems familiar, it's because it is. You can
think of arrays as a generalization of strings, where instead of being a
sequence of characters, it's a sequence of arbitrary values. In fact, JavaScript
is flexible enough to allow us to access the elements of a string in the same
way we access elements of arrays.

    var greeting = "hello!";

    greeting[0];
    //=> h

    greeting[greeting.length - 1];
    //=> !

    greeting[greeting.length - 2];
    //=> o

You can think of an array's `push` method as being similar to using the +
operator on a string and adding a single character. But is there a more general
way to concatentate two arrays? It turns out there is! It's the `concat` method!

    var firstArray = ["hello", "world"];
    var secondArray = ["goodbye", "world"];
    firstArray.concat(secondArray);
    //=> ["hello", "world", "goodbye", "world"];

In general, the array methods are different from the string methods whenever it
makes sense. For example, the `toUpperCase` method wouldn't make any sense for
an array, while several of the array methods we'll learn in the next section
wouldn't make sense for a string.

On the other hand, some methods and properties are shared. For example, the
`length` property is the same.

    "hello".length;
    //=> 5

    ["this", "is", "an", "array"].length
    //=> 4

And both the `indexOf` and `slice` methods exists on an array. They work exactly
like you'd expect.

    var places = [ "first", "second", "third", "fourth", "fifth" ]

    places.indexOf("third");
    //=> 2

    places.indexOf("sixth");
    //=> -1

    places.slice(1, 3);
    //=> [ "second", "third" ]

We'll learn more about the relationship between strings an arrays in the next
section.

### Iterating Over Arrays with for-loops

Like strings, arrays can be passed as arguments to functions:

    var secondElementOf = function (arr) {
       return arr[1];
    }

We can use this to write a function that prints all of the elements of the array
by using a for loop to iterate over all of the indices.

    var printEachElement = function (list) {
        var index;

        for (index = 0; index < list.length; index = index + 1) {
            console.log(list[index]);
        }
    }

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


### Arrays and `typeof`

This behavior is probably a little unexpected:

    typeof [1, 2, 3, 4];
    //=> object

    typeof [];
    //=> object

Unfortunately, JavaScript doesn't have a primitive type for an array -- instead
it's considered an `object`, which we'll talk more about in an upcoming section.

Fortunately, every JavaScript interpreter has a built-in `Array` object that has
a special method called `isArray`.

    Array.isArray([1, 2, 3, 4])
    //=> true

    Array.isArray([]);
    //=> true

### Practice

0. At first glance, extracting a character from a string using the square
brackets array notation, and using the `charAt` method probably seems the
same. But they aren't. What happens when you access an element outside the
length of the string with `charAt`? What happens when you do the same thing with
the square brackets?

1. You can _mutate_ an the value at an index in an array by using the square
brackets. Does the same thing work with a string? Why might that be?

