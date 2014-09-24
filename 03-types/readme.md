### Overview

In the previous section we saw that the `+` operator can mean one of two things
depending on the type of the value stored in a variable. In the case that the
value is a string, it concatenates the two values.

    var suit = "spades";
    var rank = "ace";

    var card = rank + " of " + suit;
    console.log(card);
    //=> ace of spades

If the values are numbers, it adds them.

    var num1 = 500;
    var num2 = 101;
    var sum = num1 + num2;
    console.log(sum);
    //=> 601

If we mix and match the types, sometimes the results can be unexpected. For
example, in the last section we saw a function called `addThree` that accepted
three arguments and added them together. But what happens when we send something
other than numbers into the function?

    addThree(5, 2, 10);
    //=> 17

    addThree("Hello", " World", "!");
    //=> Hello World!

What happens when we mix and match?

    addThree("Hello", 5, 10);
    //=> Hello510

    addThree(5, 10, "Hello");
    //=> 15Hello

    addThree("5", 10, "Hello");
    //=> 510Hello

As you can see, the results can seem unexpected, and this can lead to bugs in
JavaScript programs.

### The typeof function

The most basic way to test to see the type of a value in JavaScript is to use
the `typeof` function.

    typeof(5);
    //=> number

    typeof("5");
    //=> string

The `typeof` function is one of several unique functions in JavaScript that
don't require parentheses to call them. In other words, you'll more frequently
see `typeof` used like this.

    typeof 5;
    //=> number

    typeof "5"
    //=> string

We can also use `typeof` to see the types of the results of our `addThree`
function.

    typeof addThree(5, 2, 10);
    //=> "number"

    typeof addThree(5, 10, "Hello");
    //=> "string"

It turns out that whenever we add a string to a number, the result is a string
-- the number is _coerced_ into a string during the computation.

### Number Types and Arithmetic Expressions

It's pretty essential that we understand basic operations that we can apply to
the specific built-in JavaScript types. It's easiest to start with the `number`
type.

The most-commonly used built-in operators are the usual arithmetic operators.

| Operator | Meaning  |
| :------: | :------- |
|    +     | addition |
|    -     | subtraction |
|    *     | multiplication |
|    /     | division |
|    %     | remainder |


    var result = 5 + 10 * 2;
    //=> 25

The operations follow the standard precedence rules you learn in elementary
school: multiplication and division take place prior to addition or
subtraction. You can also apply parentheses to force precedence.

The remainder operator may seem less useful, but it turns out that it's pretty
frequently used. Here's some examples of it:

    7 % 5;
    //=> 2, because 5 goes into 7 once with a remainder of 2

    25 % 5;
    //=> 0, because 5 evenly divides 25

    24 % 5;
    //=> 4, because 5 goes into 24 4 times with a remainder of 2

In future sections, we'll use the remainder operator to test divisibility of
numbers (and check for primality).

### String Types and Built-In Methods

Strings are a little more interesting than numbers, because they have built in
operations called _methods_ that generate new values (often strings) by applying
functions to the current string. We access string methods using the dot
operator.

    "HELLO WORLD!".toLowerCase();
    //=> hello world!

    "hello world!".toUpperCase();
    //=> HELLO WORLD!

You can also check to see if a string contains a certain substring by using the
`indexOf` method. This method returns the index of the substring, or -1 if the
substring does not appear.

    var sentence = "this is a long sentence";
    sentence.indexOf("sentence");
    //=> 15

    sentence.indexOf("this");
    //=> 0

    sentence.indexOf("short");
    //=> -1

You can also extract a string representing a single character at a given index
using the `charAt` method.

    sentence.charAt(6);
    //=> i

    sentence.charAt(0);
    //=> s

### Boolean Types and Boolean Expressions

### Creating Functions to Test Types

### Practice