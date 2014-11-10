### Overview

Arrays are the most basic compound data type in JavaScript. They allow you to
associate a list of values with a single variable name.

### Defining an Array

We can declare an array variable in the same way that we declare any other
variable, but when we define its value, we use square brackets and separate its
individual elements with commas. For example, this array consists of the first
10 prime numbers.

    var primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ];

Here's another example, where we define an array that contains strings
representing the word "hello" in several different languages.

    var greetings = [ "hola", "aloha", "hello", "bonjour", "hallo" ];

### Accessing Elements of an Array

Once we've created an array, We can access its individual elements using the
square-bracket operator and an _index_, which is simply the distance the
element is from the beginning of the array. The first element has an index of
0, the second has an index of 1, and so on. Let's try it out:

    primes[3];
    //=> 7

It might be surprising that `primes[3]` evaluates to 7 instead of 5. This is
because primes[3] refers to the _fourth_ element in our primes array. This will
make more sense if you recognize the index as _the distance of the entry from
the first element in the array_.  It's important that we get our heads around
indexes, because they're the cause of a lot of programming mistakes. Let's try
a few more examples:

    primes[0];
    //=> 2

The distance of the first element from the first element is 0, so index 0 gives
us the first element.

    primes[1]
    //=> 3

The distance of the second element from the first element is 1, so index 1
gives us the second element. And so on.

Since we can read values out of an array using an index, there's nothing
stopping us from storing the individual elements in separate variables:

    var french = greetings[3];
    console.log(french + "!");
    //=> bonjour!

What happens if you ask for the element at a index that doesn't exist?

    primes[-1]
    //=> undefined

    greetings[15]
    //=> undefined

JavaScript returns the special value `undefined`.

### Mutating an Array

We can add elements to an array after we've created it. We can also change the
values in an array after we've created it, just like we change other variables.
To start out, let's create a new empty array by using the empty square
brackets.

    var suits = [];
    console.log(suits);
    //=> []

We can add elements to the end of the array by calling its `push` method.

    suits.push("clubs");
    console.log(suits);
    //=> ["clubs"]

    suits.push("diamonds");
    console.log(suits);
    //=> ["clubs", "diamonds"]

    suits.push("hearts");
    suits.push("spades");
    //=> ["clubs", "diamonds", "hearts", "spades"]

We can also change the values contained in an existing array by using the
assignment operator.

    // replace "hearts" with "coins"
    suits[2] = "coins";
    //=> ["clubs", "diamonds", "coins", "spades"]

However, just because you _can_ do something doesn't mean you should! In
general, we want to avoid _mutating_ arrays unless absolutely necessary. It's
more difficult to read and write software when our values keep changing on us.

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

If this discussion about arrays seems familiar, it's because we've seen
something like them before. You can think of arrays as a generalization of
strings, where instead of being a sequence of characters like a string, it's a
sequence of arbitrary values. In fact, JavaScript is flexible enough to allow
us to access the elements of a string in the same way we access elements of
arrays.

    var greeting = "hello!";

    greeting[0];
    //=> h

    greeting[greeting.length - 1];
    //=> !

    greeting[greeting.length - 2];
    //=> o

You can think of an array's `push` method as being similar to using the +
operator on a string and adding a single character. However, there's a much
more general way of adding two arrays together: the `concat` method!

    var firstArray = ["hello", "world"];
    var secondArray = ["goodbye", "world"];
    firstArray.concat(secondArray);
    //=> ["hello", "world", "goodbye", "world"];

In general, the array methods are different from the string methods whenever it
makes sense. For example, the `toUpperCase` method wouldn't make any sense for
an array, while several of the array methods we'll learn in this chapter
wouldn't make sense for a string.

That said, some methods and properties _are_ shared. For example, the `length`
property is the same for both arrays and strings.

    "hello".length;
    //=> 5

    ["this", "is", "an", "array"].length
    //=> 4

And both the `indexOf` and `slice` methods exists on an array. They work
exactly like you'd expect.

    var places = [ "first", "second", "third", "fourth", "fifth" ]

    places.indexOf("third");
    //=> 2

    places.indexOf("sixth");
    //=> -1

    places.slice(1, 3);
    //=> [ "second", "third" ]

We'll learn more about the relationship between strings an arrays in the next
section.

### Iterating Over Arrays with `for`-loops

Like strings, arrays can be passed as arguments to functions:

    var secondElementOf = function (arr) {
       return arr[1];
    }

We can use this feature to write a function that prints all of the elements of
the array by using a for loop to iterate over all of its indices.

    var printEachElement = function (list) {
        var index;

        for (index = 0; index < list.length; index = index + 1) {
            console.log(list[index]);
        }
    }

### Examples

One of the things we can do with a list of numbers is return its sum. Here's an
example that does just that; it's a lot like the summing examples we've seen
previously, but here we are using the `for` loop to control the indices of the
array instead of the actual values we are summing.

    var sumAnArray = function (listOfNumbers) {
        var sum = 0;
        var index;

        for (index = 0; index < listOfNumbers.length; index = index + 1) {
            sum = sum + listOfNumbers[index];
        }

        return sum;
    }

Another thing we can do is find the smallest number in a list of numbers.

    var smallestNumber = function (listOfNumbers) {
        var smallestSoFar = listOfNumbers[0];
        var index;

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
it's considered an `object`, which we'll talk more about in an upcoming
section. So how do we figure out when we've got an array?

Fortunately, every JavaScript interpreter has a built-in `Array` object that has
a special method called `isArray`.

    Array.isArray([1, 2, 3, 4])
    //=> true

    Array.isArray([]);
    //=> true

    Array.isArray(3);
    //=> false

### Practice

0. At first glance, extracting a character from a string using the square
brackets array notation, and using the `charAt` method probably seem to do the
same thing. However, they've got a few important differences. What happens when
you access an element outside the length of the string with `charAt`? What
happens when you do the same thing with the square brackets?

1. You can _mutate_ an the value at an index in an array by using the square
brackets. Does the same thing work with a string? Why might that be?

