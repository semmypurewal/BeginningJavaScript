### Overview

In the previous section we learned about arrays, and we saw how we can use
for-loops to iterate over them. Since this is a pretty common thing to do,
JavaScript's provided us some easier ways to do it.

JavaScript arrays have a rich set of built in methods that make iterating over
them and calculating a properties a real pleasure. Most modern JavaScript
developers prefer these to the traditional `for`-loops because they're easier
to use and less error prone. Let's take a look!

### forEach

To recap, in the previous section we saw how to sum a list of numbers using a
`for` loop:

    var sum = function (listOfNumbers) {
        var index;
        var sum = 0;

        for (index = 0; index < listOfNumbers.length; index = index + 1) {
            sum = sum + listOfNumbers[index];
        }

        return sum;
    }

The simplest change we can make is to use the array's `forEach` method.  The
`forEach` method actually takes a function as an argument and applies it to
each element in order. To start off, let's write a function which prints out
all the elements in an array.

    var printElements = function (listOfNumbers) {
        var printElement = function (number) {
            console.log(number);
        }

        listOfNumbers.forEach(printElement);
    }

    printElements([5,6,7,8]);
    //=> 5
    //=> 6
    //=> 7
    //=> 8

In this example, we first defined the function called `printElement` and then
sent it as a parameter to the `forEach` function. It turns out that you don't
actually have to define the function first -- you can use an _anonymous_
function to specify the action. This is a very common pattern in JavaScript.

Also, notice that we don't have an index variable! We no longer need to keep track
of it, since `forEach` does that for us. If for some reason we need to use the
index, it's passed in as the second argument to our function. Let's modify our
example to use an anonymous function, and to print the index of each element.

    var printElementsAndIndices = function (listOfNumbers) {
        listOfNumbers.forEach(function (number, index) {
            console.log(number + " is at index " + index);
        });
    }

    printElementsAndIndices([5,6,7,8]);
    //=> 5 is at index 0
    //=> 6 is at index 1
    //=> 7 is at index 2
    //=> 8 is at index 3

Previously, I mentioned that this approach is superior to using a `for`-loop.
The primary reason is that it makes it so you don't have to track array
indices. This eliminates the potential for an entire class of programming
errors (known as _off-by-one_ errors) from your code.

More generally speaking, the fewer variables that you have to define and keep
track of, and the less often you modify those variables, the fewer potential
bugs your program will have.

So, back to our original example. We can use the `forEach` approach to rewrite
the `sum` function using fewer variables, which leaves fewer places for us to
make a mistake.

    var sum = function (listOfNumbers) {
        var sum = 0;

        listOfNumbers.forEach(function (number) {
            sum = sum + number;
        });

        return sum;
    }

### map

Let's look at another common operation, taking a list of values and
transforming each value to produce another list. For example, suppose we wanted
to take an array of numbers and produce a new array of numbers that are the the
previous numbers doubled.

    var numbers = [1,2,3,4,5,6];

    var doubles = doubleNumbers(numbers);
    console.log(doubles);
    //=> [2,4,6,8,10,12]

Given what we've learned so far, here's a reasonable approach to solving this
problem:

    var doubles = function (numbers) {
        var result = []; // create an empty array

        numbers.forEach(function (number) {
            result.push(number * 2);
        })

        return result;
    }

This would work fine, but there's an even better way! The pattern of
constructing a new array by applying a function to every element occurs so
frequently, we have a function called `map` that does exactly that. In fact, it
allows us to remove the `result` variable altogether!

    var doubles = function (nums) {
        return nums.map(function (num) {
            return num * 2;
        });
    }

That's all `map` does -- it returns a new array that is the same length as the
old array, with the specified function applied to each element!

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

And remember we don't _have_ to use an anonymous function. For example, in the
last practice problem from the last section, we got the tags of a set of HTML
elements. That function can be simplified to something like this (minus the
error checking, of course).

     var mapToTags = function (htmlElements) {
         return htmlElements.map(getTagName);
     }

### Chaining Functions that Return Arrays

Since `map` returns an array, we can immediately _chain_ a call to `forEach`.
This means we effectively call the next function on the returned array.

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

In the previous problem section, we created a `range` function that generated
an array with numbers from the given range. Since that function returns an
array, we can chain that as well.

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

Continuing on our path of simplifying common operations, let's take a look at
`filter`. This method allows us to create a new array which only includes the
elements of the previous array that pass some basic boolean test. For example,
suppose we wanted all of the even numbers in an array.

    var nums = [ 5, 10, 15, 20, 25, 30, 35, 36, 37, 38, 39, 40 ];

    nums.filter(function (elt) {
        return elt % 2 === 0;
    });
    //=> [ 10, 20, 30, 36, 38, 40 ]

Combining this with the `range` function, we can print out all the even numbers
less than 100 in a pretty interesting way:

    range(0, 100).filter(function (elt) {
        return elt % 2 === 0;
    }).forEach(function (elt) {
        console.lot(elt);
    });

