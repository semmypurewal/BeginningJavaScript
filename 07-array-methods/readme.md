### Overview

In the previous section, we learned about arrays, and we saw how we can use
for-loops to iterate over them. As is often the case, however, we've started
with "the hard way" of doing things, and now we're going to learn an easier way
to work with Arrays.

It turns out that JavaScript arrays have a much richer set of built-in methods
that make iterating over them and calculating a properties a real
pleasure. Most modern JavaScript developers prefer these to the traditional
`for`-loops, and -- for many applications -- you can actually give a compelling
argument for why this approach is superior.

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

The above approach to iterating over arrays is pretty common, but there's a
better way. In cases like this, it's much better to use the array's `forEach`
method.  The `forEach` method actually takes a function as an argument and then
applies the function to each element.

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
function to specify the action. This is a very common pattern in JavaScript, so
you should probably get used to it.

    var arr = [5,6,7,8];

    arr.forEach(function (elt) {
        console.log(elt);
    });

The `forEach` loop takes the function that is the parameter, and then sends each
array element to it as an argument.

Previously, I mentioned that this approach is superior to using a `for`-loop. Why
is that the case? The primary reason is that it makes it so you don't have to
track array indices, which means you need one less variable (`index` in this
case). This actually eliminates the potential for an entire class of programming
errors (known as _off-by-one_ errors) from your code.

More generally speaking, the fewer variables that you have to define and keep
track of, the fewer potential bugs your program will have.

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
take a given array of numbers, and return an array of numbers that are the the
previous numbers doubled.

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
            result.push(nums[index] * 2);
        }

        return result;
    }

We saw a few examples like this in the practice portion of the previous
section. We would accept an array as an argument, and return a new array as the
result. Sometimes, as in the case of the `mapToTags` function, the result array
was simply the original array with some straight-forward operation applied to
it.

One thing that we can do to simplify this pattern is to remove the `index`
variable by using a `forEach` loop.

    var doubles = function (nums) {
        var result = []; // create an empty array

        nums.forEach(function (num) {
            result.push(num * 2);
        });

        return result;
    }

But there's an even better way! The pattern of constructing a new array by
applying a function to every element occurs so frequently, we have a function
called `map` that does exactly that. In fact, it allows us to remove the
`result` variable altogether!

    var doubles = function (nums) {
        return nums.map(function (num) {
            return num * 2;
        });
    }

That's all `map` does -- it returns a new array that is the old array with the
specified function applied to each element!

Here's a few other examples that we can type right into the console. Let's
suppose we want to create an array that is simply the first letters of an array
of strings. This would be a perfect candidate for the `map` function.

    ["hi", "everyone", "loves", "lists", "of", "words"].map(function (word) {
        return word[0];
    });
    //=> ["h", "e", "l", "l", "o", "w"]

Similarly, we can map a list of boolean values to their opposites.

    [true, false, true, true, false, true].map(function (val) {
        return !val;
    });
    //=> [false, true, false, false, true, false]

And it turns out that we don't _have_ to use an anonymous function. For example,
in the last practice problem from the last section, we got the tags of a set of
HTML elements. That function can be simplified to something like this (minus the
error checking, of course).

     var mapToTags = function (htmlElements) {
         return htmlElements.map(getTagName);
     }

### Chaining Functions that Return Arrays

Since `map` returns an array, we can immediately _chain_ a call to
`forEach`. This means we effectively call the next function on the returned
array.


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

Chaining functions with the `range` function gives us a nice approach to
learning about the other features of JavaScript arrays.

### filter

There's another method that is similarly convenient:`filter`. That allows us to
create a new array that only consists of the elements of the previous array that
pass some basic boolean test. For example, suppose we wanted all of the even
numbers in an array.

    var nums = [ 5, 10, 15, 20, 25, 30, 35, 36, 37, 38, 39, 40 ];

    nums.filter(function (elt) {
        return elt % 2 === 0;
    });
    //=> [ 10, 20, 30, 36, 38, 40 ]

Combining this with the `range` function, we can print out all the even numbers
less than 100 in a pretty interesting way:

    range(0,100).filter(function (elt) {
        return elt % 2 === 0;
    }).forEach(function (elt) {
        console.lot(elt);
    });

In the previous section, we had a practice problem where we wrote a function
called `filterToLol` that accepts an array of strings and returns an array that
consists of all of the original strings that contain "lol" in any case. We can
recreate that function in a much simpler way by using the `filter` method (minus
handling error conditions).

    var filterToLol = function (arr) {
        return arr.filter(function (tweet) {
            return tweet.toLowerCase().indexOf("lol") > -1;
        });
    }

### some and every

We've seen two very nice array methods that return arrays, but sometimes we'll
want to compute a _value_ based on array (instead of an array). For example,
suppose we were trying to do some very basic analysis of the sentiment of a set
of tweets, and wanted to know if any of the tweets in the list contain the
word "awesome".

Using techniques found in the previous section and a `forEach` loop, we can
create a function that does something like this.

    var containsAwesome = function (tweets) {
        var result = false;

        tweets.forEach(function (tweet) {
            if (tweet.toLowerCase().indexOf("awesome") > -1) {
                result = true;
            }
        });

         return result;
    };

Or we could use the `filter` method and check the `length` property of the
resulting array.

    var containsAwesome = function (tweets) {
        return tweets.filter(function (tweet) {
            return tweet.toLowerCase().indexOf("awesome") > -1;
        }).length > 0;
    };

This is a nice solution in that it removes the need for extraneous
variables. But it has one significant disadvantage. Can you think of what it is?

If you think back, we learned how to break out of a `for`-loop early when we
need to. There's no need to process the entire array if we've found what we ware
looking for. Unfortunately, the `forEach` method (as well as the `filter` and
`map` methods) have no way to break out of a loop early.

It turns out that JavaScript has two functions that _do_ have this property. The
`some` method is a good example. It returns `true` if _any_ of the elements pass
the `true`/`false` test, and it immediately stops.

    var containsAwesome = function (tweets) {
        return tweets.some(function (tweet) {
            return tweet.toLowerCase().indexOf("awesome") > -1;
        });
    };

How can we verify this behavior? Let's modify the function slightly.

    var containsAwesome = function (tweets) {
        return tweets.some(function (tweet) {
            console.log("testing: " + tweet);
            return tweet.toLowerCase().indexOf("awesome") > -1;
        });
    };

Now let's run it on a concrete example.

    containsAwesome([ "sad tweet", "awesome tweet", "unprocessed tweet", "another tweet" ]);
    //=> testing: sad tweet
    //=> testing: awesome tweet
    //=> true

You'll see that it only processes the first two tweets, because the second one
contains awesome.

Similarly the `every` function returns `true` if _all_ of the elements pass the
test, and it breaks out of the loop early if any of the elements evaluate to
`false`.

    var allAwesome = function (tweets) {
        return tweets.every(function (tweet) {
            return tweet.toLowerCase().indexOf("awesome") > -1;
        });
    };


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
at least one vowel. Do not use a `for` loop or a `forEach` loop.

3. Write a function that accepts a list of words, and returns the sum of the
lengths of all the words that contain at least one vowel. Do not use a `for`
loop or a `forEach` loop.

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

8. Using `reduce`, write a function that accepts a string and returns
that string in reverse

