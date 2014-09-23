### Overview

In the previous section, we learned about arrays, and we saw how we can use
for-loops to iterate over them.

It turns out that JavaScript arrays have a much richer set of built-in methods
that make them a real pleasure to work with. In this section, we'll learn some
of the more important built-in array methods that are useful in processing data.

### forEach

In the previous section, we saw how to sum a list of numbers using a for-loop.

    var sum = function (listOfNumbers) {
        var index;
        var sum = 0;

        for (index = 0; index < listOfNumbers.length; index = index + 1) {
            sum = sum + listOfNumbers[index];
        }

        return sum;
    }

The above approach to iterating over arrays are pretty common, but there's a
better way. In cases like this, it's much better to use the array's `forEach`
method.  It actually takes a function as an argument and then applies the
function to each element.

For example, if we want to print each element of an array called `arr`, we can
use the `forEach` function like this:

    var arr = [5,6,7,8];

    var printElement = function (elt) {
        console.log(elt);
    }

    arr.forEach(printElement);
    //=> 5
    //=> 6
    //=> 7
    //=> 8

In this example, we first defined the function called `printElement` and then
sent it as a parameter to the `forEach` function. It turns out that you don't
actually have to define the function first -- you can use an _anonymous_
function to define the action. This is a very common pattern in JavaScript, so
you should probably get used to it.

    var arr = [5,6,7,8];

    arr.forEach(function (elt) {
        console.log(elt);
    });

The `forEach` loop takes the function that is the parameter, and then sends each
array element to it as an argument.

Previously, I mentioned that this approach was superior to using a for-loop. Why
is that the case? The primary reason is that it makes it so you don't have to
track array indices, which means you need one less variable (`index` in this
case). The fewer variables that you have to define and keep track of, the fewer
potential bugs your program will have.

We can use this approach to rewrite the `sum` function using fewer variables,
and leaving fewer places that we could have an error.

    var sum = function (listOfNumbers) {
        var sum = 0;

        listOfNumbers.forEach(function (number) {
            sum = sum + number;
        });

        return sum;
    }


### map

It turns out that JavaScript arrays have even more functions that allow you to
easily manipulate the data that they contain. For example, suppose we wanted to
take a given array of numbers, and return an array of numbers that are the
the previous numbers doubled.

Specifically, it would behave like this:

    var numbers = [1,2,3,4,5,6];

    var doubles = doubleNumbers(numbers);
    console.log(doubles);
    //=> [2,4,6,8,10,12]

Given what we learned previously, here is a reasonable approach to solving this
problem.

    var doubles = function (nums) {
        var index;
        var result = []; // create an empty array

        for (index = 0; index < nums.length; index = index + 1) {
            // multiply the value by 2 and store it
            // in the same index in result
            result[index] = nums[index] * 2;
        }

        return result;
    }

It turns out that we don't actually need to index into the `result` array, we
can use the special function `push` to add the element to the end of the array
(we'll see why that's important in a second).

    var doubles = function (nums) {
        var index;
        var result = []; // create an empty array

        for (index = 0; index < nums.length; index = index + 1) {
            result[index].push(nums[index] * 2);
        }

        return result;
    }

Now we can also remove the `index` variable using a `forEach` loop.

    var doubles = function (nums) {
        var result = []; // create an empty array

        nums.forEach(function (num) {
            result.push(num * 2);
        });

        return result;
    }

But there's an even better way! The pattern of constructing a new array by
applying a function to every element of an array occurs so frequently, we have a
function called `map` that does exactly that. In fact, it allows us to remove
the `result` variable altogether!

    var doubles = function (nums) {
        return nums.map(function (num) {
            return num * 2;
        });
    }

That's all `map` does -- it returns a new array that is the old array with the
specified function applied to each element!


### Chaining Functions that Return Arrays

Since `map` returns an array, we can immediately _chain_ a call to `forEach`.

    var numbers = [1,2,3,4];

    numbers.map(function (number) {
        return number * 2;
    }).forEach(function (number) {
        console.log(number);
    });
    //=> 2
    //=> 4
    //=> 6
    //=> 8

In the previous problem section, we created a `range` function that generated an
array with numbers from the given range. Since that function returns an array,
we can chain that as well.


    range(1,4).map(function (number) {
        return number * 2;
    }).forEach(function (number) {
        console.log(number);
    });
    //=> 2
    //=> 4
    //=> 6
    //=> 8

Chaining functions in this way gives us a nice approach to learning about the
other features of JavaScript arrays.

### filter

There's one other method that is similarly convenient:`filter`. That allows us
to create a new array that only consists of the elements of the previous array
that pass some basic boolean test. For example, suppose we wanted all of the
even numbers in an array.

    var nums = [5,10,15,20,25,30,35,36,37,38,39,40];

    nums.filter(function (elt) {
        return elt%2 === 0;
    });
    //=> [10,20,30,36,38,40]