In the previous section, we had a practice problem where we wrote a function
called `filterToLol` that accepts an array of strings and returns an array that
consists of all of the original strings that contain "lol" in any case. We can
write that function much more easily by using the `filter` method (again, minus
handling error conditions).

    var filterToLol = function (arr) {
        return arr.filter(function (tweet) {
            return tweet.toLowerCase().indexOf("lol") > -1;
        });
    }

### some and every

We've seen two very nice array methods that return arrays, but sometimes we'll
want to compute a single value based on an array. For example, suppose we were
trying to do some very basic analysis of the sentiment of a set of tweets, and
wanted to know if any of the tweets in the list contain the word "awesome".

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

This is a nice solution in that it removes the need for extraneous variables.
But it has one significant disadvantage. Can you think of what it is?

If you think back, we learned how to break out of a `for`-loop early when we
need to. There's no need to process the entire array if we've found what we
ware looking for. Unfortunately, the `forEach`, `filter`, and `map` methods
have no way to break out of a loop early.

Fortunately JavaScript has two functions that _do_ have this property. The
`some` method is a good example. It returns `true` if _any_ of the elements
pass the `true`/`false` test, and it immediately stops.

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
contains "awesome".

Similarly to `some`, the `every` method returns `true` if _all_ of the elements
pass the test, and it breaks out of the loop early if any of the elements
evaluate to `false`.

    var allAwesome = function (tweets) {
        return tweets.every(function (tweet) {
            return tweet.toLowerCase().indexOf("awesome") > -1;
        });
    };


### reduce

But what if we have to compute something more complex than just a `true` or
`false`? For example, consider our favorite problem of summing a list of
numbers contained in an array. Is there some way we can leverage built-in array
methods so we can remove even more extra variables?

It turns out we can -- the `reduce` method allows us to build up a very general
computation by carrying an additional value between calls. Let's start by
considering our solution to the `sum` problem using the `forEach` method.

    var sum = function (listOfNumbers) {
        var sumSoFar = 0;

        listOfNumbers.forEach(function (number) {
            sumSoFar = sumSoFar + number;
        });

        return sumSoFar;
    }

This allowed us to remove the `index` variable we would need to maintain with a
traditional `for`-loop, but we still have the `sumSoFar` variable. Let's see
how reduce lets us get rid of `sumSoFar` as well.

    var numbers = [5,6,7,8,9,10];

    numbers.reduce(function (sumSoFar, number) {
        return sumSoFar + number;
    });
    //=> 45

In this example, the anonymous function takes _two_ values -- `sumSoFar` and
the current `number`. The job of the function is to combine these two values
into the next value for `sumSoFar`.

But what's the value of `sumSoFar` when the function is first called? By
default, will call the function the first time with `sumSoFar` set to the first
value in the array, and `number` set to the second. So this is the sequence of
calls to our function:

1. `sumSoFar` is 5, and `number` is 6. The result of the function is 11.
2. `sumSoFar` is 11, and `number` is 7. The result of the function is 18.
3. `sumSoFar` is 18, and `number` is 8. The result of the function is 26.
4. `sumSoFar` is 26, and `number` is 9. The result of the function is 35.
5. `sumSoFar` is 35, and `number` is 10. The result of the function is 45.

Since 10 was the last value in the array, `reduce` returns 45. Generalizing
this, we can rewrite our `sum` function with _no_ local variables!

    var sum = function (listOfNumbers) {
        return listOfNumbers.reduce(function (sumSoFar, number) {
            return sumSoFar + number;
        });
    };

