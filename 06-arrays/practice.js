Write a function called `containsValueTwice` that accepts a number and an array,
and returns `true` if that number appears in the array twice, and `false`
otherwise.

    containsValueTwice(5, [1, 2, 3, 4, 5]);
    //=> false

    containsValueTwice("hello", [ "hello", "world", "hello" ]);
    //=> true

    containsValueTwice(true, [ true, false, false, true ]);
    //=> true


Generalize the previous solution into a function called `containsValueNTimes` so
that it can check for a value an arbitrary number of times.

    containsValueNTimes(3, "hello", [ "hello", "hello", "hello" ]);
    //=> true

    containsValueNTimes(5, true, [ true, true, true, true, false ]);
    //=> false

    containsValueNTimes(0, 5, [ 1, 2, 3, 4, 5 ]);
    //=> false


Write a function called `atLeastOneEven` that returns `true` if at least one of
the numbers in input array is even, false otherwise. It should throw an error if
the argument is not an array.

    atLeastOneEven([ 3, 5, 6, 7, 9 ]);
    //=> true

    atLeastOneEven([]);
    //=> false

    atLeastOneEven([ 101, 203, 401 ]);
    //=> false

    atLeastOneEven("hello");
    //=> input should be an array!


Write a function called `allStrings` that accepts an array as an argument and
returns `true` if all of the values in the array are strings. It should return
false if they are not all strings, and throw an error if the input is not an
array.

    allStrings([ "these", "are", "all", "strings" ]);
    //=> true

    allStrings([ "these", "are", "not", 5 ]);
    //=> false

    allStrings([ ]);
    //=> true

    allStrings("hello");
    //=> input should be an array!


Write a function that accepts two arrays, and returns true if any of the values
in the first array appear twice in the second array. You might want to reuse the
function `containsValueNTimes` from above. It should throw an error if either of
the inputs are not arrays.


    containsAnyValueTwice([1, 2], ["hello", 1, "world", 1]);
    //=> true

    containsAnyValueTwice([], ["always", "will", "return", "false"]);
    //=> false

    containsAnyValueTwice([


Generalize the above problem above so that it accepts two arrays and a number,
and returns true if any of the numbers in the first array appear `n` times in
the second array.


Using a standard `for` loop, along with the `push` function, write a function
called `range` that accepts two numbers, `begin` and `end`, and returns an array
that contains all of the integers starting at `begin` and ending at `end`
(including `begin` and `end`). For example:

    range(5,10); //=> [5, 6, 7, 8, 9, 10]

    range(0,3); //=> [0, 1, 2, 3]

    range(10,3); //=> [10, 9, 8, 7, 6, 5, 4, 3]


Using the `isHTMLElement` and `getTag` function from one of the previous
sections, write a function called `mapToTags` that accepts an array of HTML
elements and returns a new array that consists of only the tags associated with
those HTML elements. It should throw an error if any of the elements are not
HTML elements.


Write a function called `filterToLol` which accepts an array of tweets and
returns an array that consists only of those that contain `lol` (upper, lower,
or mixed-case).