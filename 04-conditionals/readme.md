### Overview

In the previous section we learned about boolean types and boolean expressions.
Boolean types give our programs the ability to change their behavior based on
values computed while the program is running. The simplest way to do this is by
using `if` statements.

### `if` statements

An `if` statement accepts a boolean expression and a _block_ of code. It
executes the code only if the boolean expression evaluates to `true`.

    var age = 25;

    if (age >= 13) {
        console.log("You can have a Facebook account!");
    }
    console.log("finished!");

    //=> You can have a Facebook account!
    //=> finished!


In this case, the value stored in `age` is bigger than 13, so both logging
statements are executed. Similarly, if the boolean expression evaluates to
`false` the code block will be skipped over.

    var age = 11;

    if (age > 13) {
        console.log("You can have a Facebook account!");
    }
    console.log("finished!");

    //=> finished!

Since the value stored in `age` is not greater than or equal to 13 (it's 11),
it skips over the `if` statements associated code block and just executes the
final log statement.

Let's try using an `if` statement in a function. Suppose we want to project the
more irreverent side of our personality on Twitter by making sure that every
single one of our tweets includes "lol". We can write a function using an `if`
statement that guarantees that's always the case.

     improveTweet("this tweet needs to be improved");
     //=> this tweet needs to be improved lol

     improveTweet("this tweet is already great lol");
     //=> this tweet is already great lol

     improveTweet("LOL, no need to do anything here");
     //=> LOL, no need to do anything here

     improveTweet("my car was stolen and i was fired from my job today");
     //=> my car was stolen and i was fired from my job today lol

One approach to writing this function would be to check if the input already
contains "lol", and if it doesn't, to add it to the end.

    var improveTweet = function (tweet) {
        var result = tweet;

        if (tweet.indexOf("lol") === -1 && tweet.indexOf("LOL") === -1) {
            // add lol to the end of the tweet
            result = result + " lol";
        }

        return result;
    }

### `else` clauses in `if` statements

`if` statements also allow you to include an `else` clause, which executes only
if the boolean expression evaluates to `false`.

    var heightInInches = 40;
    var minHeightInFeet = 4;

    if (heightInInches/12 >= minHeightInFeet) {
        console.log("You can ride Space Mountain!");
    } else {
        console.log("Sorry, you're not allowed to ride Space Mountain.");
    }

    console.log("finished!");

    //=> Sorry, you're not allowed to ride Space Mountain.
    //=> finished!

In this case, 40/12 is 3.75, which is less than 4 feet. Since it's not greater
than 4 the `if-else` statement only executes the code block associated with the
`else` clause.

We can also use `if-else` statements to write more interesting functions. For
example, suppose we wanted to write a function that accepts either an opening
or closing HTML tag, and returns the tag name associated with it.

    getTagName("<p>");
    //=> p

    getTagName("</article>");
    //=> article

We can do this using an `if-else` statement as follows.

    var getTagName = function (tag) {
        var tagName;
        if (tag.charAt(1) === "/") {
            tagName = tag.slice(2, tag.length - 1);
        } else {
            tagName = tag.slice(1, tag.length - 1);
        }
        return tagName;
    };

Using some randomness and both an `if` and an `if-else` statement, we can
improve our `improveTweet` function so that it's less predictable.

    var improveTweet = function (tweet) {
        // generate either a 1 or a 0
        var random = Math.floor(Math.random() * 2);
        var result = tweet;
        var expression;

        if (random === 0) {
            expression = "lol";
        } else {
            expression = "omg";
        }

        if (result.indexOf(expression) === -1 && result.indexOf(expression.toUpperCase()) === -1) {
            result = result + " " + expression;
        }

        return result;
    };

Now, when we use it, we'll generate a more interesting collection of tweets.

    improveTweet("this is a normal tweet");
    //=> this is a normal tweet lol

    improveTweet("lol, that last one was funny");
    // in this case, we generate 'omg' while the tweet already contains lol
    //=> lol, that last one was funny omg

    improveTweet("lol what happens when we now generate lol again?");
    // in this case we generate lol, so it doesn't get added again
    //=> lol what happens when we now generate lol again?

### `if`-`else if` and nested `if` statements

Sometimes we'll want our functions to behave differently depending on a set of
conditions. For example, suppose we wanted to write a function that would
translate a given hour of the day into a user-friendly greeting.

     // 6 in the morning
     greetingByHour(6);
     //=> Good Morning!

     // 6 in the evening
     greetingByHour(18);
     //=> Good Evening!

     //2 in the afternoon
     greetingByHour(14);
     //=> Good Afternoon!

     //9 PM
     greetingByHour(21);
     //=> Shouldn't you be in bed?

We can write code that does this by cascading `if-else` statements.

     var greetingByHour = function (hour) {
         var result;  // we'll define this variable below

         if (0 <= hour && hour <= 5) {
             result = "Wow, it's early!";
         } else if (5 < hour && hour <= 12) {
             result = "Good Morning!";
         } else if (12 < hour && hour <= 17) {
             result = "Good Afternoon!";
         } else if (17 < hour && hour <= 20) {
             result = "Good Evening!";
         } else if (20 < hour && hour <= 24) {
             result = "Shouldn't you be in bed?";
         } else {
             result = "Oh gosh, this is awkward -- that's not a time.";
         }

         return result;
     }

In our example, the final `else` statement acts as a "catch-all" to provide a
default return value when the input is outside of the expected range.

You'll notice that this function defines a variable, and then sets it in
different ways depending on a condition. There's a single `return` statement at
the end. This is a common pattern that we'll see again and again.

Although we'll try to keep things mostly simple, it's worth noting that `if`
statements and `if-else` statements can contain nested `if` and `if-else`
statements. For example, here's one way to find the maximum of 3 numbers:

    var maxOfThree = function (numA, numB, numC) {
        var result;

        if (numA >= numB) {
            if (numA >= numC) {
                result = numA;
            } else {
                result = numC;
            }
        } else {
            if (numB >= numC) {
                result = numB;
            } else {
                result = numC;
            }
        }

        return result;
    }

While nesting if statements is pretty normal and you'll find it in a lot of
code, these situations can very often be simplified. Let's look at a couple of
techniques for simplifying nested if statements. First, we could use compound
boolean expressions:

    var maxOfThree = function (numA, numB, numC) {
        var result;

        if (numA >= numB && numA >= numC) {
            result = numA;
        } else if (numB >= numA && numB >= numC) {
            result = numB;
        } else {
            result = numC;
        }

        return result;
    }

The flat structure here is much easier to read than the first example. There
is, however, a much better technique we can use for this case. What if we
created a maxOfTwo function and then called that?

    var maxOfThree = function (numA, numB, numC) {
        var bigger = maxOfTwo(numA, numB);
        var biggest = maxOfTwo(bigger, numC);

        return biggest;
    }

We can easily write a maxOfTwo function that has a single `if-else` statement,
saving us from the complications of nesting `if` statements.

There are certainly cases where it's harder to unravel nested `if` and
`if-else` statements, but they appear much less often in  the real world.

### Writing robust functions

One thing that `if` statements allow us to do is to issue errors in cases where
inputs to a function don't meet our expectations. As an example, recall our
`addThree` function from earlier.

    var addThree = function (a, b, c) {
        return a + b + c;
    }

This function works as expected if the parameters are numbers, but is completely
unexpected if the parameters are other values.

    addThree(1, 2, 3);
    //=> 6

    addThree(1, 2, "hello");
    //=> 3hello

    addThree("hello", 1, 2);
    //=> hello12

While this may not seem like such an issue on the surface, the results of
function calls are often passed to other functions, whose results are passed to
other functions, and so on. When this happens and one of the functions is
operating on arguments that lead to unexpected behavior, our entire program can
end up doing the wrong thing.

We clearly don't want that to happen, so let's figure out how to avoid it.
JavaScript has an operator called `throw` which allows us to terminate the
program to let the programmer (or a user) know that it has entered an
unexpected state.

    var addThree = function (a, b, c) {
        if (!isNumber(a) || !isNumber(b) || !isNumber(c)) {
            throw "all of the arguments to addThree must be numbers!"
        }
        return a + b + c;
    }

Now our function is a bit more robust and won't propogate invalid results
throughout our program.

    addThree(1, 2, 3);
    //=> 6

    addThree(1, 2, "hello");
    //=> the arguments to addThree must be numbers!

    addThree("hello", 1, 2);
    //=> the arguments to addThree must be numbers!

### Practice

The practice problems for this section can all be found in the file `practice.js`.
