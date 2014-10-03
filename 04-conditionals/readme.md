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

We can use an `if` statement in a function pretty easily. Suppose we were
creating a website and we made it so the maximum length of a username is 10
characters. We want our program to ignore any excess characters beyond the
limit.

    trimMoreThanTen("hello");
    //=> hello

    trimMoreThanTen("thisIsALongUserId");
    //=>

    trimMoreThanTen("thisisreallyreallyreallyreallyreallylong");
    //=>

We can do this by simply introducing an `if` statement.

    var trimMoreThanTen = function (userName) {
        var result = userName;

        if (userName.length > 10) {
            result = userName.slice(0,10);
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

### `if`-`else if` and nested `if` statements

Sometimes we'll want our functions to behave differently depending on a set of
conditions. For example, suppose we wanted to write a function that would
translate a given hour of the day into a set of words.

     // 6 in the morning
     hourToWord(6);
     //=> morning

     // 6 in the evening
     hourToWord(18);
     //=> evening

     //2 in the afternoon
     hourToWord(14);
     //=> afternoon

     //9 PM
     hourToWord(21);
     //=> night

We can write code that does this by cascading `if-else` statements.

     var hourToWord = function (hour) {
         var result;  // we'll define this variable below

         if (0 <= hour && hour <= 5) {
             result = "early morning";
         } else if (5 < hour && hour <= 12) {
             result = "morning";
         } else if (12 < hour && hour <= 17) {
             result = "afternoon";
         } else if (17 < hour && hour <= 20) {
             result = "evening";
         } else if (20 < hour && hour <= 24) {
             result = "night";
         } else {
             result = "not a time!";
         }

         return result;
     }

The final `else` statement acts as a "catch-all" or a default return value when
the input is outside of the expected range.

You'll notice that this function defines a variable, and then sets it in
different ways depending on a condition. There's a single `return` statement at
the end. This is a common pattern that we'll see again and again.

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

1. A year is a leap year if it is divisible by 4, unless it is also divisible by
100 in which case it is not a leap year unless it is also divisible by
400. Phew. Got that? Good. Write a function that accepts a number and outputs
true if the number is a leap year, false if not.

2. We'll consider a password's strength to be "strong" if it is at least 10
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

4. Write a function that accepts three strings and input, and returns the one
that would come earliest in the dictionary.

     firstInDictionary("rhino", "aardvark", "zebra");
     //=> aardvark

     firstInDictionary("whale", "zebra", "yak");
     //=> whale

     firstInDictionary("whale", "zebra", "aardvark");
     //=> aardvark

5. The Magic 8 Ball is a classic toy that allows you to ask a yes/no
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
    magic8Ball("you suck");
    //=> THAT DOESN'T SOUND LIKE A QUESTION!

    magic8Ball("Is this a question?");
    //=> Signs point to yes

6. Write a function that extracts a tag from a string representing an HTML
element, but throws an error if the string is not an HTML element. You may reuse
one of your functions from the previous section (or, better yet, see if you can
remember how to re-write it).

    getTag("<p>this is a paragraph</p>");
    //=> p

    getTag("<p>this is wrong</div>");
    //=> Error: Not an HTML Element!