Combining this with the `range` function, we can print out all the even numbers
less than 100 in a pretty interesting way:

    range(0,100).filter(function (elt) {
        return elt%2 === 0;
    }).forEach(function (elt) {
        console.lot(elt);
    });

### some and every

We've seen two very nice array methods that return arrays, but sometimes we'll
want to compute a _value_ based on array (instead of an array). In the previous
practice problem, we did that (at least I hope we did) but it's sometimes useful
to generalize it. For example, what if we wanted to know if there were _any_
words that start with the letter 's'. Using the techniques we learned last week,
we might try something like this:

    var containsAWordThatStartsWithS = function (words) {
        var result = false;
        words.forEach(function (word) {
            if (word[0] === "s") {
                result = true;
            }
         });
         return result;
    }

This is a reasonable solution, but it turns out JavaScript has a built-in
function called `some` that does this exact thing for us! It returns `true` if
any of the elements of the array pass the boolean test. Using this, we can
revise the previous function to avoid the `result` variable!

    var containsAWordThatStartsWithS = function (words) {
        return words.some(function (word) {
            return word[0] === "s";
        });
    }

The `some` function returns `true` if any of the elements in the array pass the
test, while the `every` function returns `true` if _all_ of the elements pass
the test.

    var allWordsStartWithS = function (words) {
        return words.every(function (word) {
            return word[0] === "s";
        });
    }


### reduce

But what if we have to compute something more complex than just a `true` or
`false`? For example, what if we want to compute the sum of the elements in an
array -- can we do that without any variables? It turns out we can -- the
`reduce` method allows us to build up a very general computation by carrying an
additional function variable between calls. Let's consider our solution to the
`sum` problem that uses the `forEach` method.

    var sum = function (listOfNumbers) {
        var sumSoFar = 0;

        listOfNumbers.forEach(function (number) {
            sumSoFar = sumSoFar + listOfNumbers;
        });

        return sumSoFar;
    }


The `reduce` method let's us move the `sumSoFar` variable into the function call
as a parameter, and it gets set to the _last result of the function call_. But
since it doesn't have an initial value, we have to provide one. That's the
second argument (after the function) to `reduce`. For example, let's suppose we
wanted to sum the following array:

    var nums = [5,6,7,8,9,10];

    nums.reduce(function (sumSoFar, number) {
        return sumSoFar, number;
    }, 0);
    //=> 45


Given that, our `sum` function ends up looking like this:

    var sum = function (listOfNumbers) {
        return listOfNumbers.reduce(function (sumSoFar, number) {
            return sumSoFar + number;
        }, 0);
    }


## Converting between Strings and Arrays

Last, but not least, it's sometimes convenient to use these built-in function on strings. Last time we saw that strings could be treated as arrays, but it turns out not to be the case with these built-in functions. To do that, we'll need to use the string's `split` method to turn it into an _actual_ array of characters.

    var greeting = "hello";

    greeting.split("");
    //=> ["h","e","l","l","o"]

This creates an array that we can use just like any other array, including the built-in methods. The `split` method is pretty generic (meaning we can split on arbitrary sequences), but we'll just use it to split every character into its own array element.

The inverse of `split` is the array's `join` function which will put a string back together.

    var array = ["h","e","l","l","o"];
    array.join("");
    //=> "hello"

These two methods will be useful in several of the problems below.

### Practice

1. Write a function that returns the sum of all of the multiples of 3 and 5
smaller than 1000. (c/o projecteuler.net)

2. Write a function that accepts a string and returns true if that word contains
at least one vowel.

3. Write a function that accepts a list of words, and returns the sum of the
lengths of all the words that contain at least one vowel.

4. Write a function that accepts an array of strings and returns a list of same
strings with all of the vowels removed.

5. You can generate a random integer between two values (largest value is not
included in the possibilities) with some `Math.random` hackery. Here's how I do
it:

    var randomIntBetween = function (min, max) {
        return Math.floor(Math.random()*(max-min) + min);
    }

Use this function called `randomNums` that uses `range` and map to create an
array of random integers. The function should accept 3 values: a min for the
random numbers, a max for the random numbers, and a length of the array.

6. Using the `randomNums` function from above, write a function called
`randomBitString` that generates a random string of 0s and 1s.

7. Write a function called `countOnes` that accepts a bitString and returns the
number of 1s contained in it. Using the randomBitString from above, count the
number of 1s in several random bit strings. What do you notice about them?

8. Write a function that accepts a string and returns that string in reverse
(hint: use `reduce`)

9. A _palindrome_ is a string that reads the same forwards and backwards. Write
a function that accepts a string of arbitrary letters, numbers, and symbols, and
returns true if its a palindrome. For example:

     isAPalindrome("kayak");
     //=> true

     isAPalindrome("A man, a plan, a canal, Panama");
     //=> true

     isAPalindrome("hello world");
     //=> false