There are times when it doesn't make sense to make the first argument to
`reduce`'s function be the first element in the array. For example, suppose we
wanted to write a function that accepts an array of strings and returns them
combined into a paragraph as sentences.

    paragraphify( [ "hello world", "this is a tweet, "goodbye" ] );
    //=> Hello world.This is a tweet.Goodbye.

Assuming we have a function called `capitalize` that capitalizes the first word
in a sentence, we can easily achieve this using a `forEach` loop and a
temporary local variable.

    var paragraphify = function (list) {
        var result = "";  // initialize to empty list

        list.forEach(function (sentence) {
            result = result + capitalize(sentence) + ".";  // add a space and a period
        });

        return result;
    };

We might try to use reduce to remove the local result variable using reduce as
follows.

    var paragraphify = function (list) {
        return list.reduce(function (paragraph, sentence) {
            return result + capitalize(sentence) + ".";
        });
    };

Unfortunately, this won't capitalize or add a period after the first sentence.

    paragraphify( [ "hello world", "this is a tweet, "goodbye" ] );
    //=> hello worldThis is a tweet.Goodbye.

To make this approach work, we would need to give an explicit initial value to
paragraph, and then process all of the elements. We can do that by sending in a
second argument to `reduce`, _after_ the function. In this case, the second
argument will be the empty string.

    var paragraphify = function (list) {
        return list.reduce(function (paragraph, sentence) {
            return result + capitalize(sentence) + ".";
        }, "");  // <= the second argument is ""
    };

This may look strange, but you'll see this pattern a lot in JavaScript code in
the wild.

It's worth noting another way of writing `paragraphify`. We could use the `map`
and `reduce` methods chained together:

    var paragraphify = function (list) {
        return list.map(function (sentence) {
            return capitalize(sentence) + ".";
        }).reduce(function (paragraph, capitalizedSentence) {
            return result + capitalizedSentence;
        });
    };

This has the same effect, and doesn't require the extra argument to `reduce`.

The `reduce` method is tricky enough that it warrants one more example. Let's
demonstrate how we can use it to find the smallest element in an array of
numbers.

    var smallest = function (list) {
        return list.reduce(function (smallest, current) {
            var result = smallest;

            if (current < smallest) {
                result = current;
            }

            return result;
        });
    };

If we call this function on [ 5, 10, 3, 1, 9 ] the calls to our function look
like the following.

1. `smallest` is 5, and `current` is 10. The result of the function is 5.
2. `smallest` is 5, and `current` is 3. The result of the function is 3.
3. `smallest` is 3, and `current` is 1. The result of the function is 1.
4. `smallest` is 1, and `current` is 9. The result of the function is 1.

You'll see here that we've created a temporary local variable called `result`
to store the smaller of the current element and the smallest element we've seen
up until that point. This maintains our pattern of always having a single
`return` statement in our functions (which is a good habit to get into).

This case is simple enough to where we could also do something like this to get
rid of the `result` variable, but we do it at the expense of creating two
`return` statements.

    var smallest = function (list) {
        return list.reduce(function (smallest, current) {
            if (current < smallest) {
                return current;
            } else {
                return smallest;
            }
        });
    };

There is a trade-off here. Sometimes functions with multiple `return`
statements can be harder for people to understand, particularly if they are
really long. This one is small enough that it doesn't matter too much, and may
even be easier to read.

Another approach is to use the JavaScript _ternary conditional_ operator, which
is very useful in this kind of situation.

    var smallest = function (list) {
        return list.reduce(function (smallest, current) {
            return (current < smallest) ? current : smallest;
        });
    };

The ternary operator takes in three arguments -- a boolean expression, a
resulting value if the expression is `true`, and a resulting value if the
expression is `false`.

The ternary conditional suffers from the same problem as multiple return
statements; it can make code much easier or much harder to read, depending on
how it's used. Over time you'll develop an intuition for which to use in a
given situation.

## Converting between Strings and Arrays

We mentioned previously that arrays and strings are very similar, but that
strings don't enjoy some of the useful array methods we've been exploring. This
isn't a problem for us, because it's very easy to convert between strings and
arrays. We can use a string's `split` method to turn it into an _actual_ array
of characters.

    var greeting = "hello";

    greeting.split("");
    //=> ["h","e","l","l","o"]

The `split` method is pretty flexible. For example, suppose we were dealing
with a string containing _comma separated values_ (CSVs).

    var values = "gracie,loki,dahlia,ally";  //=> these are my dogs!
    var names = values.split(",");
    //=> [ "gracie", "loki", "dahlia", "ally" ]

We can even just split on spaces.

    var tweet = "this is a tweet!";
    var words = tweet.split(" ");
    //=> [ "this", "is", "a", "tweet!" ];

Once we have the array, we can use all of our favorite methods!

    names.map(capitalize);
    //=> [ "Gracie", "Loki", "Dahlia", "Ally" ];

    words.filter(function (word) {
        return word.indexOf("!") > -1;
    });
    //=> [ "tweet!" ]

The inverse of `split` is the array's `join` function which will put a string
back together.

    var array = ["h","e","l","l","o"];
    array.join("");
    //=> "hello"

Like the `split` method, you can stitch an array of strings back together using
an arbitrary string.

    names.map(capitalize).join(" -- ");
    //=> "Gracie -- Loki -- Dahlia -- Ally"

    words.join(";");
    //=> "this;is;a;tweet!"

These methods make it very easy to do complex transformations on a string
without having to write a lot of complex `for`-loops and maintain the value of
a lot of local variables.

### Practice

For the first set of problems, open up the `names.html` file in Chrome and then
open the developer console. There should be a variable defined called `names`
which you can confirm by typing it at the console.

    names;
    //=> Array[1559]

This is a list of all of the names of babies born in New York State since
2007. The list contains only unique names, but they aren't sorted in any
specific order.

Using the `map`, `filter`, `reduce`, `some`, and `every` methods, answer the
following questions.

1. How many baby names start with the letter 'z'?

2. How many baby names have the letter 'z' in them anywhere?

3. Create a new array that contains all of the names containing a 'w' with the
first letter upper-case.

4. Do all of the names contain vowels?

5. Are there any names that have only two letters?

6. Is your name in the list?

7. Find the name that would come first alphabetically.

8. How many times does the letter 'z' appear in the list?

9. What is the maximum number of vowels in any name?

10. How many names have the maximum number of vowels that you found in the
previous problem?


