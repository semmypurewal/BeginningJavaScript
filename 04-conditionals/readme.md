### Overview

In the previous section we learned about boolean types and boolean
expressions. These fundamental ideas are common throughout all programming
languages -- they give us the ability to control what code gets executed
depending on certain conditions.

To do this, we'll introduce a new basic structure -- `if` statements.

### `if` statements

An `if` statement is pretty straight-forward -- it accepts a boolean expression,
and a set of code. It executes the code only if the boolean expression evaluates
to `true`.

    var num = 105;

    if (num > 100) {
        console.log("the number is bigger than 100");
    }
    console.log("finished!");

    //=> the number is bigger than 100
    //=> finished!


In this case, the value stored in `num` is bigger than 100, so both logging
statements are executed. Similarly, if the boolean expression evaluates to
`false` the code-block will be skipped over.

    var num = 99;

    if (num > 100) {
        console.log("the number is bigger than 100");
    }
    console.log("finished!");

    //=> finished!

Since the value stored in `num` is not bigger than 100 (it's 99), it skips over
the `if` statements associated code block and just executes the final log
statement.

We can use an `if` statement in a function pretty easily. Suppose we want to
project the more irreverent side of our personality on Twitter by making sure
that every single one of our tweets includes "LOL". We could write a function
that guarantees that's always the case.

     improveTweet("this tweet needs to be improved");
     //=> this tweet needs to be improved lol

     improveTweet("this tweet is already great lol");
     //=> this tweet is already great lol

     improveTweet("LOL, no need to do anything here");
     //=> LOL, no need to do anything here

     improveTweet("my car was stolen and i was fired from my job today");
     //=> my car was stolen and i was fired from my job today lol

We can do this by simply introducing an `if` statement.

    var improveTweet = function (tweet) {
        var result = tweet;

        if (tweet.indexOf("lol") === -1 && tweet.indexOf("LOL") === -1) {
            // add lol to the end of the tweet
            result = result + " lol";
        }

        return result;
    }

### `else` clauses in `if` statements

Conditional expressions with `if` statements also allow you to include an `else`
clause, which executes only if the boolean expression evaluates to `false`.

    var anotherNum = 95;

    if (anotherNum > 100) {
        console.log("the number is bigger than 100");
    } else {
        console.log("the number is not bigger than 100");
    }

    console.log("finished!");

    //=> the number is not bigger than 100
    //=> finished!

In this case, the value stored in `anotherNum` is 95. Since that's not greater
than 100 the conditional expression only executes the code block associated with
the `else` clause.

We can also use if-else statements to write more interesting functions. For
example, suppose we wanted to write a function that accepts either an opening or
closing HTML tag, and returns the tag name associated with it.

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

The final `else` statement acts as a "catch-all" or a default return value when
the input is outside of the expected range.

You'll notice that this function defines a variable, and then sets it in
different ways depending on a condition. There's a single `return` statement at
the end. This is a common pattern that we'll see again and again.

Although we'll try to keep things mostly simple, it's worth noting that `if`
statements and `if-else` statements can contain nested statements. For example,
suppose we wanted to find the maximum of 3 numbers.

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

While this is pretty normal and you'll find it in a lot of code, I'd say that
these situations can almost always be simplified. There are two ways we can do
it. The first is simply by using compound boolean expressions.

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

The flatter structure here is much easier to read. But there's even a better
way. What if we created a maxOfTwo function and then called that?

    var maxOfThree = function (numA, numB, numC) {
        var bigger = maxOfTwo(numA, numB);
        var biggest = maxOfTwo(bigger, numC);

        return biggest;
    }

We can easily write a maxOfTwo function that has a single `if-else` statement,
saving us from the complications of nesting.

Admittedly, there are cases where it's harder to unravel nested `if` and
`if-else` statements, but we'll try to avoid situations like that in our
examples.

### Writing robust functions

One thing that `if` statements allow us to do is to issue errors in cases where
inputs to a function don't meet our expectations. For example, recall our
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
operating on arguments that lead to undefined behavior, our entire program can
become unstable.

Therefore it's a good idea to not allow that to happen. JavaScript has an
operator called `throw` which allows us to terminate the program to let the
programmer (or a user) know that it has entered an unexpected state.

    var addThree = function (a, b, c) {
        if (!isNumber(a) || !isNumber(b) || !isNumber(c)) {
            throw "the arguments to addThree must be numbers!"
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

1. We'll consider a password's strength to be "strong" if it is at least 10
characters long. If it's between 7 and 10 characters long, we'll consider it to
have "medium" strength, and if it's less than 7 characters, we'll say it is a
"weak" password. Write a function that accepts as input a potential password and
returns either "weak", "medium" or "strong" depending on its length.

    passwordStrength("hello");
    //=> weak

    passwordStrength("longerpassword");
    //=> strong

    passwordStrength("helloone");
    //=> medium

2. A year is a leap year if it is divisible by 4, unless it is also divisible by
100 in which case it is not a leap year unless it is also divisible by
400. Phew. Got that? Good. Write a function that accepts a number and outputs
true if the number is a leap year, false if not.

     isLeapYear(1988);
     //=> true

     isLeapYear(2001);
     //=> false

     isLeapYear(1800);
     //=> false

     isLeapYear(2000);
     //=> true


It should also throw an error if the input is not a number.

     isLeapYear("hello");
     //=> THAT'S NOT A NUMBER!

3. Write a function that accepts three strings and input, and returns the one
that would come earliest in the dictionary.

     firstInDictionary("rhino", "aardvark", "zebra");
     //=> aardvark

     firstInDictionary("whale", "zebra", "yak");
     //=> whale

     firstInDictionary("whale", "zebra", "aardvark");
     //=> aardvark

It should throw an error string if any of the arguments are not strings.

     firstInDictionary("whale", 5, 10);
     //=> ALL THREE ARGS MUST BE STRINGS!

4. Write a function that extracts a tag from a string representing an HTML
element, but throws an error if the string is not an HTML element. You may reuse
one of your functions from the previous section (or, better yet, see if you can
remember how to re-write it).

    getTagName("<p>this is a paragraph</p>");
    //=> p

    getTagName("<p>this is wrong</div>");
    //=> Error: Not an HTML Element!


5. Write a function called `isQuestion` that returns true if the input is a
string and it ends in a question mark. We'll use this function in the next
practice problem.

6. The Magic 8 Ball is a classic toy that allows you to ask a yes/no
question and it responds with a random answer. Most of the time (at least half)
it responds with a "positive" answer, about a quarter of the time it responds
with a "neutral" answer, and about a quarter of the time it responds with a
"negative" answer. You can read more about the Magic 8 Ball toy (and see it's
actual responses) on Wikipedia.

Write a function that simulates the Magic 8 Ball by generating a random
number. Try to make it match the probabilities of the real toy.

    magic8Ball("Will people like this problem?");
    //=> Very doubtful

    magic8Ball("Do people like these videos?");
    //=> My reply is no

    // throw an error if there's no question mark at the end
    // use your isQuestion function from the previous question
    magic8Ball("you suck");
    //=> THAT DOESN'T SOUND LIKE A QUESTION!

    magic8Ball("Is this a question?");
    //=> Signs point to yes

7. Re-implement our improveTweet function so it can generate any of lol, omg,
lmao, and rofl.


8. Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
place in a string. For example:

    randomInterject("this is a tweet");
    //=> this is -omg- a tweet

Notice that it may break into the middle of words as well.

    randomInterject("hilarious, I'm having a great day");
    //=> hil-lol-arious, I'm having a great day");

This is a little tricky, so here are some tips. It may be helpful to break down
this problem into two steps. First, you may want to write a function called
interjection that accepts a number and two strings -- the interjection and the
actual string.

    interjectAt("interjection", 5, "hello world!");
    //=> hello -interjection-world!

    interjectAt("lol", 0, "this is a tweet");
    //=> -lol-this is a tweet

    interjectAt("omg", 15, "hello");
    //=> the string doesn't have that many letters!

    interjectAt(5, "omg", "hello");
    //=> expected first arg to be a string, second arg to be a number and third arg to be a string

You can interject by using two slices. For instance:

    var str = "hello world!";
    var beginning = str.slice(0,5);
    var end = str.slice(5,str.length);
    var strWithInterjection = beginning + "-lol-" + end;

You just have to generalize this to an arbitrary index and wrap it in a function.

Now that you have a robust function to do your interjection, your actual
`randomInterjection` function consists of generating a random message and a
random location within the string, and then calling into the `interjectAt`
function with the appropriate arguments.